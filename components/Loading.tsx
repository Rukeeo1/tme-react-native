import React from 'react'
import { View, ActivityIndicator } from 'react-native'

export default function ActivitiyIndicator() {
    return (
      <View style={{marginTop:15}}>
        <ActivityIndicator size="large" color="pink"/>
      </View>
    );
  }