import React from "react";
import { View, Text, StyleSheet, TextInput, Button, ImageBackground, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";


const BasicDataScreen = ({ navigation, route }) => {
    const [age, setAge] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [length, setLength] = React.useState([
        {label: 'I am new!', value: '0'},
        {label: '1-2 years', value: '1'},
        {label: '5+ Years', value: '5'},
      ]);
    return (
        <ImageBackground source={require('../../assets/images/gradient.jpg')} style={styles.image}>
        <View style={styles.card}>
            <Text style={styles.heading}>Basic Information</Text>
            <View style={styles.form}>
                <View style={styles.inputs}>
                    <TextInput style={styles.input} keyboardType='number-pad' placeholder="Age" onChangeText={setAge} value={age} />
                    <Text style={styles.message}>How long have you been a Christian?</Text>
                    <DropDownPicker style={styles.dropdown} open={open} value={value} items={length} setOpen={setOpen} setValue={setValue} setItems={setLength} />
                    <TouchableOpacity style={styles.button} title="Submit" onPress={() => navigation.navigate('ContentList')}>
                        <Text style={styles.buttonText}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },  
    card: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: '80%',
        marginTop: '40%',
        borderRadius: 20,
        maxHeight: 380,
        paddingBottom: '30%',
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginTop: '5%',
        marginBottom: '30%',
        color: 'black',
    },
    form: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: '5%',
    },
    inputs: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '10%',
    },  
    input: {
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingTop: 10,
        marginBottom: 20,
        fontSize: 16, 
        minHeight: 40,
    },
    button: {
        width: '80%',
        backgroundColor: 'black',
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '400'
    },
    buttonAlt: {
        width: '80%',
        borderWidth: 1,
        height: 40,
        borderRadius: 50,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    buttonAltText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
    },
    message: {
        fontSize: 16,
        marginVertical: '5%',
    },
    dropdown: {
        width: '80%',
        height: 40,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '10%',
        marginBottom: '10%',
    }
});

export default BasicDataScreen;