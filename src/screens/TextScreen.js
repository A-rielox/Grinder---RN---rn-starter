import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

const TextScreen = () => {
   const [name, setName] = useState("");
   const [pass, setPass] = useState("");

   return (
      <View>
         <Text>Enter name:</Text>

         <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            //
            value={name}
            onChangeText={(newValue) => {
               setName(newValue);
            }}
         />

         <Text>My name is {name}</Text>

         <Text>Enter password:</Text>
         <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            //
            value={pass}
            onChangeText={(newValue) => {
               setPass(newValue);
            }}
         />

         {pass.length < 4 ? <Text>Pass muy corto</Text> : null}
      </View>
   );
};

const styles = StyleSheet.create({
   input: {
      margin: 15,
      borderColor: "black",
      borderWidth: 1,
   },
});

export default TextScreen;
