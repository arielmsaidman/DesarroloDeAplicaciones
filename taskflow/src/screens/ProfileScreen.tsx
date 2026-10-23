
import { View, Text, StyleSheet } from "react-native";
import { ProfileCard } from "../components/ProfileCard";
import { COLORS } from "../constants/theme";

export function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mi Perfil</Text>

            <ProfileCard
                name="Ana Rodriguez"
                role="Desarrolladora"
                image="https://i.pravatar.cc/150?img=45"
                isActive={true}
            />

            <ProfileCard
                name="Carlos Mendizabal"
                role="Diseñador"
                image="https://i.pravatar.cc/150?img=33"
                isActive={true}
            />

            <ProfileCard
                name="Franco Ranoi"
                role="Instrumentista"
                image="https://i.pravatar.cc/150?img=13"
                isActive={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: COLORS.text,
        marginBottom: 20,
    },
});
