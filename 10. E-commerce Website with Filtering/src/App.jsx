import { useState } from "react";

import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./style.css";

//Database
import products from "./db/data";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  //input filter
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //Radio Filter
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  //Button Filter
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    //Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    //Selected Fliter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }
  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
};

export default App;
