import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Entypo } from '@expo/vector-icons';


export default function ImagePickerComponent({storeImage}) {
  const [image, setImage] = useState<String>('');
  const handleImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <View style={{ alignItems: 'center' }}>
        {image ? (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        ) : null}
      </View>
      <TouchableOpacity
        style={styles.imagePickerContainer}
        onPress={handleImage}
      >
        {!image ? <Entypo name="image" size={30} color="grey" /> : null}
        <Text>{image ? 'Change Image' : 'Pick Image'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  imagePickerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderColor: '#f8f8f8',
    borderWidth: 1,
    padding: 10,
  },
});
