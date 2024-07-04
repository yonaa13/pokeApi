
import { pokeApi } from "@/home/infrastructure/pokeApi";

export default async function Home() {
  const { pokemons } = await pokeApi();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>
        {pokemons.map((item: any) => (
          <p>{item.name}</p>
        ))}
      </p>
    </main>
  );
}
