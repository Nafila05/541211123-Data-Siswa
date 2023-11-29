import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

export default function ReadID({ navigation }) {
  return (
    <View>
      <View style={styles.background}>
          <Text style={styles.nama}>Cari Data Siswa</Text>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 35,
          flexDirection: 'column',
          gap: 15
        }}>
        <View style={{alignItems:'flex-start', flexDirection: 'row', marginTop:4}}>
          <TextInput 
          style={{ color:  '#4169E1', 
          backgroundColor:'#FAFAFA', 
          height: 40, 
          borderWidth: 2, 
          borderColor:  '#4169E1', 
          borderRadius: 4, 
          fontWeight: 'semi-bold', 
          fontFamily:'popins', 
          width: '77%'}}/>
          <View>
            <TouchableOpacity style={{marginLeft:10, backgroundColor: '#4169E1', height: 40, width:'140%', borderRadius:4, justifyContent:'center', alignItems:'center'}}>
              <Image style={{ width: "25px", height: "25px"}} 
              source={require('../assets/icon2.png')} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.background, { justifyContent: 'center', alignItems: 'center', borderRadius: 4}]}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text style={styles.nama2}>Nafila Setyani</Text>
            <Image style={{ width: "160px", height: "160px", marginBottom: 10, marginTop: 18, alignSelf: 'center' }} 
            source={require('../assets/nafila.png')} />
            <Text style={styles.nama3}><b>NIS :</b> 541211123</Text>
            <Text style={styles.nama3}><b>KELAS :</b> XII RPL 4</Text>
            <Text style={styles.nama3}><b>TTL :</b> BANJARNEGARA, 5 MEI 2005</Text>
            <Text style={styles.nama3}><b>ALAMAT :</b> KALIBENING, BANJARNEGARA</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
   background: {
    backgroundColor:  '#4169E1',
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
  nama2: {
    color: '#FAFAFA',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1
  },
  nama3: {
    color: '#FAFAFA',
    fontSize: 13,
    alignSelf: 'center',
    marginTop: 1,
    fontWeight: 'semi-bold'
  },
});
