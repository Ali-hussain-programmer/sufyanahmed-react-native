import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const CustomDrawer = (props) => {
  const [Loading, setLoading] = useState(false);
  const clear = async () => {
    setLoading(true)
    await AsyncStorage.clear();
  };
  return (
    <View style={{ flex: 1, position: "relative" }}>
      {Loading ? (
        <ActivityIndicator
          style={{ position: "absolute", top: "50%", left: "50%" }}
        />
      ) :<View style={{flex:1}}>
          <DrawerContentScrollView {...props}>
            <ImageBackground
              style={{ padding: 25 }}
              source={require("../../assets/menu.jpeg")}
            >
              <Image
                source={require("../../assets/profile.jpg")}
                style={{ height: 90, width: 90, borderRadius: 50 }}
              />
              <Text style={{ color: "white", fontSize: 18, marginVertical: 5 }}>
                John Doe
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: "white", fontSize: 15, paddingRight: 5 }}>
                  280 Coins
                </Text>
                <FontAwesome5 name="coins" size={14} color="white" />
              </View>
            </ImageBackground>

            <View style={{ flex: 1, paddingTop: 10, backgroundColor: "#fff" }}>
              <DrawerItemList {...props} />
            </View>
          </DrawerContentScrollView>
          <View
            style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}
          >
            <TouchableOpacity
              onPress={() => {}}
              style={{ flexDirection: "row", marginVertical: 10 }}
            >
              <Ionicons name="share-social-outline" size={24} />
              <Text style={{ fontSize: 15, marginLeft: 5 }}>Tell a Friend</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                clear().then(() => {
                  setLoading(false);
                });
              }}
              style={{ flexDirection: "row", marginVertical: 10 }}
            >
              <Ionicons name="exit-outline" size={24} />
              <Text style={{ fontSize: 15, marginLeft: 5 }}>Sign out</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
