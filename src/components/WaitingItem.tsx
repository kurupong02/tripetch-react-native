import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface WaitingItemProps {
  count: string;
  level: string;
  time: string;
}

const WaitingItem: React.FC<WaitingItemProps> = ({ level, count, time }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>Level: {level}</Text>
      <View style={styles.details}>
        <Text>Count: {count}</Text>
        <Text>Average Time: {time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFDBDB',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
  },
  icon: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  details: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default WaitingItem;
