import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data/siteData";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-main">
        <Link href="/" className="brand" aria-label="CD Solutions home">
          <Image src="/cd-solutions-logo.png" width={220} height={70} alt="CD Solutions" priority />
        </Link>
        <nav className="nav" aria-label="Main navigation">
          {navLinks.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
        <Link className="header-cta" href="/#contact">Start a project</Link>
      </div>
    </header>
  );
}
