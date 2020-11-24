import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Actor from '../../Components/Actor';
import Loading from '../../Components/Loading';
import { getActorsMovieUrl } from '../../lib/query';
import style from "../../Styles/StylesApp";
import colors from '../../Theme/Colors';
import { alert } from '../Home/ShowMovies';

const ActorsMovie = ({idMovie}) => {

    const [dataActors, setDataActors] = useState([]);
    const [loading, setLoading] = useState(true);

  const getActorsMovie = async () => {
    const result = await getActorsMovieUrl(idMovie);
    if(!result.error.status){
      setDataActors(result.data.cast);
      setLoading(result.loading);
    } else {
      alert();
    }
  };

  useEffect(() => {
    getActorsMovie();
    return () => {
      setDataActors();
      setLoading(true);
    };
  }, [idMovie]);

  if(loading){
    return <Loading />
  }

  return (
    <View style={style.sectionElements}>
      {dataActors.length > 0 ? (
        <FlatList
          data={dataActors}
          renderItem={actor => <Actor actor={actor} />}
          keyExtractor={(actor, i) => `${actor.id}-${i}`}
          horizontal
        />
      ):(
        <View>
          <Text style={style.seeMore}>Actors Not Found</Text>
        </View>      
      )}
    </View>
  )
}

export default ActorsMovie;
