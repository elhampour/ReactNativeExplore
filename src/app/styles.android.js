import {
    StyleSheet,
    Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

const opacity = 0.3;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `rgba(0,0,0,${opacity})`,
        padding: 40
    },
    box: {
        backgroundColor: 'yellow',
        width: width / 2,
        height: height / 3,
        position: 'absolute',
        top: 20,
        left: 30,
        borderRadius: 30
    },
    text: {
        color: 'white',
        fontSize: 34,
        fontFamily: 'Tahoma'
    }
});