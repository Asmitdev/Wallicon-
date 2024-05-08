import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const HomeCategories = () => {

    const [category, setCategory] = useState([])

    const getData = async () => {
        const res = await axios.get('https://fakestoreapi.com/products')
        // console.log(res.data);
        setCategory(res.data)
    }

    useEffect(() => {
        getData();
    })

    return (
        <View style={{
            height: 150,
            backgroundColor: '#fff'
        }}>
            <View>
                <Text style={{ fontWeight: '600', marginLeft: 20, fontSize: 16 }}>All Categories</Text>
                <FlatList
                    data={category}
                    horizontal

                    renderItem={({ item, index }) => {

                        return (
                            <>
                                <View style={{ flex: 1, marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ height: 92, width: 92, borderColor: '#000', borderWidth: 2, borderRadius: 46, marginLeft: 10 }}>
                                        <Image
                                            source={{ uri: item.image }}
                                            style={{ height: 89, width: 89, borderRadius: 89 / 2, resizeMode: 'cover' }}
                                        />
                                    </View>
                                    <Text style={{ textAlign: 'center' }}>{item.category}</Text>
                                </View>

                            </>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default HomeCategories