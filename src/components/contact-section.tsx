"use client";

import { type FormEvent, useState } from "react";

type ContactSectionProps = {
  recipientEmail: string;
};

export default function ContactSection({ recipientEmail }: ContactSectionProps) {
  const [feedback, setFeedback] = useState("");
  const [hasError, setHasError] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!recipientEmail) {
      setHasError(true);
      setFeedback("The contact email has not been configured.");
      return;
    }

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const contact = String(data.get("contact") || "");
    const service = String(data.get("service") || "General enquiry");
    const message = String(data.get("message") || "");
    const subject = `CD Solutions project enquiry: ${service}`;
    const body = [
      "Hello CD Solutions,",
      "",
      message,
      "",
      `Name: ${name}`,
      `Phone or email: ${contact}`,
      `Service needed: ${service}`,
    ].join("\n");

    setHasError(false);
    setFeedback("Your email application should open with the project details ready to send.");
    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="section contact" id="contact">
      <div className="container contact__grid">
        <div className="contact__copy">
          <h2>What are you planning to build?</h2>
          <p>Share the scope, location, and support you need. We’ll use that context to shape the right next step.</p>
          <div className="contact__line"><span>Services</span><strong>Build / Supply / Hire / Deliver</strong></div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field-row">
            <label><span>Name</span><input type="text" name="name" placeholder="Your full name" maxLength={100} required /></label>
            <label><span>Phone or email</span><input type="text" name="contact" placeholder="How can we reach you?" maxLength={160} required /></label>
          </div>
          <label><span>Service needed</span><select name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>Construction & civil works</option><option>Planning & project delivery</option><option>Cost & quantity services</option><option>Materials & procurement</option><option>Equipment hire</option><option>Transport & distribution</option></select></label>
          <label><span>Project brief</span><textarea name="message" rows={4} maxLength={3000} required placeholder="Tell us about the project, site, and timeline" /></label>
          <button type="submit" className="button button--white">Prepare email</button>
          {feedback && <p className={`form-feedback form-feedback--${hasError ? "error" : "success"}`} role="status" aria-live="polite">{feedback}</p>}
        </form>
      </div>
    </section>
  );
}
