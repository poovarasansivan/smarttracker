import React from 'react';
import { View, TouchableOpacity, Linking } from 'react-native';
import { Text } from 'react-native';

const EmergencyScreen = () => {
    const handleEmergencyPress = (number) => {
        Linking.openURL(`tel:${number}`);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{
                backgroundColor: '#2596be',
                width: 190,
                height: 40,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
            }}
                onPress={() => handleEmergencyPress('100')}>
                <Text h3 style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>Police (100)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                backgroundColor: '#2596be',
                width: 190,
                height: 40,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
            }}
                
                onPress={() => handleEmergencyPress('101')}>
                <Text h3 style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>Fire (101)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                backgroundColor: '#2596be',
                width: 190,
                height: 40,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
            }}
                onPress={() => handleEmergencyPress('108')}>
                <Text h3 style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>Ambulance (108)</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EmergencyScreen;
