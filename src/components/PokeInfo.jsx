import React from "react";

const PokeInfo = ({ data }) => {
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <h1 className="uppercase text-xl font-bold">{data.name}</h1>
          <img
            className="w-[300px] mx-auto"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt=""
          />
          <div className="grid grid-cols-2 text-left mx-auto py-5 uppercase shadow-2xl p-5 rounded-lg">
            <div className="">
              <p className="text-lg font-bold">ABILITIES: </p>
              {data.abilities.map((poke) => {
                return (
                  <>
                    <div className="group">
                      <h2>{poke.ability.name}</h2>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="base-stat">
              <p className="text-lg font-bold">STAT:</p>
              {data.stats.map((poke) => {
                return (
                  <>
                    <h3>
                      {poke.stat.name}:{poke.base_stat}
                    </h3>
                  </>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PokeInfo;
