"use client";
import { useEffect, useState } from "react";
import { getData } from "../aplication/getData";
import { Sprites } from "../domain/interface";
import { Card } from "../components/card";
import Link from "next/link";
export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      setData(await getData()); 
    })();
    
  },[]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-1 gap-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map(
          (item: { name: string; sprites: Sprites; front_default: string }) => (
            <div key={item.name}>
              <Card img={item.sprites.front_default} name={item.name} />
            </div>

          )
        )}
      </div>
    </main>
  );
}
