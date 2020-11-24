import React from 'react';
import { View, FlatList, Text } from "react-native";
import Company from '../../Components/Company';
import style from "../../Styles/StylesApp";

const Productors = ({ companies }) => {

  return (
    <>
      <Text style={style.boldSubtitle}>{companies.length > 1 ? 'Studios' : 'Studio'}</Text>
      <View style={style.sectionElements}>
        {companies.length > 0 ? (
          <FlatList
            data={companies}
            renderItem={company => <Company company={company} />}
            keyExtractor={(company, i) => `${company.id}-${i}`}
            horizontal
          />
        ): null}
      </View>
    </>
  )
}

export default Productors;
