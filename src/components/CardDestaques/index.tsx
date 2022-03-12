import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
import { easeGradient } from "react-native-easing-gradient";
import { ReleaseProject } from "../../libs/src/entidades/ReleaseProject";
import {
  BackgroundCover,
  Body,
  Container,
  ContainerCover,
  Cover,
  Infos,
  Label,
  LastChapter,
  Title,
} from "./styled";

interface Props {
  item: ReleaseProject;
}

const { colors, locations } = easeGradient({
  colorStops: {
    0: {
      color: "#000000",
    },
    1: {
      color: "#A29AE7",
    },
  },
});

export default function CardDestaques(props: Props) {
  const { item } = props;
  const cover = item.cover_uri.replace(/\?.*/, "");
  return (
    <Container>
      <BackgroundCover
        source={{
          uri: cover,
        }}
        resizeMode={"cover"}
        style={{
          flex: 1,
        }}
      />
      <LinearGradient
        style={{
          flex: 1,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        colors={["#A29AE7", "rgba(84, 78, 140, 0.505208)"]}
        locations={[0, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Body>
          <ContainerCover>
            <Cover
              source={{ uri: item.cover_uri }}
              resizeMode={"cover"}
              resizeMethod={"scale"}
            />
          </ContainerCover>
          <Infos>
            <Title>{item.title}</Title>
            <LastChapter>
              <Label>{item.lastChapter}</Label>
            </LastChapter>
          </Infos>
        </Body>
      </LinearGradient>
    </Container>
  );
}
{
  /* */
}
