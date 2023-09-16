import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
   const greetings1 = "Holi";
   const greetings2 = ["Holi", " ", "hola!"];
   const greetings3 = <Text>Holi hola!!</Text>;

   return (
      <View>
         <Text style={styles.textStyle}>This is the Components Screen</Text>
         <Text>{greetings1} hola</Text>
         <Text>{greetings2}</Text>
         <Text>{greetings3}</Text>
      </View>
   );
};

const styles = StyleSheet.create({
   textStyle: {
      fontSize: 20,
   },
});

export default ComponentsScreen;
