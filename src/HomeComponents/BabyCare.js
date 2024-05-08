import { View, Text, FlatList, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
const BabyCare = () => {
    const Data = [
        {
            "id": "01",
            "image": "https://rukminim2.flixcart.com/image/612/612/lctfdzk0/diaper/6/k/l/-original-imagk7uzsnjmcegv.jpeg?q=70"
        },
        {
            "id": "02",
            "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/wipe/k/j/x/baby-wet-wipes-with-lid-enriched-with-aloe-vera-and-jojoba-oil-original-imagxcfzejyczyys.jpeg?q=70"
        },
        {
            "id": "03",
            "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/bedding-set/3/b/2/baby-ac-blanket-baby-bed-ob-blanket-oyo-baby-original-imags5f3uebsse3c.jpeg?q=70"
        },
        {
            "id": "04",
            "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/toothpaste/o/l/5/-original-imags38zsv6uuvn2.jpeg?q=70"
        },
        {
            "id": "05",
            "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/diaper/t/w/z/-original-imagtq6gzwztgjyx.jpeg?q=70"
        },
        {
            "id": "06",
            "image": "https://rukminim2.flixcart.com/image/612/612/l4x2rgw0/wipe/c/k/z/la-wipe-lid-pack-of-5-360-la-wipe-lid-72-5-little-angel-original-imagfpmavct9vfbg.jpeg?q=70"
        },
    ]

    const navigation = useNavigation()
    return (
        // <View style={{ height: 170, backgroundColor: '#e8e1e1', }}>
        //     <Text style={{ fontSize: 18, fontWeight: '600', paddingLeft: 10 }}>Baby Care </Text>
        //     <FlatList
        //         data={Data}
        //         horizontal
        //         renderItem={({ item, index }) => {
        //             return (
        //                 <TouchableOpacity key={item.id} style={{ height: 120, width: 120, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderRadius: 6, marginVertical: 10, marginLeft: 10 }} >
        //                     <Image
        //                         source={{ uri: item.image }}
        //                         style={{ height: 110, width: 110, borderRadius: 6 }}
        //                     />
        //                 </TouchableOpacity>
        //             )
        //         }}
        //     />
        // </View>


        <View style={{
            minHeight: 250,
            // backgroundColor: '#dadada'
            marginVertical: 10

        }}>

            <Text style={{
                fontSize: 20,
                marginHorizontal: 10,
                fontWeight: '600',
                color: '#000',
                marginVertical: 10
            }}>Baby Care</Text>


            <FlatList
                data={Data}

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
                                    <Text style={{ fontSize: 12, color: '#fff' }}>5% Off</Text>
                                </LinearGradient>

                            </Pressable>

                        </Pressable>
                    )
                }}

            />

        </View>
    )
}

export default BabyCare