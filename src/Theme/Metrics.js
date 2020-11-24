import { Dimensions } from 'react-native';
import Colors from "./Colors";
import Fonts from "./Fonts";

const {width, height} = Dimensions.get("screen");

const Metrics = {
  borderRadiusInput: 20,
  borderContainer: "20 20 0 0",
  borderMovies: 20,
  inputSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    paddingVertical: 0,
    paddingHorizontal: 5,
    backgroundColor: Colors.transparentInput,
    marginVertical: 15,
    width: width - 150,
    height: 38,
  },
  containerPrincipal: {
    backgroundColor: Colors.blueBackground,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerFullPrincipal: {
    flex: 3,
  },
  containerSecondary: {
    flex: 2,
    backgroundColor: Colors.containerBackground,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 20,
    paddingVertical: 30,
    width: width,
  },
  button: {
    fontSize: 11,
    fontWeight: "Bold",
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  typeDefinition: {
    width: 18,
    height: 15,
  },
  headerMovie: {
    flex: 1,
    width: width,
  },
  backgroundMovie: {
    flex: 1,
  },
  bodyContainerMovie: {
    flex: 2,
    backgroundColor: Colors.containerBackground,
    width: width,
  },
  bodyContainerMovieScroll: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginBottom: 5
  }
}

export default Metrics;