import { View, Text, FlatList, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'

const PopularBrands = () => {
    const Data = [
        {
            "id": "01",
            "image": "https://rukminim2.flixcart.com/image/832/832/l2m78280/watch/u/0/u/1-digital-kids-boys-g-sport-look-band-shock-chronograph-original-imagdx3feej5jtfg.jpeg?q=70&crop=false"
        },
        {
            "id": "02",
            "image": "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/b/d/f/3xl-13-lstr-wine-vtexx-original-imagnzbummhkgr7p.jpeg?q=70&crop=false"
        },
        {
            "id": "03",
            "image": "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/7/z/r/8-white-leaf-8-urbanbox-white-black-original-imagvgf4cuzs2hrw.jpeg?q=70&crop=false"
        },
        {
            "id": "04",
            "image": "https://rukminim2.flixcart.com/image/832/832/l3ys70w0/waistcoat/k/1/h/xxl-serb-77-maksud-enterprise-original-imagez5femf8fgcw.jpeg?q=70&crop=false"
        },
        {
            "id": "05",
            "image": "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/y/4/v/s-nbss0131-shinebin-original-imagw9hxfvcrbyem.jpeg?q=70&crop=false"
        },
        {
            "id": "06",
            "image": "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/b/d/l/s-sa19kr275r-surhi-original-imagwceskprmjabn.jpeg?q=70&crop=false"
        },
    ]

    const navigation = useNavigation()
    return (
        // <View style={{ height: 170, backgroundColor: '#e8e1e1', }}>
        //     <Text style={{ fontSize: 18, fontWeight: '600', paddingLeft: 10 }}>Popular Brands</Text>
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
            }}>Popular Brands</Text>


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

export default PopularBrands