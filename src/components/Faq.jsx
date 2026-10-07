import { useState } from "react";
import SectionHeading from "./SectionHeading";
import "./Faq.css";

const QUESTIONS = [
  {
    q: "How do I book a driver with ORD?",
    a: "Tap Book a Driver and pick a trip type — hourly, outstation, airport transfer or a full-month chauffeur. Add your pickup and drop details, confirm the fare and a verified driver is assigned to you, usually within minutes.",
  },
  {
    q: "Are your drivers background-checked?",
    a: "Yes. Every driver on the platform clears a police-verified background check, an identity and licence check, and a practical driving assessment before they are allowed to take a booking. You can see the driver's name and photo before the trip starts.",
  },
  {
    q: "What does a trip cost?",
    a: "Pricing is fixed and shown upfront before you confirm — no hidden surge, toll or waiting charges added later. Airport transfers are quoted flat, hourly hire is billed per hour, and monthly chauffeur plans are quoted as a package.",
  },
  {
    q: "Which cities do you operate in?",
    a: "We run across 12 cities with more routes going live every month. Enter your pickup location when you book and the app will confirm availability before you pay.",
  },
  {
    q: "Can I book for someone else, like a parent or colleague?",
    a: "Yes. You can book on behalf of a parent, a relative, a colleague or an employee and share the trip details with them. Hospital and corporate bookings can be set up on a recurring schedule.",
  },
  {
    q: "What if I need to cancel or change the plan?",
    a: "Bookings can be cancelled free of charge up to two hours before the scheduled pickup, and plans can be changed any time from your dashboard. For monthly plans, simply tell us before the renewal date.",
  },
];

function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="faq">
      <div className="faq__inner">
        <SectionHeading top="What" main="People Usually Ask" />

        <ul className="faq__list">
          {QUESTIONS.map((item, index) => {
            const isOpen = open === index;
            return (
              <li key={item.q} className="faq__item">
                <h3 className="faq__q">
                  <button
                    type="button"
                    className={`faq__btn${isOpen ? " is-open" : ""}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-btn-${index}`}
                    onClick={() => setOpen(isOpen ? -1 : index)}
                  >
                    <span className="faq__btn-text">{item.q}</span>
                    <span className="faq__sign" aria-hidden="true">
                      <span className="faq__sign-h" />
                      <span className="faq__sign-v" />
                    </span>
                  </button>
                </h3>
                <div
                  className={`faq__panel${isOpen ? " is-open" : ""}`}
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-btn-${index}`}
                  hidden={!isOpen}
                >
                  <p className="faq__a">{item.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Faq;
