import React from 'react';
import { View, Text, Button, Linking, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HNG Mobile Desktop Stage 0</Text>
      <TouchableOpacity  style={{backgroundColor:'black',padding:10}}  onPress={() => Linking.openURL('https://github.com/goddypete57/HNGMobile?tab=MIT-1-ov-file')} >
        <Text style={styles.text}>GitHub Repo</Text>
      </TouchableOpacity>

      <TouchableOpacity  style={{backgroundColor:'black',padding:10,marginTop:20}}  onPress={() => Linking.openURL('https://hng.tech/')} >
        <Text style={styles.text}>HNG Hire Page</Text>
      </TouchableOpacity>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  
  },

  text: {
    fontSize: 15,
    fontWeight: 'medium',
    color: 'white',
    
  
  },



});

export default App;
