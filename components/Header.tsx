import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center flex-col items-left w-full mb-6 py-4 max-h-[62px]">
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
