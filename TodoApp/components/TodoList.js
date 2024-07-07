import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function TodoList({tasks, DeleteTask, onEditTrigger}) {
  const HandleDelete = key => {
    DeleteTask(key);
  };

 


  return (
    <View>
      {tasks.length <= 0 ? (
        <View
          style={{
            alignItems: 'center',
            marginTop: 100,
          }}>
          <Image
            source={require('./assets/to-do-list.png')}
            style={{height: 250, width: 250}}
          />
        </View>
      ) : (
        <FlatList
          data={tasks}
          renderItem={({item}) => (
            <View style={containerStyle.taskItem}>
              <Text style={containerStyle.textStyle}>{item.text}</Text>
              <View style={{flexDirection: 'row', gap: 20}}>
                <TouchableNativeFeedback onPress={() => onEditTrigger(item)}>
                  <Icon name="edit" size={20} color="#FFFFFF" />
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() => HandleDelete(item.id)}>
                  <Icon name="delete" size={20} color="#FFFFFF" />
                </TouchableNativeFeedback>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
}

const containerStyle = StyleSheet.create({
  taskItem: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
    backgroundColor: '#1e90ff',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 16,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 5,
  },
  textStyle: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'left',
  },
});
