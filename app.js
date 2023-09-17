// import React, { useEffect, useState } from "react";
// import { StyleSheet, View } from "react-native";
// import MapView, { Marker, Polyline } from "react-native-maps";


// function MapComponent() {
//   const [path, setPath] = useState([
//     { latitude: 11.494189, longitude: 77.279316, rotation: 270 },
//     { latitude: 11.494175, longitude: 77.279176, rotation: 270 },
//     { latitude: 11.494173, longitude: 77.279089, rotation: 270 },
//     { latitude: 11.494170, longitude: 77.279007, rotation: 270 },
//     { latitude: 11.494145, longitude: 77.278347 },
//     { latitude: 11.494174, longitude: 77.278202 },
//     { latitude: 11.498243, longitude: 77.278047 },
//     { latitude: 11.498096, longitude: 77.275614 },
//     { latitude: 11.493592, longitude: 77.275812 }
//   ]);



//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: 11.4952527,
//           longitude: 77.2791341,
//           latitudeDelta: 0.007500,
//           longitudeDelta: 0.007500,
//         }}
//       >
//         <Polyline coordinates={path} strokeWidth={5} strokeColor="black" />

//         {/* <Marker
//           coordinate={{ latitude: 11.494175, longitude: 77.279176 }}
//           title="Another Marker"
//           description="Another Marker Description"
//         /> */}
//       </MapView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });

// export default MapComponent;

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/routes/home';
import MapComponent from './src/components/map';
import FeedbackForm from './src/components/feedback';
import EmergencyScreen from './src/components/panic';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ title: 'Welcome', headerShown: false }}
        />
        <Stack.Screen name="request" component={MapComponent} options={{
          title: "Track Bus",
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#2596be',
          },
        }} />
        <Stack.Screen name="feedback" component={FeedbackForm} options={{
          title: "FeedBack",
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#2596be',
          },
        }} />
           <Stack.Screen name="emergency" component={EmergencyScreen} options={{
          title: "Emergency",
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#2596be',
          },
        }} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default App;

