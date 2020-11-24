import React from 'react';
import { View, Text, Image } from "react-native";
import config from '../config';
import style from "../Styles/StylesApp";
import colors from '../Theme/Colors';

const Company = ({company: {item: Company}}) => {
  const alternImage = 'https://image.flaticon.com/icons/png/512/149/149071.png';
  const imageCompany = Company.logo_path ? `${config.urlMedia}${Company.logo_path}` : alternImage;

  return (
    <View style={style.actor}>
      <Image source={{ uri: imageCompany }} style={style.imageActor} />
      <Text style={style.actorText} numberOfLines={3} ellipsizeMode='tail'>
        {Company.name}
      </Text>
    </View>
  )
}

export default Company;
