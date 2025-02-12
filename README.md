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

## 📹 Demo Videos

### **📱 iOS App Demo**

[![iOS Demo]](https://github.com/user-attachments/assets/c909f9e1-24f3-4646-950a-ca27c1830d79)

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

```

### **Running on iOS**

[Download](https://limewire.com/d/4a8bd6ff-ae35-4831-801a-60da7f95187d#X71tyXX8enHkMHOt_fH2REutRFKDOvCH0c-IQaZ-sjM) the build, unpack and install it on the simulator (by dragging it over)

```sh
npx expo start --ios
```

_(Requires a Mac with Xcode installed)_

### **Running on Android**

[Download](https://expo.dev/accounts/gregpawlik/projects/gp-player/builds/34bb9e48-3bdc-43f4-af54-78e55f72be95) the build and install it on the emulator (by dragging it over)

```sh
npx expo start --android
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

| Home Screen                                                                                                                                       | Playing Song                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="505" alt="Screenshot 2025-02-12 at 10 26 51" src="https://github.com/user-attachments/assets/01973ba8-ad0b-430f-96cd-edee50cb9c34" /> | <img width="505" alt="Screenshot 2025-02-12 at 10 27 03" src="https://github.com/user-attachments/assets/d6a83dbe-1309-4014-aefc-95cf42b23be8" /> |

| Expanded Player                                                                                                                                   | Empty State & Errors                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="505" alt="Screenshot 2025-02-12 at 10 27 12" src="https://github.com/user-attachments/assets/902a96e3-f958-4c93-b709-94a9f81dbac0" /> | <img width="505" alt="Screenshot 2025-02-12 at 11 32 15" src="https://github.com/user-attachments/assets/85ef862b-68f7-4ce6-a8f5-774a47dbff99" /> |

| Dark Mode                                                                                                                                         | Dark Mode                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="505" alt="Screenshot 2025-02-12 at 15 15 26" src="https://github.com/user-attachments/assets/78d62584-40dc-4bae-b8f3-40a06807f70c" /> | <img width="505" alt="Screenshot 2025-02-12 at 15 13 24" src="https://github.com/user-attachments/assets/2ae5a30f-09c9-415c-94b2-893eb90fcf55" /> |

### **Android**

| Home Screen                                                                                                                                       | Playing Song                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="525" alt="Screenshot 2025-02-12 at 10 27 50" src="https://github.com/user-attachments/assets/802b84a3-ab4f-4f9a-84d4-ba5f41d32148" /> | <img width="525" alt="Screenshot 2025-02-12 at 10 27 42" src="https://github.com/user-attachments/assets/e99d4511-30cd-4432-8998-b759f2801f7e" /> |

| Expanded Player                                                                                                                                   | Empty State & Errors                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="525" alt="Screenshot 2025-02-12 at 10 27 30" src="https://github.com/user-attachments/assets/1690028d-e7f0-4209-8d11-6a44e061cfac" /> | <img width="525" alt="Screenshot 2025-02-12 at 11 46 43" src="https://github.com/user-attachments/assets/fa43c255-acd0-43f3-aeeb-fae08f06dcb7" /> |

| Dark Mode                                                                                                                                         | Dark Mode                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="525" alt="Screenshot 2025-02-12 at 15 17 44" src="https://github.com/user-attachments/assets/3f75f745-762a-47d9-931a-fe23a4a9863d" /> | <img width="525" alt="Screenshot 2025-02-12 at 15 17 54" src="https://github.com/user-attachments/assets/ffc15437-9b59-4648-93ab-323cf5145bec" /> |

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
