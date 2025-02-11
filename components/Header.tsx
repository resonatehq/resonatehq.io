import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <a href="/">
        <Image
          src="/images/echo-logo.svg"
          alt="ResonateHQ Logo"
          width="40"
          height="40"
        />
      </a>
    </div>
  );
};

export default Header;
