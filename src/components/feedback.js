import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const RatingBar = ({ rating, handleRating }) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 2 }}>
      {[1, 2, 3, 4, 5].map((item) => (
        <TouchableOpacity key={item} onPress={() => handleRating(item)}>
          <Text style={{ fontSize: 50,marginLeft:25,color: item <= rating ? '#2596be' : 'grey' }}>★</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);

  const handleRating = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Email:', email);
    console.log('Feedback:', feedback);
    console.log('Rating:', rating);
  };

  return (
    <View>
      <View style={{ marginTop: 50 }}>
        <Text style={{ marginLeft: 30, marginBottom: 10, fontSize: 18, fontWeight: '600' }}>
          Name:
        </Text>
        <TextInput
          style={{
            height: 40,
            width: 280,
            borderColor: '#2596be',
            fontSize: 14,
            color: 'black',
            borderWidth: 2,
            marginLeft: 30,
            borderRadius: 10,
            marginBottom: 10
          }}
          onChangeText={text => setName(text)}
          value={name}
        />
        <Text style={{ marginLeft: 30, marginBottom: 10, fontSize: 18, fontWeight: '600' }}>
          Mobile no:
        </Text>
        <TextInput
          style={{
            height: 40,
            width: 280,
            borderColor: '#2596be',
            fontSize: 14,
            color: 'black',
            borderWidth: 2,
            marginLeft: 30,
            borderRadius: 10,
            marginBottom: 10
          }}
          onChangeText={text => setPhone(text)}
          value={phone}
        />
        <Text style={{ marginLeft: 30, marginBottom: 10, fontSize: 18, fontWeight: '600' }}>
          Email id:
        </Text>
        <TextInput
          style={{
            height: 40,
            width: 280,
            borderColor: '#2596be',
            fontSize: 14,
            color: 'black',
            borderWidth: 2,
            marginLeft: 30,
            borderRadius: 10,
            marginBottom: 10
          }}
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <Text style={{ marginLeft: 30, marginBottom: 10, fontSize: 18, fontWeight: '600' }}>Please provide your feedback:</Text>
        <TextInput
          style={{ height: 50, width: 280, marginLeft: 30, borderColor: '#2596be', borderWidth: 2, borderRadius: 10, marginBottom: 10 }}
          multiline
          onChangeText={text => setFeedback(text)}
          value={feedback}
        />

<Text style={{ marginLeft: 30, marginBottom: 10, fontSize: 18, fontWeight: '600' }}>
          Rating:
        </Text>
        <RatingBar rating={rating} handleRating={handleRating} />

        {/* Submit Button */}
        <TouchableOpacity
          style={{
            backgroundColor: '#2596be',
            width: 150,
            height: 40,
            borderRadius: 10,
            marginLeft: 100,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}
          onPress={handleSubmit}
        >
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FeedbackForm;

