import { Text, View } from 'react-native';

export default function MenuTop() {
  return (
    <View className="flex-row items-center justify-center">
      <Text className="text-white">Menu</Text>
      <View className="ml-[15px] w-[6px] h-[6px] border-b-2 border-l-2 border-white -rotate-45" />
    </View>
  );
}
