import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'; 
import { Icon } from '@rneui/themed';
import { colors } from '../global/styles';

function SearchScreen({navigation}) {
  return (
    <View style={{
        height:'100%',
        // backgroundColor:'#f2f2f2',
        marginHorizontal: 10
    }}>
        <View style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between'}}>
                <TouchableOpacity
                    onPress={()=>{
                        navigation.navigate('PlaylistScreen');
                    }}>
                    <Icon
                        type='material-community'
                        name='arrow-left'
                        size={30}
                        iconStyle={{
                        // marginLeft:10,
                        color:colors.text2,
                        marginTop:20}}
                    />
                </TouchableOpacity>
            <View style={{
                flexDirection:'row',
                width:330,
                borderWidth:1,
                borderRadius:50,
                alignItems:'center',
                marginTop:20,
                height:50,
                borderColor:colors.text2
            }}>
                <TextInput 
                placeholder="Search Here" 
                placeholderTextColor={colors.text2}
                style={{
                    fontSize:18,
                    color:colors.text2,
                    paddingLeft:20,
                    // width:'100%'
                }}></TextInput>
            </View>
        </View>
        <View style={{
            marginTop:10,
            borderTopColor:colors.text2,
            borderTopWidth:1
        }}>
                <Text>Search Result</Text>
        </View>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({

})

