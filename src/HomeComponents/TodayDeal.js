



// import { View, Text, FlatList, TouchableOpacity, Image, Pressable } from 'react-native'
// import React from 'react'



// const TodayDeal = () => {
//     const Data = [
//         {
//             "id": "1",
//             "image": "https://cdn.grabon.in/gograbon/images/deal/1713961276504/tata-cliq-red-tape-navy-cotton-crew-t-shirt.JPG"
//         },
//         {
//             "id": "2",
//             "image": "https://cdn.grabon.in/gograbon/images/deal/1714110520835/myntra-sangria-women-floral-straight-kurta.JPG"
//         },
//         {
//             "id": "3",
//             "image": "https://cdn.grabon.in/gograbon/images/deal/1714808443038/myntra-anouk-geometric-design-shoulder-bag.JPG"
//         },
//         {
//             "id": "4",
//             "image": "https://cdn.grabon.in/gograbon/images/deal/1714808316442/myntra-anouk-printed-basic-jumpsuit.JPG"
//         }
//     ]
//     return (

//         <>
//             <View style={{
//                 minHeight: 250,
//                 // backgroundColor: '#dadada'
//                 marginVertical: 5

//             }}>

//                 <Text style={{
//                     fontSize: 20,
//                     marginHorizontal: 10,
//                     fontWeight: '600',
//                     color: '#000',
//                     marginVertical: 5
//                 }}>Today's Deals</Text>


//                 <FlatList
//                     data={Data}

//                     numColumns={2}
//                     renderItem={({ item, index }) => {
//                         return (
//                             <>
//                                 <Pressable
//                                     key={item.id}
//                                     style={{
//                                         height: 200,
//                                         width: '48%',
//                                         backgroundColor: '#fff',
//                                         alignSelf: 'center',
//                                         marginHorizontal: 4,
//                                         marginVertical: 4,
//                                         borderRadius: 10,
//                                         justifyContent: 'center'

//                                     }}
//                                 >
//                                     <Image
//                                         source={{ uri: item.image }}
//                                         style={{
//                                             height: 150,
//                                             width: '96%',
//                                             resizeMode: 'contain',
//                                             alignItems: 'center',
//                                             alignSelf: 'center',
//                                             borderRadius: 10


//                                         }}
//                                     />

//                                 </Pressable>

//                                 <View
//                                     style={{
//                                         position: "absolute",
//                                         height: 30,
//                                         backgroundColor: 'green',
//                                         top: 50,
//                                         left: 0,
//                                         width: 100,

//                                     }}
//                                 ></View>

//                             </>
//                         )
//                     }}

//                 />

//             </View>


//         </>
//     )
// }

// export default TodayDeal


import { View, Text, FlatList, TouchableOpacity, Image, Pressable } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'

const TodayDeal = () => {
    const Data = [
        {
            "id": "1",
            "image": "https://cdn.grabon.in/gograbon/images/deal/1713961276504/tata-cliq-red-tape-navy-cotton-crew-t-shirt.JPG"
        },
        {
            "id": "2",
            "image": "https://cdn.grabon.in/gograbon/images/deal/1714110520835/myntra-sangria-women-floral-straight-kurta.JPG"
        },
        {
            "id": "3",
            "image": "https://cdn.grabon.in/gograbon/images/deal/1714808443038/myntra-anouk-geometric-design-shoulder-bag.JPG"
        },
        {
            "id": "4",
            "image": "https://cdn.grabon.in/gograbon/images/deal/1714808316442/myntra-anouk-printed-basic-jumpsuit.JPG"
        }
    ]


    const navigation = useNavigation()
    return (
        <>
            <View style={{
                minHeight: 250,
                marginVertical: 5
            }}>
                <Text style={{
                    fontSize: 20,
                    marginHorizontal: 10,
                    fontWeight: '600',
                    color: '#000',
                    marginVertical: 5
                }}>Today's Deals</Text>

                <FlatList
                    data={Data}
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
        </>
    )
}

export default TodayDeal
