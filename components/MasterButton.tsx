import React from 'react';
import { StyleSheet, View, TouchableOpacity, Pressable } from 'react-native';
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
        style={[
          styles.buttonMaster,
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
        ]}>
        <Pressable
          ref={left}
          style={[
            styles.buttonMasterChild,
            {
              top: '50%',
              left: 0,
              transform: [{ translateY: -25 }],
            },
            // , { borderTopLeftRadius: 300, borderTopWidth: 2, borderLeftWidth: 1, }
          ]}
          onPressIn={(e) => handleTouchIn(e)}
          onPressOut={(e) => handleTouchOut(e)}>
          <View
            style={[
              styles.buttonMasterChildDot,
              {
                left: 5,
              },
            ]}
          />
        </Pressable>
        <Pressable
          ref={up}
          style={[
            styles.buttonMasterChild,
            {
              top: 0,
              left: '50%',
              transform: [{ translateX: -25 }],
            },
            // { borderTopRightRadius: 300, borderTopWidth: 2, borderRightWidth: 1,  }
          ]}
          onPressIn={(e) => handleTouchIn(e)}
          onPressOut={(e) => handleTouchOut(e)}>
          <View
            style={[
              styles.buttonMasterChildDot,
              {
                top: 5,
              },
            ]}
          />
        </Pressable>
        <Pressable
          ref={right}
          style={[
            styles.buttonMasterChild,
            {
              top: '50%',
              right: 0,
              transform: [{ translateY: -25 }],
            },
            // { borderBottomLeftRadius: 300, borderLeftWidth: 1  }
          ]}
          onPressIn={(e) => handleTouchIn(e)}
          onPressOut={(e) => handleTouchOut(e)}>
          <View
            style={[
              styles.buttonMasterChildDot,
              {
                right: 5,
              },
            ]}
          />
        </Pressable>
        <Pressable
          ref={down}
          style={[
            styles.buttonMasterChild,
            {
              bottom: 0,
              left: '50%',
              transform: [{ translateX: -25 }],
            },
            // { borderBottomRightRadius: 300,  borderRightWidth: 1 }
          ]}
          onPressIn={(e) => handleTouchIn(e)}
          onPressOut={(e) => handleTouchOut(e)}>
          <View
            style={[
              styles.buttonMasterChildDot,
              {
                bottom: 5,
              },
            ]}
          />
        </Pressable>
        <Pressable style={[styles.buttonMasterCenter]} />
        <LinearGradient
          colors={['#0a0a0a', '#3d3d3d']}
          style={styles.buttonMasterCenter}></LinearGradient>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  // Periferic Button:"#2d2d2d" até '#1a1a1a',
  // Central Button: #0a0a0a até #3d3d3d
  // Pontos do controle: ##ffffff

  buttonMaster: {
    display: 'flex',
    flexDirection: 'row',
    width: 250,
    height: 250,
    flexWrap: 'wrap',
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    backgroundColor: '#1C1C1D',
    borderTopRightRadius: 300,
    borderTopLeftRadius: 300,
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300,
    borderTopWidth: 3,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: '#78787961',
  },
  buttonMasterChild: {
    width: 50,
    height: 50,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',

    // shadowOffset: { width: 0, height: -3 },
    // borderTopWidth: 2,

    // shadowRadius: 10,
    // shadowOpacity: 1,
  },

  buttonMasterCenter: {
    position: 'absolute',
    width: 145,
    height: 145,
    backgroundColor: '#0a0a0a',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -72.5 }, { translateY: -72.5 }],
    borderRadius: 300,
  },
  buttonMasterChildDot: {
    color: '#fff',
    position: 'absolute',
    lineHeight: 0,

    width: 8,
    height: 8,
    backgroundColor: '#fff',
    borderRadius: 300,
  },
});
