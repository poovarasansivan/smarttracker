import { StatusBar, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import InputGroup from "../components/inputGroup";
import { useState } from "react";

function Home({ navigation }) {

  const [username, setUserName] = useState('')
  const [Password, setPassword] = useState('')

  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100 %' }}>
      <StatusBar backgroundColor={'#2596be'} />
      <View style={{
        height: '25%',
        justifyContent: 'center',
        backgroundColor: '#2596be',
        borderBottomEndRadius: 80,
        // borderBottomStartRadius: 50,
        padding: 30
      }}>
        <Text style={textTitleStyle}>Login </Text>
        <Text style={textStyle}>Back to your Account</Text>
      </View>
      
      <View style={{  
        padding: 20,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

      }}>
        <View>
          <InputGroup label={'Username'} change={setUserName} />
          <InputGroup label={'Password'} change={setPassword} />
        </View>
        <Button onPress={() => {
          username == 'admin'
          ? navigation.navigate('request', { name: 'Jane' })
          :
          null
        }
        } style={{ backgroundColor: '#2596be', padding: 10, borderRadius: 10 }}>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: 600 }}>Login</Text>
        </Button>
      </View>
    </SafeAreaView >
  );
};

const textTitleStyle = {
  color: 'white',
  fontSize: 38,
  fontWeight: 600
}

const textStyle = {
  color: 'white',
  fontSize: 20,
  fontWeight: 500
}

const normalHeadingStyle = {
  color: 'black',
  fontSize: 20,
  fontWeight: 600
}

export default Home;

