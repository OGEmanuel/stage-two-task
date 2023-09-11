type RatingProps = { rating: string; src: string };

const Rating = (props: RatingProps) => {
  const { rating, src } = props;
  return (
    <div className="flex gap-[10px] items-center text-xs">
      <img src={src} alt="imdb logo" />
      <p>{rating}</p>
    </div>
  );
};

export default Rating;
