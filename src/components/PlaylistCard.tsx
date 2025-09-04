import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Icon } from '@rneui/themed';
import { colors } from '../global/styles'

function PlaylistCard({title, singer, duration, files, navigation}) {

  return (
    <TouchableOpacity
      onPress={()=>{
        navigation.navigate('VideoScreen', {singer:singer,title:title});
      }}
    >
      <View style={{
        flexDirection:'row',
        borderColor:colors.text2,
        borderWidth:1,
        borderRadius:25,
        backgroundColor:colors.background1,
        padding:10,
        marginTop:10
        }}>
          <View>
            <Icon
              type='material-community'
              name='play'
              size={60}
              iconStyle={{marginRight:10,color:colors.maincolor}}
            />  
          </View>
          <View style={{width:'100%'}}>
              <View>
                <Text style={{fontSize:18,fontWeight:'bold',color:colors.maincolor}}>
                  {title}
                </Text>
                <Text style={{fontSize:15,color:colors.text2}}>
                  {singer}
                </Text>
              </View>
              <View style={{
                flexDirection:'row'
                }}>
                <Icon
                  type='material-community'
                  name='clock-outline'
                  size={20}
                  iconStyle={{color:colors.text2}}
                />  
                <Text style={{color:colors.text2}}> {duration} min</Text>
              </View>
          </View>
      </View>
    </TouchableOpacity>
  )
}

export default PlaylistCard