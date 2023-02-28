import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { FlatGrid } from 'react-native-super-grid';
import styles from '../Styles/PageStyle'

const ActiveSearchesScreen = ({navigation}) => {

  const { colors } = useTheme();
  const theme = useTheme();

  // This will be pulled from the database
  const [items, setItems] = React.useState([
    { name: 'John Smith', code: '#34495e' },
    { name: 'John Doe', code: '#34495e' },
  ]);
  
    return (
      
      <FlatGrid
        itemDimension={130}
        data={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        spacing={10}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
        )}
      />

    );
}

export default ActiveSearchesScreen;