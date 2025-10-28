"use client";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type ModalProps = {
  open: boolean;
  title?: string;
  subtitle?: string;
  onClose: () => void;
  locale?: "fa" | "en";
  actions?: ReactNode;
  children: ReactNode;
};

const FOCUSABLE = 'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])';

export default function Modal({ open, title, subtitle, onClose, locale = "fa", actions, children }: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const lastFocused = useRef<Element | null>(null);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }
    lastFocused.current = document.activeElement;
    document.body.style.overflow = "hidden";
    const node = dialogRef.current;
    if (node) {
      const focusable = Array.from(node.querySelectorAll<HTMLElement>(FOCUSABLE));
      const target = focusable[0] ?? node;
      window.requestAnimationFrame(() => target.focus());
    }
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
      if (event.key === "Tab" && node) {
        const focusable = Array.from(node.querySelectorAll<HTMLElement>(FOCUSABLE)).filter((el) => !el.hasAttribute("disabled"));
        if (focusable.length === 0) {
          event.preventDefault();
          node.focus();
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      if (lastFocused.current instanceof HTMLElement) {
        lastFocused.current.focus({ preventScroll: true });
      }
    };
  }, [open, onClose]);

  if (!mounted || !open) {
    return null;
  }

  const isFa = locale === "fa";

  const modal = (
    <div
      className="modal-overlay open"
      role="presentation"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        className={`modal ${isFa ? "rtl" : "ltr"}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
        aria-describedby={subtitle ? "modal-subtitle" : undefined}
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
      >
        <header className={`modal-header ${isFa ? "text-right" : "text-left"}`}>
          <div className="flex items-center justify-between gap-6">
            <div className={`flex-1 ${isFa ? "text-right" : "text-left"}`}>
              {title ? (
                <strong id="modal-title" className="text-lg font-semibold text-white">
                  {title}
                </strong>
              ) : null}
              {subtitle ? (
                <p id="modal-subtitle" className="text-sm text-white/60">
                  {subtitle}
                </p>
              ) : null}
            </div>
            <button className="modal-close" onClick={onClose} aria-label={isFa ? "بستن" : "Close"}>
              ✕
            </button>
          </div>
        </header>
        <div className="modal-body">{children}</div>
        <footer className={`modal-footer ${isFa ? "text-left" : "text-right"}`}>
          {actions ?? (
            <button className="btn" onClick={onClose}>
              {isFa ? "بستن" : "Close"}
            </button>
          )}
        </footer>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
