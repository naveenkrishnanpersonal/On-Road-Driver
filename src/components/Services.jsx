import { Fragment } from "react";
import { ArrowDownIcon } from "./icons";
import { asset } from "../asset";
import "./Services.css";

const SERVICES = [
  {
    num: "01",
    title: "On-Demand Professional Drivers",
    text: "Our skilled and experienced chauffeurs are available 24/7 to provide reliable and safe driving services.",
    image: asset("professional-chauffeur-sedan.png"),
    imageAlt: "Professional chauffeur standing beside a luxury sedan",
  },
  {
    num: "02",
    title: "Corporate Driver Solutions",
    text: "ORD specializes in offering professional drivers to corporate clients, ensuring that executives and employees experience stress-free, comfortable, and timely transportation.",
    image: asset("business-partnership-handshake.png"),
    imageAlt: "Two business professionals shaking hands",
  },
  {
    num: "03",
    title: "Hospital Assistance",
    text: "Hospital visits can be stressful. ORD provides reliable, safe rides for appointments, emergencies, and drop-offs—ensuring timely, caring service.",
    image: asset("accessible-hospital-ride.png"),
    imageAlt: "A patient being helped into an accessible hospital ride",
  },
  {
    num: "04",
    title: "Car Pickup & Drop Service",
    text: "ORD offers a hassle-free car pickup and drop service, allowing you to get your vehicle transported to your desired location safely and efficiently.",
    image: asset("keys-coins-new-sedan.png"),
    imageAlt: "Car keys and coins beside a new sedan",
  },
  {
    num: "05",
    title: "Designated Driver Service",
    text: "Enjoy your evenings without worrying about the drive home. Our designated driver service ensures that you and your vehicle reach home safely after a night out.",
    image: asset("office-birthday-toast-crown.png"),
    imageAlt: "Colleagues toasting an office birthday with a paper crown",
  },
];

function Services() {
  return (
    <section id="services" className="services">
      <header className="services__head">
        <h2 className="services__title">
          <span className="services__title-top">Our</span>{" "}
          <span className="services__title-main">Services</span>
        </h2>
        <span className="services__rule" aria-hidden="true" />
      </header>

      <div className="services__inner">
        <ol className="services__rows">
          {/* The arrow between rows is emitted alongside its own row. */}
          {SERVICES.map((service, index) => (
            <Fragment key={service.num}>
              <li className="services__row">
                <article className="services__card">
                  <span className="services__num" aria-hidden="true">
                    {service.num}
                  </span>
                  <h3 className="services__card-title">{service.title}</h3>
                  <p className="services__card-text">{service.text}</p>
                </article>

                <figure className="services__media">
                  <img
                    className="services__image"
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                  />
                </figure>
              </li>

              {index < SERVICES.length - 1 && (
                <li className="services__step-arrow" aria-hidden="true">
                  <span className="services__step-arrow-badge">
                    <ArrowDownIcon />
                  </span>
                </li>
              )}
            </Fragment>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Services;
