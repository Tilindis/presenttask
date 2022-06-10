import { StyleSheet } from "react-native";

const dataAddStyles = StyleSheet.create({
  mainContainer: {
    flex: 4,
    backgroundColor: "rgba(0,120,255,0.5)",
    paddingTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(0,120,255,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});

const insideDataStyles = StyleSheet.create({
  mainContainer: {
    flex: 2.5,
    backgroundColor: "rgba(0,120,255,0.5)",
    paddingTop: 15,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  body: {
    color: "white",
    fontSize: 20,
    padding: 10,
  },
  middleContainer: {
    flex: 1.5,
    backgroundColor: "rgba(0,120,255,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  middleInsideContainer: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
  },
  middleColorContainer: {
    flex: 1,
    backgroundColor: "rgba(0,120,255,0.9)",
    width: "92%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "rgba(0,120,255,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});

const getDataStyles = StyleSheet.create({
  sortMenu: {
    flex: 0.5,
    flexDirection: "row",
    backgroundColor: "rgba(0,120,255,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  flatContainer: {
    flex: 3.5,
    backgroundColor: "rgba(0,120,255,0.75)",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 10,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "rgba(0,120,255,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  flatListItem: {
    flex: 1,
    margin: 5,
    height: 70,
    backgroundColor: "rgba(0,16,255,0.5)",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  flatListButtonText: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  sortView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  filterView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,120,255,0.75)",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
});

export default { dataAddStyles, insideDataStyles, getDataStyles, baseStyles };
