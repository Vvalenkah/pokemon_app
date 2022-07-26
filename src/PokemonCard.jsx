import React from 'react';
import './pokemon-card.scss';
import axios from 'axios';

function PokemonCard({pokemon, url}) {
    return <div className='pokemon-card' onClick={() => {getPoke(pokemon)}}>
        <img src={url} alt="pokemon"/>
        <h3>{pokemon[0].toUpperCase() + pokemon.slice(1)}</h3>
    </div>
}


const getPoke = async(name) => {
        let adress = 'https://pokeapi.co/api/v2/pokemon/' + name;
        const allData = await axios.get(adress);
        const pokeData = allData.data;
        console.log(pokeData)
        return (
            <div className='ABC'>
                <h3>{pokeData.name}</h3>
                <img src={pokeData.sprites.other['official-artwork'].front_default} alt={name}></img>
                <div className="stats">
                    <p>HP: {pokeData.stats[0].base_stat}</p>
                    <p>Attack: {pokeData.stats[1].base_stat}</p>
                    <p>Defence: {pokeData.stats[2].base_stat}</p>
                    <p>Special-attack: {pokeData.stats[3].base_stat}</p>
                    <p>Special-defense: {pokeData.stats[4].base_stat}</p>
                    <p>Speed: {pokeData.stats[5].base_stat}</p>
                </div>
            </div>
        )
            }


export default PokemonCard;