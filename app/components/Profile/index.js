import React, { Component } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
 
class Profile extends Component {
static navigationOptions = ({ navigation }) => ({
    title: 'Profile',
    headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
});

    render() {
        const { navigation } = this.props
        const item_ = navigation.getParam('itemKey')
        return (
            <View style={styles.container}>
                <Image source={item_.src} style={styles.image}></Image>
                <Text style={styles.title}>{item_.key}</Text>
                <Text style={styles.description}>{item_.description}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        margin: 10
    },
    image: {
        width: 100,
        height: 100,
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
        color: 'black',
        marginTop: 10,
        marginBottom: 10,
    },
    description: {
        textAlign: 'center',
        color: 'grey',
        fontSize: 15,
    },
})

export default Profile