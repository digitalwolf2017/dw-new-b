"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  User,
  Mail,
  Phone,
  MapPin,
  Layers,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import { SolidButton } from "@/components/ui/solid-button";

interface EnquiryModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const EnquiryModalContext = createContext<EnquiryModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export const useEnquiryModal = () => useContext(EnquiryModalContext);

const SERVICES_OPTIONS = [
  "Performance Marketing",
  "Creative Strategy",
  "UI & UX Design",
  "AI Automation",
  "Web & Mobile Development",
  "Brand Identity & Scaling",
  "Full Digital Transformation",
];

export function EnquiryModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    service: "",
  });

  const openModal = () => {
    setSubmitted(false);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Lock body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Global click listener: when any button / CTA of the site is clicked, open popup
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const clickable = target.closest<HTMLElement>("button, a, [role='button']");
      if (!clickable) return;

      // Ignore elements inside the modal itself
      if (clickable.closest("[data-enquiry-modal]")) return;

      // Ignore elements explicitly marked to not trigger the modal (e.g. tabs)
      if (clickable.hasAttribute("data-no-modal") || clickable.closest("[data-no-modal]")) {
        return;
      }

      // Check if it's a tab or non-CTA nav item
      if (clickable.classList.contains("service-tab-btn") || clickable.closest(".service-tabs-wrapper")) {
        return;
      }

      const href = clickable.getAttribute("href");
      const text = (clickable.innerText || "").toLowerCase().trim();

      // Check if it's a site button or CTA link
      const isButton = clickable.tagName.toLowerCase() === "button";
      const isCtaLink =
        href === "#contact" ||
        href === "#services" ||
        clickable.classList.contains("solid-button") ||
        text.includes("get in touch") ||
        text.includes("know more") ||
        text.includes("view all services") ||
        text.includes("get started") ||
        text.includes("share your feedback") ||
        text.includes("enquire") ||
        text.includes("connect");

      if (isButton || isCtaLink) {
        e.preventDefault();
        e.stopPropagation();
        openModal();
      }
    };

    document.addEventListener("click", handleGlobalClick, true);
    return () => document.removeEventListener("click", handleGlobalClick, true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      closeModal();
      setSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        service: "",
      });
    }, 2500);
  };

  return (
    <EnquiryModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <div
            data-enquiry-modal
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6"
          >
            {/* Dark & blurry background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              aria-hidden="true"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full max-w-[440px] rounded-[32px] border border-white/[0.08] bg-[#0c0c0f] p-7 sm:p-9 shadow-[0_30px_90px_rgba(0,0,0,0.9)] text-white"
            >
              {/* Close Cross Button */}
              <button
                type="button"
                data-no-modal
                onClick={closeModal}
                className="absolute top-6 right-6 flex h-8 w-8 items-center justify-center rounded-full text-white/40 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Header: Enquiry Now (without rocket svg) */}
              <div className="flex flex-col mb-7">
                <div className="flex items-baseline gap-2">
                  <span className="font-sans text-3xl font-bold tracking-tight text-white">
                    Enquiry
                  </span>
                  <span className="font-sans text-3xl font-light tracking-tight text-white/90">
                    Now
                  </span>
                </div>
                <div className="h-[2px] w-20 bg-linear-to-r from-white via-white/80 to-transparent mt-1.5" />
              </div>

              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center gap-4">
                  <CheckCircle2 className="h-14 w-14 text-white animate-bounce" />
                  <h3 className="font-sans text-xl font-bold text-white">
                    Thank You!
                  </h3>
                  <p className="text-sm text-white/70 max-w-xs">
                    Your enquiry has been received. Our team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                  {/* 1. Full Name */}
                  <div className="relative flex items-center rounded-full border border-white/[0.08] bg-[#141418] focus-within:border-white/30 focus-within:ring-1 focus-within:ring-white/20 transition-all">
                    <User className="h-4.5 w-4.5 text-white/50 ml-5 mr-3 shrink-0" />
                    <input
                      type="text"
                      required
                      placeholder="Full Name *"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full bg-transparent py-3.5 pr-5 text-sm sm:text-base text-white placeholder:text-white/40 focus:outline-none"
                    />
                  </div>

                  {/* 2. Email */}
                  <div className="relative flex items-center rounded-full border border-white/[0.08] bg-[#141418] focus-within:border-white/30 focus-within:ring-1 focus-within:ring-white/20 transition-all">
                    <Mail className="h-4.5 w-4.5 text-white/50 ml-5 mr-3 shrink-0" />
                    <input
                      type="email"
                      required
                      placeholder="Email *"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-transparent py-3.5 pr-5 text-sm sm:text-base text-white placeholder:text-white/40 focus:outline-none"
                    />
                  </div>

                  {/* 3. Phone */}
                  <div className="relative flex items-center rounded-full border border-white/[0.08] bg-[#141418] focus-within:border-white/30 focus-within:ring-1 focus-within:ring-white/20 transition-all">
                    <Phone className="h-4.5 w-4.5 text-white/50 ml-5 mr-3 shrink-0" />
                    <input
                      type="tel"
                      required
                      placeholder="Phone *"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-transparent py-3.5 pr-5 text-sm sm:text-base text-white placeholder:text-white/40 focus:outline-none"
                    />
                  </div>

                  {/* 4. Location */}
                  <div className="relative flex items-center rounded-full border border-white/[0.08] bg-[#141418] focus-within:border-white/30 focus-within:ring-1 focus-within:ring-white/20 transition-all">
                    <MapPin className="h-4.5 w-4.5 text-white/50 ml-5 mr-3 shrink-0" />
                    <input
                      type="text"
                      required
                      placeholder="Location *"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      className="w-full bg-transparent py-3.5 pr-5 text-sm sm:text-base text-white placeholder:text-white/40 focus:outline-none"
                    />
                  </div>

                  {/* 5. Services - text is crisp white */}
                  <div className="relative flex items-center rounded-full border border-white/[0.08] bg-[#141418] focus-within:border-white/30 focus-within:ring-1 focus-within:ring-white/20 transition-all">
                    <Layers className="h-4.5 w-4.5 text-white/70 ml-5 mr-3 shrink-0" />
                    <select
                      required
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      style={{ color: "#ffffff" }}
                      className="w-full appearance-none bg-transparent py-3.5 pr-10 text-sm sm:text-[15px] !text-white focus:outline-none cursor-pointer"
                    >
                      <option value="" hidden className="bg-[#141418] text-white">
                        Services *
                      </option>
                      {SERVICES_OPTIONS.map((srv) => (
                        <option
                          key={srv}
                          value={srv}
                          className="bg-[#141418] text-white"
                        >
                          {srv}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-5 h-4 w-4 text-white/70" />
                  </div>

                  {/* Submit Button - Matches other site buttons (SolidButton), sharp corners, no glow */}
                  <div className="mt-5 flex justify-center">
                    <SolidButton
                      type="submit"
                      data-no-modal
                      className="w-full h-12 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] shadow-none hover:shadow-none"
                    >
                      Submit
                    </SolidButton>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </EnquiryModalContext.Provider>
  );
}
