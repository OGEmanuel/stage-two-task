import MenuIcon from '../assets/icons/menuIcon';
import PlayIcon from '../assets/icons/playIcon';
import SearchIcon from '../assets/icons/serachIcon';
import Logo from './Logo';
import imdb from '../assets/images/IMDB.png';
import tomatologo from '../assets/images/tomato.png';

const HeroSection = () => {
  return (
    <section className="bg-poster bg-auto bg-no-repeat bg-center px-40 text-white pt-2.5 pb-40 relative">
      <div className="flex justify-between items-center mb-20">
        <Logo />
        <div className="relative w-max">
          <input
            type="search"
            placeholder="What do you want to watch?"
            className="bg-transparent w-[525px] border-2 border-[#D1D5DB] rounded-md px-[10px] py-[6px] outline-none placeholder:text-white"
          />
          <SearchIcon className="absolute top-[30%] right-[2.5%]" />
        </div>
        <div className="flex items-center gap-[27px]">
          <p className="font-bold">Sign in</p>
          <MenuIcon />
        </div>
      </div>
      <div className="w-[404px] flex flex-col gap-4">
        <h1 className="font-bold text-5xl">John Wick 3 : Parabellum</h1>
        <div className="flex gap-7 text-xs">
          <div className="flex gap-[10px] items-center">
            <img src={imdb} alt="imdb logo" />
            <p>86.0 / 100</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <img src={tomatologo} alt="tomato logo" className="w-full" />
            <p>97%</p>
          </div>
        </div>
        <p className="font-medium text-sm leading-[18px] w-[302px]">
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
        <button className="bg-[#BE123C] w-max flex items-center font-bold text-sm py-[6px] px-4 rounded-[6px] gap-2">
          <PlayIcon />
          <p>Watch trailer</p>
        </button>
      </div>
      <ul className="absolute font-bold text-xs flex flex-col gap-2 text-[#9CA3AF] items-center top-[35%] right-[2.5%]">
        <li>1</li>
        <li>2</li>
        <li className="text-white text-base before:w-5 before:bg-white before:absolute relative before:h-[3px] before:top-2.5 before:right-5 before:rounded-[6px]">
          3
        </li>
        <li>4</li>
        <li>5</li>
      </ul>
    </section>
  );
};

export default HeroSection;
