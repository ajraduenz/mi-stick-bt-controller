import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';

export default function PerifericButton() {
  const add = React.useRef(null);
  const dec = React.useRef(null);
  const [dualButton, setDualButton] = React.useState<any>({ pressed: false, currentButton: '' });
  function handleTouchIn(e: any) {
    if (e.currentTarget == add.current) {
      setDualButton({ pressed: true, currentButton: 'up' });
    }
    if (e.currentTarget == dec.current) {
      setDualButton({ pressed: true, currentButton: 'down' });
    }
  }
  function handleTouchOut(e: any) {
    setDualButton(false);
  }

  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        marginTop: 40,
      }}>
      <View
        style={{
          width: '50%',
        }}>
        <View style={styles.left}>
          <Pressable
            style={[
              {
                backgroundColor: '#1C1C1D',
                borderColor: '#232323',
              },
              styles.perifericButton,
            ]}>
            <Svg width="17" height="28" viewBox="0 0 17 28" fill="none">
              <Path
                d="M0.5 13.6774C0.5 14.315 0.742884 14.8615 1.25901 15.3624L12.9023 26.7476C13.3121 27.1575 13.7979 27.3548 14.3748 27.3548C15.5588 27.3548 16.5 26.4137 16.5 25.2448C16.5 24.6528 16.2571 24.1214 15.8321 23.7116L5.52467 13.6622L15.8321 3.64326C16.2723 3.21822 16.5 2.68691 16.5 2.11006C16.5 0.941176 15.5588 0 14.3748 0C13.7979 0 13.3121 0.197343 12.9023 0.607211L1.25901 11.9924C0.742884 12.4934 0.51518 13.0247 0.5 13.6774Z"
                fill="white"
              />
            </Svg>
          </Pressable>
        </View>
        <View style={styles.left}>
          <Pressable
            style={[
              {
                backgroundColor: '#232323',
                borderColor: '#1C1C1D',
              },
              styles.perifericButton,
            ]}>
            <Svg style={{ marginTop: 10 }} width={48} height={48} viewBox="0 0 48 48">
              <Path
                d="M19.044,23.269916 L19.0425,9.687742 L32.0115,16.502244 L19.044,23.269916 Z"
                fill="#FFFFFF"
              />
              <G fill="#CE1312">
                <Path d="M19.044,23.269916 L19.0425,9.687742 L32.0115,16.502244 L19.044,23.269916 Z M47.52,7.334163 C47.52,7.334163 47.0505,4.003199 45.612,2.536366 C43.7865,0.610299 41.7405,0.601235 40.803,0.489448 C34.086,0 24.0105,0 24.0105,0 L23.9895,0 C23.9895,0 13.914,0 7.197,0.489448 C6.258,0.601235 4.2135,0.610299 2.3865,2.536366 C0.948,4.003199 0.48,7.334163 0.48,7.334163 C0.48,7.334163 0,11.246723 0,15.157773 L0,18.82561 C0,22.73817 0.48,26.64922 0.48,26.64922 C0.48,26.64922 0.948,29.980184 2.3865,31.447016 C4.2135,33.373084 6.612,33.312658 7.68,33.513574 C11.52,33.885191 24,34 24,34 C24,34 34.086,33.984894 40.803,33.495446 C41.7405,33.382148 43.7865,33.373084 45.612,31.447016 C47.0505,29.980184 47.52,26.64922 47.52,26.64922 C47.52,26.64922 48,22.73817 48,18.82561 L48,15.157773 C48,11.246723 47.52,7.334163 47.52,7.334163 Z" />
              </G>
            </Svg>
          </Pressable>
        </View>
        <View style={styles.left}>
          <Pressable
            style={[
              {
                backgroundColor: '#1C1C1D',
                borderColor: '#232323',
              },
              styles.perifericButton,
            ]}>
            <Svg width="33" height="32" fill="none" viewBox="0 0 33 32">
              <Path
                fill="#fff"
                d="M30.22 31.59a1.33 1.33 0 001.892 0 1.345 1.345 0 000-1.89L2.79.395a1.35 1.35 0 00-1.908 0c-.51.51-.51 1.398 0 1.89L30.22 31.592zM24.63 19.01V2.747c0-1.348-1.003-2.417-2.368-2.417-.905 0-1.562.395-2.533 1.266l-6.627 5.871 2.384 2.385 5.05-4.589c.081-.082.164-.131.262-.131.132 0 .23.099.23.247v10.031l3.602 3.601zM7.723 22.498h4.622a.53.53 0 01.345.131l7.038 6.299c.921.822 1.628 1.2 2.55 1.2.904 0 1.627-.444 2.039-1.184l-3.421-3.387-6.595-6.02c-.345-.312-.608-.394-1.068-.394H8.15c-.493 0-.74-.247-.74-.74v-6.348l-2.78-2.779c-.525.625-.821 1.562-.821 2.796v6.347c0 2.714 1.332 4.079 3.913 4.079z"
              />
            </Svg>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          width: '50%',
        }}>
        <View>
          <Pressable
            style={[
              {
                backgroundColor: '#1C1C1D',
                borderColor: '#232323',
              },
              styles.perifericButton,
            ]}>
            <Svg width="33" height="28" viewBox="0 0 33 28" fill="none">
              <Path
                d="M4.13129 22.5209H28.8563C31.2235 22.5209 32.5 21.2311 32.5 18.7287V3.77928C32.5 1.28986 31.2235 0 28.8563 0H4.13129C1.76414 0 0.5 1.28986 0.5 3.77928V18.7287C0.5 21.2311 1.76414 22.5209 4.13129 22.5209ZM4.37916 19.6832C3.58598 19.6832 3.22657 19.3479 3.22657 18.4837V4.02436C3.22657 3.17305 3.58598 2.83769 4.37916 2.83769H28.6208C29.414 2.83769 29.7734 3.17305 29.7734 4.02436V18.4837C29.7734 19.3479 29.414 19.6832 28.6208 19.6832H4.37916ZM10.0678 27.1515H22.9198C23.6139 27.1515 24.1592 26.5582 24.1592 25.8746C24.1592 25.178 23.6139 24.5847 22.9198 24.5847H10.0678C9.38614 24.5847 8.84082 25.178 8.84082 25.8746C8.84082 26.5582 9.38614 27.1515 10.0678 27.1515Z"
                fill="white"
              />
            </Svg>
          </Pressable>
        </View>

        <View
          style={[
            styles.perifericButtonAddDec,

            dualButton.currentButton === 'up' && {
              borderTopWidth: 0,
              borderLeftWidth: 2,
              borderRightWidth: 2,
              borderBottomWidth: 3,
            },
            dualButton.currentButton === 'down' && {
              borderTopWidth: 5,
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderBottomWidth: 0,
            },
          ]}>
          <LinearGradient
            colors={
              dualButton.pressed
                ? dualButton.currentButton === 'up'
                  ? ['#0a0a0a', '#3d3d3d']
                  : ['#3d3d3d', '#0a0a0a']
                : ['#1c1c1d', '#1c1c1d']
            }>
            <Pressable
              ref={add}
              onPressIn={(e) => handleTouchIn(e)}
              onPressOut={(e) => handleTouchOut(e)}
              style={{ width: 100, height: 105, alignItems: 'center', justifyContent: 'center' }}>
              <Svg width="29" height="29" viewBox="0 0 29 29" fill="none">
                <Path
                  d="M2.69575 16.6645H12.3042V26.273C12.3042 27.4782 13.2948 28.4688 14.5 28.4688C15.7052 28.4688 16.6958 27.4782 16.6958 26.273V16.6645H26.3042C27.5094 16.6645 28.5 15.6904 28.5 14.4688C28.5 13.2636 27.5094 12.273 26.3042 12.273H16.6958V2.6645C16.6958 1.45932 15.7052 0.46875 14.5 0.46875C13.2948 0.46875 12.3042 1.45932 12.3042 2.6645V12.273H2.69575C1.49057 12.273 0.5 13.2636 0.5 14.4688C0.5 15.6904 1.49057 16.6645 2.69575 16.6645Z"
                  fill="white"
                />
              </Svg>
            </Pressable>
            <Pressable
              ref={dec}
              onPressIn={(e) => handleTouchIn(e)}
              onPressOut={(e) => handleTouchOut(e)}
              style={{ width: 100, height: 105, alignItems: 'center', justifyContent: 'center' }}>
              <Svg width="29" height="6" viewBox="0 0 29 6" fill="none">
                <Path
                  d="M2.66657 5.05554H26.3334C27.4911 5.05554 28.5 4.06322 28.5 2.8559C28.5 1.66511 27.4911 0.65625 26.3334 0.65625H2.66657C1.54194 0.65625 0.5 1.66511 0.5 2.8559C0.5 4.06322 1.54194 5.05554 2.66657 5.05554Z"
                  fill="white"
                />
              </Svg>
            </Pressable>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  perifericButton: {
    width: 100,
    height: 100,
    margin: 10,
    borderTopWidth: 3,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  left: {
    alignSelf: 'flex-end',
  },
  perifericButtonAddDec: {
    width: 100,
    height: 230,
    margin: 5,
    overflow: 'hidden',
    backgroundColor: '#1C1C1D',
    borderRadius: 100,
    borderTopWidth: 3,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: 'rgba(120, 120, 121, 0.38)',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
