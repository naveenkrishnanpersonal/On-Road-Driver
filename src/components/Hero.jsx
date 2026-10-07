import {
  ArrowDownIcon,
  CalendarIcon,
  CheckCircleIcon,
  ClockIcon,
  PlaneIcon,
  RoadIcon,
  StarIcon,
  UserCheckIcon,
  UsersIcon,
  WhatsAppIcon,
} from "./icons";
import { whatsappLink } from "../site";
import { asset } from "../asset";
import "./Hero.css";

const POINTS = [
  "Verified Drivers",
  "24/7 Availability",
  "Quick Assignment",
  "Across Kerala",
];

/* Each trip opens WhatsApp with a message naming that service. */
const TRIPS = [
  {
    icon: ClockIcon,
    name: "Hourly Driver",
    price: "₹150/hour",
    message: "Hi ORD, I'd like to book an Hourly Driver (₹150/hour).",
  },
  {
    icon: CalendarIcon,
    name: "Full Day",
    price: "₹999/day",
    message: "Hi ORD, I'd like to book a Full Day driver (₹999/day).",
  },
  {
    icon: PlaneIcon,
    name: "Airport Transfer",
    price: "₹499 flat",
    message: "Hi ORD, I'd like to book an Airport Transfer (₹499 flat).",
  },
  {
    icon: RoadIcon,
    name: "Outstation",
    price: "₹12/km",
    note: "beyond 100 km",
    message:
      "Hi ORD, I'd like to book an Outstation trip (₹12/km beyond 100 km).",
  },
];

const STATS = [
  { icon: UsersIcon, value: "500+", label: "Happy Clients" },
  { icon: UserCheckIcon, value: "200+", label: "Verified Drivers" },
  { icon: ClockIcon, value: "24/7", label: "Availability" },
  { icon: StarIcon, value: "4.9/5", label: "Customer Rating", solid: true },
];

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <img
          className="hero__bg-img"
          src={asset("on-demand-driver-app.png")}
          alt=""
          loading="eager"
        />
        <div className="hero__bg-overlay" />
      </div>

      <div className="hero__inner">
        <div className="hero__content">
          <h1 className="hero__title fade-in-up delay-1">
            <span className="hero__title-line">Your Journey.</span>
            <span className="hero__title-accent">Our Driver.</span>
          </h1>

          <p className="hero__sub fade-in-up delay-1">
            Reliable drivers for your car, whenever you need them.
          </p>

          <ul className="hero__points fade-in-up delay-2">
            {POINTS.map((point) => (
              <li key={point} className="hero__point">
                <CheckCircleIcon className="hero__point-icon" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="hero__actions fade-in-up delay-3">
            <a className="hero__btn hero__btn--primary" href="#contact">
              <CalendarIcon className="hero__btn-icon" />
              Book a Driver
              <ArrowDownIcon className="hero__btn-arrow" />
            </a>

            <a
              className="hero__btn hero__btn--whatsapp"
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="hero__btn-icon hero__btn-icon--solid" />
              WhatsApp Us
            </a>
          </div>
        </div>

        <aside
          className="hero__book fade-in-up delay-2"
          aria-label="Book a Driver"
        >
          <h2 className="hero__book-title">Book a Driver</h2>
          <p className="hero__book-sub">Choose your trip type</p>

          <ul className="hero__trips">
            {TRIPS.map((trip) => {
              const Icon = trip.icon;
              return (
                <li key={trip.name} className="hero__trip">
                  <a
                    className="hero__trip-link"
                    href={whatsappLink(trip.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Book ${trip.name} on WhatsApp`}
                  >
                    <span className="hero__trip-icon">
                      <Icon />
                    </span>
                    <span className="hero__trip-name">{trip.name}</span>
                    <span className="hero__trip-price">
                      {trip.price}
                      {trip.note && (
                        <span className="hero__trip-note">{trip.note}</span>
                      )}
                    </span>
                    <span className="hero__trip-chevron" aria-hidden="true">
                      &rsaquo;
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>

      <ul className="hero__stats">
        {STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <li key={stat.label} className="hero__stat">
              <span
                className={`hero__stat-icon${
                  stat.solid ? " hero__stat-icon--solid" : ""
                }`}
              >
                <Icon />
              </span>
              <span className="hero__stat-text">
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Hero;
