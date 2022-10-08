import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Chat from "../components/Chat";

// a text component and chat feature
const Content = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Content</Text>
      <Button title="Chat!" onPress={() => navigation.navigate("Chat")} />
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 24
    }
})

export default Content;
