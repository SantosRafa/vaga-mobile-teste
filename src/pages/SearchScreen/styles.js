import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    
`;


export const SearchBar = styled.TextInput`
    
    width: 85%;
    height: 48px;
`; 

export const Header = styled.View`
    flex-direction: row;
    width: 100%;
    background-color: green;
   
`;

export const PokeContainer = styled.View``;

export const PokeList = styled.FlatList``;

export const SearchButton = styled.TouchableOpacity`
    background-color: blue;
    width:20%;
`;