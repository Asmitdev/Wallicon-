import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigaton = useNavigation()
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <Text style={{ marginTop: 50, fontSize: 20, alignSelf: 'center', color: '#000', fontWeight: '600' }}>Login</Text>

                <View style={styles.Container}>

                    <TextInput
                        placeholder='Enter Email'
                        style={styles.textBox}
                    />
                    <TextInput
                        placeholder='Enter Password'
                        style={styles.textBox}
                    />

                    <TouchableOpacity style={styles.btn}
                        onPress={() => navigaton.navigate('HomeScreen')}
                    >
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                    <Text onPress={() => navigaton.navigate('Register')} style={styles.Link}>I haven't Account ? Register </Text>
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

export default Login