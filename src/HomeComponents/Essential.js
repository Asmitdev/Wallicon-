import { View, Text, FlatList, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'

const Essential = () => {
    const Data = [
        {
            "id": "01",
            "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/face-wash/9/4/k/100-vitamin-c-face-wash-for-glowing-skin-niacinamide-brightening-original-imagvcyrpyzkvphn.jpeg?q=70"
        },
        {
            "id": "02",
            "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/face-wash/v/s/q/100-oil-acne-control-face-wash-removes-blackheads-pimples-2-original-imagvcyujjhzx5gp.jpeg?q=70"
        },
        {
            "id": "03",
            "image": "https://rukminim2.flixcart.com/image/612/612/k1l1ea80/desk-organizer/f/b/y/plastic-4-component-multi-purpose-storage-desk-top-storage-box-g-original-imafh3uhf3hnzpdf.jpeg?q=70"
        },
        {
            "id": "04",
            "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/vanity-box/v/a/f/desktop-cosmetic-box-jewelry-holder-for-bathroom-vanity-and-original-imagtnnw4z4zvthj.jpeg?q=70"
        },
        {
            "id": "05",
            "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/soap/a/2/y/-original-imagzr6fn4njdg4f.jpeg?q=70"
        },
        {
            "id": "06",
            "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/desk-organizer/y/b/y/multifunctional-plastic-cosmetic-makeup-organiser-storage-box-original-imaghf8tjj37bqtv.jpeg?q=70"
        },
    ]

    const navigation = useNavigation()
    return (
        // <View style={{ height: 170, backgroundColor: '#e8e1e1', }}>
        //     <Text style={{ fontSize: 18, fontWeight: '600', paddingLeft: 10 }}>Essential</Text>
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
            }}>Essentials</Text>


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
                                    <Text style={{ fontSize: 12, color: '#fff' }}>45% Off</Text>
                                </LinearGradient>

                            </Pressable>

                        </Pressable>
                    )
                }}

            />

        </View>
    )
}

export default Essential