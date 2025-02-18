import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#0077cc",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    textAlign: "center",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  hero: {
    marginTop: 20,
    alignItems: "center",
    padding: 20,
  },
  heroText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#28a745",
    padding: 12,
    borderRadius: 25,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  features: {
    marginTop: 20,
    width: "90%",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0077cc",
  },
  cardText: {
    fontSize: 14,
    color: "#333",
  },
});
