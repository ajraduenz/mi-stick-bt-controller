import React from 'react';
import { View, Pressable } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function ButtonPower() {
  return (
    <View className="rounded-full">
      <Pressable
        className="flex h-10 w-10 items-center justify-center rounded-full border-t-2 border-l border-r bg-[#1C1C1D]"
        style={{ borderColor: 'rgba(120, 120, 121, 0.38)' }}>
        <Svg width="15" height="16" viewBox="0 0 15 16" fill="none">
          <Path
            d="M7.5 8.16699C8.00586 8.16699 8.34082 7.81152 8.34082 7.28516V1.37891C8.34082 0.845703 8.00586 0.49707 7.5 0.49707C7.00098 0.49707 6.66602 0.845703 6.66602 1.37891V7.28516C6.66602 7.81152 7.00098 8.16699 7.5 8.16699ZM7.5 15.2148C11.417 15.2148 14.6436 11.9814 14.6436 8.06445C14.6436 6.02734 13.7617 4.22266 12.5107 3.01953C11.7178 2.21289 10.542 3.24512 11.3691 4.11328C12.4014 5.11133 13.0371 6.5127 13.0439 8.06445C13.0439 11.1338 10.5693 13.6084 7.5 13.6084C4.43066 13.6084 1.96973 11.1338 1.96973 8.06445C1.96973 6.49902 2.60547 5.11133 3.63086 4.10645C4.46484 3.23145 3.28906 2.21289 2.48926 3.0127C1.23828 4.22266 0.356445 6.02734 0.356445 8.06445C0.356445 11.9814 3.58301 15.2148 7.5 15.2148Z"
            fill="#571616"
          />
        </Svg>
      </Pressable>
    </View>
  );
}
