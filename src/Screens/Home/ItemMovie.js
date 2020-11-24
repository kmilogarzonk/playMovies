import React, { useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import style from '../../Styles/StylesApp';
import { Image } from 'react-native-animatable';
import config from '../../config';
import StarValue from '../../Components/StarValue';

const ItemMovie = ({ movie: { item }, navigation }) => {

  const imageUri = `${config.urlMedia}${item.poster_path ? item.poster_path : item.backdrop_path}`;
  const nameMovie = item.original_title ? item.original_title : item.name;
  const qualification = item.vote_average;
  const id = item.id;

  const pressMovie = () => {
    navigation.navigate('Movie', {
      movieId: id,
    });
  }

  return (
    <TouchableOpacity style={style.contentMovie} onPress={pressMovie}>
      <Image animation="fadeIn" source={{ uri: imageUri }} style={style.imgMovie} />
      <Text style={style.titleMovie} numberOfLines={1} ellipsizeMode='tail'>{nameMovie}</Text>
      <StarValue qualification={qualification} />
    </TouchableOpacity>
  )
}

export default ItemMovie;
