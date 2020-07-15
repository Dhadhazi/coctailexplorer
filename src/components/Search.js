import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import DrinkCard from "./DrinkCard";

export default function Search() {
  const [drinks, setDrinks] = useState([]);
  const { name } = useParams();
  console.log(name);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
        );
        setDrinks(result.data.drinks);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3">
        {drinks
          ? drinks.map((drink) => (
              <DrinkCard
                name={drink.strDrink}
                img={drink.strDrinkThumb}
                id={drink.idDrink}
                key={drink.idDrink}
              />
            ))
          : "Error happens"}
      </div>
    </div>
  );
}
