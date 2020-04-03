import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import { fetchHobbies } from '../actions/hobbies';
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
  const hobbies = useSelector(state => state.hobbies.list)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHobbies(0, 100)).then(console.log)
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {<CardList list={hobbies}/>}
      </ScrollView>
    </SafeAreaView>
  );
};