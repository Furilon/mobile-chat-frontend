import { SocketContext, socket } from "./src/context/socket";
import { StyleSheet, View } from "react-native";
import Main from "./src/components/Main";

export default function App() {
  return (
    <SocketContext.Provider value={socket}>
      <View style={styles.container}>
        <Main />
      </View>
    </SocketContext.Provider>
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
