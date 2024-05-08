import { View, Text, FlatList, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'

const Vegitables = () => {
    const Data = [
        {
            "id": "01",
            "image": "https://rukminim2.flixcart.com/image/612/612/kiyw9e80-0/plant-seed/n/a/w/50-alpine-hybrid-seeds-broccoli-seed-50-per-packet-seedshub-original-imafyn5ekzq7yfc4.jpeg?q=70"
        },
        {
            "id": "02",
            "image": "https://rukminim2.flixcart.com/image/612/612/jtsz3bk0/vegetable/f/z/5/250-garlic-un-branded-no-whole-original-imafdrzsu9j6fuwq.jpeg?q=70"
        },
        {
            "id": "03",
            "image": "https://rukminim2.flixcart.com/image/612/612/jtsz3bk0/vegetable/k/y/d/5-onion-un-branded-no-whole-original-imafdsyg4ykqcyt4.jpeg?q=70"
        },
        {
            "id": "04",
            "image": "https://rukminim2.flixcart.com/image/416/416/js4yljk0/vegetable/z/f/c/2-sweet-corn-un-branded-no-whole-original-imafdsfxvghfqtzh.jpeg?q=70&crop=false"
        },
        {
            "id": "05",
            "image": "https://rukminim2.flixcart.com/image/416/416/jtsz3bk0/vegetable/b/8/4/2-potato-un-branded-no-whole-original-imafdsymh2aepaph.jpeg?q=70&crop=false"
        },
        {
            "id": "06",
            "image": "https://rukminim2.flixcart.com/image/612/612/jv5k2a80/vegetable/h/r/j/250-beans-cluster-un-branded-no-whole-original-imafg4ggks5pvf5s.jpeg?q=70"
        },
    ]


    const navigation = useNavigation()

    return (
        // <View style={{ height: 170, backgroundColor: '#e8e1e1', }}>
        //     <Text style={{ fontSize: 18, fontWeight: '600', paddingLeft: 10 }}>Vegitables</Text>
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
            }}>Vegitables</Text>


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
                                    <Text style={{ fontSize: 12, color: '#fff' }}>20% Off</Text>
                                </LinearGradient>

                            </Pressable>
                        </Pressable>
                    )
                }}

            />

        </View>
    )
}

export default Vegitables