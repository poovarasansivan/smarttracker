
  import React, { useState } from 'react';
  import { View, TextInput, TouchableOpacity, FlatList, Text, StyleSheet } from 'react-native';
  import axios from 'axios';

  const ChatPage = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const sendMessage = async () => {
      const newMessages = [...messages, { content: input, response: 'user' }];
      setMessages(newMessages);
      setInput('');
    
      try {
        const response = await axios.post('http://10.10.180.13:8080/getmessages', {
          message: input,
        });
    
        const botMessage = response.data[0].response; // Assuming response is an array of objects with a 'response' property
        setMessages([...newMessages, { content: botMessage, response: 'Driver' }]);
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <View style={styles.container}>
        <FlatList
          data={messages}
          renderItem={({ item }) => (
            <View style={item.response === 'Driver' ? styles.botMessage : styles.userMessage}>
              <Text style={styles.messageText}>{item.content}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.inputContainer}>
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Type a message..."
            style={styles.inputField}
          />
          <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,  
      backgroundColor: '#F0F0F0',
    },
    botMessage: { 
      alignSelf: 'flex-start',
      backgroundColor: '#2596be',
      padding: 8,
      borderRadius: 8,
      marginBottom: 8,
    },
    userMessage: {
      alignSelf: 'flex-end',
      backgroundColor: '#2596be',
      padding: 8,
      borderRadius: 8,
      marginBottom: 8,
    },
    messageText: {
      color: 'white',
      fontSize: 16,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    inputField: {
      flex: 1,
      backgroundColor: '#FFF',
      borderRadius: 24,
      paddingHorizontal: 16,
      marginRight: 8,
    },
    sendButton: {
      backgroundColor: '#2596be',
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 24,
    },
    sendButtonText: {
      color: '#FFF',
      fontSize: 16,
    },
  });

  export default ChatPage;
