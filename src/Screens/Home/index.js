import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Text, Input, SearchBar } from 'react-native-elements';
import { ScrollView, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome5';
import style from '../../Styles/StylesApp'
import colors from '../../Theme/Colors';
import Fonts from '../../Theme/Fonts';
import ShowMovies from './ShowMovies';

const Home = ({navigation, favorites}) => {

  const [search, setSearch] = useState('');
  const [favs, setFavs] = useState(false);

  const textInputChange = (value) => {
    setSearch(value);
  }

  useEffect(() => {
    favorites > 0 && setFavs(true);
    return () => {
      setSearch('');
    }
  }, [favorites])

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.title}>Hello, what do you{"\n"}want to watch ?</Text>
        <SearchBar
          placeholder="Search"
          onChangeText={textInputChange}
          value={search}
          containerStyle={style.inputSearch}
          inputContainerStyle={style.inputContainerSearch}
          inputStyle={Fonts.input}
          placeholderTextColor={colors.white}
          searchIcon={{ color: colors.white }}
          showLoading
          lightTheme
        />
      </View>
      <Animatable.View 
        animation="fadeInUpBig"
        style={[style.bodyContainer, search.length > 0 && style.bodyFullContainer]}
      >
        <ScrollView>
          {search.length > 0 && (
            <ShowMovies
              type="search"
              title="ACTIVE SEARCH"
              navigation={navigation}
              query={search}
            />
          )}{/* Section Search */}
          {favs && (
            <ShowMovies
              type="favorites"
              title="YOUR FAVORITES"
              navigation={navigation}
            />
          )}{/* Section Search */}
          <ShowMovies
            type="trending"
            title="RECOMMENDED FOR YOU"
            navigation={navigation}
          />{/* Section Recommended */}
          <ShowMovies
            type="top_rated"
            title="TOP RATED"
            navigation={navigation}
          />{/* Section Top Rated */}
        </ScrollView>
      </Animatable.View>
      
    </View>
  )
}

const mapStateToProps = (state) => ({
  favorites: state.movies.favorites.length
})

export default connect(mapStateToProps)(Home);