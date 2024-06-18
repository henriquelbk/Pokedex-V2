import { useContext, useEffect } from "react";
import { Button, Title, Container1, Container2 } from "./pokedexPageStyle";
import { PokeContext } from "../../contexts/PokeContext";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";
import Header from "../../Components/Header/Header";
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import modalremover from "../../assets/misc/modalremover.png";

const PokedexPage = () => {
  const {
    pokedex,
    getPokemons,
    addToPokedex,
    removeFromPokedex,
    closeModal,
    isOpen,
    getItemsLocalStorage,
  } = useContext(PokeContext);

  const navigate = useNavigate();

  useEffect(() => {
    getItemsLocalStorage();
  }, []);


return (
    <Container1>
      <Header />
        <Title>My Pokémons</Title>
        <Container2>
          {pokedex.length === 0 ? (
            <div>
              <h2>Your Pokédex is emptyj. </h2>
              <Button onClick={()=> goToHomePage(navigate)}>Capturar Pokemons!</Button>
            </div>
          ) : (
            pokedex.map((item) => {
              const types = item.data.types.map((types) => types.type.name);
              return (
                <PokemonCard
                  getPokemons={getPokemons}
                  pokemon={item}
                  image={
                    item.data.sprites.other["official-artwork"].front_default
                  }
                  name={item.data.name}
                  id={item.data.id}
                  key={item.data.id}
                  type={types}
                  addToPokedex={addToPokedex}
                  removeFromPokedex={removeFromPokedex}
                />
              );
            })
          )}
          <Modal isOpen={isOpen} onClose={closeModal}>
            <ModalOverlay />
            <ModalContent top={'35%'}>
              <img src={modalremover} alt="" />
              <ModalCloseButton />
            </ModalContent>
          </Modal>
        </Container2>
    </Container1>
  );
};
export default PokedexPage;
