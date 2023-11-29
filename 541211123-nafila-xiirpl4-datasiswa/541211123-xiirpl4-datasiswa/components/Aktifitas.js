import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Aktifitas(props) {
  return (
    <TouchableOpacity style={styles.background1} onPress={props.onPress}>
      <Image
        source={props.src}
        style={{ width: 50, height: 50,}}
      />
      <View style={{ justifyContent: 'space-evenly', flexDirection: 'column' }}>
        <Text style={styles.nama}>{props.text}</Text>
        <Text style={styles.desc}>{props.desc}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  nama: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 600,
  },
  desc: {
    color: '#000000',
    fontSize: 13,
    width: 300,
    fontWeight: 600,
    opacity: 0.3
  },
  background1: {
    backgroundColor: '#FFFFFF',
    padding: 9,
    flexDirection: 'row',
    gap: 15,
  },
});
