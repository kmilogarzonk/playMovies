import React, { useEffect, useState } from 'react';
import { Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { Alert, View, FlatList } from 'react-native';
import style from '../../Styles/StylesApp'
import { getTrendingMovies, getTopRated, queryUrl } from '../../lib/query';
import Loading from '../../Components/Loading';
import ItemMovie from './ItemMovie';

export const alert = () => {
  return Alert.alert(
    'Error',
    'Error, you have no internet connection',
    [
      { text: 'Continue' }
    ]
  );
}

const ShowMovies = ({type, title, query, favorites, navigation}) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDataByType = () => {
    let result;
    switch (type) {
      case "trending":
        return setTimeout(async () => {
          result = await getTrendingMovies();
          if(!result.error.status){
            setData(result.data.results);
            setLoading(result.loading);
          } else {
            alert();
          }
        }, 100);

      case "top_rated":
        return setTimeout(async () => {
          result = await getTopRated();
          if(!result.error.status){
            setData(result.data.results);
            setLoading(result.loading);
          } else {
            alert();
          }
        }, 100);

      case "search":
        return setTimeout(async () => {
          result = await queryUrl(query);
          if(!result.error.status){
            setData(result.data.results);
            setLoading(result.loading);
          } else {
            alert();
          }
        }, 100);

      case "favorites":
        if(favorites){
          setData(favorites);
          setLoading(false);
        }
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    getDataByType();

    return () => {
      setData();
      setLoading(true);
    };
  }, [type, query, favorites])

  if(loading){
    return <Loading />
  }

  return (
    <View style={style.contentsMovies}>
      <View style={style.sections}>
        <Text style={style.sectionTitle}>{title}</Text>
        <Text style={style.seeMore}>See all</Text>
      </View>
      {data.length > 0 ? (
        <FlatList
          data={data}
          renderItem={movie => <ItemMovie movie={movie} navigation={navigation} />}
          keyExtractor={movie => `${movie.id}`}
          horizontal
        />
      ):(
        <View>
          <Text style={style.seeMore}>Not Found "{query}"</Text>
        </View>      
      )}
    </View>
  )
}

const mapStateToProps = (state) => ({
  favorites: state.movies.favorites
})

export default connect(mapStateToProps)(ShowMovies);
