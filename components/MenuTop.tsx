import { Text, View, StyleSheet } from 'react-native';

export default function MenuTop() {
  return (
    <View style={styles.containerIntro}>
      <Text style={styles.title}>Menu</Text>
      <View style={styles.arrow} />
    </View>
  );
}
const styles = StyleSheet.create({
  containerIntro: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#f8f8f8',
  },
  arrow: {
    marginLeft: 15,
    color: '#f8f8f8',
    borderLeftColor: '#fff',
    borderLeftWidth: 2,
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    width: 6,
    height: 6,
    transform: [{ rotate: '315deg' }],
  },
});
