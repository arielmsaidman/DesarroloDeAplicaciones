
import { useState } from "react";
import { FlatList, Text, TouchableOpacity, StyleSheet, View, } from "react-native";
import EmptyState  from "../components/EmptyState" ;
import TaskDetail  from "../components/TaskDetail";
import { Task } from "../constants/types";

export default function HomeScreen() {
    const[task, setTask]=useState<Task[]>([
      {
        id: '1',
        title: 'Estudiar React Native',
        description: 'Repasar FlatList y componentes.',
        category: 'Estudio',
        createdAt: new Date(),
      },
      {
        id: '2',
        title: 'Crear TaskFlow',
        description: 'Continuar con el proyecto de tareas.',
        category: 'Trabajo',
        createdAt: new Date(),
      },
    ])

    const[selectedTask, setSelectedTask] = useState<Task| null>(null)

    if(selectedTask){
      return(
        <TaskDetail task={selectedTask} onBack ={() => setSelectedTask(null)}/>

      )
    }
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Mis tareas</Text>

      {
        task.length === 0 ?(
          <EmptyState/>
        ):(
          <FlatList
            data={task}
            keyExtractor={(item) => item.id}
            renderItem={({item})=>(
              <TouchableOpacity style={styles.card} onPress={() => setSelectedTask(item)}>
                <Text style={styles.taskTitle}>{item.title}</Text>
                <Text>{item.category}</Text>
              </TouchableOpacity>
            )}
          />
        )}

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  card: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
  },

  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});