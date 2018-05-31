# React Native Npm Scripts
> My lazyness in code

## Installation

```sh
yarn global add react-native-npm-scripts
```

Or you can install it locally and use as an npm script too.

## Usage example

The idea is to install a bunch if scripts that use everyday for react native too
your package json. So just run:

```sh
react-native-npm-scripts install
```

And your package json scripts will be add with:

```javascript
{
  "android:codepush": "appcenter codepush release-react -a CODE_PUSH_ANDROID --output-dir ./build",
  "android:codepush-list": "appcenter codepush deployment list -a CODE_PUSH_ANDROID",
  "android:codepush-promote": "appcenter codepush promote -a CODE_PUSH_ANDROID -s Staging -d Production",
  "android:debug": "react-native run-android",
  "android:release": "cd android && ./gradlew assembleRelease; cd ../",
  "android:staging": "cd android && ./gradlew assembleReleaseStaging; cd ../",
  "android:install:staging": "adb install ./android/app/build/outputs/apk/releaseStaging/app-releaseStaging.apk",
  "android:install:release": "adb install ./android/app/build/outputs/apk/release/app-release.apk",
  "ios:codepush": "appcenter codepush release-react -a CODE_PUSH_IOS --output-dir ./build",
  "ios:codepush-list": "appcenter codepush deployment list -a CODE_PUSH_IOS",
  "ios:codepush-promote": "appcenter codepush promote -a CODE_PUSH_IOS -s Staging -d Production",
  "ios:staging": "react-native run-ios --configuration Staging",
  "ios:release": "react-native run-ios --configuration Release",
  "ios:debug": "react-native run-ios",
  "ios:publish": "cd ios && fastlane release; cd ../",
  "bugsnag:upload": "./scripts/bugsnag-upload",
  "install:devops": "yarn add global bugsnag-sourcemaps appcenter",
  "install:ios-devops": "gem install fastlane match gym",
  "install:eslint": "yarn add global eslint eslint-config-airbnb eslint-plugin-babel eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react babel-parser"
}
```

And the scripts folder will be added to your project.

After this is you should run this on your project folder:

```sh
yarn install:devops
yarn install:devops-ios # If you are a mac user
yarn install:eslint
```

I will improve this sometime. I just needed to be fast because I have other
projects to start.

## Development setup

```
yarn or npm install # bleh
```

And you are good to go


## Release History

* 1.0.0
    * FIRST VERSION!!!!!! WOW

## Meta

Bruno Oliveira – [@brunocoder](https://twitter.com/brunocoder) – brunooliveira37@hotmail.com

Distributed under the MIT license.

[brunoliveira.ml](http://brunoliveira.ml)

## Contributing

1. Fork it (<https://github.com/brunoti/react-native-npm-scripts/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
