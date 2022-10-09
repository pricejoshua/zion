import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";
import Chat from "./Chat";

// a text component and chat feature
const Content = ({navigation, route}) => {

  // Get content from API
  const id = route.params.id;

  // get content from local file
  const remote_content = require("../assets/mock_data/MOCK_DEVO.json");

  return (
    <View style={styles.container}>
        <SafeAreaView style={styles.container}> 
          <ScrollView >
            <Text style={styles.text}>{route.params.item.content}</Text>
          </ScrollView>
        </SafeAreaView>

      {/* <Button title="Chat!" onPress={() => navigation.navigate("Chat", {params: {id: route.params.item.id}})} /> */}
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
        fontSize: 24,
    }
})

export default Content;
