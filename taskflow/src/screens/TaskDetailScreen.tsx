
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TasksStackParamList } from "../navigation/TaskStack";
import TaskDetail from "../components/TaskDetail";
import { Task } from "../constants/types";

type TaskDetailRouteProp = RouteProp<TasksStackParamList, "TaskDetail">;
type TaskDetailNavigationProp = NativeStackNavigationProp<
    TasksStackParamList,
    "TaskDetail"
>;

export default function TaskDetailScreen() {
    const route = useRoute<TaskDetailRouteProp>();
    const navigation = useNavigation<TaskDetailNavigationProp>();

    const { id, title, description, category, createdAt } = route.params;

    const task: Task = {
        id,
        title,
        description,
        category,
        createdAt: new Date(createdAt),
    };

    return (
        <TaskDetail
            task={task}
            onBack={() => navigation.goBack()}
        />
    );
}
