import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'

const DelieveryAdd = () => {
    return (
        <View
            style={{
                height: 50,
                width: '98%',
                backgroundColor: '#fff',
                borderColor: '#000',
                borderWidth: 1,
                alignSelf: 'center',
                borderRadius: 10,
                flexDirection: 'row',
                marginVertical: 5


            }}
        >
            <Image
                source={{ uri: 'https://static.vecteezy.com/system/resources/previews/000/552/713/original/geo-location-pin-vector-icon.jpg' }}
                style={{ height: 40, width: 40, marginHorizontal: 10, }}
            />

            <View>
                <Text style={{ fontSize: 15, fontWeight: '600' }}>Delievery Address</Text>
                <Text style={{ fontSize: 14 }}>23,Faizabad Rd, behind State Bank Of India,n..</Text>
            </View>
        </View>

    )
}

export default DelieveryAdd