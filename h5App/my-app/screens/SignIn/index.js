import React, {useState, createRef} from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import Toast from 'react-native-simple-toast';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 250,
        height: 44,
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#e8e8e8'
        },
    loginButton: {
        width: 100,
        height: 44,
    },
    signUpButton: {
        width: 125,
        height: 44,
    },
    forgetButton: {
        width: 150,
        height: 44,
    },
});

const SignInScreen = ({ onSignIn, navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const test = () => {
        fetch('http://192.168.0.177:3000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'function': 'login'
            },
            body: JSON.stringify({
                "username": username,
                "password": password})
            }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if(responseJson.status === 'succes') {
                    onSignIn();
                } else {
                    Toast.show("Wrong username or password")
                }
            });
    }
    return (
        <View style={styles.container}>
            
            <Text>Sign In</Text>
            <TextInput
                name='username'
                autoCapitalize = 'none'
                style={styles.input}
                onChangeText={(username) => setUsername(username)}
                placeholder='Username'
            />
            <TextInput
                name='password'
                autoCapitalize = 'none'
                secureTextEntry={true}
                style={styles.input}
                onChangeText={(password) => setPassword(password)}
                placeholder='Password'
            />
            
            <View style={styles.loginButton}>
            <Button title="Sign In" onPress={test} />
            </View>

            <Text>OR</Text>

            <View style={styles.signUpButton}>
            <Button
                title="Go to Sign Up"
                onPress={() => navigation.navigate('Sign Up')}
            />
            </View>
            
            <View style={styles.forgetButton}>
                <Button
                    title="Go to Password Forget"
                    onPress={() => navigation.navigate('Password Forget')}
                />
            </View>
            
        </View>
    );
};


export default SignInScreen;