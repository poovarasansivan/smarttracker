import { View } from "react-native"
import { Text, TextInput } from "react-native-paper"

function InputGroup(props) {

    const handleInputChange = (text) => {
        props.change(text);
    };

    return (
        <View style={{ marginTop: 30 }}>
            <Text style={{ color: 'black', fontSize: 18 }}>{props.label}</Text>
            <TextInput underlineStyle={{ height: 0 }}
                onChangeText={handleInputChange}
                style={{
                    height: 30,
                    marginTop: 10,
                    borderWidth: 2,
                    borderColor: '#2596be',
                    borderRadius: 10,
                    borderTopEndRadius: 10,
                    borderTopStartRadius: 10,
                    padding: 10,
                    backgroundColor: 'white'
                }} />
        </View>
    )
}

export default InputGroup

