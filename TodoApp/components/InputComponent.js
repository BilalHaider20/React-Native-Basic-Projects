import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';

const InputComponent = ({
  addTask,
  ClearAll,
  EditTodo,
  setEditTodo,
  updateTask,
}) => {
  let [newTask, Settask] = useState('');
  const handleAddOrUpdate = () => {
    if (newTask.trim() === '') {
      console.warn('Please enter something');
      return;
    }
    if (EditTodo) {
      updateTask({...EditTodo, text: newTask});
    } else {
      addTask(newTask);
    }
    Settask('');
  };

  function HandleClear() {
    ClearAll();
    Settask('');
  }
  useEffect(() => {
    if (EditTodo) {
      Settask(EditTodo.text);
    } else {
      Settask('');
    }
  }, [EditTodo]);

  return (
    <View>
      <TextInput
        style={InputStyle.inputElement}
        placeholder="Enter Task"
        placeholderTextColor={'#888'}
        value={newTask}
        onChangeText={text => Settask(text)}></TextInput>

      <View style={InputStyle.ButtonStyle}>
        <TouchableOpacity style={InputStyle.Button} onPress={handleAddOrUpdate}>
          <Text style={InputStyle.ButtonText}>
            {EditTodo ? 'Update' : 'Add'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={InputStyle.Button} onPress={HandleClear}>
          <Text style={InputStyle.ButtonText}>Clear All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const InputStyle = StyleSheet.create({
  inputElement: {
    borderWidth: 2,
    borderColor: '#1e90ff',
    margin: 15,
    padding: 10,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    color: '#333',
  },
  ButtonStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  Button: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: 100,
  },
  ButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
  },
});
export default InputComponent;
