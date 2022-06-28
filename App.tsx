import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
  const [toogle, setToogle] = useState(false);

  const handleClick = () => {
    setToogle(oldToogle => !oldToogle);
  };

  useEffect(() => {
    //liga flash do celular
    Torch.switchState(toogle);
  }, [toogle]);

  useEffect(() => {
    const subScription = RNShake.addListener(() => {
      setToogle(oldToogle => !oldToogle);
    });
    return () => subScription.remove();
  }, []);

  return (
    <View style={toogle ? style.containerLight : style.container}>
      <TouchableOpacity onPress={handleClick}>
        <Image
          style={toogle ? style.lightingOn : style.lightingOff}
          source={
            toogle
              ? require('./assets/icons/eco-light.png')
              : require('./assets/icons/eco-light-off.png')
          }
        />
        <Image
          style={toogle ? style.dioLogo : style.dioLogo}
          source={
            toogle
              ? require('./assets/icons/logo-dio.png')
              : require('./assets/icons/logo-dio-white.png')
          }
        />
      </TouchableOpacity>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
    tintColor: 'white',
  },
  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
});
