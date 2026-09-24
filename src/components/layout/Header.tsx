import NavLinks from "./NavLinks";
import NavbarEndTabs from "./NavbarEndTabs";
import LogoLink from "./LogoLink";
import DropdownNav from "./DropdownNav";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-lg border-b border-zinc-800 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="navbar">
          <div className="navbar-start">
            <DropdownNav />

            <LogoLink />
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-1 font-inter font-semibold">
              <NavLinks defaultClasses="btn btn-sm btn-ghost h-7 px-4 rounded-full" />
            </ul>
          </div>

          <div className="navbar-end font-inter">
            <NavbarEndTabs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
