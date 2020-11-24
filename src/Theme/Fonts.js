import Colors from './Colors';

export const family = {
  base: "OpenSans"
}

const size = {
  big: 22,
  h1: 20,
  h2: 16,
  h3: 14,
  medium: 14,
  small: 12,
  tiny: 10
};

const Fonts = {
  bigTitle: {
    fontSize: size.big,
    fontWeight: "bold",
    fontFamily: family.base,
    color: Colors.white,
    lineHeight: 32
  },
  bigTitleMovie: {
    fontSize: size.h1,
    fontWeight: "bold",
    fontFamily: family.base,
    color: Colors.white,
  },
  titleMovie: {
    fontSize: size.tiny,
    fontWeight: "600",
    fontFamily: family.base,
    color: Colors.white,
  },
  sectionTitle: {
    fontSize: size.small,
    fontWeight: "600",
    fontFamily: family.base,
    color: Colors.white,
    textTransform: 'uppercase',
  },
  normalText: {
    fontSize: size.small,
    fontWeight: "300",
    lineHeight: 24,
    fontFamily: family.base,
    color: Colors.text,
  },
  actorText: {
    fontSize: size.small,
    fontWeight: "300",
    lineHeight: 18,
    fontFamily: family.base,
    color: Colors.text,
  },
  seeMore: {
    fontSize: size.small,
    fontWeight: "300",
    lineHeight: 24,
    fontFamily: family.base,
    color: Colors.seeMore,
  },
  boldSubtitle: {
    fontSize: size.small,
    fontWeight: "600",
    lineHeight: 24,
    fontFamily: family.base,
    color: Colors.white,
  },
  input: {
    fontSize: size.small,
    fontWeight: "300",
    lineHeight: 24,
    fontFamily: family.base,
    color: Colors.white,
    borderWidth: 0
  }
};

export default Fonts;