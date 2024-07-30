export async function getData() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=51`);
  const res = await response.json();
  const { results } = res;
  let data: any = [];
  results.map(async (ele: any) => {
    const respon = await fetch(ele.url);
    data.push(await respon.json());
  });
  return data;
}

export async function getPokemon(id: number) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const res = await response.json();

  return res;
}
