import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Image,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';

import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleForgotPassword = () => {
    console.log('Forgot Password');
  };
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={require('../assets/user.png')} />
      <Text style={styles.title}>Hello,</Text>
      <Text style={styles.subTitle}>Masuk Untuk Melanjutkan</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity style={styles.forgotPasswordText}
        onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}> Lupa Password? </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <CustomButton
          title="Masuk"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </TouchableOpacity>

      <Text style={styles.registerText1}>
        --------------- Atau ---------------
      </Text>

      <TouchableOpacity style={styles.button1}>
        <Text style={styles.text}> Google </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text
          style={{
            marginTop: 20,
            padding: 20,
            fontWeight: 'medium',
            fontSize: 15,
            textAlign: 'center',
            color: 'white',
          }}
          onPress={() => {
            navigation.navigate('Reg');
          }}>
          Belum punya akun?{' '}
          <Text style={{ color: 'orange' }}>Daftar Sekarang!</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#4169E1',
    padding: 8,
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },

  subTitle: {
    color: 'white',
  },

  input: {
    height: 40,
    width: 280,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: '#808080',
    borderColor: 'white',
    borderRadius: 5,
    backgroundColor: '#DCDCDC',
  },
  registerText1: {
    color: 'white',
    marginTop: 10,
  },
  button1: {
    borderRadius: 30,
    backgroundColor: '#FFA500',
    height: 40,
    width: 280,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    marginTop: 10,
  },
  forgotPasswordText: {
    color: 'white',
  },
  
  text: {
    color: 'white',
  },
});
export default LoginScreen;
