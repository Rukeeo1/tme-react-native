import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 


type Props = {
    saveRatingValue: Function,
    ratingValue: number
}

export default function Rating({saveRatingValue,ratingValue}: Props) {
  const [defaultRating, setDefaultRating] = useState(2);
  const maxRating = 5;
  
  const RatingBar = [];

  const handleRating = (rating: number) => {
    setDefaultRating(rating);
    saveRatingValue(rating)
  };

  for (let i = 1; i <= maxRating; i++) {
    RatingBar.push(
      <TouchableOpacity
        activeOpacity={0.7}
        key={i}
        onPress={() => handleRating(i)}
      >
        <>
      
        {i <= ratingValue ? <AntDesign name="star" size={24} color="gold" />: <AntDesign name="staro" size={24} color="gold" /> }
        </>
      </TouchableOpacity>
    );
  }

  return <View style={styles.container}>{RatingBar}</View>;
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent:'center'
  },
  StarImage: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    marginHorizontal:2
  },
});
