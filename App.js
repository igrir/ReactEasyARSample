/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button
} from 'react-native';

import {
    UnityView, UnityModule
} from 'react-native-unity-view';

class App extends React.Component {

    onSwitchScene(sceneName) {
        UnityModule.postMessageToUnityManager("switchscene:" + sceneName);
    }

    render() {
        return (
            <Fragment>
                <View style={{ backgroundColor: '#df0000', flex: 1 }}>
                    <UnityView style={{ flex: 1 }}></UnityView>
                </View>
                {/* <View style={{ position: 'absolute', top: 0 }}>
                    <Button title="Switch Vuforia" onPress={() => this.onSwitchScene("SampleScene")} />
                    <Button title="Switch ARKit" onPress={() => this.onSwitchScene("SimpleAR")} />
                </View> */}
            </Fragment>
        );
    }
};
export default App;
