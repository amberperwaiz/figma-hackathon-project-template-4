'use client';

import Link from "next/link";
import { useState } from "react";
import { 
  MagnifyingGlassIcon, 
  ShoppingCartIcon, 
  HeartIcon, 
  Bars3Icon, 
  XMarkIcon 
} from "@heroicons/react/24/outline";
import TopBar from "./TopBar";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  // Navigation links for easier management
  const mainNavLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/blog", label: "Blog" },
    { href: "/shoplist", label: "Shop" },
    { href: "/contact-us", label: "Contact" }
  ];

  const pagesDropdownLinks = [
    { href: "/cart", label: "Cart" },
    { href: "/shopGridDefault", label: "Shop Grid Default" },
    { href: "/checkout", label: "Billing Details" },
    { href: "/ordercompleted", label: "Order Completed" },
    { href: "/about", label: "About Us" },
    { href: "/contact-us", label: "Contact Us" },
    { href: "/account", label: "My Account" },
    { href: "/creatorpage", label: "About Creator" },
    { href: "/faq", label: "FAQ" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white w-full">
      {/* Top Bar */}
      <TopBar />

      {/* Main Header */}
      <div className="w-full h-[80px] flex justify-center items-center border-b-2">
        <div className="w-full max-w-[1200px] h-full flex justify-between items-center px-4 lg:px-10">
          {/* Left Section: Logo and Search Bar */}
          <div className="flex items-center space-x-4 lg:space-x-8">
            {/* Logo */}
            <h1 className="text-2xl lg:text-3xl font-bold">Hekto</h1>

            {/* Search Bar - Hidden on mobile, visible on sm screens and up */}
            <div className="hidden sm:flex items-center border rounded-md overflow-hidden bg-gray-100">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-40 md:w-60 px-3 py-2 text-sm outline-none bg-transparent"
              />
              <button className="p-2 bg-[#FB2E86] text-white hover:bg-[#F94C9B] transition-colors">
                <MagnifyingGlassIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Center Section: Navigation Links - Hidden on mobile */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex space-x-6 items-center">
              {mainNavLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    className="hover:text-[#FB2E86] transition-colors" 
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              
              {/* Pages Dropdown */}
              <li className="relative group">
                <button
                  className="hover:text-[#FB2E86] transition-colors"
                  onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)}
                >
                  Pages
                </button>
                {isPagesDropdownOpen && (
                  <ul className="absolute top-full mt-2 bg-white shadow-lg rounded-md text-black text-sm min-w-[200px] py-2">
                    {pagesDropdownLinks.map((link) => (
                      <li key={link.href} className="hover:bg-gray-100">
                        <Link 
                          href={link.href} 
                          className="block px-4 py-2"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </nav>

          {/* Right Section: Icons - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link 
              href="/cart" 
              className="hover:text-[#FB2E86] transition-colors flex items-center space-x-1"
            >
              <ShoppingCartIcon className="w-5 h-5" />
              <span>Cart</span>
            </Link>
            <Link 
              href="#" 
              className="hover:text-[#FB2E86] transition-colors flex items-center space-x-1"
            >
              <HeartIcon className="w-5 h-5" />
              <span>Wishlist</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle - Visible only on smaller screens */}
          <div className="lg:hidden">
            <button
              className="flex items-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6 text-black" />
              ) : (
                <Bars3Icon className="w-6 h-6 text-black" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Sliding overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 overflow-y-auto animate-slide-in">
          <div className="container mx-auto px-4 py-6">
            {/* Mobile Search Bar */}
            <div className="flex items-center border rounded-md overflow-hidden bg-gray-100 mb-6">
              <input
                type="text"
                placeholder="Search"
                className="flex-grow px-3 py-2 text-sm outline-none bg-transparent"
              />
              <button className="p-2 bg-[#FB2E86] text-white hover:bg-[#F94C9B] transition-colors">
                <MagnifyingGlassIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav>
              <ul className="space-y-4 text-center">
                {mainNavLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="block py-2 hover:text-[#FB2E86]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}

                {/* Mobile Pages Dropdown */}
                <li>
                  <button
                    className="w-full py-2 hover:text-[#FB2E86] transition-colors"
                    onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)}
                  >
                    Pages
                  </button>
                  {isPagesDropdownOpen && (
                    <ul className="space-y-2 mt-2 bg-gray-50 rounded-md py-2">
                      {pagesDropdownLinks.map((link) => (
                        <li key={link.href}>
                          <Link 
                            href={link.href} 
                            className="block py-2 hover:bg-gray-100"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            </nav>

            {/* Mobile Cart and Wishlist */}
            <div className="flex justify-around mt-6 pt-6 border-t">
              <Link 
                href="/cart" 
                className="flex items-center space-x-2 hover:text-[#FB2E86]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <ShoppingCartIcon className="w-5 h-5" />
                <span>Cart</span>
              </Link>
              <Link 
                href="#" 
                className="flex items-center space-x-2 hover:text-[#FB2E86]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <HeartIcon className="w-5 h-5" />
                <span>Wishlist</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;