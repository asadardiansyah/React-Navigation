import React, { Component } from 'react'
import { AsyncStorage, View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import PersonObj from '../../Models/PersonObj';

class Dashboard extends Component {
    
    static navigationOptions = ({ navigation }) => ({
        title: 'Dashboard',
         headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
        });
    
    renderSeparator(){
        return (
        <View
            style={{
                height: 0.4,
                backgroundColor: "grey",
            }}
        />
    )}

    cellTapped(item) {
        console.log(item)
        console.log('Tapped')
        this.props.navigation.navigate('profile', {
            itemKey: item,
            isEditButton: true
        })
        // this.save(item.obj.name,JSON.stringify(item.obj))
        // this.load(item.obj.name)
    }

    save = async (key, object) => {
        console.log('mulai proses save')
        console.log('key: '+key)
        console.log('value: '+object)
        try {
          await AsyncStorage.setItem(key,object);
        } catch (error) {
          // Error saving data
          console.log(error)
        }
      };

    load = async (key) => {
        console.log('mulai proses load')
        try {
          const value = await AsyncStorage.getItem(key);
          if (value !== null) {
            // We have data!!
            console.log('cetak value')
            console.log(value);
          }
          else {
            console.log('ini disini')
            console.log(value)
          }
        } catch (error) {
          // Error retrieving data
          console.log('ini error')
          console.log(error)
        }
      };

    render() {
        console.log('mulai render dashboard')
        let arrData = []
        let nama = ['Martin','Ismail','Suryo','Ridwam','Asad','Wachid','Hengki']
        let desc = 'In this example, We will make a simple list which will have A to Z as items and will show an alert with the item id and name while clicking on the single item of the list. So let’s get started.'
        var ico = require('../../assets/boy-1.png')

        for (let i=0; i<nama.length; i++){
            switch (i) {
                case 0: ico = require('../../assets/boy-1.png')
                break
                case 1: ico = require('../../assets/boy-2.png')
                break
                case 2: ico = require('../../assets/boy-3.png')
                break
                case 3: ico = require('../../assets/boy-4.png')
                break
                case 4: ico = require('../../assets/boy-5.png')
                break
                case 5: ico = require('../../assets/boy-6.png')
                break
                case 6: ico = require('../../assets/boy-7.png')
                break
            }
            var person = new PersonObj()
            person.name = nama[i]
            person.description = desc
            
            arrData.push(
                {
                    obj: person,
                    key: nama[i],
                    src: ico,
                    description: desc
                }
            )
            
        }
        
        return (
            <View style={styles.container}>
                <FlatList style={{flex: 1}}
                    ItemSeparatorComponent={this.renderSeparator}
                    data={arrData}
                    renderItem={({item, index}) =>
                        <TouchableOpacity style={styles.cell} onPress={_ => this.cellTapped(item)}>
                            <Image source={item.src} style={styles.image}></Image>
                            <View style={styles.container}>
                                <Text style={styles.title}>{item.key}</Text>
                                <Text style={styles.desc}>{desc}</Text>
                            </View>
                        </TouchableOpacity> 
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    item: {
        fontSize: 18,
        height: 40,
    },
    separator:{
        backgroundColor: 'red',
        height: 2
    },
    cell: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'center',
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    title: {
        color: 'black',
        fontSize: 17
    },
    desc: {
        color: 'grey',
        fontSize: 13
    }
    
})

export default Dashboard