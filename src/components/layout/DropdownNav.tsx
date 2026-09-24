import NavLinks from "./NavLinks";

const DropdownNav = () => {
    return (
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            aria-label="Menu"
            xmlns="http://w3.org"
            className="h-5 w-5 fill-none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={-1}
          className="menu menu-sm dropdown-content bg-zinc-900 text-white rounded-box z-1 mt-3 w-52 p-2 shadow border border-zinc-800"
        >
          <NavLinks defaultClasses="btn btn-sm justify-start rounded-md" />
        </ul>
      </div>
    );
};

export default DropdownNav;