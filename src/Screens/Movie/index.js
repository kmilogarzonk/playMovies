import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, Button, Linking, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { ScrollView } from 'react-native-gesture-handler';
import Loading from '../../Components/Loading';
import StarValue from '../../Components/StarValue';
import config from '../../config';
import { FormatMinutesTohours, FormatStringArray } from '../../lib/formats';
import { getInfoMovie } from '../../lib/query';
import style from '../../Styles/StylesApp';
import ActorsMovie from './ActorsMovie';
import NavigationMovie from './NavigationMovie';
import Productors from './Productors';
import { alert } from '../Home/ShowMovies'

const Movie = ({ navigation, route: { params } }) => {

  const [dataMovie, setDataMovie] = useState();
  const [dataShort, setDataShort] = useState();
  const [loading, setLoading] = useState(true);
  const [seeMore, setSeeMore] = useState(false);
  const [imageMovie, setImageMovie] = useState('');


  const getMovie = async () => {
    const result = await getInfoMovie(params.movieId);
    if(!result.error.status){
      setDataMovie(result.data);
      setImageMovie(`${config.urlMedia}${result.data.backdrop_path ? result.data.backdrop_path : result.data.poster_path}`);
      setDataShort({
        id: result.data.id,
        backdrop_path: result.data.backdrop_path,
        poster_path: result.data.poster_path,
        original_title: result.data.original_title,
        vote_average: result.data.vote_average,
        title: result.data.title
      });
      setLoading(result.loading);
    } else {
      alert();
    }
  }

  useEffect(() => {
    getMovie();
  }, [params]);

  if(loading){
    return <Loading />
  }

  return (
    <View style={style.container}>
      <Animatable.View animation='fadeInDownBig' style={style.headerMovie}>
        <ImageBackground
          source={{ uri: imageMovie }}
          style={style.backgroundMovie}
        >
          <NavigationMovie navigation={navigation} movie={dataShort} />
        </ImageBackground>
      </Animatable.View>
      <Animatable.View animation='fadeInUpBig' style={style.bodyContainerMovie}>
        <ScrollView style={style.bodyContainerMovieScroll}>
          <Text style={style.bigTitleMovie}>{dataMovie.original_title}</Text>
          {dataMovie.tagline.length > 0 && <Text style={style.normalText}>{dataMovie.tagline}</Text>}
          <View style={style.sectionElements}>
            {dataMovie.homepage ? (
              <TouchableOpacity
                onPress={() => Linking.openURL(dataMovie.homepage)}
                style={style.buttonVisit}
              >
                <Text style={style.sectionTitle} >Visit site</Text>
              </TouchableOpacity>
            ): null}
            <StarValue qualification={dataMovie.vote_average} />
          </View>
          <Text style={style.normalText}>{seeMore ? dataMovie.overview : `${dataMovie.overview.substring(0, 130)}...`}</Text>
          <TouchableOpacity
            onPress={() => setSeeMore(!seeMore)}
          >
            <Text style={style.seeMore} >{seeMore ? 'See Less' : 'See more'}</Text>
          </TouchableOpacity>
          <ActorsMovie idMovie={dataMovie.id} />
          {dataMovie.production_companies.length > 0 &&
            <Productors companies={dataMovie.production_companies} />}
          {dataMovie.genres.length > 0 && (
            <View style={style.sectionElementsII}>
              <Text style={style.boldSubtitle}>{dataMovie.genres.length > 1 ? 'Genres' : 'Genre'}</Text>
              <Text style={style.normalText}> {FormatStringArray(dataMovie.genres)}</Text>
            </View>
          )}
          {dataMovie.runtime && (
            <View style={style.sectionElementsII}>
              <Text style={style.boldSubtitle}>Duration</Text>
              <Text style={style.normalText}> {FormatMinutesTohours(dataMovie.runtime)}</Text>
            </View>
          )}
          {dataMovie.release_date && (
            <View style={style.sectionElementsII}>
              <Text style={style.boldSubtitle}>Release</Text>
              <Text style={style.normalText}> {dataMovie.release_date.split('-')[0]}</Text>
            </View>
          )}
        </ScrollView>
      </Animatable.View>
    </View>
  )

}

export default Movie;
