import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../Components/Common/Header'



const Search = () => {

    return (
        <View>
            <Header name={'Search'} />

            <View style={styles.textBox}>
                <TextInput
                    placeholder='Search Products...'
                    style={{ paddingLeft: 10 }}
                />
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    textBox: {
        marginVertical: 10,
        height: 50,
        width: '98%',
        borderColor: '#762264',
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 6
    }
})
export default Search