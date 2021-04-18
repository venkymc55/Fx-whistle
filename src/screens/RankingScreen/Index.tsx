import React, { useRef, useCallback, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Button, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';


const { height, width } = Dimensions.get("window")

const HistoryScreen = () => {
    const _goBack = () => console.log('Went back');
    const _handleSearch = () => console.log('Searching');
    const _handleMore = () => console.log('Shown more');


    //   const startCameraMode = () => {
    //     setInterval(() => setDonutValues(), 1000)
    //   }
    return (
        <View style={styles.container}>
            <Appbar.Header style={{ backgroundColor: "#00162B", height: height * 0.05 }}>
                <Appbar.Content title="Whistle" subtitle="Trading signals" style={{ paddingBottom: 15, justifyContent: "center" }} />
                {/* <Appbar.Action icon="magnify" onPress={_handleSearch} style={{ paddingBottom: 15, justifyContent: "center" }} /> */}
                <Appbar.Action icon="logout" onPress={_handleMore} style={{ paddingBottom: 15, justifyContent: "center" }} />
            </Appbar.Header>

            <View style={styles.root}>
            
            <Text> History Screen</Text>
        </View>
        </View>

    )
}

const styles = StyleSheet.create({
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
        backgroundColor: 'white',
        borderRadius: 5
    },
    image: {
        marginTop: 100,
        height: '15%',
        aspectRatio: 3.2
    },
    header1: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 15
    },
    header2: {
        fontSize: 20,
    },
    header3: {
        fontSize: 25,
        borderWidth: 2,
        borderRadius: 5
    },
    wrapper: {
        width: 200,
        height: 200,
    },
    arc1: {
        position: 'absolute',
    },
    absolute: {
        position: 'absolute',
    },
})

export default HistoryScreen;