import { StyleSheet, Text, View, Image, TouchableOpacity ,Alert} from "react-native";
import React from "react";

const List = ({ poster, subtitle, title, isFree, price ,onPress}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        alignItems: "center",
        flex: 1,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={poster}
          style={{ height: 55, width: 55, borderRadius: 10, marginRight: 10 }}
        />
        <View>
          <Text style={{ color: "#333", fontSize: 14 }}>{title}</Text>
          <Text
            style={{ color: "#333", fontSize: 14, textTransform: "uppercase" }}
          >
            {subtitle}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#0aada8",
          width: 100,
          padding: 10,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={()=>{onPress()}}
      >
        {isFree == "No" && (
          <Text style={{ fontSize: 14, color: "#fff" }}>{price}</Text>
        ) 
        }
        {isFree == "Yes" && (
          <Text style={{ fontSize: 14, color: "#fff" }}>Play</Text>
        ) 
        }
      </TouchableOpacity>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({});
