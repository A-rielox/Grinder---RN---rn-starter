import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

// el props es el 1er arg q se le va a pasar
// const HomeScreen = (props) => {
const HomeScreen = ({ navigation }) => {
   // console.log(props.navigation);

   return (
      <View>
         <Text style={styles.text}>Hola guapo</Text>
         <Button
            title="Go to Components Demo"
            onPress={() => navigation.navigate("Components")}
         />

         <Button
            title="Go to List Demo"
            onPress={() => navigation.navigate("List")}
         />

         <Button
            title="Go to Image Screen"
            onPress={() => navigation.navigate("Image")}
         />

         <Button
            title="Go to Counter Screen"
            onPress={() => navigation.navigate("Counter")}
         />

         <Button
            title="Go to Color Screen"
            onPress={() => navigation.navigate("Color")}
         />

         <Button
            title="Go to Square Screen"
            onPress={() => navigation.navigate("Square")}
         />

         <Button
            title="Go to Square Screen2"
            onPress={() => navigation.navigate("Square2")}
         />

         <Button
            title="Go to Text Screen"
            onPress={() => navigation.navigate("Text")}
         />

         <Button
            title="Go to Box Screen"
            onPress={() => navigation.navigate("Box")}
         />

         {/* <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
            <Text>Go to List Demo</Text>
         </TouchableOpacity> */}
      </View>
   );
};

const styles = StyleSheet.create({
   text: {
      fontSize: 30,
   },
});

export default HomeScreen;
