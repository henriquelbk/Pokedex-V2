import { useContext, useEffect } from "react";
import { Button, Title, Container1, Container2 } from "./pokedexPageStylet";
import { PokeContext } from "../../contexts/PokeContext";
import { PokemonCard } from "./PokemonCard";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/cordinator";
import { Header } from "./Header";
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import modalremover from "../../assets/modalremover.png";

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
        <Title>Meus Pokémons</Title>
        <Container2>
          {pokedex.length === 0 ? (
            <div>
              <h2>Você não possui pokémons na sua pokedex. </h2>
              <Button onClick={()=> goToHome(navigate)}>Capturar Pokémons!</Button>
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
