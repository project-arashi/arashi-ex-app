import React, { useEffect } from "react";
import Carousel from "react-native-reanimated-carousel";
import { ReleaseProject } from "../../libs/src/entidades/ReleaseProject";
import { MomoNoHanaScansProject } from "../../libs/src/extensions/momo-no-hana-scan";

import Header from "../../components/Header";
import CardDestaques from "../../components/CardDestaques";
import { Container, Destaques, Content, Title, Recentes } from "./styled";
import { Dimensions, FlatList, View } from "react-native";
import Loading from "../../components/Loading";
import CardRecentes from "../../components/CardRecentes";
import { heightPercentageToDP } from "../../Utils";

export default function Home() {
  const [destaques, setDestaques] = React.useState<ReleaseProject[]>([]);
  const [lancamentos, setLancamentos] = React.useState<ReleaseProject[]>([]);
  const [isLoading, setLoading] = React.useState(true);
  const [mount, setMount] = React.useState(false);
  useEffect(() => {
    if (mount) return;
    MomoNoHanaScansProject.getHome().then((data) => {
      if (!data) return;
      setDestaques(data.highlights);
      setLancamentos(data.lastestUpdates);
      setLoading(false);
    });
    return () => setMount(true);
  }, []);
  return (
    <Container>
      <Header />
      <Content>
        <Destaques>
          <Title>DESTAQUES</Title>
          <Loading loading={isLoading}>
            <Carousel
              width={Dimensions.get("screen").width - 20}
              height={150}
              data={destaques}
              pagingEnabled={true}
              snapEnabled={true}
              autoPlay
              autoPlayInterval={5000}
              renderItem={({ item }) => <CardDestaques item={item} />}
            />
          </Loading>
        </Destaques>
        <Recentes>
          <Title>LANÇAMENTOS</Title>
          <Loading loading={isLoading}>
            <FlatList
              data={lancamentos}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => <CardRecentes item={item} />}
              style={{
                flex: 1,
                width: "100%",
                height: "100%",
              }}
              columnWrapperStyle={{
                justifyContent: "space-between",
                height: heightPercentageToDP("40"),
              }}
              numColumns={2}
            />
          </Loading>
        </Recentes>
      </Content>
    </Container>
  );
}
