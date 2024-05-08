import { View, Text, FlatList, Image, Pressable } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Common/Header'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'

const Category = () => {
    const [category, setCategory] = useState([])

    const getCat = async () => {
        const res = await axios.get('https://fakestoreapi.com/products')
        setCategory(res.data)
    }

    useEffect(() => {
        getCat()
    })

    const navigation = useNavigation()
    return (
        <View>
            <Header name={'Category'} />

            <View style={{
                minHeight: 250,
                // backgroundColor: '#dadada'
                marginVertical: 10

            }}>



                <FlatList
                    data={category}

                    numColumns={2}
                    renderItem={({ item, index }) => {
                        return (
                            <Pressable
                                onPress={() => navigation.navigate('fullview')}
                                key={item.id}
                                style={{
                                    height: 200,
                                    width: '48%',
                                    backgroundColor: '#fff',
                                    alignSelf: 'center',
                                    marginHorizontal: 4,
                                    marginVertical: 4,
                                    borderRadius: 10,
                                    justifyContent: 'center'

                                }}
                            >
                                <Image
                                    source={{ uri: item.image }}
                                    style={{
                                        height: 150,
                                        width: '96%',
                                        resizeMode: 'contain',
                                        alignItems: 'center',
                                        alignSelf: 'center',
                                        borderRadius: 10


                                    }}
                                />

                                <Pressable
                                    style={{
                                        position: 'absolute',
                                        top: 10,
                                        left: 0
                                    }}

                                >


                                    <LinearGradient
                                        colors={['hsl(313, 55.30%, 29.80%)', '#743171', '#a33498']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                        style={{
                                            height: 25,
                                            width: 60,
                                            borderBottomLeftRadius: 3,
                                            borderBottomRightRadius: 3,
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            // marginLeft: 10,
                                        }}
                                    >
                                        <Text style={{ fontSize: 12, color: '#fff' }}>20% Off</Text>
                                    </LinearGradient>

                                </Pressable>
                            </Pressable>
                        )
                    }}

                />

            </View>
        </View>
    )
}

export default Category