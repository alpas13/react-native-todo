import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import { Theme } from '../../const';

export const AppLoader = () => {
    return (
        <View style={styles.centre}>
            <ActivityIndicator size={"large"} color={Theme.MAIN_COLOR}/>
        </View>
    );
}; 

const styles = StyleSheet.create({
    centre: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});