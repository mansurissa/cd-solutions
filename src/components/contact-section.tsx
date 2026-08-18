"use client";

import { type FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (!response.ok) throw new Error(result.error || "Unable to send your message.");

      form.reset();
      setStatus("success");
      setFeedback("Thank you. Your project brief has been sent successfully.");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Unable to send your message.");
    }
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
          <label className="form-honeypot" aria-hidden="true"><span>Website</span><input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
          <button type="submit" className="button button--white" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send project brief"}</button>
          {feedback && <p className={`form-feedback form-feedback--${status}`} role="status" aria-live="polite">{feedback}</p>}
        </form>
      </div>
    </section>
  );
}
