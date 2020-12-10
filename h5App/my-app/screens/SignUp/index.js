import React, {useState, createRef} from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import Toast from 'react-native-simple-toast';

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
signUpButton: {
    width: 100,
    height: 44,
},
input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8'
    },
});

const SignUpScreen = ({ onSignUp }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const test = () => {
        if(confPassword != password) {
            Toast.show("Password did not match");
        } else {
            fetch('http://192.168.0.177:3000/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'function': 'signUp',
                },
                body: JSON.stringify({
                    "username": username,
                    "password": password,
                }),
            });

            Toast.show("You are logged in")
            onSignUp();
        }
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                autoCapitalize = 'none'
                onChangeText={(username) => setUsername(username)}
                placeholder="Username"
            />
            <TextInput
                style={styles.input}
                autoCapitalize = 'none'
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />
            <TextInput
                style={styles.input}
                autoCapitalize = 'none'
                placeholder="Confirm Password"
                secureTextEntry={true}
                onChangeText={(confPassword) => setConfPassword(confPassword)}
            />
            <View style={styles.signUpButton}>
                <Button title="Sign Up" onPress={test} />
            </View>
            
        </View>
    );
};

export default SignUpScreen;