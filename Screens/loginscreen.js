import React from 'react';
import {View,StyleSheet,Text,Image,CheckBox,TouchableOpacity} from 'react-native';

export default class Loginscreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../images/4.png')} style={{position:'absolute',top:60,width:100,height:100}}/>
                <Text style={styles.header}>Welcome To Sign Up</Text>
                <Text style={styles.subheader}>After Registration start your study career, and enjoy !</Text>
                <View style={styles.inputone}>
                    <View style={styles.iconone}>
                        <Image source={require('../images/phone.png')} style={{width:20,height:20}}/>
                    </View>
                    <View style={styles.titleone}>
                        <Text style={{alignItems:'flex-start',top:15,color:'rgba(0, 0, 0, 0.5)'}}>Please Enter Your Mobile Number</Text>
                    </View>
                </View>
                <View style={styles.inputtwo}>
                    <View style={styles.iconone}>
                    <Image source={require('../images/lock.png')} style={{width:20,height:20}}/>
                    </View>
                    <View style={styles.titleone}>
                    <Text style={{alignItems:'flex-start',top:15,color:'rgba(0, 0, 0, 0.5)'}}>6-10 character of numbers or letters</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Login')}}>
                    <View style={styles.btn}>
                        <Text style={{fontSize:13,color:'#fff',textAlign:'center',top:'30%'}}>Sign Up</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.checkboxcontainer}>
                    <View style={styles.checkbox}>
                        <CheckBox/>
                    </View>
                    <View style={styles.textcontainer}>
                        <Text>Remember Me</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.login} onPress={()=>{this.props.navigation.navigate('Home');}}>
                    <View>
                        <Text style={{fontSize:12,color : 'rgba(0, 0, 0, 0.5)'}}>Have an Account Sign In ?</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.orheader}>OR</Text>
                <View style={styles.googlebox}>
                    <View style={styles.icon}>
                        <Image source={require('../images/google.png')} style={{width:26,height:26}}/>
                    </View>
                    <View style={styles.title}>
                        <Text style={{fontWeight:'bold'}}>Google</Text>
                    </View>
                </View>
                <View style={styles.facebookbox}>
                    <View style={styles.icon}>
                        <Image source={require('../images/facebook.png')} style={{width:26,height:26}}/>
                    </View>
                    <View style={styles.title}>
                        <Text style={{fontWeight:'bold'}}>Facebook</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#fff'
    },
    header : {
        fontWeight : 'bold',
        fontSize : 28,
        position : 'absolute',
        top : 160,

    },
    subheader : {
        fontSize : 15,
        color : 'rgba(0, 0, 0, 0.5)',
        textAlign:'center',
        position : 'absolute',
        top : 205,
        paddingHorizontal : 10
    },
    inputone : {
        width : 320,
        height : 50,
        backgroundColor : '#F2F2FF',
        borderRadius : 5,
        display : 'flex',
        flexDirection : 'row'
    },
    inputtwo : {
        width : 320,
        height : 50,
        backgroundColor : '#F2F2FF',
        borderRadius : 5,
        top : 20,
        display : 'flex',
        flexDirection : 'row'
    },
    iconone : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        opacity : 0.5
    },
    titleone : {
        flex : 5
    },
    btn : {
        top : 85,
        alignSelf : 'center',
        width : 320,
        height : 55,
        backgroundColor : '#EB2075',
        borderRadius : 10
    },
    checkboxcontainer : {
        height : 30,
        width : 140,
        position : 'absolute',
        top : 525,
        left : 20,
        display : 'flex',
        flexDirection : 'row'
    },
    checkbox : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    textcontainer : {
        flex : 4,
        alignItems : 'center',
        justifyContent : 'center'
    },
    login : {
        height : 30,
        width : 140,
        position : 'absolute',
        top : 532,
        left : 200,
    },
    orheader : {
        alignSelf : 'center',
        top : 150,
        color : 'rgba(0, 0, 0, 0.5)',
    },
    googlebox : {
        height : 50,
        width : 130,
        borderWidth : 1,
        borderColor : 'rgba(0, 0, 0, 0.5)',
        borderRadius : 5,
        top : 600,
        left : 25,
        position : 'absolute',
        display : 'flex',
        flexDirection : 'row'
    },
    facebookbox : {
        height : 50,
        width : 130,
        borderWidth : 1,
        borderColor : 'rgba(0, 0, 0, 0.5)',
        borderRadius : 5,
        top : 600,
        left : 205,
        position : 'absolute',
        display : 'flex',
        flexDirection : 'row'
    },
    icon : {
        flex : 1,
        alignItems : 'center',
        justifyContent: 'center'
    },
    title : {
        flex : 2,
        alignItems:'center',
        justifyContent:'center'
    }
})