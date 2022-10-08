import React from "react";
import { View, Text, StyleSheet } from "react-native";

// a text component and chat feature
const Content = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Content</Text>
      <Text style={styles.text}>id: {route.params.id}</Text>
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
