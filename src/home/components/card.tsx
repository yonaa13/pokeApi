import React, { FC } from "react";
import { PropCard } from "../domain/interface";
export const Card: FC<PropCard> = ({ name, img }) => {
  return (
    <div className=" w-80 flex flex-col p-4 border rounded-lg bg-black items-center ">
      <img src={img} alt={name} className=" w-36"/>
      <span className=" text-slate-500  ">{name}</span>
    </div>
  );
};
