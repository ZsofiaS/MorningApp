import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colours from '../../constants/colours'

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Morning App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
header: {
    width: '100%',
    height: 90,
    paddingTop: 35,
    backgroundColor: colours.primaryColour,
    alignItems: 'center',
    justifyContent: 'center'
    },
headerTitle: {
    color: 'white',
    fontSize: 18
}
})

  export default Header;