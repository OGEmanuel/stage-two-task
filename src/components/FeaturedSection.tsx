import { Link } from 'react-router-dom';
import ChevronRight from '../assets/icons/chevronRight';
import imdb from '../assets/images/IMDB.png';
import tomato from '../assets/images/tomato.png';
import Rating from './Ratings';
import { MOVIE_DETAILS } from '../lib/data';
import FavouriteIcon from '../assets/icons/favouriteIcon';

const FeaturedSection = () => {
  return (
    <section className="px-40 mb-28">
      <div className="flex justify-between items-center mb-10">
        <p className="font-bold text-4xl">Featured Movies</p>
        <div className="flex items-center gap-2">
          <Link to="" className="text-lg text-[#BE123C]">
            See More
          </Link>
          <ChevronRight />
        </div>
      </div>
      <div className="grid w-full grid-cols-[repeat(auto-fit,_minmax(12rem,_1fr))] gap-20">
        {MOVIE_DETAILS.map(detail => (
          <Link
            to=""
            data-testid="movie-card"
            key={detail.id}
            className="w-full flex flex-col gap-2 relative"
          >
            <p className="absolute top-[4%] left-[5%] bg-[#F3F4F6] px-2 py-[3px] rounded-xl text-xs font-bold text-[#111827] opacity-50">
              TV SERIES
            </p>
            <FavouriteIcon className="absolute top-[3%] right-[5%]" />
            <img
              src={detail.cover}
              alt="movie-poster"
              data-testid="movie-poster"
            />
            <p
              data-testid="movie-release-date"
              className="text-xs font-bold text-[#9CA3AF]"
            >
              {detail.releaseDate}
            </p>
            <p
              data-testid="movie-title"
              className="text-lg font-bold text-[#111827]"
            >
              {detail.movieTitle}
            </p>
            <div className="text-xs flex items-center justify-between">
              <Rating rating={detail.IMDB} src={imdb} />
              <Rating rating={detail.tomato} src={tomato} />
            </div>
            <p className="text-xs font-bold text-[#9CA3AF]">{detail.genre}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
