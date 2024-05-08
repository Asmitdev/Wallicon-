import { View, Text, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import DelieveryAdd from '../HomeComponents/DelieveryAdd'
import HomeCategories from '../HomeComponents/HomeCategories'
import ImageSlider from '../HomeComponents/ImageSlider'
import TodayDeal from '../HomeComponents/TodayDeal'
import PopularBrands from '../HomeComponents/PopularBrands'
import HomeCare from '../HomeComponents/HomeCare'
import BabyCare from '../HomeComponents/BabyCare'
import Essential from '../HomeComponents/Essential'
import Vagitables from '../HomeComponents/Vegitables'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'




const Home = () => {
    const navigation = useNavigation()
    const openDrawer = () => {
        navigation.openDrawer()
    }

    const [showSearch, setShowSearch] = useState(false);

    const handleSearchIconPress = () => {
        setShowSearch(!showSearch);
    };

    return (
        <>



            <View>
                <View
                    style={{
                        height: 55, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20,
                        // borderBottomColor: '#000', borderBottomWidth: .5
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <TouchableOpacity
                            onPress={openDrawer}

                        >
                            <Icon name='menu-outline'
                                size={35}
                                color="#000"
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

                    {/* <View>
                    <DelieveryAdd />
                </View> */}


                    {/* <View>
                    <HomeCategories />
                </View> */}

                    <View>
                        <ImageSlider />
                    </View>

                    <View>
                        <TodayDeal />
                    </View>

                    <View>
                        <PopularBrands />
                    </View>

                    <View>
                        <HomeCare />
                    </View>

                    <View>
                        <BabyCare />
                    </View>

                    <View>
                        <Essential />
                    </View>

                    <View>
                        <Vagitables />
                    </View>




                </ScrollView >
            </View>
        </>
    )
}

export default Home