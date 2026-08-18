import Image from "next/image";

export default function SiteFooter() {
  const email = process.env.CONTACT_EMAIL;
  const phone = process.env.CONTACT_PHONE;
  const address = process.env.CONTACT_ADDRESS;
  const phoneHref = phone?.replace(/[^\d+]/g, "");

  return (
    <footer className="footer">
      <div className="container footer__top">
        <a href="/" aria-label="CD Solutions home"><Image src="/cd-solutions-logo.png" width={220} height={70} alt="CD Solutions" /></a>
        <div className="footer__details">
          <p>Integrated construction, materials, equipment, and logistics support.</p>
          <address>
            {email && <a href={`mailto:${email}`}>{email}</a>}
            {phone && <a href={`tel:${phoneHref}`}>{phone}</a>}
            {address && <span>{address}</span>}
          </address>
        </div>
        <a href="#" className="footer__up">Back to top ↑</a>
      </div>
      <div className="container footer__bottom"><p>© {new Date().getFullYear()} CD Solutions. All rights reserved.</p><p>Solutions that build success.</p></div>
    </footer>
  );
}
