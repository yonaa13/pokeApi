import axios from "axios";

interface Props {
  name: string;
  url: string;
}
const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});
export default pokeApi;
