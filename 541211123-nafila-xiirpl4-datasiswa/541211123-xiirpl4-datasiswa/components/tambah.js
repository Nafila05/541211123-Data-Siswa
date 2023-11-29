import { View, Text, StyleSheet,TextInput } from 'react-native';

import CustomButton from './CustomButton'
import CustomInput from './CustomInput'

export default function Create({ navigation }) {
  return (
    <View>
      <View style={{backgroundColor: '#F8F8F8', flex:1}}>
        <View style={styles.background}>
            <Text style={styles.nama}>Tambah Data Siswa</Text>
        </View>
        <View style={{marginTop: 35}}>
          <TextInput style={styles.input} placeholder="Nama" />
         <TextInput style={styles.input} placeholder="NIS" />
         <TextInput style={styles.input} placeholder="Kelas" />
          <TextInput style={styles.input} placeholder="TTL" />
          <TextInput style={styles.input} placeholder="Alamat" />
          <CustomButton onPress={()=>navigation.navigate("Home")} title="Tambah"/>
        </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#4169E1',
    paddingBottom: 15,
    paddingTop: 15,
    flexDirection: 'row',
    gap: 15,
  },
  nama: {
    color: '#FAFAFA',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1
  },
  input: {
    color: '#FF7F50',
    backgroundColor:'#FAFAFA',
    height: 40,
    marginLeft: 19,
    marginRight: 15,
    marginTop: 15,
    borderWidth: 2,
    borderColor: '#4169E1',
    padding: 18,
    borderRadius: 4,
    fontWeight: 'semi-bold',
    fontFamily:'popins'
  },

});
