import React, { useRef, useCallback, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Button, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';
import Circle from '../../components/Circle';
import { Box, DrawerContent, DrawerHeader } from "../../components";
import Donut from "../../components/Donut";

const { height, width } = Dimensions.get("window")

const HomeScreen = () => {
    const _goBack = () => console.log('Went back');
    const _handleSearch = () => console.log('Searching');
    const _handleMore = () => console.log('Shown more');


    //   const startCameraMode = () => {
    //     setInterval(() => setDonutValues(), 1000)
    //   }
    return (
        <View style={styles.container}>
            <Appbar.Header style={{ backgroundColor: "#00162B", height: height * 0.03 }}>
            <Appbar.Action icon="menu"  style={{ paddingBottom: 15, justifyContent: "center" }} />
                <Appbar.Content title="Whistle" subtitle="Trading signals" style={{ paddingBottom: 15, justifyContent: "center" }} />
                {/* <Appbar.Action icon="magnify" onPress={_handleSearch} style={{ paddingBottom: 15, justifyContent: "center" }} /> */}
                <Appbar.Action icon="logout" onPress={_handleMore} style={{ paddingBottom: 15, justifyContent: "center" }} />
            </Appbar.Header>

            <ScrollView>
                <View style={styles.root}>
                    <Text style={styles.header1}>Welcome to Whistle</Text>
                    <Text style={styles.header2}>Forex signal management system</Text>
                </View>
                <View style={{ borderRadius: 10}}>  
                    <Donut />
                </View>
                {/* # To do List
                # Add details about company in home  */}
                <View style={styles.root}>

                    <Circle
                        activeColor="#00162B"
                        passiveColor="darkgrey"
                        baseColor="white"
                        width={50}
                        done={80}
                        radius={100}
                        duration={10000}
                    >
                        <Text style={styles.header2}>80%</Text>
                    </Circle>
                    <Text style={styles.header3}> Last week accuracy result</Text>
                </View>
            </ScrollView>
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

export default HomeScreen;