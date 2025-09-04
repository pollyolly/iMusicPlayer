import React,{useState,useEffect} from 'react'
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Icon } from '@rneui/themed';
import Video  from 'react-native-video';
import Slider from '@react-native-community/slider';
import { colors } from '../global/styles';

const {height, width }= Dimensions.get('window')

function VideoScreen({navigation, route}) {
  
  const { singer, title } = route.params;

  const [playing, setPlaying] = useState(false);

function PlayPause (){
   return !playing ? (
      <Icon
        style={{marginLeft:20, margin:10}}
        type="material-community"
        name="play-circle-outline"
        size={80}
        color={colors.iconcolor}
      /> 
      ) : (
      <Icon
        style={{marginLeft:20, margin:10}}
        type="material-community"
        name="pause-circle-outline"
        size={80}
        color={colors.maincolor}
      />
    )
}

function handlePlayPause(){
  setPlaying(!playing);
}

  return (
      <View>
        <Video
          style={{width:width, height:height}}
          source={require('../assets/sample-video.mp4')}
          resizeMode={'cover'}
          repeat
        />
        <View style={{
            top:30,
            position:'absolute'
        }}>
          <TouchableOpacity
            onPress={()=>{
              navigation.navigate('PlaylistScreen');
            }}
          >
            <Icon
              iconStyle={{marginLeft:10, color:'white'}}
              type="material-community"
              name="arrow-left"
              size={30}
              color={colors.iconcolor}
            />
          </TouchableOpacity>
        </View>
        
        <View style={styles.description}>
          <Text style={{...styles.titleText,color:colors.maincolor}}> {title} </Text>
          <Text style={{...styles.singerText,color:colors.iconcolor}}> {singer} </Text>
        </View>
        <View style={styles.sliderText}>
          <Text style={{color:colors.iconcolor,fontSize:15}}>0:00</Text>
          <Text style={{color:colors.iconcolor,fontSize:15}}>2:44</Text>
        </View>
        <View style={{position:'absolute',bottom:120,width:width}}>
          <Slider 
              style={{width:width}}
              value={10}
              minimumValue={0}
              maximumValue={100}
              thumbTintColor={colors.maincolor}
              minimumTrackTintColor={colors.maincolor}
              maximumTrackTintColor='white'
              onSlidingComplete={()=>{}}
            />
        </View>
        
        <View style={styles.controlButton}>
          <TouchableOpacity>
            <Icon
              style={{marginLeft:20, color:colors.iconcolor, margin:10}}
              type="material-community"
              name="share-variant-outline"
              size={30}
              color={'white'}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              style={{marginLeft:20, color:colors.iconcolor, margin:10}}
              type="material-community"
              name="step-backward"
              size={30}
              color={'white'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handlePlayPause}
          >
            <PlayPause/>

          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              style={{marginLeft:20, color:colors.iconcolor, margin:10}}
              type="material-community"
              name="step-forward"
              size={30}
              color={'white'}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              style={{marginLeft:20, color:colors.iconcolor, margin:10}}
              type="material-community"
              name="repeat"
              size={30}
              color={'white'}
            />
          </TouchableOpacity>
        </View>
      </View>
  )
}

export default VideoScreen

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row'
  },
  description: {
    position:'absolute',
    bottom:175
  },
  titleText:{
    color:'white', 
    fontSize:25, 
    justifyContent:'center', 
    alignItems:'center'
  },
  singerText:{
    color:'white', 
    fontSize:15, 
    justifyContent:'center', 
    alignItems:'center'
  },
  sliderText:{
      width:350,
      flexDirection:'row',
      justifyContent:'space-between',
      position:'absolute',
      bottom:148,
      marginHorizontal:20
  },
  controlButton:{
    flexDirection:'row',
    position:'absolute', 
    bottom:0,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    marginBottom:20,
    paddingRight:20
  }
})