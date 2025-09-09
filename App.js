import React, {useState,useEffect} from "react";  
import {Text, View, Flatlist} from "react-native";
import { estilo } from "./components/estiloApp";

const request = async (callback) => {
  const response  = await fetch('https://swapi.dev/api/people/');
  const parsed = await response.json();
  callback(parsed.results);
}

export default function App() {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    request(setRegistros);
  }, []);

  return (
    <View style={estilo.container}>
      <View>
        <Text style={estilo.superior}>Star Wars</Text>
      </View>     

      <Flatlist
        data={registros}
        keyExtractor={(item) => item.name.toString()}
        renderItem={({item}) => 
        <Text style={estilo.item}>
        <Text> Nome: {item.id}{'\n'}</Text>
        <Text> Peso: {item.nome}{'\n'}</Text>
        </Text>
        }
      />
    </View>
  );
}