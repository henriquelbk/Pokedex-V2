import { useContext } from "react";
import { Container, Logo, Button, LinkPage } from "./headerStyle";
import { useLocation, useNavigate } from "react-router-dom";
import { goToHome, goToPokedex } from "../../routes/coordinator";
import { PokemonContext } from "../../contexts/PokemonContext";
import logo from "../../assets/logo.png";
import arrowL from "../../assets/arrowL.png";
import arrowR from "../../assets/arrowR'.png";
import { useMediaQuery } from "@chakra-ui/react";

const Header = ({ id }) => {
  const { addToPokedex, removeFromPokedex, pokedex } =
    useContext(PokemonContext);
  const [mobile] = useMediaQuery("(max-width: 767px)");
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {location.pathname === "/pokedex" && (
        <Container>
          <div>
            <div>
              {mobile ? null : <img className="icon" src={icone} alt="" />}
            </div>
            <div>
              {mobile ? (
                <LinkPage onClick={() => goToHome(navigate)}>
                  <img className="icon" src={icone} alt="" />
                </LinkPage>
              ) : (
                <LinkPage onClick={() => goToHome(navigate)}>
                  Todos os Pokémons
                </LinkPage>
              )}
            </div>
            <Logo src={logo} />
          </div>
        </Container>
      )}
      {location.pathname === "/" ? (
        <Container>
          <Logo src={logo} />
          {mobile ? (
            <LinkPage onClick={() => goToPokedex(navigate)}>
              <img className="icon" src={icone2} alt="" />
            </LinkPage>
          ) : (
            <Button className="blue" onClick={() => goToPokedex(navigate)}>
              Pokédex
            </Button>
          )}
        </Container>
      ) : (
        location.pathname.includes("/pokemondetails") && (
          <Container>
            <div>
              <div>
                {mobile ? null : <img className="icon" src={icone} alt="" />}
              </div>
              <div>
                {mobile ? (
                  <LinkPage onClick={() => goToHome(navigate)}>
                    <img className="icon" src={icone} alt="" />
                  </LinkPage>
                ) : (
                  <LinkPage onClick={() => goToHome(navigate)}>
                    Todos os Pokémons
                  </LinkPage>
                )}
              </div>
            </div>
            <Logo src={logo} />
            {pokedex.some((item) => item.data.id === id) ? (
              mobile ? (
                <Button onClick={() => removeFromPokedex(id)} className="red">
                  {" "}
                  X{" "}
                </Button>
              ) : (
                <Button onClick={() => removeFromPokedex(id)} className="red">
                  Excluir da Pokédex
                </Button>
              )
            ) : mobile ? (
              <Button onClick={() => addToPokedex(id)} className="blue">
                +
              </Button>
            ) : (
              <Button onClick={() => addToPokedex(id)} className="blue">
                Adicionar a Pokédex
              </Button>
            )}
          </Container>
        )
      )}
    </>
  );
};
