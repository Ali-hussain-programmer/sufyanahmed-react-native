import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";
import SImage from "../../assets/login.svg";
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
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [Loading, setLoading] = useState(false);
  const storeData = async (data) => {
    try {
      await AsyncStorage.setItem("token",data);
    } catch (error) {
      console.log("ERRor THIS TIME",error)
    }
  };
  const ApiCall = async () => {
    try {
      const response = await fetch(
        "http://192.168.0.154:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("ERROR");
      }
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 30, position: "relative" }}
    >
      {Loading ? (
        <ActivityIndicator
          size="large"
          style={{ position: "absolute", top: "55%", left: "50%" }}
        />
      ) : null}
      <View style={{ alignItems: "center", marginTop: 40, marginBottom: 5 }}>
        <SImage
          height={300}
          width={300}
          style={{ transform: [{ rotate: "-5deg" }] }}
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
          Login
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
            style={{ flex: 1, paddingVertical: 0 }}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={() => {}}>
            <Text style={{ color: "#AD40AF", fontWeight: "700" }}>Forgot?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            setLoading(true);
            ApiCall().then((data) => {
              if (data) {
                setLoading(false);
                
                storeData(data.token)
              navigation.replace("start");
              }
              setLoading(false);
            });
          }}
          style={{
            marginBottom: 30,
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 18,
            backgroundColor: "#AD40AF",
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>
            Login
          </Text>
        </TouchableOpacity>
        <Text style={{ textAlign: "center", color: "#666", marginBottom: 30 }}>
          Or login with...
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
          <Text>New to App</Text>
          <TouchableOpacity
            style={{ marginLeft: 8 }}
            onPress={() => {
              navigation.navigate("Sign");
            }}
          >
            <Text
              style={{ color: "#AD40AF", fontSize: 14, fontWeight: "bold" }}
            >
              Register?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
