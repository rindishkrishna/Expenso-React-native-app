import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Boarding from "./Boarding";
import {Hooks} from "../Hooks";
import Icon from "react-native-vector-icons/AntDesign";

/*import Icon from "react-native-vector-icons/SimpleLineIcons";
import Icon from "react-native-vector-icons/SimpleLineIcons";*/
import Header from "./Header";
/*import {Charts} from "./Charts";*/


class Home extends Component {

    static contextType =Hooks;
  render() {
    return (
      <View style={{flex:1,}}>
      <Header />
<View style={styles.cond}>
<View style={styles.cont1}>
    <Icon onPress={console.log("jksk")} size={30} padding={10} name="upload"/>
    <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>
        Pay
    </Text>
</View>

    <View style={styles.cont1}>
        <Icon onPress={console.log("jksk")} size={30} padding={10} name="adduser"/>
        <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>
            Multi Pay
        </Text>
    </View>


    <View style={styles.cont1}>
        <Icon onPress={console.log("jksk")} size={30} padding={10} name="addusergroup"/>
        <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>
            Group
        </Text>
    </View>

    <View style={styles.cont1}>
        <Icon onPress={console.log("jksk")} size={30} padding={10} name="wallet"/>
        <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>
            Wallet
        </Text>
    </View>

</View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
    icon: {
        justifyContent:'center',
        alignItems:'center',
    },
    cond:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
          height:150,
        marginTop:30,
        borderRadius:10,
marginLeft:5,
        marginRight:5,
        backgroundColor:'#5603AD'
    },
    elements: {flex:1,
        backgroundColor:'white',
        height: 80,
        width:80,
        marginRight: 10,
        borderRadius:10,

    },
    cont1:
        {
            flex:1,
            flexDirection: 'column',
            justifyContent:'space-around',
            alignItems:'center',
            height: 80,
            width:80,
            backgroundColor:'white',
            marginLeft:10,
            marginRight:10,
            borderRadius:10,


        }
});



export default Home;

