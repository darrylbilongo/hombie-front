import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { fetchHobbies } from '../actions/hobbies';
import { Appbar } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default () => {
  const hobbies = useSelector(state => state.hobbies)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHobbies(0, 100)).then(console.log)
  }, [])
  return (
    <View style={styles.container}>
      <Appbar />
      <Text>Open up App.js to start working on your app! {JSON.stringify(hobbies)}</Text>
    </View>
  );
};