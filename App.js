// By Shrif Rai and Scott B. Shaffer
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Button, SafeAreaView, Alert } from 'react-native';

// main function/app launcher
export default function App() { 
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  console.log("App executed");
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require("./assets/new-icon.png")}/>
      <Text style={styles.welcomeTxt}>This is a password manager app!</Text>
      <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            secureTextEntry = {false}
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            secureTextEntry = {true}
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#404cd9',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
