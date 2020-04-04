import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { fetchHobbies, selectHobby, unselectHobby, getHobbies } from '../actions/hobbies';
import CardList from './CardList';
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
  //const hobbies = useSelector(state => state.hobbies.list);
  const hobbies = getHobbies();
  const selectedHobbies = useSelector(state => state.hobbies.selected);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHobbies(0, 100))
  }, [])
  const handleSelect = id => {
    dispatch(selectHobby(id))
  }
  const handleUnselect = id => {
    dispatch(unselectHobby(id))
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <CardList list={hobbies} selectedCards={selectedHobbies} onSelect={handleSelect} onUnselect={handleUnselect} />
      </ScrollView>
    </SafeAreaView>
  );
};