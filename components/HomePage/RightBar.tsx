import Link from "next/link";
import Search from "../Search";
import Recommendations from "../Recommendations";
import PopularTags from "../PopularTags";

const RightBar = () => {
  return (
    <div className="flex flex-col gap-4 pt-4 sticky top-0 h-max">
      <Search />
      <PopularTags />
      <Recommendations />
      <div className="text-textGray text-sm flex gap-x-4 flex-wrap">
        <Link className="hover:underline" href="/">Terms of Service</Link>
        <Link className="hover:underline" href="/">Privacy Policy</Link>
        <Link className="hover:underline" href="/">Cookie Policy</Link>
        <Link className="hover:underline" href="/">Accessibility</Link>
        <Link className="hover:underline" href="/">Ads Info</Link>
        <span>© 2025 L Corp.</span>
      </div>
    </div>
  );
};

export default RightBar;