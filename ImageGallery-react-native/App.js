import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, Button, Dimensions, View } from 'react-native';
import { Constants, Permissions,ImagePicker } from 'expo';

const imageWidth = Dimensions.get('window').width;

export default class App extends Component {
  state = { photoUri: [] };

  render() {
    let { photoUri } = this.state;
    return (
      <ScrollView style={styles.container}>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        {photoUri.length != 0 ? (
          this._renderPhotos(photoUri)
        ) : (
          <Text style={styles.text}>No Images</Text>
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
      console.log(result);
      if (!result.cancelled) {
        let { photoUri } = this.state;
        photoUri.push(result.uri);
        this.setState({ photoUri: photoUri  });
      }
    }
    
  };

  _renderPhotos(photoUri) {
    let images = [];
    photoUri.map((uri, index) => images.push(
      <View style={ styles.imageContainer } key={index}>
        <Image
          source={{ uri: uri }}
          resizeMode="contain"
          style={ styles.galleryImg }
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
  galleryImg: {
    height: 150, 
    width: imageWidth - 30, 
    resizeMode: 'cover',
  },
  imageContainer: {
    marginVertical: 10 ,
    marginHorizontal: 5,
    padding: 0,
    borderRadius: 4,
    borderWidth: 10,
    borderColor: '#5D737E',
  }
});
