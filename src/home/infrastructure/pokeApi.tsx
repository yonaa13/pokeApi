
interface Props {
  name: string;
  url: string;
}
export const pokeApi = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon";
  const respons = await fetch(url,{method:'GET'})


  return respons.json();
};
