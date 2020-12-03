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
});

const SignInScreen = ({ onSignIn, navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const test = () => {
        if(username != "test" && password != "test") {
            Toast.show("wrong username or password");
        } else {
            onSignIn();
        }
    }
    return (
        <View style={styles.container}>
            
            <Text>Sign In</Text>
            <TextInput
                name='username'
                style={styles.input}
                onChangeText={(username) => setUsername(username)}
                placeholder='Username'
            />
            <TextInput
                name='password'
                style={styles.input}
                onChangeText={(password) => setPassword(password)}
                placeholder='Password'
            />
            
            <Button title="Sign In n" onPress={test} />

            <Text>OR</Text>

            <Button
                title="Go to Sign Up n"
                onPress={() => navigation.navigate('Sign Up')}
            />

            <Button
                title="Go to Password Forget n"
                onPress={() => navigation.navigate('Password Forget')}
            />
        </View>
    );
};


export default SignInScreen;