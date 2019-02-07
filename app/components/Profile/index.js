import React, { Component } from 'react'
import { AsyncStorage, View, StyleSheet, Text, Image, Dimensions, Button } from 'react-native'
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
            editA : false,
            person: new PersonObj()
        }
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
        console.log('mulai proses load '+key)
        try {
          const value = await AsyncStorage.getItem(key);
          if (value !== null) {
            console.log('cetak value')
            console.log(value);
            this.setState({
                person: JSON.parse(value)
            })
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
        const { navigation } = this.props
        const item_ = navigation.getParam('itemKey')
        const {isEdit, editA} = this.state
        this.setState({
            isEdit: isEdit == 'Done' ? 'Edit' : 'Done',
            border: {
                borderWidth: isEdit == 'Done' ? 0 : 0.5,
            },
            editA: !editA
        })
        if (this.state.isEdit == 'Done') {
            this.save(item_.key, JSON.stringify(this.state.person))
            this.load(item_.key)
        }
    }

    handleChange = (text, index, obj) => {
        console.log(text)
        console.log(index)
        console.log(JSON.stringify(obj))

        switch (index) {
        case 0:
            obj.name = text
            break
        case 1:
            obj.dob = text
            break
        case 2:
            obj.address = text
            break
        case 3:
            obj.roles = text
            break
        case 4:
            obj.motto = text
            break
        }

        this.setState({
            person: obj
        })
        console.log('setelah diedit '+JSON.stringify(this.state.person))
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Profile',
        headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
    });


    componentDidMount(){
        const { navigation } = this.props
        const item_ = navigation.getParam('itemKey')
        console.log('key: '+item_.key)
        this.load(item_.key)
    }

    render() {
        
        const { isEdit, editA, border } = this.state
        const { navigation } = this.props
        const item_ = navigation.getParam('itemKey')
        const obj = this.state.person
        let arr=[]
        let keyArr=['Name','Date of Birth','Address','Roles','Motto']
        let valueArr=[person.name, person.dob, person.address, person.roles, person.motto]
        for (let i=0; i<5; i++){
            let a = i == 0 ? true : false
            arr.push(
                <View style={{flexDirection: 'row', marginVertical: 10}}>
                    <Text style={styles.key}>{keyArr[i]}</Text>
                    <TextInput
                        onChangeText={
                            (text) => this.handleChange(text, i, obj, item_.key)
                        }
                        editable = {editA}
                        style={[styles.value, border]}>{valueArr[i]}</TextInput>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <Image source={item_.src} style={styles.image}></Image>
                <Text style={styles.title}>{item_.key}</Text>
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