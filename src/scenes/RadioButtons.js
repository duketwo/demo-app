import React, { Component, View, ScrollView, StyleSheet } from 'react-native';
import { Subheader, RadioButtonGroup, COLOR } from 'react-native-material-design';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Checkboxes extends Component {

    render() {
        const theme = 'paperTeal';

        return (
            <View style={{flex:1}}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    style={{flex:1}}
                >
                    <Subheader text="Light Theme" />
                    <RadioButtonGroup
                        primary={theme}
                        selected={1}
                        items={[{
                        value: 1, label: 'Selected by default'
                    }, {
                        value: 2, label: 'Default'
                    }, {
                        value: 3, label: 'Disabled', disabled: true
                    }, {
                        value: 4
                    }]}
                    />
                    <Subheader text="Dark Theme" />
                    <View style={{ backgroundColor: COLOR.paperGrey900.color }}>
                        <RadioButtonGroup
                            primary={theme}
                            theme="dark"
                            selected={1}
                            items={[{
                            value: 1, label: 'Selected by default'
                        }, {
                            value: 2, label: 'Default'
                        }, {
                            value: 4, label: 'Disabled', disabled: true
                        }, {
                            value: 5
                        }]}
                        />
                    </View>
                </ScrollView>


                <ActionButton buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
                        <Icon name="android-create" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
                        <Icon name="android-notifications-none" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
                        <Icon name="android-done-all" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>

            </View>




        );
    }
}


const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});