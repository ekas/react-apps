import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, Button } from 'react-native';
import { Constants, Permissions,ImagePicker } from 'expo';

export default class App extends Component {
  state = { photoUri: [] };

  render() {
    let { photoUri } = this.state;
    return (
      <ScrollView style={styles.container}>
        <Button styles={styles.paragraph}
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        {photoUri.length != 0 ? (
          this._renderPhotos(photoUri)
        ) : (
          <Text style={styles.paragraph}>No Images</Text>
        )}
      </ScrollView>
    );
  }

  _pickImage = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: false,
      });

      if (!result.cancelled) {
        let { photoUri } = this.state;
        photoUri.push(result.uri);
        this.setState({ photoUri: photoUri  });
      }
    }
    
  };

  _renderPhotos(photoUri) {
    let images = [];
    for (let uri of photoUri) {
      images.push(
        <Image
          source={{ uri: uri }}
          resizeMode="contain"
          style={{ height: 100, width: 100, resizeMode: 'contain' }}
        />
      );
    }
    return images;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    alignContent: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});