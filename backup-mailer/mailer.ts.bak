import net from "node:net";
import tls from "node:tls";
import { Buffer } from "node:buffer";
import type { ContactRecord } from "@/lib/contactStore";

function parseBoolean(value: string | undefined) {
  if (!value) return false;
  return ["1", "true", "yes", "on"].includes(value.toLowerCase());
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function sanitizeLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

type SmtpConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
  secure: boolean;
  heloDomain: string;
};

function ensureConfig(): SmtpConfig {
  const host = process.env.EMAIL_HOST;
  const portRaw = process.env.EMAIL_PORT;
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  if (!host || !portRaw || !user || !pass) {
    throw new Error("EMAIL_CONFIGURATION_MISSING");
  }
  const port = Number(portRaw);
  if (Number.isNaN(port)) {
    throw new Error("EMAIL_PORT_INVALID");
  }
  return {
    host,
    port,
    user,
    pass,
    secure: parseBoolean(process.env.EMAIL_SECURE) || port === 465,
    heloDomain: sanitizeLine(process.env.EMAIL_HELO_DOMAIN || "vista.devcodebase.com"),
  };
}

export function verifyMailerConfig() {
  ensureConfig();
}

function readResponse(socket: net.Socket): Promise<{ code: number; message: string }> {
  return new Promise((resolve, reject) => {
    let buffer = "";

    const cleanup = () => {
      socket.off("data", onData);
      socket.off("error", onError);
      socket.off("end", onClose);
      socket.off("close", onClose);
      socket.off("timeout", onTimeout);
      socket.setTimeout(0);
    };

    const onData = (chunk: Buffer) => {
      buffer += chunk.toString("utf8");
      if (!buffer.endsWith("\r\n")) {
        return;
      }
      const lines = buffer.split("\r\n").filter(Boolean);
      if (lines.length === 0) {
        return;
      }
      const last = lines[lines.length - 1];
      if (!/^\d{3} /.test(last)) {
        return;
      }
      cleanup();
      const code = parseInt(last.slice(0, 3), 10);
      resolve({ code, message: buffer });
    };

    const onError = (error: Error) => {
      cleanup();
      reject(error);
    };

    const onClose = () => {
      cleanup();
      reject(new Error("SMTP_CONNECTION_CLOSED"));
    };

    const onTimeout = () => {
      cleanup();
      reject(new Error("SMTP_TIMEOUT"));
    };

    socket.on("data", onData);
    socket.on("error", onError);
    socket.on("end", onClose);
    socket.on("close", onClose);
    socket.on("timeout", onTimeout);
    socket.setTimeout(15000);
  });
}

async function sendCommand(
  socket: net.Socket,
  command: string,
  expected?: number[]
): Promise<{ code: number; message: string }> {
  socket.write(`${command}\r\n`);
  const response = await readResponse(socket);
  if (expected && !expected.includes(response.code)) {
    throw new Error(`SMTP_UNEXPECTED_CODE ${response.code}`);
  }
  if (!expected && response.code >= 400) {
    throw new Error(`SMTP_COMMAND_FAILED ${command} => ${response.message.trim()}`);
  }
  return response;
}

function parseAddress(value: string) {
  const cleaned = sanitizeLine(value);
  const match = cleaned.match(/^(.*)<([^>]+)>$/);
  if (match) {
    const name = match[1].trim().replace(/^"|"$/g, "");
    return { name, address: match[2].trim() };
  }
  return { name: "", address: cleaned };
}

function encodeHeader(value: string) {
  if (!/[\u0080-\uFFFF]/.test(value)) {
    return value;
  }
  const base64 = Buffer.from(value, "utf8").toString("base64");
  return `=?UTF-8?B?${base64}?=`;
}

function resolveSender(input: string, fallback: string) {
  const parsed = parseAddress(input || fallback);
  const address = parsed.address || fallback;
  const header = parsed.name ? `${encodeHeader(parsed.name)} <${address}>` : address;
  return { header, address };
}

function buildMessage(record: ContactRecord, fromHeader: string, toAddress: string, heloDomain: string) {
  const subject = "درخواست جدید وبسایت ویستا";
  const plain =
    `درخواست جدید از وبسایت ویستا\n\n` +
    `نام: ${record.name}\n` +
    `تلفن: ${record.phone}\n` +
    `ایمیل: ${record.email || "-"}\n` +
    `پروژه: ${record.project}\n` +
    `تاریخ ثبت: ${record.createdAt}\n\n` +
    `شرح درخواست:\n${record.message}`;

  const html = `
    <h2>درخواست جدید از وبسایت ویستا</h2>
    <ul>
      <li><b>نام:</b> ${escapeHtml(record.name)}</li>
      <li><b>تلفن:</b> ${escapeHtml(record.phone)}</li>
      <li><b>ایمیل:</b> ${escapeHtml(record.email || "-")}</li>
      <li><b>پروژه:</b> ${escapeHtml(record.project)}</li>
      <li><b>تاریخ ثبت:</b> ${escapeHtml(record.createdAt)}</li>
    </ul>
    <p><b>شرح درخواست:</b></p>
    <p>${escapeHtml(record.message).replace(/\n/g, "<br/>")}</p>
  `;

  const boundary = `----vista-${Date.now().toString(16)}`;
  const messageLines = [
    `From: ${fromHeader}`,
    `To: ${toAddress}`,
    `Subject: ${encodeHeader(subject)}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${record.id}@${heloDomain}>`,
    `MIME-Version: 1.0`,
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    "",
    `--${boundary}`,
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: 8bit",
    "",
    plain,
    "",
    `--${boundary}`,
    "Content-Type: text/html; charset=UTF-8",
    "Content-Transfer-Encoding: 8bit",
    "",
    html,
    "",
    `--${boundary}--`,
    "",
  ];

  const raw = messageLines.join("\r\n");
  return raw.replace(/(^|\r\n)\./g, "$1.." );
}

export async function sendContactNotification(record: ContactRecord) {
  const config = ensureConfig();
  const sender = resolveSender(process.env.EMAIL_FROM || "", config.user);
  const toAddress = sanitizeLine(process.env.EMAIL_TO || "devcodebase.dev@gmail.com");
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(toAddress)) {
    throw new Error("EMAIL_TO_INVALID");
  }

  const socket: net.Socket = config.secure
    ? tls.connect({ host: config.host, port: config.port })
    : net.createConnection({ host: config.host, port: config.port });

  try {
    const greeting = await readResponse(socket);
    if (greeting.code >= 400) {
      throw new Error(`SMTP_GREETING_FAILED ${greeting.message.trim()}`);
    }

    await sendCommand(socket, `EHLO ${config.heloDomain}`);
    await sendCommand(socket, "AUTH LOGIN", [334]);
    await sendCommand(socket, Buffer.from(config.user, "utf8").toString("base64"), [334]);
    await sendCommand(socket, Buffer.from(config.pass, "utf8").toString("base64"), [235]);
    await sendCommand(socket, `MAIL FROM:<${sanitizeLine(sender.address)}>`, [250, 251, 252]);
    await sendCommand(socket, `RCPT TO:<${toAddress}>`, [250, 251, 252]);
    await sendCommand(socket, "DATA", [354]);

    const message = buildMessage(record, sender.header, toAddress, config.heloDomain);
    socket.write(`${message}\r\n.\r\n`);
    const dataResult = await readResponse(socket);
    if (dataResult.code >= 400) {
      throw new Error(`SMTP_DATA_REJECTED ${dataResult.message.trim()}`);
    }

    await sendCommand(socket, "QUIT", [221]);
  } finally {
    socket.end();
  }
}
