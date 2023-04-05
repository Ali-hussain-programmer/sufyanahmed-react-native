import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
  ActivityIndicator,
} from "react-native";
import AnimatedLottieView from "lottie-react-native";
import React from "react";
import SImage from "../../assets/registration.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Twitter from "../../assets/twitter.svg";
import Google from "../../assets/google.svg";
import Facebook from "../../assets/facebook.svg";
import { MaterialIcons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import { useState } from "react";
const Sign = ({ navigation }) => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Loading, setLoading] = useState(false);
  const ApiCall = async () => {
    try {
      const response = await fetch(
        "http://192.168.0.154:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firtstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("ERROR");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 30, position: "relative" }}
    >
    {Loading ?<ActivityIndicator
        size="large"
        style={{ position: "absolute", top: "55%", left: "50%" }}
      /> :null}
      

      <View style={{ alignItems: "center" }}>
        <SImage
          height={300}
          width={300}
          style={{ transform: [{ rotate: "5deg" }] }}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "500",
            color: "#333",
            marginBottom: 30,
          }}
        >
          Registration
        </Text>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
            paddingBottom: 8,
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 25,
          }}
        >
          <Image
            source={require("../../assets/profile.jpg")}
            style={{ height: 30, width: 30, borderRadius: 25, marginRight: 5 }}
          />
          <TextInput
            placeholder="First Name"
            style={{ flex: 1, paddingVertical: 0 }}
            onChangeText={(text) => setfirstname(text)}
          />
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
            paddingBottom: 8,
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 25,
          }}
        >
          <Image
            source={require("../../assets/4.jpeg")}
            style={{ height: 30, width: 30, borderRadius: 25, marginRight: 5 }}
          />
          <TextInput
            placeholder="Last Name"
            style={{ flex: 1, paddingVertical: 0 }}
            onChangeText={(text) => setlastname(text)}
          />
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
            paddingBottom: 8,
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 25,
          }}
        >
          <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Email ID"
            style={{ flex: 1, paddingVertical: 0 }}
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
            paddingBottom: 8,
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 25,
          }}
        >
          <Ionicons
            name="lock-closed-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            style={{ flex: 1, paddingVertical: 0 }}
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={() => {}}>
            <Text style={{ color: "#AD40AF", fontWeight: "700" }}>Forgot?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            marginBottom: 30,
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 18,
            backgroundColor: "#AD40AF",
          }}
          onPress={() => {
            setLoading(true);
            ApiCall().then((data)=>{ setLoading(false); navigation.navigate("Login")})
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>
            Sign In
          </Text>
        </TouchableOpacity>
        <Text style={{ textAlign: "center", color: "#666", marginBottom: 10 }}>
          Or Sign with...
        </Text>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderRadius: 10,
              paddingVertical: 10,
              paddingHorizontal: 30,
              borderColor: "#ddd",
            }}
          >
            <Google height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              paddingVertical: 10,
              borderRadius: 10,
              paddingHorizontal: 30,
              borderColor: "#ddd",
            }}
          >
            <Facebook height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderRadius: 10,
              paddingVertical: 10,
              paddingHorizontal: 30,
              borderColor: "#ddd",
            }}
          >
            <Twitter height={24} width={24} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 20,
          }}
        >
          <Text>Already Sign In?</Text>
          <TouchableOpacity
            style={{ marginLeft: 8 }}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text
              style={{ color: "#AD40AF", fontSize: 14, fontWeight: "bold" }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Sign;
