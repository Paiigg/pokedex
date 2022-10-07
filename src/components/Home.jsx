import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import PokeInfo from "./PokeInfo";

const Home = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [pokeDex, setPokeDex] = useState();

  const getPokemon = async () => {
    setLoading(true);
    const response = await axios.get(url);
    console.log(response);

    setNextUrl(response.data.next);
    setPrevUrl(response.data.previous);
    pokeFun(response.data.results);
    setLoading(false);
  };

  const pokeFun = async (res) => {
    res.map(async (item) => {
      const results = await axios.get(item.url);
      console.log(results);
      setData((state) => {
        state = [...state, results.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  useEffect(() => {
    getPokemon();
  }, [url]);

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold py-5">Pokemon Evolution</h1>
      <div className="grid md:grid-cols-2 gap-10 ">
        <div className="flex flex-col gap-5 items-center">
          <div className="grid grid-cols-3 gap-5">
            <Card
              props={data}
              loading={loading}
              infoPokemon={(poke) => setPokeDex(poke)}
            />
          </div>
          <div className="flex  items-cemter text-white gap-3">
            {prevUrl && (
              <button
                className="bg-sky-500 px-3 py-2 rounded-lg"
                onClick={() => {
                  setData([]);
                  setUrl(prevUrl);
                }}
              >
                Previous
              </button>
            )}

            {nextUrl && (
              <button
                className="bg-sky-500 px-3 py-2 rounded-lg"
                onClick={() => {
                  setData([]);
                  setUrl(nextUrl);
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
        <div className=" flex flex-col">
          <PokeInfo data={pokeDex} />
        </div>
      </div>
    </div>
  );
};

export default Home;
