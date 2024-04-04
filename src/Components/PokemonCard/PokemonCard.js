import { useContext } from "react";
import React, { useContext } from "react";
import {
  Card,
  ButtonCapture,
  ContainerButton,
  ContainerId,
  ImgPoke,
  ButtonExclude,
  ButtonDetails,
} from "./pokemonCardStyle";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetails } from "../../routes/cordinator";
import { PokemonContext } from "../../contexts/PokemonContext";

const PokemonCard = ({
  addToPokedex,
  removeFromPokedex,
  image,
  type,
  id,
  name,
}) => {
  const { background, backgroundImg } = useContext(PokemonContext);

  const backgroundColor = background(type[0]);

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Card style={{ backgroundColor }}>
        <ContainerId>
          <div className="flag">
            <h4>{id < 10 ? `#0${id}` : `#${id}`}</h4>
            <h2>{`${name}`.charAt(0).toUpperCase() + `${name}`.slice(1)}</h2>
            <div className="type-container">
              {type.length === 1 ? (
                <img src={backgroundImg(type[0])} alt="imagem" />
              ) : (
                <span>
                  <img src={backgroundImg(type[0])} alt="imagem" />
                  <img src={backgroundImg(type[1])} alt="imagem" />
                </span>
              )}
            </div>
          </div>
          <ImgPoke src={image} alt="imagem" />
        </ContainerId>
        <ContainerButton>
          <div>
            <ButtonDetails onClick={() => goToDetails(navigate, id)}>
              Detalhes
            </ButtonDetails>
          </div>

          {location.pathname === "/" && (
            <div>
              <ButtonCapture onClick={() => addToPokedex(id)}>
                Capturar!
              </ButtonCapture>
            </div>
          )}

          {location.pathname === "/pokedex" && (
            <div>
              <ButtonExclude onClick={() => removeFromPokedex(id)}>
                Excluir
              </ButtonExclude>
            </div>
          )}
        </ContainerButton>
      </Card>
    </>
  );
};

export default PokemonCard;
