import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
 
class Profile extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Profile',
        headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
    });

    render() {
        const { navigation } = this.props
        const item_ = navigation.getParam('itemKey')
        let arr=[]
        let keyArr=['Name','Date of Birth','Address','Roles','Motto']
        let valueArr=[item_.key, '15 February 1995', 'Gresik, East Java', 'iOS Developer','Be kind, be brave']
        for (let i=0; i<5; i++){
            arr.push(
                <View style={{flexDirection: 'row',}}>
                    <Text style={styles.key}>{keyArr[i]}</Text>
                    <Text style={styles.value}>{valueArr[i]}</Text>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <Image source={item_.src} style={styles.image}></Image>
                <Text style={styles.title}>{item_.key}</Text>
                <ScrollView horizontal pagingEnabled>
                    <Text style={styles.description}>{item_.description}</Text>
                    <View style={styles.biodata}>
                        {arr}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    biodata:{
        width: Dimensions.get('screen').width - 20,
        padding: 20,
    },
    image: {
        width: 100,
        height: 100,
        alignItems: 'center',
        marginTop: 30
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        color: 'black',
        marginTop: 10,
        marginBottom: 10,
    },
    description: {
        textAlign: 'center',
        color: 'grey',
        fontSize: 17,
        width: Dimensions.get('screen').width - 20
    },
    key: {
        color: 'black',
        fontSize: 17,
        flex: 2,
    },
    value: {
        color: 'grey',
        fontSize: 17,
        flex: 3
    },
})

export default Profile