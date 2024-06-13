import { useContext } from "react";
import { Container, Logo, Button, LinkPage } from "./headerStyle";
import { useLocation, useNavigate } from "react-router-dom";
import { goToHomePage, goToPokedex } from "../../routes/coordinator";
import { PokeContext } from "../../contexts/PokeContext";
import logo from "../../assets/misc/logo.png";
import arrowL from "../../assets/misc/arrowL.png";
import arrowR from "../../assets/misc/arrowR.png";
import { useMediaQuery } from "@chakra-ui/react";

const Header = ({ id }) => {
  const { addToPokedex, removeFromPokedex, pokedex } =
    useContext(PokeContext);
  const [mobile] = useMediaQuery("(max-width: 767px)");
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {location.pathname === "/pokedex" && (
        <Container>
          <div>
            <div>
              {mobile ? null : <img className="icon" src={arrowL} alt="" />}
            </div>
            <div>
              {mobile ? (
                <LinkPage onClick={() => goToHomePage(navigate)}>
                  <img className="icon" src={arrowL} alt="" />
                </LinkPage>
              ) : (
                <LinkPage onClick={() => goToHomePage(navigate)}>
                  All Pokémons
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
              <img className="icon" src={arrowR} alt="" />
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
                {mobile ? null : <img className="icon" src={arrowL} alt="" />}
              </div>
              <div>
                {mobile ? (
                  <LinkPage onClick={() => goToHomePage(navigate)}>
                    <img className="icon" src={arrowL} alt="" />
                  </LinkPage>
                ) : (
                  <LinkPage onClick={() => goToHomePage(navigate)}>
                    All Pokémons
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
                  Remove from Pokédex
                </Button>
              )
            ) : mobile ? (
              <Button onClick={() => addToPokedex(id)} className="blue">
                +
              </Button>
            ) : (
              <Button onClick={() => addToPokedex(id)} className="blue">
                Add to Pokédex
              </Button>
            )}
          </Container>
        )
      )}
    </>
  );
};
export default Header