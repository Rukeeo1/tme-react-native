import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Status({ todo }) {
    const today = new Date().getTime();
    const dueDate = new Date(todo?.dueDate).getTime()

    const isOverDue = dueDate < today
  //if comple
  return (
    <>
      {todo?.isCompleted && (
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Completed</Text>
        </View>
      )}
      {isOverDue && (
        <View style={[styles.statusContainer]}>
          <Text style={[styles.statusText,{color:'#ff0100'}]}>Overdue</Text>
        </View>
      )}
       {(!todo?.isCompleted  && !isOverDue ) &&(
        <View style={[styles.statusContainer]}>
          <Text style={[styles.statusText,{color:'#162352', backgroundColor:'#c0d1f8'}]}>Pending</Text>
        </View>
      )}
     
    </>
  );
}

const styles = StyleSheet.create({
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    right: 10,
    top: 30,
  },
  statusText: {
    backgroundColor: '#d4ead7',
    color: '#01d02e',
    padding: 4,
    borderRadius: 6,
    fontWeight: 'bold',
    fontSize: 12,
  },
});
