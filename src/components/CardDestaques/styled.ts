import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  border-radius: 10px;
  overflow: hidden;
`;
export const BackgroundCover = styled.Image``;

export const Cover = styled.Image`
  flex: 1;
`;

export const Body = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

export const ContainerCover = styled.View`
  flex: 1;
`;

export const Infos = styled.View`
  flex: 2.2;
  padding: 5px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.textColor};
`;

export const LastChapter = styled.View`
  border-color: #3f3f3f;
  border-width: 1px;
  width: 40%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 10px;
`;

export const Label = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
`;
