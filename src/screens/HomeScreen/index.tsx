import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HospitalItem from '@components/HospitalItem';
import { http } from '@utils/http';
import { HomeScreenNavigationProp } from '../index';

export type WaitingList = {
  patientCount: number;
  levelOfPain: number;
  averageProcessTime: number;
};

export type Location = {
  lat: string;
  lng: string;
};

interface Hospitals {
  id: string;
  name: string;
  waitingList: WaitingList[];
  location: Location;
}

interface Response {
  hospitals: Hospitals[];
}

function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [isLoading, setLoading] = useState(true);
  const [hospitals, setHospitals] = useState<Hospitals[]>([]);

  const getHospitals = async () => {
    try {
      const data = await http<Response>('https://tripetch-zombie.herokuapp.com/hospitals');
      setHospitals(data.hospitals);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getHospitals();
  }, []);

  const renderItem = ({ item }: { item: Hospitals }) => (
    <HospitalItem
      key={item.id}
      name={item.name}
      onPress={() =>
        navigation.navigate('Detail', {
          name: item.name,
          waitingList: item.waitingList,
          location: item.location,
        })
      }
    />
  );

  return (
    <View style={styles.Container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList data={hospitals} keyExtractor={(_, index) => index.toString()} renderItem={renderItem} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#44AE10',
    flex: 1,
    justifyContent: 'center',
  },
});

export default HomeScreen;
