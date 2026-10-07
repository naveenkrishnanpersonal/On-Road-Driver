import SectionHeading from "./SectionHeading";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./icons";
import { SITE, whatsappLink } from "../site";
import "./Contact.css";

const CONTACT_ICONS = {
  phone: PhoneIcon,
  whatsapp: WhatsAppIcon,
  mail: MailIcon,
  pin: PinIcon,
};

const CONTACTS = [
  {
    icon: "phone",
    label: "Call us",
    value: SITE.phoneDisplay,
    note: "24/7, all days",
    href: SITE.phoneHref,
    action: "Tap to call",
  },
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: SITE.phoneDisplay,
    note: "Quick replies",
    href: whatsappLink(),
    action: "Start a chat",
    external: true,
  },
  {
    icon: "mail",
    label: "Email",
    value: SITE.email,
    note: "We reply within a day",
    href: `mailto:${SITE.email}`,
    action: "Send an email",
  },
  {
    icon: "pin",
    label: "Head office",
    value: SITE.address,
    note: "Serving 12 cities",
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      SITE.address,
    )}`,
    action: "View on map",
    external: true,
  },
];

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <SectionHeading top="Get" main="in Touch With Us" />

        <div className="contact__intro">
          <p className="contact__lead">
            Pick whichever way suits you — every route reaches the same team,
            and we answer around the clock.
          </p>

          <a
            className="contact__whatsapp"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact__whatsapp-badge">
              <WhatsAppIcon />
            </span>
            <span className="contact__whatsapp-text">
              <span className="contact__whatsapp-title">WhatsApp Us</span>
              <span className="contact__whatsapp-sub">
                Message us and get a driver in minutes
              </span>
            </span>
            <span className="contact__whatsapp-go" aria-hidden="true">
              &rarr;
            </span>
          </a>
        </div>

        <ul className="contact__list">
          {CONTACTS.map((item) => {
            const Icon = CONTACT_ICONS[item.icon];
            return (
              <li key={item.label} className="contact__cell">
                <a
                  className={`contact__item contact__item--${item.icon}`}
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span
                    className={`contact__icon contact__icon--${item.icon}`}
                    aria-hidden="true"
                  >
                    <Icon />
                  </span>

                  <span className="contact__text">
                    <span className="contact__label">{item.label}</span>
                    <span className="contact__value">{item.value}</span>
                    <span className="contact__note">{item.note}</span>
                  </span>

                  <span className="contact__action" aria-hidden="true">
                    {item.action}
                    <span className="contact__action-arrow">&rarr;</span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Contact;
