import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const Content = styled.View`
  flex: 1;
  margin-left:10px;
  margin-right:10px;
`;

export const Title = styled.Text`
    color: ${(props) => props.theme.textColor};
    font-size:20px;
`;


export const Destaques = styled.View`

`

export const Recentes = styled.View`
    flex:1;
    margin-top:5%;
`