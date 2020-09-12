import React, { useEffect, useState } from 'react';
import { View, Text,Image } from 'react-native';

import api from '../../services/api';

import {
    Container,
    SearchBar,
    Header,
    PokeContainer,
    PokeList,
    SearchButton
} from './styles';

export default function SearchScreen() {
    const [ pokemons, setPokemons ] = useState([]);
    const [ pokemonName, setPokemonName ] = useState();
    const [ searchResult, setSearchResult ] = useState([]);
    useEffect(()=>{
        api.get('pokemon').then(response =>{
            console.log(response.data.results);
            setPokemons(response.data.url);
        })
    },[]);
    
    return (
        <Container>
            <Header>
                <SearchBar
                placeholder="Digite o nome do Pokemon"
                value={pokemonName} 
                onChangeText={setPokemonName}
                />
                <SearchButton onPress={()=>{
                    try{
                        api.get(`pokemon/${pokemonName}`).then(response => {
                            setSearchResult(response.data.results);
                            console.log(response.data);

                       });
                       setPokemonName('');
                    }catch (err){
                        console.log(err);
                    }
                    
                    
                }}/>
            </Header>

            <PokeContainer>
               <PokeList 
               data={searchResult ? searchResult : pokemons}
               keyExtractor={item => item.name}
               renderItem={ ({ item }) =>(
                   <Text> {item.name} </Text>
               )}
               />
            </PokeContainer>
        </Container>
    );
}