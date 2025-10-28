"use client";
import { useEffect } from "react";

type ModalProps = {
  open: boolean;
  title: string;
  html: string;
  onClose: () => void;
  locale?: "fa" | "en";
};

export default function Modal({ open, title, html, onClose, locale = "fa" }: ModalProps){
  useEffect(()=>{
    if(open){ document.body.style.overflow='hidden'; } else { document.body.style.overflow=''; }
    return ()=>{ document.body.style.overflow=''; };
  }, [open]);
  if(!open) return null;
  return (
    <div className="modal-overlay open" onClick={onClose}>
      <div className="modal" onClick={(e)=> e.stopPropagation()}>
        <header className="flex items-center justify-between">
          <strong className="text-white">{title}</strong>
          <button className="modal-close" onClick={onClose}>✕</button>
        </header>
        <div className="body prose-rtl" dangerouslySetInnerHTML={{__html: html}} />
        <footer className="flex justify-between gap-3">
          <a className="btn" href={locale === "fa" ? "#contact" : "/en#contact"} onClick={onClose}>
            {locale === "fa" ? "درخواست همکاری" : "Book a consultation"}
          </a>
          <button className="btn" onClick={onClose}>
            {locale === "fa" ? "بستن" : "Close"}
          </button>
        </footer>
      </div>
    </div>
  );
}
