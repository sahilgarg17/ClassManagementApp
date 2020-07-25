//import libraries
import React from 'react';
import {Text, View} from 'react-native';
//create component
const Header = props => {
  //  const {textStyle, viewStyle} = styles;
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  );
};
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 2},
    shadowOpacity: 0.2,
    elevation: 10,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
};
//make component available to other parts of the app
export {Header};