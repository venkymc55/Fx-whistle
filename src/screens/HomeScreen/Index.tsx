import React from 'react';
import { DrawerActions } from "@react-navigation/native";
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Box, DrawerHeader, DrawerContent } from "../../components";
import { HomeNavigationProps } from "../../navigation/navigation";
// import { Box, DrawerContent, DrawerHeader } from "../../components";

const { height } = Dimensions.get("window")

const HomeScreen = ({ navigation }: HomeNavigationProps<"HomeScreen">) => {
    const _goBack = () => console.log('Went back');
    const _handleMore = () => console.log('Shown more');


    //   const startCameraMode = () => {
    //     setInterval(() => setDonutValues(), 1000)
    //   }
    return (
        <DrawerContent>
        <Box backgroundColor="background3">
          <DrawerHeader
            left={{icon: "menu", onPress: () => navigation.dispatch(DrawerActions.openDrawer()), color: "background"}}
            right={{ icon: "bell", onPress: () => true }}
            title="Whistle"
          />
        </Box>

            <ScrollView>
                <View style={styles.root}>
                    <Text style={styles.header1}>Welcome to Whistle</Text>
                    <Text style={styles.header2}>Forex signal management system</Text>
                </View>
                {/* # To do List
                # Add details about company in home  */}
                <View style={styles.root}>

                    <Text style={styles.header3}> Last week accuracy result</Text>
                </View>
            </ScrollView>
        </DrawerContent>

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