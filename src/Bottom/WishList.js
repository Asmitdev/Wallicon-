import { View, Text, FlatList, TouchableOpacity, Image, Pressable, } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import React from 'react'
import Header from '../Components/Common/Header'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const WishList = () => {

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
        <View>
            <Header name={'Wishlist'} />



            <View style={{
                minHeight: 250,
                // backgroundColor: '#dadada'
                marginVertical: 10

            }}>



                <FlatList
                    data={Data}

                    numColumns={2}
                    renderItem={({ item, index }) => {
                        return (
                            <Pressable

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
                                    onPress={() => navigation.goBack()}
                                    style={{
                                        height: 30,
                                        width: 30,
                                        borderRadius: 15,
                                        backgroundColor: '#762264',
                                        // backgroundColor: '#b7b2b2',
                                        position: 'absolute',
                                        top: 5,
                                        right: 5,
                                        elevation: 5,
                                        shadowColor: '#000',
                                        shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.5,
                                        shadowRadius: 2,
                                        zIndex: 999,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >

                                    <Icon
                                        name="close-outline"
                                        color={'#fff'}
                                        size={25}

                                    />

                                </Pressable>





                            </Pressable>
                        )
                    }}

                />

            </View>
        </View>
    )
}

export default WishList