import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { fetchHobbies, selectHobby, unselectHobby } from '../actions/hobbies';
import ListSection from './ListSection';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    scrollView: {
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
});

export default () => {

    const selectedHobbies = useSelector(state => state.hobbies.selected);

    return (
        <View>
            {selectedHobbies.map(hobby => {
                <ListSection key={hobby.id} title={hobby.name} items={hobby.items}/>
            })}
        </View>
      );
}