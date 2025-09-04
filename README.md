## iMusicPlayer
### Image
<img src="https://github.com/pollyolly/iMusicPlayer/blob/main/imusic_player.png" width=250 />

### Start Project
```
$npx react-native run-android
```
### React Native Reanimated
```
$npm install react-native-reanimated@2.2
```
### React Native Community Slider
```
$npm i @react-native-community/slider
```
### React Bottom Tabs Navigation
```
$npm install @react-navigation/bottom-tabs
```
### React Native Video
```
$npm install react-native-video
```
### React Native Vector Icons
```
$npm install react-native-vector-icons
```
### React Native Elements
```
$npm install @rneui/themed
$npm install @rneui/base
```
android/app/build.gradle
```
//Custom Font
//node_modules/react-native-vector-icons/Fonts/
project.ext.vectoricons = [
    iconFontNames: [ 'MaterialCommunityIcons.ttf'] // Specify font files
]

apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
```
```
<Icon
   type='material-community'
   name="google"
   size={25}
/>
```
### React Stack Navigation
```
$npm install @react-navigation/native @react-navigation/native-stack
$npm install react-native-screens react-native-safe-area-context
$cd project-folder/ios
$pod install
```
### React Native Track Player
```
$npm install --save react-native-track-player
```

### Troubleshoot
Fix Installation: Follow Install Sequence
```
1. react-native-track-player@5.0.0-alpha0
2. @rneui/themed
3. react-native-safe-area-context
4. @rneui/base
```
### Fixes
- https://github.com/doublesymmetry/react-native-track-player/issues/2480
- https://github.com/react-native-elements/react-native-elements/issues/3966

