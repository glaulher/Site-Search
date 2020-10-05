import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Linking,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const FindSite = (): JSX.Element => {
  const navigation = useNavigation(); // navegar entre as telas
  function HandleNavigateToBack() {
    navigation.goBack();
  }

  function handleFindSite() {
    Linking.openURL('http://200.98.119.169/sites/');
  }

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ImageBackground
        source={require('../../assets/home-background.png')}
        style={styles.container}
        imageStyle={styles.image}>
        <TouchableOpacity style={styles.back} onPress={HandleNavigateToBack}>
          <Icon name="arrow-left" color="#52c3a3" size={32} />
        </TouchableOpacity>
        <View style={styles.main}>
          <Image source={require('../../assets/logo.png')} />
          <View>
            <Text style={styles.title}>Bem vindo.</Text>
            <Text style={styles.description}>
              Ao clicar no botão abaixo, você será redirecionado para a página
              do Find Site.
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <RectButton style={styles.button} onPress={handleFindSite}>
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="map" color="#FFF" size={48} />
              </Text>
            </View>
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
  top: {
    marginBottom: 40,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },

  select: {},

  button: {
    backgroundColor: '#bd93f9',
    height: 160,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
    width: 160,
  },

  buttonIcon: {
    height: 160,
    width: 160,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 500,
    height: 500,
  },
  back: {
    alignItems: 'flex-start',
  },
});

export default FindSite;
