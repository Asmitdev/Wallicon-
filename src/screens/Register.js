import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Register = () => {
    const navigation = useNavigation()
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <Text style={{ marginTop: 30, fontSize: 20, alignSelf: 'center', color: '#000', fontWeight: '600' }}>Register</Text>

                <View style={styles.Container}>
                    <TextInput
                        placeholder='Enter Name'
                        style={styles.textBox}
                    />
                    <TextInput
                        placeholder='Enter Email'
                        style={styles.textBox}
                    />
                    <TextInput
                        placeholder='Enter Password'
                        style={styles.textBox}
                    />
                    <TextInput
                        placeholder='Enter Mobile'
                        style={styles.textBox}
                        keyboardType={'number-pad'}
                    />
                    <TextInput
                        placeholder='Enter Gender'
                        style={styles.textBox}
                    />
                    <TextInput
                        placeholder='Enter Address'
                        style={styles.textBox}
                    />

                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Register</Text>
                    </TouchableOpacity>
                    <Text style={styles.Link} onPress={() => navigation.goBack()}>Already have Account ? Login </Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Container: {
        marginTop: 30,
        padding: 10,

    },
    textBox: {
        borderColor: '#762264',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 20,
        marginBottom: 20

    },
    btn: {
        height: 50,
        width: '100%',
        backgroundColor: '#762264',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    Link: {
        textAlign: 'center',
        fontSize: 15,
        marginVertical: 10
    }
})

export default Register