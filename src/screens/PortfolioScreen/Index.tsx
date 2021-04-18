import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { Appbar } from 'react-native-paper'; 

const { height, width } = Dimensions.get("window")

const PortfolioScreen = () => {
    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');
    return (
        <View style={styles.container}>
            <Appbar.Header style={{ backgroundColor: "#00162B", height: height * 0.05}}>
                <Appbar.Content title="Whistle" subtitle="Trading signals" style={{paddingBottom: 15, justifyContent: "center"}} />
                {/* <Appbar.Action icon="magnify" onPress={_handleSearch} style={{paddingBottom: 15, justifyContent: "center"}}/> */}
                <Appbar.Action icon="logout" onPress={_handleMore} style={{paddingBottom: 15, justifyContent: "center"}}/>
            </Appbar.Header>
        <View style={styles.root}>
            
            <Text>PortfolioScreen</Text>
        </View>
        </View>

    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00162B",
        height: "50%", 
        marginTop: 40
      },
    root: {
        padding: 20,
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white'
    }
})

export default PortfolioScreen;