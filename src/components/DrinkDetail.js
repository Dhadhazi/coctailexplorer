import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DrinkDetail() {
  const { id } = useParams();

  const [drink, setDrink] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        setDrink(result.data.drinks[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="card mb-3">
      <img src={drink.strDrinkThumb} class="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{drink.strDrink} </h5>
        <p className="card-text">{drink.strInstructions}</p>
      </div>
    </div>
  );
}
