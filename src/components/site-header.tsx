"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/data/siteData";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container header-main">
        <Link href="/" className="brand" aria-label="CD Solutions home" onClick={closeMenu}>
          <Image src="/cd-solutions-logo.png" width={220} height={70} alt="CD Solutions" priority />
        </Link>
        <nav id="main-navigation" className={`nav${menuOpen ? " nav--open" : ""}`} aria-label="Main navigation">
          {navLinks.map((item) => <Link href={item.href} key={item.href} onClick={closeMenu}>{item.label}</Link>)}
          <Link className="nav__mobile-cta" href="/#contact" onClick={closeMenu}>Start a project</Link>
        </nav>
        <Link className="header-cta" href="/#contact">Start a project</Link>
        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="main-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
