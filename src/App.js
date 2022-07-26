import MyName from "./Myname";
import axios  from 'axios';
import React from "react";
import PokemonCard from "./PokemonCard";

class App extends React.Component {
    state = {
        url: '',
        pokemon: [],
    };

    getPoks = async () => {
        const {data: {
            results
        }} = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=24');
        console.log(results);
        this.setState({pokemon: results})
    }

    componentDidMount() {
        this.getPoks();
    }

    render() {
        const {pokemon} = this.state;
    return (<div>
    <MyName />
    <div className="poke-container">
        {pokemon.map((poke) => {
        // console.log(poke.url.sprites);
        let url2 = poke.url.slice(34);
        let url3 = url2.substring(0, url2.length - 1);
        let urlfinal = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + url3 +  '.png';
        // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/' + url3 +  '.png'
        // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/' + url3 +  '.svg'
        // console.log(urlplus)
        // urlp = 
        return <PokemonCard pokemon={poke.name} url={urlfinal}/>
    })}</div>
    </div>)
}

}

export default App;
