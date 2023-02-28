import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Button, View, StyleSheet, Pressable } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper'

export function DrawerContent(props) {

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }    

    return(
        <View style={{flex:1}}>
            
            <DrawerContentScrollView {...props}>
                
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                            <View style={{flexDirection:'row',marginTop: 15}}>
                                <Avatar.Image
                                    source={{
                                        uri: '#'
                                    }}
                                    size={50}
                                />
                                <View style={{marginLeft:15, flexDirection:'column'}}>
                                    <Title style={styles.title}>John Smith</Title>
                                    <Caption style={styles.caption}>JohnSmith@live.com</Caption>
                                </View>
                            </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate ('Home')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="magnify"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Active Searches"
                            onPress={() => {props.navigation.navigate ('Active Searches')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="map-marker-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Map"
                            onPress={() => {props.navigation.navigate ('Map')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="account-multiple"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Teams"
                            onPress={() => {props.navigation.navigate ('Teams')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="file-document-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Resources"
                            onPress={() => {props.navigation.navigate ('Resources')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="cog-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate ('Settings')}}
                        />

                    </Drawer.Section>

                </View>

            </DrawerContentScrollView>

            <Drawer.Section style={StyleSheet.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {props.navigation.navigate ('Login')}}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    DrawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});