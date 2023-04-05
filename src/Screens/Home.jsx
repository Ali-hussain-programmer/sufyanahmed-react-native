import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";

import { EvilIcons } from "@expo/vector-icons";
import Slider from "../Components/Slider";
import TabButton from "../Components/TabButton";
import List from "../Components/List";
const paidGames = [
  {
    poster: require("../../assets/1.webp"),
    title: "Spider-Man",
    subtitle: "Marvel",
    isFree: "No",
    price: "$25.99",
    id: "1",
  },
  {
    poster: require("../../assets/1.webp"),
    title: "Battlefield 2042",
    subtitle: "EA",
    isFree: "No",
    price: "$19.99",
    id: "2",
  },
  {
    poster: require("../../assets/9.webp"),
    title: "Spider-Man: Miles Morales",
    subtitle: "Marvel",
    isFree: "No",
    price: "$29.99",
    id: "3",
  },
  {
    poster: require("../../assets/2.jpeg"),
    title: "Halo Infinite",
    subtitle: "Xbox Game",
    isFree: "No",
    price: "$24.99",
    id: "4",
  },
  {
    poster: require("../../assets/3.webp"),
    title: "Far Cry 6",
    subtitle: "Ubisoft",
    isFree: "No",
    price: "$15.99",
    id: "5",
  },
  {
    poster: require("../../assets/8.jpeg"),
    title:"Clash",
    subtitle: "Sony",
    isFree: "No",
    price: "$25.99",
    id: "6",
  },
  {
    poster: require("../../assets/2.jpeg"),
    title: "Halo Infinite",
    subtitle: "Xbox Game",
    isFree: "No",
    price: "$24.99",
    id: "7",
  },
  {
    poster: require("../../assets/3.webp"),
    title: "Far Cry 6",
    subtitle: "Ubisoft",
    isFree: "No",
    price: "$15.99",
    id: "8",
  },
  {
    poster: require("../../assets/4.jpeg"),
    title: " Warariors: Ragnarok",
    subtitle: "Sony",
    isFree: "No",
    price: "$25.99",
    id: "9",
  },
];

const freeGames = [
  {
    poster: require("../../assets/8.jpeg"),
    title: "Altos Odyssey",
    subtitle: "Noodlecake Studios",
    isFree: "Yes",
    id: "1",
  },
  {
    poster: require("../../assets/6.jpeg"),
    title: "Asphalt 9",
    subtitle: "Gameloft",
    isFree: "Yes",
    id: "2",
  },
  {
    poster: require("../../assets/7.webp"),
    title: "Genshin Impact",
    subtitle: "miHoYo",
    isFree: "Yes",
    id: "3",
  },
  {
    poster: require("../../assets/8.jpeg"),
    title: "Fortnite",
    subtitle: "Epic Games",
    isFree: "Yes",
    id: "4",
  },
  {
    poster: require("../../assets/9.webp"),
    title: "Pokémon Unite",
    subtitle: "The Pokémon Company",
    isFree: "Yes",
    id: "5",
  },
  {
    poster: require("../../assets/10.jpeg"),
    title: "Diablo 4",
    subtitle: "Blizzard Entertainment",
    isFree: "Yes",
    id: "6",
  },
  {
    poster: require("../../assets/8.jpeg"),
    title: " Warariors: Ragnarok",
    subtitle: "Sony",
    isFree: "Yes",
    id: "7",
  },
  {
    poster: require("../../assets/game2.jpeg"),
    title: "Asphalt 9",
    subtitle: "Gameloft",
    isFree: "Yes",
    id: "8",
  },
  {
    poster: require("../../assets/game1.jpeg"),
    title: "Halo Infinite",
    subtitle: "Xbox Game",
    isFree: "Yes",
    id: "9",
  },
];
const data = [
  {
    id: 1,
    image: require("../../assets/game1.jpeg"),
  },
  {
    id: 2,
    image: require("../../assets/game2.jpeg"),
  },
  {
    id: 3,
    image: require("../../assets/game3.png"),
  },
];

const Home = ({navigation}) => {
  const [selectMode, setSelectMode] = useState(1);
  const onSwitch = (value) => {
    setSelectMode(value);
  };
 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ padding: 20 }}>
        <View style={styles.profile}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Hello John Doe
          </Text>
          <ImageBackground
            source={require("../../assets/profile.jpg")}
            imageStyle={{ borderRadius: 25 }}
            style={{ height: 35, width: 35 }}
          />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#C6C6C6",
            flexDirection: "row",
            borderRadius: 8,
            alignItems: "center",
            marginTop: 40,
            marginBottom: 10,
            padding: 10,
          }}
        >
          <EvilIcons name="search" size={20} color="#C6C6C6" />
          <TextInput
            placeholder="Search"
            style={{ flex: 1, paddingHorizontal: 5 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            Upcoming Games
          </Text>
          <TouchableOpacity>
            <Text style={{ color: "#0aada8" }}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginVertical: 20 }}>
          <TabButton
            option1={"Play Game"}
            option2={"Paid Game"}
            select={1}
            Onswitch={onSwitch}
          />
        </View>

        {selectMode == 1 &&
          freeGames.map((f) => {
            return (
              <List
                key={f.id}
                poster={f.poster}
                subtitle={f.subtitle}
                title={f.title}
                isFree={f.isFree}
                onPress={()=>{navigation.navigate("Game",{title:f.title})}}
              />
            );
          })}
        {selectMode == 0 &&
          paidGames.map((f) => {
            return (
              <List
                key={f.id}
                poster={f.poster}
                subtitle={f.subtitle}
                title={f.title}
                isFree={f.isFree}
                price={f.price}
                onPress={()=>{navigation.navigate("Game")}}
              />
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profile: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
