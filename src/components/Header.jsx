import HeaderHeadline from "./HeaderHeadline";
import HeaderLogo from "./HeaderLogo";

const Header = () => {
  return (
    <div className="navparent">
      <HeaderLogo />
      <HeaderHeadline />
    </div>
  );
};

export default Header;
