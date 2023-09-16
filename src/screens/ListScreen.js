import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
   const friends1 = [
      { name: "Friend 1", key: "1" },
      { name: "Friend 2", key: "2" },
      { name: "Friend 3", key: "3" },
      { name: "Friend 4", key: "4" },
      { name: "Friend 5", key: "5" },
   ];

   const friends2 = [
      { name: "Friend 1" },
      { name: "Friend 2" },
      { name: "Friend 3" },
      { name: "Friend 4" },
      { name: "Friend 5" },
      { name: "Friend 6" },
      { name: "Friend 7" },
      { name: "Friend 8" },
      { name: "Friend 9" },
   ];

   const friends3 = [
      { name: "Friend 1", age: 11 },
      { name: "Friend 2", age: 12 },
      { name: "Friend 3", age: 13 },
      { name: "Friend 4", age: 14 },
      { name: "Friend 5", age: 15 },
      { name: "Friend 6", age: 16 },
      { name: "Friend 7", age: 17 },
      { name: "Friend 8", age: 18 },
      { name: "Friend 9", age: 19 },
   ];

   return (
      <FlatList
         // horizontal
         // showsHorizontalScrollIndicator={false}
         data={friends3}
         keyExtractor={(friend) => friend.name}
         renderItem={({ item }) => {
            return (
               <Text style={styles.textStyle}>
                  {item.name} - Age: {item.age}
               </Text>
            );
         }}
      />
   );
};

const styles = StyleSheet.create({
   textStyle: {
      marginVertical: 50, // espacio entre c/item de la lista
   },
});

export default ListScreen;

/*
const ListScreen = () => {
   return <Text>List Screen</Text>;
};

const styles = StyleSheet.create({});

export default ListScreen;
*/
