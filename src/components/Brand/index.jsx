import Image from "next/image";

import logo from "./logo.svg";

export const Brand = () => {
  return (
    <a href="/">
      <Image src={logo} alt="Code Connect" />
    </a>
  );
};
