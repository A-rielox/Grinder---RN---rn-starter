import React from "react";
import { Button, StyleSheet, View, Text } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
   return (
      <View>
         <Text>{color}</Text>

         <Button onPress={() => onIncrease()} title={`Increse ${color}`} />
         <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
      </View>
   );
};

const styles = StyleSheet.create({});

export default ColorCounter;
