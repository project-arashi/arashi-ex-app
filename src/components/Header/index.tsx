import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "styled-components/native";
import { ProfileScan } from "../../libs/src/extensions/momo-no-hana-scan/";
import { Body, ContainerLeft, ContainerRight, Image } from "./styled";
import { easeGradient } from "react-native-easing-gradient";
import { MaterialIcons } from "@expo/vector-icons";

const { colors, locations } = easeGradient({
  colorStops: {
    0: {
      color: "rgba(5, 0, 47, 0)",
    },
    1: {
      color: "#A29AE7",
    },
  },
});

export default function Header() {
  const { primaryColor, backgroundColor } = useTheme();
  //console.log(primaryColor)
  return (
    <View
      style={{
        height: "12%",
        width: "100%",
        backgroundColor: backgroundColor,
      }}
    >
      <LinearGradient
        style={{
          flex: 1,
        }}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        colors={colors}
        locations={locations}
      >
        <Body>
          <ContainerLeft>
            <Image
              source={{ uri: ProfileScan.logo_uri }}
              resizeMode={"contain"}
            />
          </ContainerLeft>
          <ContainerRight>
            <MaterialIcons name="menu" size={24} color="white" />
          </ContainerRight>
        </Body>
      </LinearGradient>
    </View>
  );
}
/*
linear-gradient(180deg, 
    #A29AE7 0%, 
    rgba(84, 78, 140, 0.505208)
     49.48%, 
     rgba(5, 0, 47, 0) 
     100%);*/

/**position: absolute;
width: 414px;
height: 100px;
left: 0px;
top: 0px; */
