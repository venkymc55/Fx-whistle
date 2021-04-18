import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { Appbar } from 'react-native-paper';

const { height, width } = Dimensions.get("window")


const ProfileScreen = () => {

    const _handleSearch = () => console.log('Searching');

  const _handleLogout = () => console.log('Logging Out');

    return (
        <View style={styles.container}>
            <Appbar.Header style={{ backgroundColor: "#00162B", height: height * 0.05}}>
            <Appbar.Content title="Whistle" subtitle="Trading signals" style={{paddingBottom: 15, justifyContent: "center"}}/>
            {/* <Appbar.Action icon="magnify" onPress={_handleSearch} style={{paddingBottom: 15, justifyContent: "center"}}/> */}
            <Appbar.Action icon="logout" onPress={_handleLogout} style={{paddingBottom: 15, justifyContent: "center"}}/>
            </Appbar.Header>
        <View style={styles.root}>
        </View>
        </View>

    )
}


const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00162B",
        height: height, 
        marginTop: 40
      },
    root: {
        padding: 20,
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white'
    }
})

export default ProfileScreen;