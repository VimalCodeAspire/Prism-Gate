
import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView, SafeAreaView } from 'react-native'
import { theme } from '../core/theme'

export default function Background({ children ,style,key}) {
  return (
    <ImageBackground
      source={require('../assets/background_dot.png')}
      resizeMode="repeat"
      style={[styles.background,style]}
      >
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>

  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    padding: 15,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
