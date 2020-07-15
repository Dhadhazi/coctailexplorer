import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
      );
      result.data.drinks.map((cat) =>
        setCategories((prevCats) => [...prevCats, cat.strCategory])
      );
    };

    fetchData();
  }, []);

  function keyCounter() {
    let counter = 0;
    function incrementCounter() {
      counter++;
    }
    return incrementCounter();
  }
  const keyGenerator = keyCounter();

  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      {categories.map((cat) => (
        <a href={`/category/${cat}`} key={keyGenerator}>
          <button type="button" className="btn btn-secondary">
            {cat}
          </button>
        </a>
      ))}
    </div>
  );
}
