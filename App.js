import {
  Text,
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import { useRef, useState } from "react";

import api from "./src/services/api";

export default function App() {
  const inputRef = useRef(null);

  const [cep, setCep] = useState("");
  const [cepUser, setCepUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleClean = () => {
    setCep("");

    inputRef.current.focus();
  };

  const handleFindCEP = async () => {
    setCepUser(null);

    if (cep == "") {
      alert("Digite um CEP válido!");
      return;
    }

    try {
      setIsLoading(true);
      const response = await api.get(`/${cep}/json`);
      setIsLoading(false);
      setCepUser(response);

      Keyboard.dismiss();
    } catch (error) {
      setIsLoading(false);
      alert("Falha ao carregar, tente novamente mais tarde!");
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.text}>Digite o CEP desejado!</Text>
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="Ex.: 79003241"
          value={cep}
          onChangeText={(cep) => {
            setCep(cep);
          }}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: "#1d75cd",
            },
          ]}
          onPress={handleFindCEP}
        >
          <Text style={[styles.buttonText]}>
            {isLoading ? (
              <ActivityIndicator color="#fff" size="small" />
            ) : (
              "Buscar"
            )}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleClean} style={styles.button}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>
      {cepUser?.cep ? (
        <View style={styles.result}>
          <Text style={styles.item}>CEP: {cepUser?.cep}</Text>
          <Text style={styles.item}>Logradouro: {cepUser?.logradouro}</Text>
          <Text style={styles.item}>Bairro: {cepUser?.bairro}</Text>
          <Text style={styles.item}>Cidade: {cepUser?.localidade}</Text>
          <Text style={styles.item}>Estado: {cepUser?.uf}</Text>
        </View>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    width: "90%",
    height: 45,
    padding: 10,
    fontSize: 18,
  },
  buttonView: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    padding: 8,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF0000",
  },
  buttonText: {
    color: "#ffff",
    fontSize: 20,
  },
  item: {
    fontSize: 22,
  },
  result: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
