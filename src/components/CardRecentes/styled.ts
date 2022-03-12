import styled from "styled-components/native";
import { Dimensions, PixelRatio } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "../../Utils";
export const Container = styled.TouchableOpacity`
  width: ${(props) => widthPercentageToDP("45")}px;
`;

export const CoverBackground = styled.ImageBackground`
  flex: 1;
  align-items: flex-end;
  height: 60%;
  border-radius: 7px;
  overflow: hidden;
`;

export const Footer = styled.View`
  flex: 1;
  max-height: 20%;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.textColor};
  align-items: center;
`;

export const LastChapterCircle = styled.View`
  background-color: ${(props) => props.theme.primaryColor};
  padding: 5px;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Chapter = styled.Text`
  color: ${(props) => props.theme.textColor};
  text-align: center;
  align-items: center;
  justify-content: center;
`;
