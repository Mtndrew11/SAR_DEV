import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from '../Styles/PageStyle'

const TeamsScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
      <View>
        <View style={styles.PageHeader}>
            <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
            <Text>Header</Text>
        </View>

        <View>
          <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
          <Text style={styles.h1}>My Teams</Text>
          <Button
            style={styles.buttonContainer}
            title="Create a Team"
            onPress={() => Alert.alert('Button clicked!')}>
          </Button>
          <Button
            style={styles.buttonContainer}
            title="Join a Team"
            onPress={() => Alert.alert('Button clicked!')}>
          </Button>
          <Text>{"\n"}</Text>
          <Text>Add child info</Text>
        </View>
      </View>
    );
};

export default TeamsScreen;