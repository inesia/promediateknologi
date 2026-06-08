"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Server } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { homeHeader } from "@/lib/homeContent";

interface SubMenuItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  submenu?: SubMenuItem[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Tentang Kami",
    href: "/about-us",
    submenu: [
      { label: "Tentang Perusahaan", href: "/about-us#tentang-perusahaan" },
      { label: "Promedia Dalam Angka", href: "/dalam-angka" },
      { label: "Mitra Kami", href: "/mitra" },
      { label: "Lokasi", href: "/about-us#lokasi" },
      { label: "Teknologi Kami", href: "/technology" },
    ],
  },
  {
    label: "Program",
    href: "#",
    submenu: [
      { label: "Publisher Media Network", href: "/program/mediapreneur" },
      { label: "Influencer Media Network", href: "/program/socmedpreneur" },
      { label: "Content Creator For Publisher", href: "/program/contentpreneur" },
      { label: "Gabung Program", href: "/register" },
    ],
  },
  { label: "Kontak & FAQ", href: "/kontak" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<
    string | null
  >(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-slate-100 lg:backdrop-blur-md ${
        isScrolled
          ? "lg:bg-white/70 lg:border-slate-100"
          : "lg:bg-white/60 lg:border-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - Left */}
          <motion.a
            href="/"
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/images/logo.png"
              alt="Promedia Teknologi"
              width={200}
              height={67}
              className="h-12 lg:h-16 w-auto object-contain"
              priority
            />
          </motion.a>

          {/* Navigation Links - Center */}
          <div className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2 space-x-1">
            {navItems.map((item, index) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.submenu && setActiveDropdown(item.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.a
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors flex items-center gap-1"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.2 }}
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="w-3 h-3" />}
                  <motion.span
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#00AEEF] to-[#2D74B3]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.submenu && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-lg rounded-lg shadow-xl border border-slate-100 py-2 z-50"
                    >
                      {item.submenu.map((subItem, subIndex) => {
                        const isExternal = subItem.href.startsWith('http');
                        const linkContent = (
                          <motion.span
                            className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-700 hover:text-[#00AEEF] hover:bg-slate-50 transition-colors cursor-pointer block"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: subIndex * 0.05 }}
                          >
                            {subItem.label === "Teknologi Kami" && (
                              <Server className="w-4 h-4 flex-shrink-0" />
                            )}
                            {subItem.label}
                          </motion.span>
                        );
                        return isExternal ? (
                          <a key={subItem.label} href={subItem.href} target="_blank" rel="noopener noreferrer">
                            {linkContent}
                          </a>
                        ) : (
                          <Link key={subItem.label} href={subItem.href}>
                            {linkContent}
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Daftar + menu — desktop & mobile */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href={homeHeader.registerHref} className="shrink-0">
              <motion.div
                className="px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#00AEEF] to-[#2D74B3] rounded-lg shadow-lg shadow-[#00AEEF]/25 hover:shadow-[#00AEEF]/40 transition-all duration-300 relative overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{homeHeader.registerCta}</span>
              </motion.div>
            </Link>

            <button
              type="button"
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-slate-100 bg-white py-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between">
                      <a
                        href={item.href}
                        className="flex-1 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors py-2"
                        onClick={(e) => {
                          if (item.submenu) {
                            e.preventDefault();
                            setMobileActiveDropdown(
                              mobileActiveDropdown === item.label
                                ? null
                                : item.label,
                            );
                          } else {
                            setIsMobileMenuOpen(false);
                          }
                        }}
                      >
                        {item.label}
                      </a>
                      {item.submenu && (
                        <button
                          onClick={() =>
                            setMobileActiveDropdown(
                              mobileActiveDropdown === item.label
                                ? null
                                : item.label,
                            )
                          }
                          className="p-2"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              mobileActiveDropdown === item.label
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Mobile Submenu */}
                    <AnimatePresence>
                      {item.submenu && mobileActiveDropdown === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4 space-y-2 overflow-hidden"
                        >
                          {item.submenu.map((subItem) => {
                            const isExternal = subItem.href.startsWith('http');
                            const mobileLinkClass = "flex items-center gap-2 block text-sm text-slate-600 hover:text-[#00AEEF] transition-colors py-1.5";
                            return isExternal ? (
                              <a
                                key={subItem.label}
                                href={subItem.href}
                                className={mobileLinkClass}
                                onClick={() => setIsMobileMenuOpen(false)}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {subItem.label}
                              </a>
                            ) : (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                className={mobileLinkClass}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subItem.label ===
                                  "Teknologi Kami" && (
                                  <Server className="w-4 h-4 flex-shrink-0" />
                                )}
                                {subItem.label}
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <Link href={homeHeader.registerHref} onClick={() => setIsMobileMenuOpen(false)}>
                  <motion.div
                    className="w-full px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#00AEEF] to-[#2D74B3] rounded-lg shadow-lg text-center mt-4 block cursor-pointer"
                    whileTap={{ scale: 0.95 }}
                  >
                    {homeHeader.registerCta}
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
