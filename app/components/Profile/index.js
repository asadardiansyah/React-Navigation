import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, Dimensions, Button } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import PersonObj from '../../Models/PersonObj.ts';

class Profile extends Component {
    
    constructor() {
        super()
        this.state = {
            isEdit: "Edit",
            border: {
                borderWidth: 0,
            },
            editA : false
        }
        this.person = new PersonObj()
    }

    save = async (key, object) => {
        console.log('mulai proses save')
        console.log('key: '+key)
        console.log('value: '+object)
        try {
          await AsyncStorage.setItem(key,object);
        } catch (error) {
          console.log(error)
        }
      };

    load = async (key) => {
        console.log('mulai proses load')
        try {
          const value = await AsyncStorage.getItem(key);
          if (value !== null) {
            console.log('cetak value')
            console.log(value);
          }
          else {
            console.log('ini disini')
            console.log(value)
          }
        } catch (error) {
          console.log('ini error')
          console.log(error)
        }
      };

    butonPressed = () => {
        const {isEdit, editA} = this.state
        this.setState({
            isEdit: isEdit == 'Done' ? 'Edit' : 'Done',
            border: {
                borderWidth: isEdit == 'Done' ? 0 : 0.5,
            },
            editA: !editA
        })
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Profile',
        headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
    });

    render() {
        const { isEdit, editA, border } = this.state
        const { navigation } = this.props
        const item_ = navigation.getParam('itemKey')
        const obj = item_.obj
        let arr=[]
        let keyArr=['Name','Date of Birth','Address','Roles','Motto']
        let valueArr=[obj.name + 'aaa', '15 February 1995', 'Gresik, East Java', 'iOS Developer','Be kind, be brave']
        for (let i=0; i<5; i++){
            let a = i == 0 ? true : false
            arr.push(
                <View style={{flexDirection: 'row', marginVertical: 10}}>
                    <Text style={styles.key}>{keyArr[i]}</Text>
                    <TextInput
                        editable = {editA}
                        style={[styles.value, border]}>{valueArr[i]}</TextInput>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <Image source={item_.src} style={styles.image}></Image>
                <TextInput
                    editable = {editA}
                    style={[styles.title, border]}>{item_.key}
                </TextInput>
                <Button
                    style={{marginBottom: 20}}
                    onPress={() => {
                            this.butonPressed()
                        }
                    }
                    title={isEdit}
                />
                <ScrollView style={{marginTop:20}} horizontal pagingEnabled>
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
        borderRadius: 5,
        borderColor: 'grey',
        alignSelf: 'baseline',
        borderWidth: 2,
        paddingHorizontal: 20,
    },
    image: {
        width: 100,
        height: 100,
        alignItems: 'center',
        marginTop: 30
    },
    title: {
        paddingHorizontal: 15,
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
        alignSelf: 'center',
        flex: 1.5,
    },
    value: {
        color: 'grey',
        fontSize: 17,
        height: 40,
        flex: 3.5,
        paddingHorizontal: 5,
        borderRadius: 5
    },
})

export default Profile