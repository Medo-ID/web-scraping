import Image from "next/image";
import Link from "next/link";

const navIcon = [
  { src: "/assets/icons/search.svg", alt: "search" },
  { src: "/assets/icons/black-heart.svg", alt: "heart" },
  { src: "/assets/icons/user.svg", alt: "profile" },
];

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/main_logo.png"
            alt="website logo"
            width={27}
            height={27}
          />
          <p className="nav-logo">
            Price<span className="text-primary">Tracker</span>
          </p>
        </Link>
        <div className="flex items-center gap-5">
          {navIcon.map((icon) => (
            <Image
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              className="object-contain cursor-pointer"
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
