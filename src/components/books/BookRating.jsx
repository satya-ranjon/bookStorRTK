import Star from "../ui/Star";

const BookRating = ({ rating }) => {
  let star;
  if (rating) {
    star = Array.from({ length: Number(rating) }, (_, i) => <Star key={i} />);
  }

  return <div className="lws-stars">{star}</div>;
};

export default BookRating;
