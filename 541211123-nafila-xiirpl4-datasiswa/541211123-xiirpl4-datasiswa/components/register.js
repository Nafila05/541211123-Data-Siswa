import React from 'react';
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

export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={require('../assets/user.png')} />
      <Text style={styles.title}>Hello,</Text>
      <Text style={styles.subTitle}>Masuk Untuk Melanjutkan</Text>
      <TextInput style={styles.input} placeholder="Nama Lengkap" />
      <TextInput style={styles.input} placeholder="Username / Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Porto')}}>
        <Text style={styles.text}> Register </Text>
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
        onPress={() => {navigation.navigate('Porto')}}>
        Sudah punya akun? <Text style={{ color: 'orange' }}>Masuk!</Text>
      </Text>
      </TouchableOpacity>
    </View>
  );
}

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
    fontSize: 30,
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
  button: {
    borderRadius: 30,
    backgroundColor: '#FF7F50',
    height: 40,
    width: 280,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    marginTop: 20,
  },
  text: {
    color: 'white',
  },
});
