import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Picker,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

export default function Filter({
  handleFilter,
  modalVisible,
  setModalVisible,
}) {

  return (
    <View style={styles.filter}>
      <TouchableOpacity
        style={{ alignItems: 'center', justifyContent: 'center', height: 60 }}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text>Click to Filter Todos</Text>
      </TouchableOpacity>
      <Modal animationType="slide" visible={modalVisible} transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Filter By </Text>
            <TouchableOpacity
              style={styles.modalItems}
              onPress={() => handleFilter('today')}
            >
              <Text>Today</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalItems}
              onPress={() => handleFilter('priority')}
            >
              <Text>Priority</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalItems}
              onPress={() => handleFilter('overdue')}
            >
              <Text>Overdue</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.modalItems,
                {
                  borderBottomWidth: 0.36,
                  borderBottomColor: 'grey',
                  marginBottom: 20,
                },
              ]}
              onPress={() => handleFilter('pending')}
            >
              <Text>Pending</Text>
            </TouchableOpacity>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  // modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  filter: {
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.16,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
    width: '90%',
    alignSelf: 'center',
    // backgroundColor:'red'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '80%',
    padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalItems: {
    height: 40,
    width: '100%',
    borderTopColor: 'grey',
    borderTopWidth: 0.26,
    paddingVertical: 5,
  },
});
