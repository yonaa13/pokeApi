'use client'
import { useEffect, useState } from "react";
import { getPokemon } from "../home/aplication/getData";
import { PokeData } from "@/home/domain/interface";

export const cardDetail = async ({
  params: { id },
}: {
  params: { id: number };
}) => {
  const [data, setData] = useState<PokeData>();
  useEffect(() => {
    (async () => {
      setData(await getPokemon(id)); 
    })();
  },[]);
  console.log(data);
  return (
    <div>
      <p>{data?.height}</p>
    </div>
  );
};
