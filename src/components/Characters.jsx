export default function Characters(props) {
    
    const { characters, setCharacters} = props

    const resetCharacters = () => {
        setCharacters(null)
    }

    return  (
        <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home" onClick={resetCharacters}>
                Volver a la Home
            </span>
            <div className="container-characters">
                {characters.map((character, index) => (
                    <div className="character-container" key={index}>
                        <div className="image-container">
                        <img src={character.image} alt={character.name} className="character-image"/>
                        </div>
                        <div className="character-details">
                            <h3>{character.name}</h3>
                            <h6>
                                {character.status === "Alive" ? (
                                    <>
                                        <span className="alive" />
                                        Alive
                                    </>
                                ): (
                                    <>
                                        <span className="dead" />
                                        Dead
                                    </>
                                )}
                            </h6>
                            <p>
                                <span className="text-grey">Episodios: </span>
                                <span>{character.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey">Especie: </span>
                                <span>{character.species}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <span className="back-home" onClick={resetCharacters}>Volver a la Home</span>
        </div>
    )
}