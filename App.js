import { StyleSheet, View } from "react-native";
import Header from "./components/Header.component";

export default function App() {
    return (
        <View style={styles.container}>
            <Header
                flex="1"
                titulo="Home"
                corDoTexto="white"
                corDoFundo="red"
            />
            <Header
                flex="2"
                titulo="About"
                corDoTexto="black"
                corDoFundo="yellow"
            />
            <Header
                flex="3"
                titulo="Services"
                corDoTexto="white"
                corDoFundo="green"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "#fff",
    },
});
