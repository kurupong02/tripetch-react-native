import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { PharmacyIcon } from '../assets/images';

interface HospitalItemProps {
  name: string;
  onPress: () => void;
}

const HospitalItem: React.FC<HospitalItemProps> = ({ name, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.item}>
        <Image style={styles.icon} source={PharmacyIcon} />
        <Text style={styles.label}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 16,
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
  },
  label: {
    marginLeft: 12,
    fontWeight: 'bold',
  },
});

export default HospitalItem;
