import React, { AppRegistry, Component, Navigator, DrawerLayoutAndroid, ScrollView, View, Text, StatusBar } from 'react-native';

import Navigate from './src/utils/Navigate';
import { Toolbar } from './src/components';
import Navigation from './src/scenes/Navigation';
import DrawerLayout from 'react-native-drawer-layout';
import EStyleSheet from 'react-native-extended-stylesheet';

class Application extends Component {

    static childContextTypes = {
        drawer: React.PropTypes.object,
        navigator: React.PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = {
            drawer: null,
            navigator: null
        };
    }

    componentDidMount() {
        // SplashScreen.hide();
    }

    getChildContext = () => {
        return {
            drawer: this.state.drawer,
            navigator: this.state.navigator
        }
    };

    setDrawer = (drawer) => {
        this.setState({
            drawer
        });
    };

    setNavigator = (navigator) => {
        this.setState({
            navigator: new Navigate(navigator)
        });
    };

    render() {
        const { drawer, navigator } = this.state;
        const navView = React.createElement(Navigation);

        return (
            <DrawerLayout
                drawerWidth={300}
                drawerPosition={DrawerLayout.positions.Left}
                renderNavigationView={() => {
                    if (drawer && navigator) {
                        return navView;
                    }
                    return null;
                }}
                ref={(drawer) => { !this.state.drawer ? this.setDrawer(drawer) : null }}
            >
                {drawer &&
                <Navigator
                    initialRoute={Navigate.getInitialRoute()}
                    navigationBar={<Toolbar onIconPress={drawer.openDrawer} />}
                    configureScene={() => {
                            return Navigator.SceneConfigs.FadeAndroid;
                        }}
                    ref={(navigator) => { !this.state.navigator ? this.setNavigator(navigator) : null }}
                    renderScene={(route) => {
                        if (this.state.navigator && route.component) {
                            return (
                                <View
                                    style={styles.scene}
                                    showsVerticalScrollIndicator={false}>
                                	<route.component title={route.title} path={route.path} {...route.props} />
                                </View>
                            );
                        }
                    }}
                />
                }
                <StatusBar
                    hidden={true}
                />
            </DrawerLayout>
        );
    }
}

EStyleSheet.build();
AppRegistry.registerComponent('DemoApp', () => Application);

const styles = {
    scene: {
        flex: 1,
        marginTop: 56
    }
};