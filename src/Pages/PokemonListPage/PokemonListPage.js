import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { useContext } from "react";
import { Container, Main } from "../PokemonListPage/pokemonListPageStyle";
import { PokeContext } from "../../contexts/PokeContext";
import modalcapturar from "../../assets/misc/modalcapturar.png";
import Header from "../../Components/Header/Header";
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";

const PokemonListPage = () => {
  const { pokemon, addToPokedex, removeFromPokedex, closeModal, isOpen } =
    useContext(PokeContext);

  return (
    <>
      <Header />

      <Main>All Pokémons</Main>
      <Container>
        {pokemon.map((item) => {
          const types = item.data.types.map((types) => types.type.name);

          return (
            <PokemonCard
              pokemon={item}
              image={item.data.sprites.other["official-artwork"].front_default}
              name={item.data.name}
              id={item.data.id}
              key={item.data.id}
              type={types}
              addToPokedex={addToPokedex}
              removeFromPokedex={removeFromPokedex}
            />
          );
        })}
      </Container>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent top={"35%"}>
          <img src={modalcapturar} alt="" />
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
};

export default PokemonListPage;
