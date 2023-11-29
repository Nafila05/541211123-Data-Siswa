import { Text, StyleSheet, Image } from 'react-native';

const CustomImage = (props) => {
return (
<Image
source={props.gambar}
style={styles.avatar2}
/>
);
}

const styles = StyleSheet.create({
  avatar2: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginTop: 10,
    paddingTop: 30,
  },

});

export default CustomImage;