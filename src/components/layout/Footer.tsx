import LogoLink from "./LogoLink";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral-900 border-t border-zinc-800 text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <LogoLink />
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <p className="font-inter text-gray-500 text-xs">
          © {new Date().getFullYear()} FitLog — Workout Library. Train hard, log
          honest.
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
