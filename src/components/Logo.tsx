import TvIcon from '../assets/icons/tvIcon';

const Logo = () => {
  return (
    <div className="text-white flex items-center gap-6">
      <TvIcon />
      <p className="text-2xl font-bold">MovieBox</p>
    </div>
  );
};

export default Logo;
