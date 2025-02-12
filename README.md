# Audio Player

An **Audio Player** app built with **Expo (Managed Workflow)** that allows users to play, pause, skip, and navigate through a playlist of five pre-loaded songs. Additionally the app supports **background audio playback**, **gesture-based navigation (iOS)**, **player state persistance**, and works **seamlessly on both iOS and Android**.

---

## 🚀 Features

### 🎵 **Audio Player Controls**

- **Play/Pause**: Toggle playback of the current song.
- **Next**: Skip to the next song in the playlist.
- **Previous**: Go back to the previous song.
- **Seek**: Scrub through the current song.
- **Current Song Display**: Shows the title and duration of the active track.

### 📜 **Playlist Functionality**

- **Pre-loaded Playlist**: Contains five songs.
- **Tap to Play**: Users can tap a song in the playlist to start playing it.
- **Highlight Active Song**: The currently playing song is visually distinguished (inspired by Spotify).
- **State Persistance**: Keeps the state of the player even after the app is closed and re-opened.

### 📱 **Cross-Platform Compatibility**

- Works on **both iOS and Android** using **Expo Dev Client**.
- **iOS Gesture Support**: Swipe left/right to move between songs.
- **Background Playback**: Continue playing audio when the app is in the background.

---

## 📦 Key Libraries Used

| Library                     | Purpose                                                     |
| --------------------------- | ----------------------------------------------------------- |
| `react-native-track-player` | Handles audio playback and background mode.                 |
| `redux` & `redux-saga`      | Manages global state and side-effects for the audio player. |
| `styled-components`         | For styling components in the app.                          |
| `expo-router`               | Enables navigation with file-based routing.                 |

---

## 🛠 How to Run the App Locally

### **Prerequisites**

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Dev Client](https://docs.expo.dev/clients/installation/)
- A physical device or emulator (iOS Simulator or Android Emulator)

### **Installation & Running the App**

```sh
# Clone the repository
git clone https://github.com/gpawlik/music-player.git
cd music-player

# Install dependencies
yarn install  # or npm install

# Start the development server
expo start --dev-client
```

### **Running on iOS**

```sh
expo run:ios
```

_(Requires a Mac with Xcode installed)_

### **Running on Android**

```sh
expo run:android
```

_(Requires Android Studio or a connected Android device)_

---

## 🧪 Running Tests

We use **Jest** for unit testing.

```sh
yarn test  # or npm test
```

- The tests cover the Redux state, sagas, and basic component rendering.

---

## 📸 Screenshots

### **iOS**

| Home Screen                                  | Playing Song                                 | Playlist View                                | Background Mode                              |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| ![iOS Screenshot 1](path/to/screenshot1.png) | ![iOS Screenshot 2](path/to/screenshot2.png) | ![iOS Screenshot 3](path/to/screenshot3.png) | ![iOS Screenshot 4](path/to/screenshot4.png) |

### **Android**

| Home Screen                                      | Playing Song                                     | Playlist View                                    | Background Mode                                  |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| ![Android Screenshot 1](path/to/screenshot1.png) | ![Android Screenshot 2](path/to/screenshot2.png) | ![Android Screenshot 3](path/to/screenshot3.png) | ![Android Screenshot 4](path/to/screenshot4.png) |

---

## 💡 Key Decisions

- **Chosing `react-native-track-player`**: For simpler and cleaner queue management and native feeling (compared to eg. `expo-av`)
- **State Management with Redux**: Ensures predictable behavior and scalable state handling, specially in combination with `redux-saga`
- **Expo Managed Workflow**: Simplifies development and deployment.
- **Testing**: Focused on Redux logic and utils testing using Jest.

---

## 🧩 Challenges

- **Finding a decent free API for the audio content**: Most of the APIs offer only 30 seconds preview and the artworks are low quality
- **Making `react-native-track-player` work with Expo**: The new architecture is not yet supported in the newest version of RNTP
- **Creating a smooth "scrubber" component**: Needed to find a balance betwen the performance and visual sensation of a smotth movement

---

### 🎶 Happy Listening! 🎶
