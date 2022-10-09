

// A list of all the content

import React from "react";

import { View, Text, StyleSheet, FlatList } from "react-native";
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler"; 

// a text component and chat feature
const ContentList = ({navigation, route}) => {

  // get content from local file
  const remote_content = require("../assets/mock_data/MOCK_DEVOS.json");

  const content = [
    {
      title: "Devo 1",
      content: "content 1",
      id: "1",
    },
    {
      title: "Devo 2",
      content: "content 2",
      id: "2",
    },
    {
      title: "Devo 3",
      content: "content 3",
      id: "3",
    },
    {
      title: "Devo 4",
      content: "content 4",
      id: "4",
    },
    {
      title: "Devo 5",
      content: "content 5",
      id: "5",
    },
    {
      title: "Devo 6",
      content: "content 6",
      id: "6",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={remote_content}
        renderItem={({ item }) => (
            <Button style={styles.item} title={item.title} onPress={() => navigation.navigate("ContentScreen", {item: item, screen: "Content", params: {item: item}})} />
        )}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
    item: {
        padding: 20
    },
});

export default ContentList;