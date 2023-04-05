import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Slider = ({ image }) => {
  return (
    <View>
      <Image
        source={image}
        style={{ height: 150, width: 300, borderRadius: 10 }}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({});
