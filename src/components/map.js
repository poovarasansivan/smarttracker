import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Dimensions } from 'react-native';
import axios from "axios";
import { Button } from "react-native-paper";


const screenWidth = Dimensions.get('window').width;

const markerSize = screenWidth * 0.1;

function MapComponent({ navigation }) {

    const [carPositionIndex, setCarPositionIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            axios({
                url: 'http://10.10.180.13:8080/getTrack',
                method: 'post'
            }).then((res) => {
                setCarPositionIndex(res.data.data);
            }).catch((err) => {
                console.log(err);
            });
        }, 800);

        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 11.50068,
                    longitude: 77.27795,
                    latitudeDelta: 0.007500,
                    longitudeDelta: 0.007500,
                }}
            >

                {carPositionIndex !== 0 && (
                    <Marker
                        coordinate={{
                            latitude: parseFloat(carPositionIndex.latitude) || 0,
                            longitude: parseFloat(carPositionIndex.longitude) || 0
                        }}
                        rotation={carPositionIndex.course - 100}
                        image={require('../../assets/img/bus.png')}
                    >
                    </Marker>
                )}
            </MapView>
            {/* <Button title="Feedback" onPress={() => navigation.navigate("feedback")} color="#2596be" /> */}
            {/* <TouchableOpacity style={styles.feedbackButton}  >
                    <Text style={styles.feedbackText} >Feedback</Text>
                </TouchableOpacity> */}

            <Button onPress={() => {
                navigation.navigate('emergency', { name: 'emergency' })
            }
            } style={styles.EmergencyButton}>
                <Text style={styles.Emergencytext}>Emergency</Text>
            </Button>
            <Button onPress={() => {
                navigation.navigate('support', { name: 'support' })
            }
            } style={styles.roundButton1}>
                <Text style={styles.buttonText}>Support</Text>
            </Button>

            <Button onPress={() => {
                navigation.navigate('feedback', { name: 'Jane' })
            }
            } style={styles.feedbackButton}>
                <Text style={styles.feedbackText}>FeedBack</Text>
            </Button>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 2,
    },


    EmergencyButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        backgroundColor: '#2596be',
        paddingVertical: 5,
        paddingHorizontal: 2,
        borderRadius: 8,
    },
    Emergencytext: {
        color: 'white',
        fontSize: 16,
    },
    feedbackButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#2596be',
        paddingVertical: 5,
        paddingHorizontal: 7,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white', 
        fontSize: 16,
        fontWeight: 'bold',
      },
      roundButton1: {
        marginLeft:130,
        width: 100,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#2596be',
      },

    feedbackText: {
        color: 'white',
        fontSize: 16,
    },
    boxContainer: {
        flex: 1,
        backgroundColor: 'white',
        padding: 15,
        gap: 0,
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
    },
});

export default MapComponent;
