'use strict';
import React, { Component, PropTypes, View, Text, Image, Linking, TextInput, StyleSheet, AppRegistry } from 'react-native';
import { Card, Button, COLOR, TYPO, BACKGROUNDCOLOR, Divider } from 'react-native-material-design';
import EStyleSheet from 'react-native-extended-stylesheet';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

export default class Welcome extends Component {

    static contextTypes = {
        navigator: PropTypes.object.isRequired
    };

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    render() {

        const { navigator } = this.context;
        return (

            <Image style={styles.bg} source={{uri: 'https://lh4.googleusercontent.com/-c2kWlW-DE9A/VMSgQjCdffI/AAAAAAAADy4/tB__iZ25nxQ/w1080-h600/atardecer8.png'}}>
                <View style={styles.container}>
                    <View>
                        <View style={styles.header}>
                            <Image style={styles.mark} source={{uri: 'https://upload.wikimedia.org/wikipedia/en/b/be/Google_Chrome_for_Android-_Android_5.0_Logo.png'}} />
                        </View>
                        <View style={styles.inputs}>
                            <View style={styles.inputContainer}>
                                <Image style={styles.inputUsername} source={{uri: 'http://i.imgur.com/iVVVMRX.png'}}/>
                                <TextInput
                                    onChangeText={(user) => this.setState({...this.state, username: user})}
                                    style={[styles.input, {color: "#FFFFFF"}]}
                                    placeholder="Username"
                                    placeholderTextColor="#FFF"
                                    value={this.state.username}
                                    underlineColorAndroid="transparent"
                                    selectionColor={"white"} // seems to work only on iOS (https://github.com/facebook/react-native/commit/0c91931adf15fb456e72d08dca872f632661b655)
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <Image style={styles.inputPassword} source={{uri: 'http://i.imgur.com/ON58SIG.png'}}></Image>
                                <TextInput
                                    onChangeText={(pass) => this.setState({...this.state, password: pass})}
                                    style={[styles.input, {color: "#FFFFFF"}]}
                                    placeholder="Password"
                                    placeholderTextColor="#FFF"
                                    value={this.state.password}
                                    underlineColorAndroid="transparent"
                                    selectionColor={"white"} // seems to work only on iOS ( https://github.com/facebook/react-native/commit/0c91931adf15fb456e72d08dca872f632661b655 )
                                    secureTextEntry={false}
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                />

                            </View>
                            <View style={styles.forgotContainer}>
                                <Text style={[styles.greyFont,{fontSize: 13}]}>Forgot Password</Text>
                            </View>
                        </View>

                        <Button text="Sign In" theme="dark" primary={"paperTeal"} raised={true}/>

                        <View style={styles.signup}>
                            <Text style={styles.greyFont}>Don't have an account?</Text>
                            <Text style={[styles.whiteFont]}>Sign Up</Text>
                        </View>
                    </View>

                </View>
            </Image>
        );
    }
}


var styles = EStyleSheet.create({
    container: {
        flexDirection: 'column',
        flex:1,
        backgroundColor: 'transparent'
    },
    bg: {
        flex:1,
        alignSelf: 'stretch',
        width: null,
        height: null,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .5,
        backgroundColor: 'transparent'
    },
    mark: {
        width: 150,
        height: 150,
        marginTop: "10%",
        marginBottom: "5%",
    },
    signin: {
        backgroundColor: '#FF3366',
        padding: 20,
        alignItems: 'center'
    },
    signup: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .15
    },
    inputs: {
        marginTop: 0,
        marginBottom: 0,
        flex: 1,
        backgroundColor: 'transparent'
    },
    inputPassword: {
        marginLeft: 15,
        marginRight: 15,
        height: 40,
        width: 40,
        resizeMode: 'contain',
        flexAndroid: 0.1,
        flexIOS: 0.1,
    },
    inputUsername: {
        marginLeft: 15,
        marginRight: 15,
        height: 40,
        width: 40,
        resizeMode: 'contain',
        flexAndroid: 0.1,
        flexIOS: 0.1,
    },
    inputContainer: {
        flex: 1,
        paddingTop: 0,
        marginTop: 0,
        borderWidth: 1,
        borderBottomColor: '#CCC',
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    input: {
        heightAndroid: 40,
        heightIOS: 40,
        flex:1,
        fontFamily: 'Roboto',
        fontSize: 15
    },
    forgotContainer: {
        alignItems: 'flex-end',
        paddingTop: 15,
        paddingRight: 15,
        paddingBottom: 5
    },
    greyFont: {
        color: '#D8D8D8'
    },
    whiteFont: {
        color: '#FFF'
    }
})