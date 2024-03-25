This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.


### INSTRUCTION
Instructions:
Starting from a blank React Native app, use the react-native-maps package, import google maps sdk or an open
source mapping tool of your choice as a maps provider. Make use of accessing the device location service and render
four buttons, start, stop, reset and save.
Start would trigger the recording your current location and drawing out a path that you travel.
Stop would ultimately stop the service and the map will show the path travelled.
Reset will clear the path drawn on the map.
Save will send the path geo coordinates to the server.
Requirements:
This simple application should allow the user to map a route of their choice. Make sure that you select a custom
location setting, not street map as most of these routes can be off-road. This mapping functionality should work
offline too, in this case, the map line will be drawn, and the coordinates be saved locally until server connection
enables syncing to the server itself.
For this test task, don’t worry about deleting routes from the server, editing routes on the map or any customisation.
The outcome should be a one-page app with the map and buttons. Make sure the accuracy of the map is set to highest.
Setup:
Use an IDE of your choice, I assume most will use VSCode to write the react native code. For the server, use any open
software database, preferably noSql. Some options are Firebase Cloud Firestore or Mongo Atlas. No subscriptions are
required for this. Also, don’t worry too much about the setting up of the database, all that is necessary for now is a
Geopoint field with string data or latlng data (also string metadata).
For offline functionality, you are free to implement the approach you deem is best. Some examples include Realm,
SQLite or Cache the coordinates locally on the device in app or page state.
Evaluation:
A successful task will show this one-page application working seamlessly in online and offline modes. The map will
have a high degree of accuracy and the buttons work as expected. Design will not be assessed, usability and working
functionality are the priority.
No additional resources are needed.
