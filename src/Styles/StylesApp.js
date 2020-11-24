import { StyleSheet } from "react-native";
import Metrics from '../Theme/Metrics';
import Colors from '../Theme/Colors';
import Fonts from '../Theme/Fonts';


export default StyleSheet.create({
  container:{
    ...Metrics.containerPrincipal
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 10
  },
  bodyContainer: {
    ...Metrics.containerSecondary,
  },
  bodyFullContainer: {
    ...Metrics.containerFullPrincipal,
  },
  loading: {
    marginVertical: 45,
    alignItems: 'center',
  },
  title:{
    ...Fonts.bigTitle
  },
  sections: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 20
  },
  sectionTitle: {
    ...Fonts.sectionTitle
  },
  seeMore: {
    ...Fonts.seeMore
  },
  inputSearch: {
    ...Metrics.inputSearch,
    borderWidth: 0
  },
  contentsMovies: {
    marginBottom: 10,
  },
  contentMovie: {
    marginLeft: 0,
    marginRight: 20,
    marginVertical: 10,
    maxWidth: 100,
    alignItems: 'flex-start',
  },
  titleMovie: {
    ...Fonts.titleMovie,
  },
  imgMovie: {
    width: 100,
    height: 150,
    marginBottom: 10,
    borderRadius: 20
  },
  contentStars: {
    marginVertical: 5
  },
  starOn: {
    color: Colors.colorStarOn,
  },
  starOff: {
    color: Colors.colorStarOff
  },
  inputContainerSearch: {
    backgroundColor: Colors.transparent,
    borderWidth: 0
  },
  headerMovie: {
    ...Metrics.headerMovie,
  },
  bodyContainerMovie: {
    ...Metrics.bodyContainerMovie,
  },
  bodyContainerMovieScroll: {
    ...Metrics.bodyContainerMovieScroll,
  },
  backgroundMovie: {
    ...Metrics.backgroundMovie,
    resizeMode: "cover",
  },
  navigationMovie: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 25,
  },
  bigTitleMovie: {
    ...Fonts.bigTitleMovie
  },
  sectionElements: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  buttonVisit: {
    borderRadius: 25,
    backgroundColor: Colors.gray,
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  normalText: {
    ...Fonts.normalText
  },
  actor: {
    maxWidth: 50,
    marginLeft: 0,
    marginRight: 20,
  },
  imageActor: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  actorText: {
    ...Fonts.actorText,
    textAlign: 'center',
  },
  boldSubtitle: {
    ...Fonts.boldSubtitle,
  },
  sectionElementsII: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  }
});