import React, { Component, PropTypes, View, Text, InteractionManager, Alert, ScrollView } from 'react-native';
import { Button, Subheader, COLOR } from 'react-native-material-design';


export default class Buttons extends Component {

    render() {
        const theme = 'paperTeal';

        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                bounces={false}
            >
                <View>
                    <Subheader text="Light Theme"/>
                    <View style={styles.content}>
                        <Button text="NORMAL" primary={theme} />
                        <Button text="NORMAL RAISED" primary={theme} raised={true}/>
                        <Button text="DISABLED" primary={theme} disabled={true}/>
                        <Button text="DISABLED RAISED" primary={theme} disabled={true} raised={true}/>
                    </View>
                    <Subheader text="Dark Theme"/>
                    <View style={{
                        backgroundColor: COLOR.paperGrey900.color,
                        padding: 16
                    }}>
                        <Button text="NORMAL FLAT" primary={theme} theme="dark"/>
                        <Button text="DISABLED FLAT" primary={theme} disabled={true} theme="dark"/>
                        <Button text="NORMAL RAISED" primary={theme} theme="dark" raised={true}/>
                        <Button text="DISABLED RAISED" primary={theme} disabled={true} theme="dark" raised={true}/>
                    </View>
                </View>
            </ScrollView>
        );
    }

}

const styles = {
    content: {
        padding: 16
    }
};