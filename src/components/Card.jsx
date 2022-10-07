import React from "react";

const Card = ({ props, loading, infoPokemon }) => {
  return (
    <>
      {loading ? (
        <h1 className="font-bold text-3xl text-center">Loading...</h1>
      ) : (
        props.map((item) => {
          return (
            <>
              <div
                className="flex flex-col items-center bg-white rounded-lg shadow-xl cursor-pointer"
                key={item.id}
                onClick={() => infoPokemon(item)}
              >
                <img src={item.sprites.front_default} alt="" />
                <div className="flex flex-col md:flex-row items-center gap-3 uppercase font-semibold text-xl">
                  <h2>#{item.id}</h2>
                  <h2 className="py-5">{item.name}</h2>
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
};

export default Card;
