import SectionHeading from "./SectionHeading";
import { StarIcon } from "./icons";
import "./Testimonials.css";

const REVIEWS = [
  {
    quote:
      "Booked ORD for an outstation trip at 2am and the driver reached before time. Clean car, calm driving, and the fare was exactly what was quoted.",
    name: "Ramesh Nair",
    role: "Business traveller, Kochi",
  },
  {
    quote:
      "Our hospital runs on their designated drivers now. Patients reach appointments on time and our front desk has one less thing to worry about.",
    name: "Dr. Meena Iyer",
    role: "Administrator, Apollo Clinic",
  },
  {
    quote:
      "We use the monthly corporate chauffeur plan for our executives. Professional, verified and always on the clock — it removed the stress of daily pickups.",
    name: "Arun Kumar",
    role: "Operations Head, Ferrous Tech",
  },
];

function Stars() {
  return (
    <span className="reviews__stars" aria-label="Rated 5 out of 5">
      {[0, 1, 2, 3, 4].map((i) => (
        <StarIcon key={i} />
      ))}
    </span>
  );
}

function Testimonials() {
  return (
    <section id="reviews" className="reviews">
      <div className="reviews__inner">
        <SectionHeading top="What" main="Clients Say" />

        <ul className="reviews__grid">
          {REVIEWS.map((review) => (
            <li key={review.name} className="reviews__card">
              <Stars />
              <p className="reviews__quote">&ldquo;{review.quote}&rdquo;</p>
              <div className="reviews__person">
                <span className="reviews__avatar" aria-hidden="true">
                  {review.name.charAt(0)}
                </span>
                <span className="reviews__who">
                  <span className="reviews__name">{review.name}</span>
                  <span className="reviews__role">{review.role}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Testimonials;
