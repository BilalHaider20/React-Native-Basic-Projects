import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import InputComponent from './components/Inputcomponent';
import TodoList from './components/TodoList';
const App = () => {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [EditTodo, setEditTodo] = useState(null);

  const addTask = task => {
    if (task) {
      setCount(prev => prev + 1);
      const newTask = {
        id: count,
        text: task,
      };
      setTasks([...tasks, newTask]);
    }
  };
  const ClearAll = () => {
    setTasks([]);
    setCount(0);
  };

  const updateTask = updatedTask => {
    setTasks(prevTasks =>
      prevTasks.map(task => (task.id === updatedTask.id ? updatedTask : task)),
    );
    setEditTodo(null);
  };

  const handleEditTodo = todo => {
    setEditTodo(todo);
  };

  const DeleteTask = key => {
    const UpdatedTodoList = tasks.filter(item => item.id !== key);
    setTasks(UpdatedTodoList);
  };
  return (
    <View style={style.background}>
      <InputComponent
        addTask={addTask}
        ClearAll={ClearAll}
        EditTodo={EditTodo}
        setEditTodo={setEditTodo}
        updateTask={updateTask}
      />
      <TodoList
        tasks={tasks}
        DeleteTask={DeleteTask}
        onEditTrigger={handleEditTodo}
      />
    </View>
  );
};
export default App;
const style = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1,
  },
});
