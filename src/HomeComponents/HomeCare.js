import { View, Text, FlatList, Image, TouchableOpacity, Pressable } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeCare = () => {
    const Data = [
        {
            "id": "01",
            "image": "https://rukminim2.flixcart.com/image/416/416/jkmwdjk0/home-cleaning-set/z/2/e/mop-bucket-shivonic-original-imaf7xz8kbc8vkhb.jpeg?q=70&crop=false"
        },
        {
            "id": "02",
            "image": "https://rukminim2.flixcart.com/image/416/416/l59xq4w0/cleaning-cloth/n/m/d/15-75-8-4x4-himp-280-mc8-softspun-original-imagfzmrrtuycvgb.jpeg?q=70&crop=false"
        },
        {
            "id": "03",
            "image": "https://rukminim2.flixcart.com/image/416/416/xif0q/home-cleaning-set/v/a/d/combo-flipkart-gp-e3-r3-magicbuys-original-imagp4h8p7qetthf.jpeg?q=70&crop=false"
        },
        {
            "id": "04",
            "image": "https://rukminim2.flixcart.com/image/416/416/l5bd5zk0/home-cleaning-set/7/p/a/250-gm-refill-altruist-original-imaggymnmtfyb5y9.jpeg?q=70&crop=false"
        },
        {
            "id": "05",
            "image": "https://rukminim2.flixcart.com/image/612/612/k5pn6vk0/home-cleaning-set/y/v/h/rod-stick-stainless-steel-vgonlineshoppinghub-original-imafzbbhhrkauetx.jpeg?q=70"
        },
        {
            "id": "06",
            "image": "https://rukminim2.flixcart.com/image/416/416/kim1aq80-0/home-cleaning-set/g/n/j/cleaning-bucket-mop-set-with-combo-gte-original-imafyd35zbnpjtxg.jpeg?q=70&crop=false"
        },
    ]


    const navigation = useNavigation()
    return (
        // <View style={{ height: 170, backgroundColor: '#e8e1e1', }}>
        //     <Text style={{ fontSize: 18, fontWeight: '600', paddingLeft: 10 }}>Home Care</Text>
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
            }}>Home Care</Text>


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
                                    <Text style={{ fontSize: 12, color: '#fff' }}>10% Off</Text>
                                </LinearGradient>

                            </Pressable>

                        </Pressable>
                    )
                }}

            />

        </View>
    )
}

export default HomeCare