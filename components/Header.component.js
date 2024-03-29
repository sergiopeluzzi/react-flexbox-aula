import { View, Text, StyleSheet } from "react-native";

export default function Header(props) {
    const styles = StyleSheet.create({
        header: {
            flex: props.flex,
            backgroundColor: props.corDoFundo,
            padding: 10,
            height: 100,
            width: 100,
        },
        title: {
            textAlign: "center",
            fontSize: 20,
            color: props.corDoTexto,
        },
    });

    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props.titulo}</Text>
        </View>
    );
}
