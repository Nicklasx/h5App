import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

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
});

const SignUpScreen = ({ onSignUp }) => {
return (
    <View style={styles.container}>
    <Text>Public Sign Up Screen</Text>
        <View style={styles.signUpButton}>
            <Button title="Sign Up" onPress={onSignUp} />
        </View>
        
    </View>
);
};

export default SignUpScreen;