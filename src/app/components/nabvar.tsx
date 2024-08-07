import Link from "next/link";
import React from "react";

export const Nabvar = () => {
  return (
    <header className=" max-md:bg-[url('/pokemon_banner.jpg')]  md:bg-[url('/home_banner.jpg')] bg-cover bg-center">
      <nav className="flex justify-between items-center p-2">
        <img src="../../pokemon.jpg " alt="" className="w-24" />
        <ul>
          <Link href={"home"}>
            <li className="pr-3">Home</li>
          </Link> 
        </ul>
      </nav>
    </header>
  );
};
