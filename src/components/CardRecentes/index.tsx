import { ReleaseProject } from "../../libs/src/entidades/ReleaseProject";
import {
  Chapter,
  Container,
  CoverBackground,
  Footer,
  LastChapterCircle,
  Title,
} from "./styled";

interface Props {
  item: ReleaseProject;
}

export default function CardRecentes(props: Props) {
  const { item } = props;
  const chapterNumber = item.lastChapter.toString().match(/\d.*/);
  return (
    <Container>
      <CoverBackground
        source={{ uri: item.cover_uri }}
        resizeMethod={"resize"}
        resizeMode={"cover"}
      >
        <LastChapterCircle>
          <Chapter>{chapterNumber ? chapterNumber : NaN}</Chapter>
        </LastChapterCircle>
      </CoverBackground>
      <Footer>
        <Title>{item.title}</Title>
      </Footer>
    </Container>
  );
}
