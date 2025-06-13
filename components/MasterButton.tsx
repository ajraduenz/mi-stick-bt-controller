import React from 'react';
import { View, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function MasterButton() {
  const up = React.useRef(null);
  const down = React.useRef(null);
  const left = React.useRef(null);
  const right = React.useRef(null);
  const [masterButton, setMasterButton] = React.useState<any>({
    pressed: false,
    currentButton: '',
  });
  function handleTouchIn(e: any) {
    if (e.currentTarget == up.current) {
      setMasterButton({ pressed: true, currentButton: 'up' });
    }
    if (e.currentTarget == down.current) {
      setMasterButton({ pressed: true, currentButton: 'down' });
    }
    if (e.currentTarget == left.current) {
      setMasterButton({ pressed: true, currentButton: 'left' });
    }
    if (e.currentTarget == right.current) {
      setMasterButton({ pressed: true, currentButton: 'right' });
    }
  }
  function handleTouchOut(e: any) {
    setMasterButton(false);
  }
  return (
    <>
      <View
        className="relative mx-auto mt-[30px] flex h-[250px] w-[250px] flex-row flex-wrap rounded-full bg-[#1C1C1D]"
        style={[
          {
            borderTopWidth: 3,
            borderLeftWidth: 0.5,
            borderRightWidth: 0.5,
            borderColor: '#78787961',
          },
          masterButton.currentButton === 'up' && {
            transform: [{ rotateX: '3deg' }],
            borderTopWidth: 0,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderBottomWidth: 2,
          },
          masterButton.currentButton === 'left' && {
            transform: [{ rotateY: '3deg' }],
            borderTopWidth: 3,
            borderLeftWidth: 0,
            borderRightWidth: 2,
            borderBottomWidth: 0,
          },
          masterButton.currentButton === 'right' && {
            transform: [{ rotateY: '3deg' }],
            borderTopWidth: 3,
            borderLeftWidth: 2,
            borderRightWidth: 0.5,
            borderBottomWidth: 0,
          },
          masterButton.currentButton === 'down' && {
            transform: [{ rotateX: '3deg' }],
            borderTopWidth: 6,
            borderLeftWidth: 0.5,
            borderRightWidth: 0.5,
            borderBottomWidth: 0,
          },
        ]}
      >
        <Pressable
          ref={left}
          className="absolute h-[50px] w-[50px] items-center justify-center"
          style={{ top: '50%', left: 0, transform: [{ translateY: -25 }] }}
          onPressIn={(e) => handleTouchIn(e)}
          onPressOut={(e) => handleTouchOut(e)}>
          <View
            className="absolute w-[8px] h-[8px] rounded-full bg-white"
            style={{ left: 5 }}
          />
        </Pressable>
        <Pressable
          ref={up}
          className="absolute h-[50px] w-[50px] items-center justify-center"
          style={{ top: 0, left: '50%', transform: [{ translateX: -25 }] }}
          onPressIn={(e) => handleTouchIn(e)}
          onPressOut={(e) => handleTouchOut(e)}>
          <View
            className="absolute w-[8px] h-[8px] rounded-full bg-white"
            style={{ top: 5 }}
          />
        </Pressable>
        <Pressable
          ref={right}
          className="absolute h-[50px] w-[50px] items-center justify-center"
          style={{ top: '50%', right: 0, transform: [{ translateY: -25 }] }}
          onPressIn={(e) => handleTouchIn(e)}
          onPressOut={(e) => handleTouchOut(e)}>
          <View
            className="absolute w-[8px] h-[8px] rounded-full bg-white"
            style={{ right: 5 }}
          />
        </Pressable>
        <Pressable
          ref={down}
          className="absolute h-[50px] w-[50px] items-center justify-center"
          style={{ bottom: 0, left: '50%', transform: [{ translateX: -25 }] }}
          onPressIn={(e) => handleTouchIn(e)}
          onPressOut={(e) => handleTouchOut(e)}>
          <View
            className="absolute w-[8px] h-[8px] rounded-full bg-white"
            style={{ bottom: 5 }}
          />
        </Pressable>
        <Pressable
          className="absolute h-[145px] w-[145px] rounded-full bg-[#0a0a0a]"
          style={{
            top: '50%',
            left: '50%',
            transform: [{ translateX: -72.5 }, { translateY: -72.5 }],
          }}
        />
        <LinearGradient
          colors={['#0a0a0a', '#3d3d3d']}
          className="absolute h-[145px] w-[145px] rounded-full"
          style={{
            top: '50%',
            left: '50%',
            transform: [{ translateX: -72.5 }, { translateY: -72.5 }],
          }}
        />
      </View>
    </>
  );
}
