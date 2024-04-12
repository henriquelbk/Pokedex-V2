import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailsPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import PokemonListPage from "../Pages/PokemonListPage/PokemonListPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Footer from "../Components/Footer/Footer";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokemonListPage />} />
          <Route path="/pokedex" element={<PokedexPage />} />
          <Route path='/pokemondetails/:id' element={<PokemonDetailsPage/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default Router;
