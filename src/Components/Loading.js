import React from 'react';
import { ActivityIndicator, View } from "react-native";
import style from "../Styles/StylesApp";
import colors from '../Theme/Colors';

const Loading = (color = colors.blueBackground) => {
  return (
    <View style={style.loading}>
      <ActivityIndicator size="large" color={color} />
    </View>
  )
}

export default Loading;
