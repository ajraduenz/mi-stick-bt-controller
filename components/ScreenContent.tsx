import { Pressable, Text, View } from 'react-native';
import MenuTop from './MenuTop';
import PerifericButton from './PerifericButtons';
import MasterButton from './MasterButton';
import ButtonPower from './ButtonPower';

export const ScreenContent = () => {
  return (
    <View className="flex-1 w-100 h-100 flex-col items-center items-center justify-center justify-center bg-black">
      <MenuTop />
      <ButtonPower />
      <MasterButton />
      <PerifericButton />
      {/* <Pressable
          className="mx-2 h-14 w-14 items-center justify-center rounded-full bg-gray-200 shadow"
          onPress={() => onPress('up')}>
          <Text className="text-2xl text-gray-700">▲</Text>
        </Pressable> */}
    </View>
  );
};
