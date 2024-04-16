export const goToPokedex = (navigate) => {
    navigate('/pokedex')
}

export const goToHomePage = (navigate) => {
    navigate('/')
}

export const goToDetailsPage = (navigate, id) => {
    navigate(`/pokemondetails/${id}`)
}