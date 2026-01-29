"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Toolbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // gets the current path, e.g., "/", "/about"

  // helper function to check if a link is active
  const isActive = (href: string) => pathname === href;

  return (
    <div>
      {/* Toolbar */}
      <div className="flex items-center justify-between bg-gray-100 p-4">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
          <span className="font-bold text-lg">MyApp</span>
        </div>

        {/* Center menu (desktop) */}
        <div className="hidden md:flex space-x-4">
          <Button variant={isActive("/") ? "default" : "ghost"} size="sm">
            <Link href="/">Home</Link>
          </Button>
          <Button variant={isActive("/about") ? "default" : "ghost"} size="sm">
            <Link href="/about">About</Link>
          </Button>
          <Button
            variant={isActive("/services") ? "default" : "ghost"}
            size="sm"
          >
            <Link href="/services">Services</Link>
          </Button>
          <Button
            variant={isActive("/contact") ? "default" : "ghost"}
            size="sm"
          >
            <Link href="/contact">Contact</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Close" : "Menu"}
          </Button>
        </div>

        {/* Right: Login/Sign Up (desktop) */}
        <div className="hidden md:flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Link href="/login">Login</Link>
          </Button>
          <Button variant="outline" size="sm">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="flex flex-col bg-gray-50 md:hidden p-4 space-y-2">
          <Button variant={isActive("/") ? "default" : "ghost"} size="sm">
            <Link href="/">Home</Link>
          </Button>
          <Button variant={isActive("/about") ? "default" : "ghost"} size="sm">
            <Link href="/about">About</Link>
          </Button>
          <Button
            variant={isActive("/services") ? "default" : "ghost"}
            size="sm"
          >
            <Link href="/services">Services</Link>
          </Button>
          <Button
            variant={isActive("/contact") ? "default" : "ghost"}
            size="sm"
          >
            <Link href="/contact">Contact</Link>
          </Button>
          <Button variant="outline" size="sm">
            <Link href="/login">Login</Link>
          </Button>
          <Button variant="outline" size="sm">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
