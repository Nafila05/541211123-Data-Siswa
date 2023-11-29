import { View, Text, StyleSheet, Image } from 'react-native';

export default function Read({ navigation }) {
  return (
    <View>
      <View style={styles.background}>
          <Text style={styles.nama}>DATA SISWA</Text>
      </View>

      <View
        style={{
          marginHorizontal: 20,
          marginTop: 35,
          flexDirection: 'column',
          gap: 15
        }}>
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

        <View style={[styles.background, { justifyContent: 'center', alignItems: 'center', borderRadius: 4}]}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text style={styles.nama2}>Dhiny Setya Nurkhafidin</Text>
            <Image style={{ width: "160px", height: "160px", marginBottom: 10, marginTop: 18, alignSelf: 'center' }} 
            source={require('../assets/dhiny.png')} />
            <Text style={styles.nama3}><b>NIS :</b> 541211054</Text>
            <Text style={styles.nama3}><b>KELAS :</b> XII RPL 2</Text>
            <Text style={styles.nama3}><b>TTL :</b> BANJARNEGARA, 15 AGUSTUS 2005</Text>
            <Text style={styles.nama3}><b>ALAMAT :</b> BINORONG, BANJARNEGARA</Text>
          </View>
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
