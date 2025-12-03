import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/pages", label: "Pages" },
    { to: "/menu", label: "Menu" },
    { to: "/blog", label: "Blog" },
    { to: "/shop", label: "Shop" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-[120px] bg-white shadow-md z-50 flex items-center">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <NavLink to="/" className="text-2xl font-bold text-gray-800">
            <img
              src="https://starbelly-react.vercel.app/img/ui/logo.svg"
              alt="logo"
            />
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-12 text-[#231e41] font-medium">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end
                  className={({ isActive }) =>
                    `relative flex items-center gap-2 transition duration-300 
                    ${isActive ? "text-[#231e41]" : "text-[#231e41]"} 
                    hover:text-[#ffc107]`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <span className="w-2 h-2 bg-[#ffc107] rounded-full"></span>
                      )}
                      <span>{item.label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Cart + Menu Button */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setCartOpen((prev) => !prev)}
              className="relative w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#eaeaea] hover:bg-[#f2f3f5] transition duration-300"
            >
              <img
                src="https://starbelly-react.vercel.app/img/ui/icons/cart.svg"
                className="w-5 h-[22px]"
                alt="icon"
              />
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#171430] text-[11px] text-white">
                3
              </span>
            </button>

            <button className="md:hidden" onClick={() => setOpen(!open)}>
              {open ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white shadow-md py-4 px-6 space-y-4 text-gray-700 font-medium"
            >
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      isActive ? "text-[#ffc107]" : ""
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>

      {/* Cart Drawer */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen((prev) => !prev)}
            />

            <motion.aside
              className="fixed right-0 top-[120px] h-[calc(100vh-80px)] w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <h2 className="text-lg font-semibold text-[#171430]">
                  Your cart
                </h2>

                <button
                  onClick={() => setCartOpen((prev) => !prev)}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100"
                >
                  ✕
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-lg bg-gray-100 overflow-hidden">
                    <img
                      src="https://starbelly-react.vercel.app/img/food/menu1.jpg"
                      alt="Pizza"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-[#171430]">
                      Margherita Pizza
                    </p>
                    <p className="text-sm text-gray-500">2 × $12.00</p>
                  </div>
                  <p className="font-semibold text-[#171430]">$24.00</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-lg bg-gray-100 overflow-hidden">
                    <img
                      src="https://starbelly-react.vercel.app/img/food/menu2.jpg"
                      alt="Burger"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-[#171430]">Cheese Burger</p>
                    <p className="text-sm text-gray-500">1 × $10.00</p>
                  </div>
                  <p className="font-semibold text-[#171430]">$10.00</p>
                </div>
              </div>

              <div className="border-t px-6 py-4 space-y-3">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>$34.00</span>
                </div>
                <div className="flex justify-between text-base font-semibold text-[#171430]">
                  <span>Total</span>
                  <span>$34.00</span>
                </div>
                <button className="w-full mt-2 bg-[#f5c332] py-3 rounded-full font-semibold text-[#171430] hover:brightness-95 transition">
                  Go to checkout
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
