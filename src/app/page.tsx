import pokeApi from "@/home/infrastructure/pokeApi";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

export default async function Home() {
  const {data} = await pokeApi.get("/pokemon?limit=151");
  console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>
        {data.results.map((item: { name:string }) => <p>{item.name}</p>)}
      </p>
    </main>
  );
}
