import React from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import PlaylistCard from '../components/PlaylistCard'
import { Icon } from '@rneui/themed'
import { colors } from '../global/styles'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const width = Dimensions.get('window').width

export default function PlaylistScreen({navigation}) {

  const dataSource = [{
    title: 'Pusong Bato',
    singer: 'Rolly',
    duration:'0:45',
    files:'web'
  },
  {
    title: 'Rap God',
    singer: 'Flow-G',
    duration:'0:45',
    files:'web'
  },
  {
    title: 'Crazy Moment',
    singer: 'Mojako',
    duration:'0:45',
    files:'web'
  },
  {
    title: 'Lupang Hinirang',
    singer: 'Kiddo',
    duration:'0:45',
    files:'web'
  },
  {
    title: 'Bahay Kubo',
    singer: 'Killua',
    duration:'0:45',
    files:'web'
  },
  {
    title: 'From this moment',
    singer: 'Michelle',
    duration:'0:45',
    files:'web'
  },
  {
    title: 'Harana',
    singer: 'Dela Cruz',
    duration:'0:45',
    files:'web'
  },
  {
    title: 'Zebbiana',
    singer: 'Skusta Clee',
    duration:'0:45',
    files:'web'
  }]

  return (
    <View style={{
      height:'100%',
      marginHorizontal:10,
      // backgroundColor:'#000'
    }}>
      <TouchableOpacity
        onPress={()=>{
          navigation.navigate('SearchScreen');
        }}
      >
        <View style={{...styles.searchArea,
          borderColor:colors.text2}}>
          <Icon
            type="material-community"
            name='magnify'
              iconStyle={{
                paddingLeft:5,
                color:colors.text2
            }}
            size={25}
          />
          <Text style={{...styles.searchInput,
            color:colors.text2,
            borderColor:colors.text1
            }}>
              What music are you looking for?
          </Text>
        </View>
      </TouchableOpacity>
      <View>
        <FlatList
        showsVerticalScrollIndicator={false}
          style={{
          marginTop:20,
        marginBottom:90}}
          data = {dataSource}
          keyExtractor={(item, index)=>index.toString()}
          renderItem={({item, index}) =>(
            <PlaylistCard
              navigation={navigation}
              title={item.title} 
              singer={item.singer} 
              duration={item.duration} 
              files={item.files}              
            />
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  searchArea: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 50,
    alignItems:'center',
    marginTop: 20,
    height:50,
    // marginHorizontal:10
  },
  searchInput: {
    flexDirection:'row',
    width:'100%',
    paddingRight:20,
    paddingLeft:5,
    alignContent:'center',
    fontSize: 20
  }
})