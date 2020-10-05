import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RectButton, BorderlessButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import {getStatusBarHeight} from 'react-native-status-bar-height';

const Home = (): JSX.Element => {
  const navigation = useNavigation(); // navegar entre as telas

  const HandlerAbout = () => {
    //function to make two option alert
    Alert.alert(
      //title
      'Desenvolvido por:',
      //body
      ' Glaulher Medeiros, e-mail: glaulher.developer@gmail.com',
    );
  };

  function handleNavigstionToFindSite() {
    navigation.navigate('FindSite');
  }

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ImageBackground
        source={require('../../assets/home-background.png')}
        style={styles.container}
        imageStyle={styles.image}>
        <View style={styles.info}>
          <BorderlessButton>
            <Text onPress={HandlerAbout}>
              <Icon name="info" color="#52c3a3" size={32} />
            </Text>
          </BorderlessButton>
        </View>
        <View style={styles.main}>
          <Image source={require('../../assets/logo.png')} />
          <View>
            <Text style={styles.title}>Informações dos sites Claro</Text>
            <Text style={styles.description}>
              Encontre a localização do site e CRQ para entrada no site.
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <RectButton
            style={styles.button}
            onPress={handleNavigstionToFindSite}>
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="arrow-right" color="#FFF" size={24} />
              </Text>
            </View>
            <Text style={styles.buttonText}>Find Sites Claro</Text>
          </RectButton>

          <RectButton style={styles.button} onPress={() => {}}>
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="arrow-right" color="#FFF" size={24} />
              </Text>
            </View>
            <Text style={styles.buttonText}>Consultar CRQ</Text>
          </RectButton>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    paddingTop: 20 + getStatusBarHeight(),
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu-Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto-Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {
    paddingBottom: 0,
  },

  select: {},

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#52c3a3',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 40,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto-Medium',
    fontSize: 24,
  },
  image: {
    width: 500,
    height: 500,
  },
  info: {
    alignItems: 'flex-end',
  },
});

export default Home;
