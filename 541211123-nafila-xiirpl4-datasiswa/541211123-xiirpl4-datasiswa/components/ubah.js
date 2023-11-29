import { View, TextInput, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';


import CustomButton from './CustomButton'
import CustomInput from './CustomInput'

export default function Edit({ navigation }) {
  return (
    <View>
      <View style={{backgroundColor: '#F8F8F8', flex:1}}>
      <View style={styles.background}>
          <Text style={styles.nama}>Ubah Data Siswa</Text>
      </View>
      <View style={{
          alignItems:'flex-start', 
          flexDirection: 'row',
          marginHorizontal: 20,
          marginTop: 35,
          gap: 15}}>
          <TextInput 
          style={{ color: '#4169E1', 
          backgroundColor:'#FAFAFA', 
          height: 40, 
          borderWidth: 2, 
          borderColor:'#4169E1', 
          borderRadius: 4, 
          fontWeight: 'semi-bold', 
          fontFamily:'popins', 
          width: '77%'}}/>
          <View>
            <TouchableOpacity style={{marginLeft:10, backgroundColor:'#4169E1', height: 40, width:'140%', borderRadius:4, justifyContent:'center', alignItems:'center'}}>
              <Image style={{ width: "25px", height: "25px"}} 
              source={require('../assets/icon2.png')} />
            </TouchableOpacity>
          </View>
      </View>
       <TextInput style={styles.input} placeholder="Nama" />
         <TextInput style={styles.input} placeholder="NIS" />
         <TextInput style={styles.input} placeholder="Kelas" />
          <TextInput style={styles.input} placeholder="TTL" />
          <TextInput style={styles.input} placeholder="Alamat" />
          <CustomButton onPress={()=>navigation.navigate("Home")} title="Ubah"/>
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
