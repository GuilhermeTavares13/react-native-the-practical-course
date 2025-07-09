import {View, StyleSheet} from 'react-native'

function Card({children}) {
    return (
        <View style={StyleSheet.inputContainer}>{children}</View>
    )
}

export default Card;

const styles = StyleSheet.create({
     inputContainer: {
        marginTop: 36,
        padding: 16,
        marginHorizontal:24, 
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        alignItems: 'center'
    }
})
