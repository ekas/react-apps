import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Button, Dimensions, View } from 'react-native';
import { Constants, Permissions,ImagePicker } from 'expo';

export default class App extends Component {
  state = { 
    photoUri: [] 
  };

  render() {
    const { photoUri } = this.state;
    return (
      <ScrollView style={styles.container}>
        <Button
          title="Open photos"
          onPress={this._pickImage}
        />
        { 
          this._renderPhotos(photoUri)
        }
      </ScrollView>
    );
  }

  _pickImage = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: false
      });
      
      if (!result.cancelled) {
        let { photoUri } = this.state;
        photoUri.push(result.uri);
        this.setState({ photoUri: photoUri  });
      }
    }    
  }

  _renderPhotos(photoUri) {
    let images = [];
    photoUri.map((uri, index) => images.push(
      <View style={ styles.imageContainer } key={index}>
        <Image
          source={{ uri: uri }}
          resizeMode="contain"
          style={{width:250, height: 250, borderColor: "#000" }}
        />
      </View>
    ));
    return images;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FDFFFC',
    alignContent: 'center',
  },
  text: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  imageContainer: {
    marginVertical: 10 ,
    marginHorizontal: 5,
    padding: 0,
    borderRadius: 4
  }
});
