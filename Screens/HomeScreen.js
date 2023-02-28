import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import UnorderedList from 'react-native-unordered-list';
import styles from '../Styles/PageStyle';

const HomeScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
      <View>

        <View style={styles.PageHeader}>
            <Text>Mission Statement</Text>
        </View>

        <View>
          <Text>Supporting personnel in the search and rescue of a lost or missing person.</Text>
        </View>

        <Text>{"\n"}</Text>
        <UnorderedList><Text>Support search and rescue missions</Text></UnorderedList>
        <UnorderedList><Text>Educate the public regarding tuberous sclerosis complex (TSC) and elopment</Text></UnorderedList>
        <UnorderedList><Text>Provide methods to reduce burntime of search missions</Text></UnorderedList>

      </View>

    );
};

export default HomeScreen;