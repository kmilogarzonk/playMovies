import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { AirbnbRating } from 'react-native-elements';
import style from '../Styles/StylesApp';

const StarValue = ({ qualification }) => {

  const [qualifyEnd, setQualifyEnd] = useState(0);

  useEffect(() => {
    setQualifyEnd(qualification * 0.5);
  }, [qualification]);

  return (
    <View style={style.contentStars}>
      <AirbnbRating
        count={5}
        defaultRating={qualifyEnd}
        showRating={false}
        size={13}
      />
    </View>
  )
}

export default StarValue;
