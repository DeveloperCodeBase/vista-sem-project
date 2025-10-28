"use client";
import { useEffect } from "react";
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

export default function Modal({ open, title, subtitle, onClose, locale = "fa", actions, children }: ModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const isFa = locale === "fa";

  return (
    <div className="modal-overlay open" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={onClose}>
      <div className={`modal ${isFa ? "rtl" : "ltr"}`} onClick={(e) => e.stopPropagation()}>
        <header className={`flex flex-col gap-1 border-b border-white/10 bg-transparent px-6 py-4 ${isFa ? "text-right" : "text-left"}`}>
          <div className="flex items-center justify-between gap-6">
            <div className={`flex-1 ${isFa ? "text-right" : "text-left"}`}>
              {title ? (
                <strong id="modal-title" className="text-lg font-semibold text-white">
                  {title}
                </strong>
              ) : null}
              {subtitle ? <p className="text-sm text-white/60">{subtitle}</p> : null}
            </div>
            <button className="modal-close" onClick={onClose} aria-label={isFa ? "بستن" : "Close"}>
              ✕
            </button>
          </div>
        </header>
        <div className="modal-body">{children}</div>
        <footer className={`border-t border-white/10 px-6 py-4 ${isFa ? "text-left" : "text-right"}`}>
          {actions ?? (
            <button className="btn" onClick={onClose}>
              {isFa ? "بستن" : "Close"}
            </button>
          )}
        </footer>
      </div>
    </div>
  );
}
