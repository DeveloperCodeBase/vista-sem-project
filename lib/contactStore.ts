import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";

export type ContactPayload = {
  name: string;
  phone: string;
  email?: string;
  project: string;
  message: string;
};

export type ContactRecord = ContactPayload & {
  id: string;
  createdAt: string;
};

const submissionsFile = path.join(process.cwd(), "data", "contact-submissions.json");

async function readAll(): Promise<ContactRecord[]> {
  try {
    const content = await fs.readFile(submissionsFile, "utf8");
    const parsed = JSON.parse(content);
    if (Array.isArray(parsed)) {
      return parsed as ContactRecord[];
    }
    return [];
  } catch (error: any) {
    if (error?.code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

export async function saveContactRequest(payload: ContactPayload): Promise<ContactRecord> {
  const record: ContactRecord = {
    ...payload,
    email: payload.email || "",
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  };

  const all = await readAll();
  all.push(record);

  await fs.mkdir(path.dirname(submissionsFile), { recursive: true });
  await fs.writeFile(submissionsFile, JSON.stringify(all, null, 2), "utf8");

  return record;
}

export async function listContactRequests(): Promise<ContactRecord[]> {
  return readAll();
}
