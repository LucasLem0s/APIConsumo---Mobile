import React, { useState, useEffect } from "react";
import { Text, View, FlatList, Image } from "react-native";
import { estilo } from "./components/estiloApp";

const request = async (callback) => {
  const response = await fetch("https://randomfox.ca/floof/");
  const parsed = await response.json();
  callback([parsed]); 
};

export default function App() {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    request(setRegistros);
  }, []);

  return (
    <View style={estilo.container}>
      <View>
        <Text style={estilo.superior}>Random FOX</Text>
      </View>

      <FlatList
        data={registros}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20 }}>
            <Text style={estilo.item}>Imagem da Raposa:</Text>
            <Image
              source={{ uri: item.image }}
              style={{ width: 250, height: 250, resizeMode: "contain" }}
            />
            <Text style={estilo.item}>Link: {item.link}</Text>
          </View>
        )}
      />
    </View>
  );
}
