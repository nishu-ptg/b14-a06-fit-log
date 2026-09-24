import Image from "next/image";
import Link from "next/link";

const LogoLink = () => {
  return (
    <Link href="/" className="btn btn-ghost text-lg tracking-wider h-8 lg:h-16">
      <Image
        src="/logo.png"
        alt="Logo"
        className="w-5 lg:w-7 h-auto"
        width={28}
        height={28}
      />
      <span className="font-oswald text-white m-1">FITLOG</span>
    </Link>
  );
};

export default LogoLink;
