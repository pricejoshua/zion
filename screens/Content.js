import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Chat from "../components/Chat";

// a text component and chat feature
const Content = ({navigation, route}) => {

  // Get content from API
  const id = route.params.id;

  // get content from local file
  const remote_content = require("../assets/mock_data/MOCK_DEVO.json");


  return (
    <View style={styles.container}>
      <Text style={styles.text}>remote_content.title</Text>
      <Text style={styles.text}>remote_content.content</Text>
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