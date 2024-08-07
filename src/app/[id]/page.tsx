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
      <h1 className="text-xl pt-2  ">{data?.name.toLocaleUpperCase()}</h1>
      <div className="flex items-center w-full justify-between max-lg:flex-col">
        <img
          src={data?.sprites.other?.showdown.front_default}
          alt=""
          className="w-72"
        />
        <div className="w-full p-2 border-t flex justify-around ">
          <div className="">
            <p>
              {data?.stats[0].stat.name.toLocaleUpperCase()}:{" "}
              <span>{data?.stats[0].base_stat} </span>
            </p>
            <p>
              Mov1:<span> {data?.moves[0].move.name.toLocaleUpperCase()}</span>{" "}
              Mov:
            </p>
            <p>
              Mov2:<span> {data?.moves[1].move.name.toLocaleUpperCase()}</span>{" "}
            </p>
            <p>
              Mov3:<span> {data?.moves[2].move.name.toLocaleUpperCase()}</span>{" "}
            </p>
          </div>
          <div>
            <p>
              {data?.stats[0].stat.name.toLocaleUpperCase()}:{" "}
              <span>{data?.stats[0].base_stat} </span>
            </p>
            <p>
              Mov1:<span> {data?.moves[0].move.name.toLocaleUpperCase()}</span>{" "}
              Mov:
            </p>
            <p>
              Mov2:<span> {data?.moves[1].move.name.toLocaleUpperCase()}</span>{" "}
            </p>
            <p>
              Mov3:<span> {data?.moves[2].move.name.toLocaleUpperCase()}</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
