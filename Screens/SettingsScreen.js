import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { TouchableRipple, Switch } from 'react-native-paper'
import styles from '../Styles/PageStyle'

const SettingsScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }    

    return (
      <View>
        <Text style={styles.h1}>Profile</Text>
          <Text>UserName: JohnSmith</Text>
          <Text>Email: JohnSmith@live.com</Text>
          <Text>{"\n"}</Text>
        <Text style={styles.h1}>Preferences</Text>
        
          <Text>2FA</Text>
          <TouchableRipple onPress={() => {toggleTheme()}}>
              <View style={styles.preference}>
                  <Text>Dark Theme</Text>
                  <View pointerEvents="none">
                      <Switch value={isDarkTheme}/>
                  </View>
              </View>
          </TouchableRipple>
          <Text>{"\n"}</Text>

        <Text style={styles.h1}>Notifications</Text>
      </View>
    );
};

export default SettingsScreen;