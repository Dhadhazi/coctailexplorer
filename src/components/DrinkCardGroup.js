import React, { useEffect, useState } from "react";
import axios from "axios";

import DrinkCard from "./DrinkCard";

let allTheDrinks;

export default function DrinkCardGroup() {
  const [drinks, setDrinks] = useState([]);
  const [filter, setFilter] = useState("");

  //Slicing off category from the link, because silly category names
  let strCat = window.location.pathname;
  strCat = strCat.slice(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${strCat}`
        );
        allTheDrinks = result.data.drinks;
        setDrinks(allTheDrinks);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleValueChange = (e) => {
    setFilter(e.target.value);
    if (e.target.value.length > 0) {
      setDrinks(
        allTheDrinks.filter((drink) =>
          drink.strDrink.toLowerCase().includes(filter.toLowerCase())
        )
      );
    } else {
      setDrinks(allTheDrinks);
    }
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={handleValueChange}
            placeholder="Filter the coctails"
          />
        </div>
      </form>
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
