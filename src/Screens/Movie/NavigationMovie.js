import React, { useEffect, useState } from 'react';
import { Alert, TouchableOpacity, View } from "react-native";
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { addFavoriteMovie, deleteFavoriteMovie } from '../../redux/actions/moviesActions';
import style from "../../Styles/StylesApp";
import colors from '../../Theme/Colors';

const NavigationMovie = ({navigation, movie, favorites, addFavoriteMovie, deleteFavoriteMovie}) => {

  const [favorite, setFavorite] = useState(false);

  const handleFavoriteMovie = () => {
    if(favorite){
      deleteFavoriteMovie(movie);
      Alert.alert(
        'Delete of favorites',
        `Okay, ${movie.original_title} is delete of favorites`,
        [
          { text: 'Continue' }
        ]
      );
    }else{
      addFavoriteMovie(movie);
      Alert.alert(
        'Add to favorites',
        `Very good, ${movie.original_title}, add to favorites`,
        [
          { text: 'Continue' }
        ]
      );
    }
    setFavorite(!favorite);
  };

  const back = () => navigation.goBack();

  useEffect(() => {
    favorites.map(fav => {
      if(fav.id === movie.id){
        return setFavorite(true);
      }
    })
    return () => {
      setFavorite(false);
    }
  }, [favorites]);

  return (
    <View style={style.navigationMovie} >
      <TouchableOpacity onPress={back}>
        <Icon name='arrow-left' size={20} color={colors.white} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleFavoriteMovie}>
        <Icon name='heart' solid={favorite} size={20} color={colors.white} />
      </TouchableOpacity>
    </View>
  )
}

const mapStateToProps = (state) => ({
  favorites: state.movies.favorites,
})

const mapDispatchToProps = (dispatch) => {
  return {
    addFavoriteMovie: (movie) => dispatch(addFavoriteMovie(movie)),
    deleteFavoriteMovie: (movie) => dispatch(deleteFavoriteMovie(movie)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationMovie);
