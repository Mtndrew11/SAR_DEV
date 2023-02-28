import React from 'react';
import MapView from 'react-native-maps';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from '../Styles/PageStyle'

const MapScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
    <View>
      
      <View style={styles.PageHeader}>
          <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
          <Text>Map Header</Text>
      </View>

      
      <View style={styles.container}>
        <MapView style={styles.map} />
      </View>
      
    </View>
      
    );
};

export default MapScreen;