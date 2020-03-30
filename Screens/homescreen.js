import React from 'react';
import {View,StyleSheet,Text,ScrollView,Image,TouchableOpacity} from 'react-native';

export default class Homescreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.header}>Welcome</Text>
                <Text style={styles.subheader}>Develop your course study plan according to your hobbies and escort your study</Text>
                <View style={{height:'40%'}}>
                    <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    >
                        <View>
                            <Image source={require('../images/1.png')} style={{width:200,height:200,marginHorizontal:80}}/>
                            <Text style={{textAlign:'center',fontSize:14,color:'rgba(0, 0, 0, 0.5)',marginVertical:10}}>Login and Registrations are free</Text>
                        </View>
                        <View>
                            <Image source={require('../images/2.png')} style={{width:200,height:200,marginHorizontal:80}}/>
                            <Text style={{textAlign:'center',fontSize:14,color:'rgba(0, 0, 0, 0.5)',marginVertical:10}}>Login and Registrations are free</Text>
                        </View>
                        <View>
                            <Image source={require('../images/3.png')} style={{width:200,height:200,marginHorizontal:80}}/>
                            <Text style={{textAlign:'center',fontSize:14,color:'rgba(0, 0, 0, 0.5)',marginVertical:10}}>Login and Registrations are free</Text>
                        </View>
                    </ScrollView>
                    </View>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Login')}}>
                        <View style={styles.btn}>
                            <Text style={{fontSize:13,color:'#fff',textAlign:'center',top:'30%'}}>Continue With the Mobile Number</Text>
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
        fontSize : 35,
        fontWeight : 'bold',
        position : 'absolute',
        top : 50
    },
    subheader : {
        position : 'absolute',
        top : 100,
        textAlign : 'center',
        paddingLeft : 10,
        paddingRight : 10,
        color : 'rgba(0, 0, 0, 0.5)'
    },
    btn : {
        top : 35,
        alignSelf : 'center',
        width : 320,
        height : 55,
        backgroundColor : '#EB2075',
        borderRadius : 10
    },
    orheader : {
        alignSelf : 'center',
        top : 55,
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