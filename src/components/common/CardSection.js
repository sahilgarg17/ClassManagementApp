import React from 'react';
import {View} from 'react-native';

const CardSection = (props) => {
    return(
        <View style={[styles.containerStyle, props.style]}>
           {props.children}
        </View>      
    );
};
const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        fontSize: 100,
        backgroundColor: '#ffeb3b',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
        marginBottom : 20,
    }
};
export {CardSection};