import { useContext } from "react";
import { Container, Logo, Button, LinkPage } from './headerStyle';import { useLocation, useNavigate } from "react-router-dom";
import { goToHome, goToPokedex } from "../../routes/cordinator";
import { PokemonContext } from "../../contexts/PokemonContext";
import logo from "../../assets/logo.png";
import arrowL from "../../assets/arrowL.png";
import arrowR from "../../assets/arrowR'.png";
import { useMediaQuery } from '@chakra-ui/react'

const Header = ({id}) => {
    const {addToPokedex, removeFromPokedex, pokedex} = useContext(PokemonContext);
    const [mobile] = useMediaQuery('(max-width: 767px)');
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <>
        {location.pathname === '/pokedex' &&
        <Container>
            <div>
                <div>
                    {mobile ? null : <img className="icon" src={icone} alt=''/>}
                </div>
                <div>
                    {mobile ? <LinkPage onClick={()=> goToHome(navigate)}><img className="icon" src={icone} alt=""/></LinkPage> : <LinkPage onClick={()=> goToHome(navigate)}>Todos os Pokémons</LinkPage>}
                </div>
                <Logo src={logo} />
            </div>
        </Container>
        }
        </>
    )
}