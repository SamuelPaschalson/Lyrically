# Lyricaly <img src="" width="80">

A [React Native](https://facebook.github.io/react-native/) native app utilising [Expo](https://expo.io/), [React Navigation](https://reactnavigation.org) and fetching data from multiple API's ([Deezer](https://developers.deezer.com/) and [Lyrics.OVH](https://www.lyrics.ovh)).
<br><br>
Built as a personal project for [React Native](https://facebook.github.io/react-native/). This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app). Design and development by [Samuel](https://www.samuel-paschalson.netlify.app/).


## Contents

- [App Preview](#app-preview)
	- [Video Preview](#video-preview)
	- [Search Screen](#search-screen)
	- [Details Screen](#details-screen)
	- [About Screen](#about-screen)
	- [Navigation](#navigation)
- [Expo Project Page](#expo-project-page)
- [App Features](#app-features)
	- [Screens](#screens)
	- [Components](#components)
	- [Config](#config)
	- [Lib](#lib)
	- [Utils](#utils)
- [Getting Started](#getting-started)
- [What's Included](#whats-included)
- [API's Used](#apis-used)
- [Author](#author)
- [License](#license)


## App Preview

### Video Preview

<a href="#">
	<img src="https://github.com/SamuelPaschalson/Lyrically/blob/master/screenshots/video.gif" width="350" >
</a>

### Search Screen

<img src="https://github.com/SamuelPaschalson/Lyrically/blob/master/screenshots/search.jpg" width="270" alt="Lyrically - Search screen" hspace="5"><img src="https://github.com/SamuelPaschalson/Lyrically/blob/master/screenshots/suggestions.jpg" width="270" alt="Lyrically - Suggestions on search screen">

### Details Screen

<img src="https://github.com/SamuelPaschalson/Lyrically/blob/master/screenshots/details-justin.jpg" width="270" hspace="5" alt="Lyrically - Details screen, Justin Beiber"><img src="https://github.com/SamuelPaschalson/Lyrically/blob/master/screenshots/details-the-one.jpg" width="270" hspace="5" alt="Lyrically - Details screen, We are the One"><img src="https://github.com/SamuelPaschalson/Lyrically/blob/master/screenshots/details-eminem.jpg" width="270"  alt="Lyrically - Details screen, Eminem">

### About Screen

<img src="https://github.com/SamuelPaschalson/Lyrically/blob/master/screenshots/about.jpg" width="270" alt="Lyrically - About screen">

### Navigation

<img src="https://github.com/SamuelPaschalson/Lyrically/blob/master/screenshots/navigation.jpg" width="270" alt="Lyrically - Navigation">


## App Features

### Screens

`src/screens/`

- `SearchScreen.js` - Search the [Deezer API](https://developers.deezer.com/) by song title (_class component_)
- `DetailsScreen.js` - Selected song details (including [Lyrics.ovh](https://www.lyrics.ovh/) API call) (_class component_)
- `AboutScreen.js` - About details (_functional component_)

### Components

`src/components/`

- `Credits.js` - Development credentials template (_functional component_)
- `SocialButton.js` - Button template for sharing links/ the app (_functional component_)
- `Suggestions.js` - Song suggestions (_functional component_)

### Config

`src/config/`

- `router.js` - App navigation routing (including drawer nav render method)
- `colours.js` - Colour constants

### Lib

`src/lib/`

- `constants.js` - Expo manifest [constants](https://docs.expo.io/versions/latest/sdk/constants#__next) and functions

### Utils

`src/utils/`

- `shareHelper.js` - Native device [share method](https://docs.expo.io/versions/latest/react-native/share)

## Getting Started

1. Install the latest Node
2. Install [Expo](https://expo.io/) - `npm install expo-cli --global`
3. `cd` into this project directory
4. `npm install` or `yarn install`
5. Run `expo start`

## What's Included

|                                Name                                | Description                                                                                                                                      |
| :----------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------ |
|           [Expo (incl. React Native)](https://expo.io/)            | Expo is a free and open source toolchain built around React Native to help you build native iOS and Android projects using JavaScript and React. |
|          [React Navigation](https://reactnavigation.org/)          | Routing and navigation for your React Native apps.                                                                                               |
| [Format Duration](https://github.com/hypermodules/format-duration) | Convert a number in milliseconds to a standard duration string.                                                                                  |
|    [RN-Placeholder](https://github.com/mfrachet/rn-placeholder)    | Display some placeholder stuff before rendering your text or media content in React Native.                                                      |

## API's Used

- [Deezer](https://developers.deezer.com/)
- [Lyrics.OVH](https://api.lyrics.ovh)

## Author

[Samuel Paschalson](https://www.samuel-paschalson.netlify.app/)

[Lyrically Project Github](https://github.com/SamuelPaschalson/Lyrically)

## License

[MIT](https://github.com/SamuelPaschalson/Lyrically/blob/master/LICENSE)

You are welcome to use this however you wish within the MIT license, but please retain [my credentials](https://www.samuel-paschalson.netlify.app/) and links back to [this repo](https://github.com/SamuelPaschalson/Lyrically).
