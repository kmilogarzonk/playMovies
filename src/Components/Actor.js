import React from 'react';
import { View, Text, Image } from "react-native";
import config from '../config';
import style from "../Styles/StylesApp";
import colors from '../Theme/Colors';

const Actor = ({actor: {item: Actor}}) => {
  const alternImage = 'https://image.flaticon.com/icons/png/512/149/149071.png';
  const imageActor = Actor.profile_path ? `${config.urlMedia}${Actor.profile_path}` : alternImage;

  return (
    <View style={style.actor}>
      <Image source={{ uri: imageActor }} style={style.imageActor} />
      <Text style={style.actorText} numberOfLines={2} ellipsizeMode='tail'>
        {Actor.name ? Actor.name : Actor.original_name}
      </Text>
    </View>
  )
}

export default Actor;
