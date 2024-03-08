import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
