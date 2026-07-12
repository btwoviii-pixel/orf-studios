 "use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  open,
  onClose,
}: ProjectModalProps) {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!form.current) return;

    try {
      setLoading(true);

      await emailjs.sendForm(
        "service_orf123",
        "template_muxx6gi",
        form.current,
        "doTdzteel39kKB8j6"
      );
form.current
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2500);
    } catch (error) {
      console.error(error);
     ("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-5"
          >
            <div className="relative w-[92%] max-w-[470px] rounded-[32px] bg-white p-8 shadow-[0_35px_90px_rgba(0,0,0,.18)]">

              {/* Close */}
              <button
                onClick={onClose}
                className="absolute right-6 top-6 text-2xl text-zinc-400 transition hover:text-black"
              >
                ×
              </button>

              {/* Heading */}

              <div className="text-center">

                <p className="text-[11px] uppercase tracking-[0.55em] text-zinc-400">
                  ORF STUDIOS
                </p>

                <h2 className="mt-3 text-4xl font-bold text-zinc-900">
                  Start a Project
                </h2>

                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-zinc-500" >
                 we'll reply within 6 hours.
                </p>

              </div>

              {success ? (

                <div className="py-14 text-center">

                  <div className="text-5xl">
                    ✅
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold">
                    Request Sent!
                  </h3>

                  <p className="mt-3 text-zinc-500">
                    Thank you for contacting ORF Studios.
                  </p>

                </div>

              ) : (

                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="mt-10 space-y-5"
                >
                
       
                                  {/* Full Name */}
                  <div className="px-4">
                    <label className="mb-2 block text-sm font-medium text-zinc-700">
                      Full Name
                    </label>

                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-[92%] rounded-xl border border-zinc-200 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-black focus:ring-2 focus:ring-zinc-100"
                    />
                  </div>

                  {/* Email */}
                  <div className="px-4">
                    <label className="mb-2 block text-sm font-medium text-zinc-700">
                      Email Address
                    </label>

                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-[92%] rounded-xl border border-zinc-200 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-black focus:ring-2 focus:ring-zinc-100"
                    />
                  </div>

                  {/* Service */}
                  <div className="px-4">
                    <label className="mb-2 block text-sm font-medium text-zinc-700">
                      Service
                    </label>

                    <select
                      name="service"
                      required
                      className="w-[92%] rounded-xl border border-zinc-200 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-black focus:ring-2 focus:ring-zinc-100"
                    >
                      <option value="">Select Service</option>
                      <option>Photography</option>
                      <option>Wedding Films</option>
                      <option>Branding</option>
                      <option>Social Media Management</option>
                      <option>Website Development</option>
                      <option>Motion Graphics</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="px-4">
                    <label className="mb-2 block text-sm font-medium text-zinc-700">
                      Project Details
                    </label>

                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us about your project..."
                      className="w-[92%] resize-none rounded-xl border border-zinc-200 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-black focus:ring-2 focus:ring-zinc-100"
                    />
                  </div>

                  {/* Button */}
                  <div className="flex justify-center pt-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="rounded-full bg-transparent px-5 py-1 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {loading ? "Sending..." : "Start Project →"}
                    </button>
                  </div>
                                  </form>

              )}

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}