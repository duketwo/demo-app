import React, { Component, View, ScrollView } from 'react-native';
import { Subheader, Divider } from 'react-native-material-design';

export default class Subheaders extends Component {

    render() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                bounces={false}
            >
                <Subheader text="Normal Divider"/>
                <Divider />
                <Subheader text="Divider with inset"/>
                <Divider inset />
            </ScrollView>
        );
    }
}
