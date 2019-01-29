import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
 
class Home extends Component {
    static navigationOptions = {
        header: null
    }
    state = {uname: "", pwd: ""}
    
    loginPressed() {
        const { username, password } = this.state
        if (username == password) {
            this.props.navigation.navigate('dashboard')
        }
        else {
            Alert.alert('Error', 'Username / password missmatch', [{
                text: 'Okay'
            }])
        }
    }   

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 25, marginBottom: 10, textAlign: "center"}}> Login into App</Text>
                <TextInput autoCapitalize='none' borderColor='red' placeholder='Username' style={styles.textField}
                    onChangeText={text=>this.setState({username: text})}/>
                <TextInput placeholder='Password' secureTextEntry style={styles.textField}
                    onChangeText={text=>this.setState({password: text})}
                />
                <TouchableOpacity onPress={_ => this.loginPressed() } style={styles.button}>
                    <Text style={{color: 'white', textAlign:'center'}}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 20,
        justifyContent: 'center'
    },
    textField: {
        marginTop: 10,
        borderBottomWidth: 1,
        borderColor: 'grey',
        height: 30
    },  
    button: {
        marginTop: 20,
        backgroundColor: 'navy',
        height: 40,
        justifyContent: 'center',
        borderRadius: 5,
        elevation: 2,
    }
})
export default Home