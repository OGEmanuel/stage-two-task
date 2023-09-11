import { Link } from 'react-router-dom';
import FacebookIcon from '../assets/icons/facebookIcon';
import InstagramIcon from '../assets/icons/instagramIcon';
import TwitterIcon from '../assets/icons/twitterIcon';
import YoutubeIcon from '../assets/icons/youtubeIcon';

const Footer = () => {
  return (
    <footer className="w-[492px] mx-auto flex flex-col gap-9 mb-16 text-lg font-bold">
      <div className="flex items-center gap-12 justify-center">
        <Link to="">
          <FacebookIcon />
        </Link>
        <Link to="">
          <InstagramIcon />
        </Link>
        <Link to="">
          <TwitterIcon />
        </Link>
        <Link to="">
          <YoutubeIcon />
        </Link>
      </div>
      <div className="flex justify-between">
        <Link to="">Conditions of Use</Link>
        <Link to="">Privacy & Policy</Link>
        <Link to="">Press Room</Link>
      </div>
      <p className="text-center text-[#6B7280]">
        © 2021 MovieBox by Adriana Eka Prayudha{' '}
      </p>
    </footer>
  );
};

export default Footer;
