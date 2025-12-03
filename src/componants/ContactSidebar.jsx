import React from "react";
import { motion } from "framer-motion";

export default function ContactSidebar({ open, onClose }) {
  if (!open) return null;

  return (
    <>
      {/* لو مش عايز أوفرلاي غامق احذف الديف ده */}
      <motion.div
        className="fixed inset-0 bg-black/20 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      <motion.aside
        className="fixed right-0 top-[120px] h-[calc(100vh-80px)] w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        {/* الهيدر بتاع السايدبار */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-[#171430]">Contact</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100"
          >
            ✕
          </button>
        </div>

        {/* المحتوى */}

        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-[#9696aa]">Address:</p>
            <p className="text-sm text-[#171430]">
              Montréal, 1510 Rue Sauvé
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-[#9696aa]">
              Working hours:
            </p>
            <p className="text-sm text-[#171430]">09:00 - 23:00</p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-[#9696aa]">Phone:</p>
            <p className="text-sm text-[#171430]">+02 (044) 756-X6-52</p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-[#9696aa]">Email:</p>
            <p className="text-sm text-[#171430]">starbelly@mail.com</p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-[#171430]">Instagram</p>
            <div className="grid grid-cols-3 gap-2">
              <img
                src="https://starbelly-react.vercel.app/img/instagram/1.jpg
"

                alt="insta1"
                className="w-full h-20 object-cover rounded-lg"
              />
              <img
                src="https://starbelly-react.vercel.app/img/instagram/2.jpg
"

                alt="insta2"
                className="w-full h-20 object-cover rounded-lg"
              />
              <img
                src="https://starbelly-react.vercel.app/img/instagram/3.jpg
"

                alt="insta3"
                className="w-full h-20 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* السوشيال تحت */}
        <div className="border-t px-6 py-4 flex items-center justify-between">
          <p className="text-sm text-[#9696aa]">Follow us</p>
          <div className="flex items-center gap-3 text-[#171430] text-lg">
            <a href="#" className="hover:text-[#f5c332]">
              f
            </a>
            <a href="#" className="hover:text-[#f5c332]">
              t
            </a>
            <a href="#" className="hover:text-[#f5c332]">
              ▶
            </a>
          </div>
        </div>
      </motion.aside>
    </>
  );
}