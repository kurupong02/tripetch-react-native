import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import WaitingItem from '@components/WaitingItem';

import type { DetailScreenRouteProp } from '../index';
import type { WaitingList } from '../HomeScreen';

function DetailScreen() {
  const { params } = useRoute<DetailScreenRouteProp>();
  const { name, location, waitingList } = params;

  const renderItem = ({ item, index }: { item: WaitingList; index: number }) => (
    <WaitingItem
      key={index.toString()}
      count={item.patientCount.toString()}
      level={item.levelOfPain.toString()}
      time={item.averageProcessTime.toString()}
    />
  );

  return (
    <View style={styles.Container}>
      <Text>Name: {name}</Text>
      <Text>latitude: {location.lat}</Text>
      <Text>longitude: {location.lng}</Text>
      <FlatList data={waitingList} keyExtractor={(_, index) => index.toString()} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#fff',
    padding: 20,
    flex: 1,
  },
});

export default DetailScreen;
