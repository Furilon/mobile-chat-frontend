import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");
socket.on("connect", () => {
  console.log(`connected to server ${socket.id}`);
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
