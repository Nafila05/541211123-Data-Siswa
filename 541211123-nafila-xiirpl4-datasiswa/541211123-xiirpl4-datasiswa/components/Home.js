import { View, Text, StyleSheet, Image } from 'react-native';

import Aktifitas from './Aktifitas';


export default function HomePage({ navigation }) {
  return (
    <View>
      <View style={styles.background}>
        <Image
          source={require('../assets/user.png')}
          style={{ width: 85, height: 85 }}
        />
        <View
          style={{ justifyContent: 'space-evenly', flexDirection: 'column' }}>
          <Text style={styles.nama}>Admin Data Siswa</Text>
          <Text style={styles.desc}>SMK Telkom Purwokerto</Text>
        </View>
      </View>

      <View
        style={{
          marginHorizontal: 20,
          marginTop: 35,
          borderRadius: 0,
          gap: 15,
        }}>
        <Aktifitas 
          src={require('../assets/icon1.png')}
          text="Data Siswa"
          desc="Menampilkan Data Siswa"
          onPress={() => navigation.navigate('Data')}
        />
        <Aktifitas
          src={require('../assets/icon2.png')}
          text="Cari Data Siswa"
          desc="Mencari Data Siswa"
          onPress={() => navigation.navigate('Cari')}
        />
        <Aktifitas
          src={require('../assets/plus.png')}
          text="Tambah Data Siswa"
          desc="Menambah Data Siswa"
          onPress={() => navigation.navigate('Tambah')}
        />
        <Aktifitas
          src={require('../assets/editdata.png')}
          text="Ubah Data Siswa"
          desc="Mengubah Data Siswa"
          onPress={() => navigation.navigate('Ubah')}
        />
        <Aktifitas
          src={require('../assets/delete.png')}
          text="Hapus Data Siswa"
          desc="Menghapus Data Siswa"
          onPress={() => navigation.navigate('Hapus')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#4169E1',
    paddingBottom: 15,
    paddingTop: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    gap: 15,
  },
  nama: {
    color: '#FFFFFF',
    fontSize: 20,
    width: 300,
    fontWeight: 'bold',
  },
  desc: {
    color: '#FFFFFF',
    fontSize: 15,
    width: 300,
    fontWeight: 300,
  },
});
