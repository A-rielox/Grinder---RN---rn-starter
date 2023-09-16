import React from "react";
import { StyleSheet, View, Text } from "react-native";

const BoxScreen = () => {
   return (
      <View style={styles.viewStyle}>
         <Text style={styles.textOneStyle}>Child #1</Text>
         <Text style={styles.textTwoStyle}>Child #2</Text>
         <Text style={styles.textThreeStyle}>Child #3</Text>
      </View>
   );
};

const styles = StyleSheet.create({
   // align --> es horizontal

   // en lugar de :
   // position: absolute,
   // top: 0,
   // bottom: 0,
   // left: 0,
   // right: 0
   //----------------> ...StyleSheet.absoluteFillObject
   viewStyle: {
      borderWidth: 3,
      borderColor: "black",
      height: 200,
      // justifyContent: "space-around",
      //
      // flexDirection: "row",
      // height: 200,
      // alignItems: "center", // con flexDirection: "row", es vertical. en normal es horizontal
   },
   textOneStyle: {
      borderWidth: 3,
      borderColor: "red",
   },
   textTwoStyle: {
      borderWidth: 3,
      borderColor: "red",
      flex: 1, // p'q ocupe todo el espacio verdical (en el mismo de flex direccion que por default es column) disponible, si es el unico con flex
   },
   textThreeStyle: {
      borderWidth: 3,
      borderColor: "red",
   },
});

export default BoxScreen;
