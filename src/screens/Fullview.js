

import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, FlatList, Pressable, ScrollView } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient';

const Fullview = () => {

    // const Data = [
    //     {
    //         "id": "01",
    //         "image": "https://rukminim2.flixcart.com/image/416/416/jkmwdjk0/home-cleaning-set/z/2/e/mop-bucket-shivonic-original-imaf7xz8kbc8vkhb.jpeg?q=70&crop=false",


    //     },
    //     {
    //         "id": "02",
    //         "image": "https://rukminim2.flixcart.com/image/416/416/l59xq4w0/cleaning-cloth/n/m/d/15-75-8-4x4-himp-280-mc8-softspun-original-imagfzmrrtuycvgb.jpeg?q=70&crop=false"
    //     },
    //     {
    //         "id": "03",
    //         "image": "https://rukminim2.flixcart.com/image/416/416/xif0q/home-cleaning-set/v/a/d/combo-flipkart-gp-e3-r3-magicbuys-original-imagp4h8p7qetthf.jpeg?q=70&crop=false"
    //     },
    //     {
    //         "id": "04",
    //         "image": "https://rukminim2.flixcart.com/image/416/416/l5bd5zk0/home-cleaning-set/7/p/a/250-gm-refill-altruist-original-imaggymnmtfyb5y9.jpeg?q=70&crop=false"
    //     },
    //     {
    //         "id": "05",
    //         "image": "https://rukminim2.flixcart.com/image/612/612/k5pn6vk0/home-cleaning-set/y/v/h/rod-stick-stainless-steel-vgonlineshoppinghub-original-imafzbbhhrkauetx.jpeg?q=70"
    //     },
    //     {
    //         "id": "06",
    //         "image": "https://rukminim2.flixcart.com/image/416/416/kim1aq80-0/home-cleaning-set/g/n/j/cleaning-bucket-mop-set-with-combo-gte-original-imafyd35zbnpjtxg.jpeg?q=70&crop=false"
    //     },
    // ]


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
    const Data1 = [
        {
            "id": "1",
            "image": "https://cdn.grabon.in/gograbon/images/deal/1713961276504/tata-cliq-red-tape-navy-cotton-crew-t-shirt.JPG",
            "name": 'Product 1',
            "title": 'Lorem ipsum dolor sit amet',
            "price": 50,
            "discountPrice": 40,
            "discountOff": 20,
            "rating": 4.5
        },
        {
            "id": "2",
            "image": "https://cdn.grabon.in/gograbon/images/deal/1714110520835/myntra-sangria-women-floral-straight-kurta.JPG",
            "name": 'Product 2',
            "title": 'Lorem ipsum dolor sit amet',
            "price": 50,
            "discountPrice": 40,
            "discountOff": 20,
            "rating": 4.5
        },
        {
            "id": "3",
            "image": "https://cdn.grabon.in/gograbon/images/deal/1714808443038/myntra-anouk-geometric-design-shoulder-bag.JPG",
            "name": 'Product 3',
            "title": 'Lorem ipsum dolor sit amet',
            "price": 50,
            "discountPrice": 40,
            "discountOff": 20,
            "rating": 4.5
        },
        {
            "id": "4",
            "image": "https://cdn.grabon.in/gograbon/images/deal/1714808316442/myntra-anouk-printed-basic-jumpsuit.JPG",
            "name": 'Product 4',
            "title": 'Lorem ipsum dolor sit amet',
            "price": 50,
            "discountPrice": 40,
            "discountOff": 20,
            "rating": 4.5
        }
    ]






    const dummyProducts = [
        {
            id: '1',
            name: 'Anouk',
            title: 'Men Ethnic Motifs Printed Block Print Kurta',
            price: 1999,
            discountPrice: 599,
            discountOff: 72,
            rating: 4.5
        },
    ]










    // const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Black']; // Example colors
    const colors = [
        { name: 'Red', code: '#ff0000' },
        { name: 'Green', code: '#00ff00' },
        { name: 'Blue', code: '#0000ff' },
        { name: 'Yellow', code: '#ffff00' },
        { name: 'Pink', code: '#ff00ff' }
    ]; // Example colors
    const sizes = ['S', 'M', 'L', 'XL', 'XXL']; // Example sizes




    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [selectedSize, setSelectedSize] = useState(sizes[0]);
    const navigation = useNavigation()


    const [showSearch, setShowSearch] = useState(false);

    const handleSearchIconPress = () => {
        setShowSearch(!showSearch);
    };


    return (
        <>

            <View
                style={{
                    height: 55, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20,
                    // borderBottomColor: '#000', borderBottomWidth: .5
                }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}

                    >
                        <Icon name='arrow-back-circle-outline'
                            size={35}
                            color="#762264"
                        />
                    </TouchableOpacity>
                    <Image
                        // source={{ uri: 'https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Emblem.png' }}
                        source={{ uri: 'https://play-lh.googleusercontent.com/wpnNPYIrdHC3Q_bcFXGpwoMvFvvvQnZJHmFKzumq5ZTRZKIzfxURAUGOMqhPhVxnggY' }}
                        height={40} width={40}

                    />
                    {/* <Text style={{ fontSize: 20, fontWeight: 600 }}>Home</Text> */}
                </View>


                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>


                    <TouchableOpacity>
                        <View style={{ height: 40, width: 120, borderRadius: 6 }}>
                            {showSearch && <TextInput placeholder='search....' style={{ paddingLeft: 10 }} />}
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleSearchIconPress}>
                        <Icon
                            name='search'
                            size={25}
                            color="#000"

                        />


                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => navigation.navigate('Wishlist')}
                    >
                        <Icon1
                            name="heart-outline"
                            size={26}
                            color="#000"

                        />


                        <View
                            style={{
                                height: 20,
                                width: 20,
                                borderRadius: 10,
                                backgroundColor: '#762264',
                                position: 'absolute',
                                top: -10,
                                right: -10,
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
                            <Text style={{
                                color: '#fff'
                            }}>0</Text>
                        </View>


                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('My Orders')}
                    >
                        <Icon
                            name='cart-outline'

                            size={28}
                            color="#000"

                        />


                        <View
                            style={{
                                height: 20,
                                width: 20,
                                borderRadius: 10,
                                backgroundColor: '#762264',
                                position: 'absolute',
                                top: -10,
                                right: -10,
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
                            <Text style={{
                                color: '#fff'
                            }}>0</Text>
                        </View>

                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView>
                <View style={styles.container}>


                    <View style={styles.imageSlider}>
                        <SwiperFlatList
                            data={Data}
                            renderItem={({ item }) => (
                                <Image key={item.id} resizeMode='contain' source={{ uri: item.image }} style={styles.image} />
                            )}
                            paginationStyleItem={{
                                height: 10,
                                width: 10,
                                borderRadius: 5,
                                marginLeft: 2
                            }}

                            showPagination
                            paginationDefaultColor="rgba(20, 20, 20, 0.5)"
                            paginationActiveColor="#762264"
                        />


                        <View
                            style={{
                                height: 50,
                                width: 50,
                                borderRadius: 25,
                                backgroundColor: '#762264',
                                position: 'absolute',
                                top: 10,
                                right: 10,
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
                                name="heart-outline"
                                color={'#fff'}
                                size={28}

                            />

                        </View>







                        <View
                            style={{
                                height: 50,
                                width: 50,
                                borderRadius: 25,
                                backgroundColor: '#762264',
                                position: 'absolute',
                                top: 80,
                                right: 10,
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
                                name="share-social-outline"
                                color={'#fff'}
                                size={28}

                            />


                        </View>






                    </View>




                    <FlatList
                        data={dummyProducts}
                        style={{
                            marginHorizontal: 10,
                            marginBottom: 10
                        }}
                        renderItem={({ item }) => (
                            <View key={item.id}>
                                <Text style={{
                                    color: '#000',
                                    fontSize: 20,
                                    fontWeight: '600'
                                }}
                                >{item.name}</Text>

                                <Text style={{ marginTop: 5, color: '#767171', fontSize: 18, }}>{item.title}</Text>
                                <View
                                    style={{
                                        flexDirection: 'row'
                                    }}
                                >
                                    <Text style={{ marginTop: 5, color: '#767171', fontSize: 18, }}>{'MRP ₹'}</Text>

                                    <Text style={{ marginTop: 5, color: '#767171', fontSize: 18, textDecorationLine: 'line-through' }}>{item.price}</Text>
                                    <Text style={{ marginTop: 5, color: '#000', fontWeight: '600', fontSize: 18, }}> ₹{item.price} </Text>
                                    <Text style={{ marginTop: 5, color: '#762264', fontWeight: '600', fontSize: 18, }}>({item.discountOff}% OFF)</Text>
                                </View>

                            </View>
                        )}
                        keyExtractor={item => item.id}
                    />



                    <View
                        style={{
                            marginHorizontal: 10,
                            marginBottom: 10
                        }}
                    >
                        <Text style={{
                            color: '#000',
                            fontSize: 20,
                            fontWeight: '600'
                        }}
                        >Select Color</Text>
                    </View>



                    <FlatList
                        data={colors}
                        style={{
                            marginHorizontal: 5,
                            marginBottom: 10
                        }}
                        horizontal
                        keyExtractor={(item, index) => item.name || item.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={[styles.colorDot, {
                                    backgroundColor: item.code,
                                    borderWidth: selectedColor.name === item.name ? 2 : 1,
                                    borderColor: selectedColor.name === item.name ? '#000' : '#ccc',
                                }]}
                                onPress={() => setSelectedColor(item)}
                            />
                        )}
                    />





                    <View
                        style={{
                            marginHorizontal: 10,
                            marginBottom: 10
                        }}
                    >
                        <Text style={{
                            color: '#000',
                            fontSize: 20,
                            fontWeight: '600'
                        }}
                        >Select Size</Text>
                    </View>








                    <FlatList
                        data={sizes}
                        horizontal
                        style={{
                            marginHorizontal: 10
                        }}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={[styles.sizeBox, { backgroundColor: item === selectedSize ? '#762264' : '#fff' }]}
                                onPress={() => setSelectedSize(item)}
                            >
                                <Text style={[styles.sizeText, { color: item === selectedSize ? '#fff' : '#000' }]}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
                    <View style={styles.infoContainer}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start'
                            }}
                        >

                            <Text style={[styles.color, { fontWeight: '600', color: '#000' }]}>Size:</Text>
                            <Text style={[styles.size, { fontWeight: '600', color: '#762264' }]}> {selectedSize}</Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start'
                            }}
                        >
                            <Text style={[styles.color, { fontWeight: '600', color: '#000' }]}>Color:</Text>
                            <Text style={[styles.size, { fontWeight: '600', color: '#762264' }]}> {selectedColor.name}</Text>
                        </View>
                    </View>


                    <View
                        style={{
                            height: 40,
                            width: 200,
                            borderColor: '#762264',
                            borderWidth: 1,
                            marginHorizontal: 10,
                            borderRadius: 5,
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            flexDirection: 'row'

                        }}
                    >
                        <Text style={{ fontWeight: '600', color: '#000', fontSize: 18 }}>{dummyProducts[0].rating}</Text>
                        <Icon
                            name='star'
                            color={'#762264'}
                            size={20}
                        />

                        <View style={{ borderLeftColor: '#762264', marginHorizontal: 10, borderLeftWidth: 1, height: 30 }}></View>

                        <Text style={{ fontWeight: '600', color: '#000', fontSize: 18 }}>1.7k Ratings</Text>

                    </View>


                    <View style={{
                        height: 160,
                        borderRadius: 20,
                        marginVertical: 10,
                        marginHorizontal: 10,
                        borderColor: '#762264',
                        borderWidth: 1
                    }}>
                        <View
                            style={{
                                marginHorizontal: 10,
                                marginVertical: 10,
                                marginBottom: 10
                            }}
                        >
                            <Text style={{
                                color: '#000',
                                fontSize: 20,
                                fontWeight: '600'
                            }}
                            >Offers</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',

                            alignItems: 'center',
                            marginHorizontal: 10,
                            marginVertical: 10,
                        }}>
                            <Icon2
                                name="discount"
                                color={'#762264'}
                                size={28}
                            />

                            <Text style={{ fontWeight: '600', color: '#000', fontSize: 18 }}>{'     '}Bank Offers</Text>

                        </View>

                        <Text
                            style={{ color: '#928f8f', marginHorizontal: 10, fontSize: 14 }}
                        >
                            7.5% Discount on Myntra Kotak Credit Card
                        </Text>
                        <Text
                            style={{
                                color: '#9c9898', fontSize: 14, marginHorizontal: 10,
                            }}

                        >
                            Max Discount Up to ₹750 on every spends.
                        </Text>

                    </View>






                    <View style={{
                        marginHorizontal: 10,
                    }}>
                        <View
                            style={{
                                marginHorizontal: 10,
                                marginVertical: 10,
                                marginBottom: 10
                            }}
                        >
                            <Text style={{
                                color: '#000',
                                fontSize: 20,
                                fontWeight: '600'
                            }}
                            >Delievery & Services</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderRadius: 10,
                            borderColor: '#762264',
                            borderWidth: 1,
                            height: 40,
                            // marginHorizontal: 10,
                            paddingHorizontal: 10
                        }}>
                            <Text style={{ color: '#000', fontWeight: '400', fontSize: 15 }}>226007 (Asmit Singh)</Text>
                            <Text style={{ color: '#762264', fontWeight: '600', fontSize: 18 }}>Change</Text>
                        </View>

                    </View>


                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        marginHorizontal: 10,
                        marginVertical: 10
                    }}>
                        <View
                            style={{
                                height: 40,
                                width: 40,
                                borderRadius: 20,
                                borderColor: '#762264',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 2
                            }}
                        >
                            <Icon
                                name='gift-outline'
                                size={25}
                                color={'#762264'}



                            />

                        </View>




                        <View
                            style={{
                                height: 40,
                                width: 40,
                                borderRadius: 20,
                                borderColor: '#762264',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 2
                            }}
                        >
                            <Icon
                                name='cash-outline'
                                size={25}
                                color={'#762264'}



                            />



                        </View>



                        <View
                            style={{
                                height: 40,
                                width: 40,
                                borderRadius: 20,
                                borderColor: '#762264',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 2
                            }}
                        >
                            <Icon
                                name='return-up-forward'
                                size={25}
                                color={'#762264'}



                            />

                        </View>



                        <View
                            style={{
                                height: 40,
                                width: 40,
                                borderRadius: 20,
                                borderColor: '#762264',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 2
                            }}
                        >
                            <Icon1
                                name='crown-outline'
                                size={25}

                                color={'#762264'}



                            />

                        </View>
                    </View>


                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        marginHorizontal: 10,

                    }}>

                        <View
                            style={{
                                height: 40,
                                width: 60,
                                marginLeft: 40
                            }}
                        >
                            <Text style={{ fontSize: 12, color: '#000', fontWeight: '600' }}>Gift</Text>
                            <Text style={{ fontSize: 10, color: '#898686', fontWeight: '600' }}>Wrap</Text>

                        </View>




                        <View
                            style={{
                                height: 40,
                                width: 60,
                                marginLeft: 20
                            }}
                        >
                            <Text style={{ fontSize: 12, color: '#000', fontWeight: '600' }}>COD</Text>
                            <Text style={{ fontSize: 10, color: '#898686', fontWeight: '600' }}>Available</Text>

                        </View>








                        <View
                            style={{
                                height: 40,
                                width: 80,
                            }}
                        >
                            <Text style={{ fontSize: 12, color: '#000', fontWeight: '600' }}>Days Return</Text>
                            <Text style={{ fontSize: 10, color: '#898686', fontWeight: '600' }}>or Exchange</Text>

                        </View>



                        <View
                            style={{
                                height: 40,
                                width: 80,
                            }}
                        >
                            <Text style={{ fontSize: 12, color: '#000', fontWeight: '600' }}>Royal Club</Text>
                            <Text style={{ fontSize: 10, color: '#898686', fontWeight: '600' }}>Cash</Text>

                        </View>
                    </View>











                    <View style={{
                        minHeight: 160,
                        borderRadius: 20,
                        marginVertical: 10,
                        marginHorizontal: 10,
                        borderColor: '#762264',
                        borderWidth: 1,
                        padding: 10
                    }}>

                        <View
                            style={{
                                marginHorizontal: 10,
                                marginVertical: 10,
                                marginBottom: 10
                            }}
                        >
                            <Text style={{
                                color: '#000',
                                fontSize: 20,
                                fontWeight: '600'
                            }}
                            >Product Information</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row', justifyContent: 'space-between',

                        }}>
                            <View style={{
                                marginVertical: 10,
                                marginHorizontal: 10,
                            }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 15, color: '#000', fontWeight: '600' }}>Fabric {' '}</Text>

                                </View>
                                <Text style={{ fontSize: 14, color: '#929191', }}>Georgette</Text>
                            </View>
                            <View
                                style={{
                                    marginVertical: 10,
                                    marginHorizontal: 10,
                                }}
                            >
                                <Text style={{ fontSize: 15, color: '#000', fontWeight: '600' }}>Transparency</Text>
                                <Text style={{ fontSize: 14, color: '#929191', }}>Regular</Text>
                            </View>
                        </View>


                        <View style={{
                            flexDirection: 'row', justifyContent: 'space-between',

                        }}>
                            <View style={{
                                marginVertical: 10,
                                marginHorizontal: 10,
                            }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 15, color: '#000', fontWeight: '600' }}>Weave Pattern {' '}</Text>

                                </View>
                                <Text style={{ fontSize: 14, color: '#929191', }}>Georgette</Text>
                            </View>
                            <View
                                style={{
                                    marginVertical: 10,
                                    marginHorizontal: 10,
                                }}
                            >
                                <Text style={{ fontSize: 15, color: '#000', fontWeight: '600' }}>Sustainable</Text>
                                <Text style={{ fontSize: 14, color: '#929191', }}>Regular</Text>
                            </View>
                        </View>


                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={{ fontSize: 15, color: '#000', fontWeight: '600' }}>Product Details</Text>
                            <Text style={{ fontSize: 14, color: '#929191', }}>
                                Colour: navy blue
                                Ethnic motifs printed
                                Mandarin collar
                                Long, roll-up sleeves
                                Straight shape with regular style
                                Above knee with straight hem
                                Machine weave regular cotton
                            </Text>

                        </View>
                        <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                            <Text style={{ fontSize: 15, color: '#000', fontWeight: '600' }}>Size & Fit </Text>
                            <Text style={{ fontSize: 14, color: '#929191', }}>
                                The model (height 5'8) is wearing a size S
                            </Text>

                        </View>
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={{ fontSize: 15, color: '#000', fontWeight: '600' }}>Material & Care </Text>
                            <Text style={{ fontSize: 14, color: '#929191', }}>
                                Cotton,
                                Machine Wash
                            </Text>

                        </View>

                    </View>









                    <View style={{
                        marginHorizontal: 10,
                        marginVertical: 10
                    }}>

                        <View
                            style={{
                                marginHorizontal: 10,
                                marginVertical: 10,
                                marginBottom: 10
                            }}
                        >
                            <Text style={{
                                color: '#000',
                                fontSize: 20,
                                fontWeight: '600'
                            }}
                            >Similar Products</Text>
                        </View>


                        <FlatList
                            data={Data1}
                            numColumns={2}
                            renderItem={({ item, index }) => {

                                return (
                                    <>
                                        <Pressable
                                            key={item.id}
                                            onPress={() => navigation.navigate('fullview')}
                                            style={{
                                                height: 200,
                                                width: '48%',
                                                backgroundColor: '#fff',
                                                alignSelf: 'center',
                                                marginHorizontal: 4,
                                                marginVertical: 4,
                                                borderRadius: 10,
                                                justifyContent: 'center',

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
                                                onPress={() => console.log('Add to Wishlist')}
                                            >




                                                <LinearGradient
                                                    colors={['#762264', '#743171', '#a33498']}
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
                                                    <Text style={{ fontSize: 12, color: '#fff' }}>25% Off</Text>
                                                </LinearGradient>
                                            </Pressable>

                                        </Pressable>










                                    </>
                                )
                            }}
                        />

                    </View>







                    <View
                        style={{
                            marginHorizontal: 10,
                            marginVertical: 10,
                            marginBottom: 10,

                        }}
                    >
                        <Text style={{
                            color: '#000',
                            fontSize: 20,
                            fontWeight: '600'
                        }}
                        >Ratings & Reviews</Text>
                    </View>


                    <View style={{
                        flexDirection: 'row',
                        marginHorizontal: 10,
                        marginVertical: 10,
                        alignItems: 'center',

                    }}>
                        <View style={{
                            height: 35,
                            width: 50,
                            backgroundColor: '#762264',
                            borderRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}>

                            <View style={{

                                justifyContent: 'space-evenly',
                                alignItems: 'center',
                                flexDirection: 'row'

                            }}>


                                <Text style={{
                                    color: '#fff',
                                    fontSize: 18
                                }}>4{' '}</Text>
                                <Icon
                                    name='star'
                                    color={'#fff'}
                                    size={20}


                                />
                            </View>

                        </View>



                        <Text style={{ fontSize: 15, color: '#767676', }}>
                            {' '}  1402 ratings | 105 reviews
                        </Text>

                    </View>



                    <View
                        style={{
                            marginHorizontal: 10,
                            marginVertical: 10,
                            marginBottom: 10,

                        }}
                    >
                        <Text style={{
                            color: '#000',
                            fontSize: 20,
                            fontWeight: '600'
                        }}
                        >Customer Photos</Text>
                    </View>

                    <FlatList
                        data={Data1}
                        style={{
                            marginVertical: 10
                        }}
                        horizontal
                        renderItem={({ item, index }) => {
                            return (
                                <View
                                    key={item.id}
                                    style={{
                                        height: 100,
                                        width: 100,
                                        marginLeft: 10,
                                        backgroundColor: '#fff',
                                        borderRadius: 5
                                    }}>
                                    <Image source={{ uri: item.image }}
                                        style={{
                                            height: 100,
                                            width: 100,
                                            resizeMode: 'stretch',
                                            borderRadius: 5
                                        }}
                                    />

                                </View>
                            )
                        }
                        }

                    />

                </View>
            </ScrollView >

            <Pressable

                onPress={() => navigation.navigate('My Orders')}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    backgroundColor: '#762264',
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={styles.addToCartButtonText}>Add to Cart</Text>
            </Pressable>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 50

    },


    imageSlider: {
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20

    },
    image: {
        width: 350,
        height: 300,

        resizeMode: 'contain',
        borderRadius: 10,

        marginVertical: 30
    },
    colorDot: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginHorizontal: 5,

    },
    sizeBox: {
        width: 40,
        height: 40,
        borderRadius: 5,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sizeText: {
        fontSize: 16,
    },
    infoContainer: {
        marginBottom: 5,
        marginHorizontal: 10,
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    price: {
        fontSize: 18,
        marginBottom: 10,
    },
    size: {
        fontSize: 16,
        marginBottom: 5,
    },
    color: {
        fontSize: 16,
        marginBottom: 20,
    },
    addToCartButton: {
        backgroundColor: '#762264',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 10
    },
    addToCartButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600'
    },

});

export default Fullview;

