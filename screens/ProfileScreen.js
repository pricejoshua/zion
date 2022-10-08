// Simple react profile screen

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-elements";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.avatar}>
            <Avatar.Image
              size={100}
              source={{
                uri:
                  "https://images.unsplash.com/photo-1583957365269-6d5b1c2d2b5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZCUyMHBob25lfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80",
              }}
            />
          </View>
          <Title style={styles.title}>John Doe</Title>
          <Paragraph style={styles.paragraph}>Joined in 2021</Paragraph>
          <Button style={styles.button}>Edit profile</Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 370,
  },
  avatar: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 20,
  },
  paragraph: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
  button: {
    width: 370,
    marginTop: 20,
  },
});

export default ProfileScreen;