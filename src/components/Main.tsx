import {
  Text,
  View,
  TextInput,
  Button,
  GestureResponderEvent,
} from "react-native";
import { SyntheticEvent, useContext, useEffect, useState } from "react";
import { SocketContext } from "../context/socket";

export default function Main() {
  const socket = useContext(SocketContext);
  const [userID, setUserID] = useState<string>("");
  const [receiverID, setReceiverID] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);
  const [msg, setMsg] = useState<string>("");

  useEffect(() => {
    socket.on("connect", () => {
      setUserID(socket.id);
    });

    socket.on("receive-message", (message: string) => {
      setMessages((messages) => [...messages, message]);
    });

    return () => {
      socket.off("connect");
      socket.off("receive-message");
    };
  });

  const handleSend = (e: GestureResponderEvent) => {
    setMessages((messages) => [...messages, msg]);
    setMsg("");

    socket.emit("send-message", msg, receiverID);
  };

  return (
    <View>
      <Text>Your UID is: {userID}</Text>
      <View>
        {messages.map((msg, index) => (
          <Text key={index}>{msg}</Text>
        ))}
      </View>
      <View>
        <TextInput
          placeholder="Enter message"
          onChangeText={setMsg}
          value={msg}
        />
        <TextInput placeholder="Receiver ID" onChangeText={setReceiverID} />
        <Button title="Send" color="blue" onPress={handleSend} />
      </View>
    </View>
  );
}
