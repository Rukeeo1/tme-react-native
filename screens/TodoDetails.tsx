import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const imageSource =
  'https://media-cdn.tripadvisor.com/media/photo-s/01/37/60/0c/me-and-my-husband-lekki.jpg';

export default function TodoDetails() {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <ImageBackground
            source={{ uri: imageSource }}
            style={{
              height: 300,
              resizeMode: 'cover',
            }}
          >
            <LinearGradient
              colors={['rgba(0,0,0,0.4)', 'transparent', 'rgba(0,0,0,0.9)']}
              style={styles.linearGradient}
            >
              <Text style={styles.title}>Hello</Text>
            </LinearGradient>
          </ImageBackground>
          <View>
            <Text style={{ fontWeight: '600', fontSize: 16, marginTop: 10 }}>
              Description
            </Text>
            <Text
              style={{
                fontWeight: '300',
                fontSize: 16,
                marginTop: 10,
                color: 'grey',
                textAlign: 'justify',
                lineHeight: 20,
              }}
            >
              UseEffect is here for all side effects. Adding event listeners,
              changing things in the document, fetching data. Everything you
              would use component lifecycle methods for (componentDidUpdate,
              componentDidMount, componentWillUnmount) The method signature is
              pretty straightforward. It accepts two parameters:
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={{ position: 'absolute', bottom: 10,left:10 }}>
        <TouchableOpacity style={styles.iconWrapper}>
          <Entypo name="add-to-list" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.iconWrapper}>
          <AntDesign name="edit" size={24} color="#fff" />
        </View>
        <View style={styles.iconWrapper}>
          <AntDesign name="delete" size={24} color="#fff" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '90%',
    marginVertical: 10,
    borderRadius: 8,
  },
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    // position: 'absolute',
    // bottom: 8,
    // left: 8,
    marginLeft: 10,
    fontSize: 28,
    fontWeight: 'bold',
  },
  iconWrapper: {
    backgroundColor: 'grey',
    padding: 10,
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:4
  },
});
