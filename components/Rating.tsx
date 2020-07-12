import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

type Props = {
    saveRatingValue: Function,
}

export default function Rating({saveRatingValue}: Props) {
  const [defaultRating, setDefaultRating] = useState(2);
  const maxRating = 5;
  const star =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
  const emptyStar =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
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
        <Image
          style={styles.StarImage}
          source={i <= defaultRating ? { uri: star } : { uri: emptyStar }}
        />
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
