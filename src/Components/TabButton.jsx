import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const TabButton = ({ option1, option2, select, Onswitch }) => {
  const [selectMode, setSelectMode] = useState(select);
  return (
    <View
      style={{
        height: 50,
        width: "100%",
        backgroundColor: "#e4e4e4",
        borderColor: "#AD40AF",
        flexDirection: "row",
        borderRadius: 10,
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          setSelectMode(1);
          Onswitch(1)
        }}
        style={{
          flex: 1,
          backgroundColor: selectMode == 1 ? "#AD40AF" : "#e4e4e4",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{ fontSize: 14, color: selectMode == 1 ? "white" : "#AD40AF" }}
        >
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          setSelectMode(0);
          Onswitch(0)
        }}
        style={{
          flex: 1,
          backgroundColor: selectMode == 0 ? "#AD40AF" : "#e4e4e4",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{ fontSize: 14, color: selectMode == 0 ? "white" : "#AD40AF" }}
        >
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabButton;

const styles = StyleSheet.create({});
