"use client";
import { useEffect, useState } from "react";
import { getPokemon } from "../home/aplication/getData";
import { PokeData } from "../home/domain/interface";

export default function cardDetail({
  params: { id },
}: {
  params: { id: number };
}) {
  const [data, setData] = useState<PokeData>();
  useEffect(() => {
    (async () => {
      setData(await getPokemon(id));
    })();
  }, []);
  console.log(data);
  return (
    <div className=" font-mono w-[80%]  mx-auto h-full  mt-52 flex justify-between flex-col items-center  border rounded-xl bg-black text-white">
      <h1 className=" w-full text-xl ml-36 ">{data?.name}</h1>
      <div className="flex items-center w-full justify-between max-lg:flex-col">
        <img src={data?.sprites.front_shiny} alt="" className="w-72 border" />
        <div>
          <p>
          {data?.stats[0].stat.name.toLocaleUpperCase()}: <span>{data?.stats[0].base_stat} </span>
          </p>
          <p>
            Mov:<span> {data?.moves[0].move.name}</span>{" "}
          </p>
        </div>
        <img src={data?.sprites.back_shiny} alt="" className="w-72" />
      </div>
    </div>
  );
}
