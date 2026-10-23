
import { useState } from "react";
import {
    FlatList,
    Text,
    TouchableOpacity,
    StyleSheet,
    View,
} from "react-native";

import EmptyState from "../components/EmptyState";
import { Task } from "../constants/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { TasksStackParamList } from "../navigation/TaskStack";

type HomevanProp = NativeStackNavigationProp<
    TasksStackParamList,
    "TaskList"
>;

export default function HomeScreen() {
    const navigation = useNavigation<HomevanProp>();

    const [task] = useState<Task[]>([
        {
            id: "1",
            title: "Estudiar React Native",
            description: "Repasar FlatList y componentes.",
            category: "Estudio",
            createdAt: new Date(),
        },
        {
            id: "2",
            title: "Crear TaskFlow",
            description: "Continuar con el proyecto de tareas.",
            category: "Trabajo",
            createdAt: new Date(),
        },
    ]);

    const handleTaskPress = (task: Task) => {
        navigation.navigate("TaskDetail", {
            id: task.id,
            title: task.title,
            description: task.description,
            category: task.category,
            createdAt: task.createdAt.toISOString(),
        });
    };

    const handleAddPress = () => {
        navigation.navigate("TaskForm");
    };

    return (
        <View style={styles.container}>
            {task.length === 0 ? (
                <EmptyState />
            ) : (
                <FlatList
                    data={task}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => handleTaskPress(item)}
                        >
                            <Text style={styles.taskTitle}>
                                {item.title}
                            </Text>
                            <Text>{item.category}</Text>
                        </TouchableOpacity>
                    )}
                />
            )}

            <TouchableOpacity
                style={styles.fab}
                onPress={handleAddPress}
            >
                <Text style={styles.fabText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    card: {
        padding: 15,
        marginBottom: 10,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 8,
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    fab: {
        position: "absolute",
        right: 20,
        bottom: 20,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
        elevation: 4,
    },
    fabText: {
        color: "white",
        fontSize: 30,
    },
});
