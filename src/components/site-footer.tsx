import Image from "next/image";

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/cdsolutionscolimited" },
  { name: "X", href: "https://x.com/CDSOLUTIONS1" },
];

function SocialIcon({ name }: { name: string }) {
  if (name === "Instagram") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" className="social-icon__dot" /></svg>;
  }

  if (name === "Twitter") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.95 4.57a10 10 0 0 1-2.82.78 4.93 4.93 0 0 0 2.16-2.73 9.84 9.84 0 0 1-3.13 1.19 4.92 4.92 0 0 0-8.38 4.48A13.98 13.98 0 0 1 1.64 3.16a4.82 4.82 0 0 0-.67 2.48c0 1.71.87 3.21 2.19 4.09a4.9 4.9 0 0 1-2.23-.61v.06a4.92 4.92 0 0 0 3.95 4.83 5 5 0 0 1-2.21.08 4.94 4.94 0 0 0 4.6 3.42 9.87 9.87 0 0 1-6.12 2.11 13.95 13.95 0 0 0 7.55 2.21c9.06 0 14.01-7.5 14.01-14.01 0-.21 0-.42-.02-.63A10.01 10.01 0 0 0 24 4.59Z" /></svg>;
  }

  if (name === "Facebook") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.6.4-1 1-1Z" /></svg>;
  }

  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 4 14 16M19 4 5 20" /></svg>;
}

export default function SiteFooter() {
  const email = process.env.CONTACT_EMAIL || "cdsolutioncolimited@gmail.com";
  const phone = process.env.CONTACT_PHONE || "+250 787 709 692";
  const address = process.env.CONTACT_ADDRESS || "Kicukiro, Kigali, Rwanda";
  const phoneHref = phone?.replace(/[^\d+]/g, "");

  return (
    <footer className="footer">
      <div className="container footer__top">
        <a href="/" aria-label="CD Solutions home"><Image src="/cd-solutions-logo.png" width={220} height={70} alt="CD Solutions" /></a>
        <div className="footer__details">
          <p>Integrated construction, materials, equipment, and logistics support.</p>
          <address>
            {address && <span>{address}</span>}
            {phone && <a href={`tel:${phoneHref}`}>{phone}</a>}
            {email && <a href={`mailto:${email}`}>{email}</a>}
          </address>
          <nav className="footer__socials" aria-label="Social media">
            {socialLinks.map((social) => <a href={social.href} target="_blank" rel="noreferrer" aria-label={`CD Solutions on ${social.name}`} title={social.name} key={social.name}><SocialIcon name={social.name} /></a>)}
          </nav>
        </div>
        <a href="#" className="footer__up">Back to top ↑</a>
      </div>
      <div className="container footer__bottom"><p>© {new Date().getFullYear()} CD Solutions. All rights reserved.</p><p>Solutions that build success.</p></div>
    </footer>
  );
}
