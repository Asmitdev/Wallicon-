// import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
// import React from 'react'
// import Header from '../Components/Common/Header'



// const Data1 = [
//     {
//         "id": "1",
//         "image": "https://cdn.grabon.in/gograbon/images/deal/1713961276504/tata-cliq-red-tape-navy-cotton-crew-t-shirt.JPG",
//         "name": 'Product 1',
//         "title": 'Lorem ipsum dolor sit amet',
//         "price": 50,
//         "discountPrice": 40,
//         "discountOff": 20,
//         "rating": 4.5
//     },
//     {
//         "id": "2",
//         "image": "https://cdn.grabon.in/gograbon/images/deal/1714110520835/myntra-sangria-women-floral-straight-kurta.JPG",
//         "name": 'Product 2',
//         "title": 'Lorem ipsum dolor sit amet',
//         "price": 50,
//         "discountPrice": 40,
//         "discountOff": 20,
//         "rating": 4.5
//     },
//     {
//         "id": "3",
//         "image": "https://cdn.grabon.in/gograbon/images/deal/1714808443038/myntra-anouk-geometric-design-shoulder-bag.JPG",
//         "name": 'Product 3',
//         "title": 'Lorem ipsum dolor sit amet',
//         "price": 50,
//         "discountPrice": 40,
//         "discountOff": 20,
//         "rating": 4.5
//     },
//     {
//         "id": "4",
//         "image": "https://cdn.grabon.in/gograbon/images/deal/1714808316442/myntra-anouk-printed-basic-jumpsuit.JPG",
//         "name": 'Product 4',
//         "title": 'Lorem ipsum dolor sit amet',
//         "price": 50,
//         "discountPrice": 40,
//         "discountOff": 20,
//         "rating": 4.5
//     }
// ]




// const MyOrders = () => {


//     const renderItem = ({ item }) => (
//         <View style={styles.itemContainer}>
//             <Image
//                 source={{ uri: item.image }}
//                 style={styles.image}
//             />
//             <View style={styles.textContainer}>
//                 <Text>{item.name}</Text>
//                 <Text>{item.title}</Text>
//                 <Text>Price: ${item.price}</Text>
//                 <Text>Quantity: {item.quantity}</Text>
//                 <Text>Total Price: ${item.totalPrice}</Text>
//             </View>
//         </View>
//     );
//     return (
//         <View>
//             <Header name={'My Orders'} />



//             <FlatList
//                 data={Data1}
//                 keyExtractor={(item) => item.id}
//                 renderItem={renderItem}
//             />
//         </View>
//     )
// }

// export default MyOrders

// const styles = StyleSheet.create({
//     itemContainer: {
//         flexDirection: 'row',
//         padding: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#ddd',
//     },
//     image: {
//         width: 100,
//         height: 100,
//         borderRadius: 5,
//         resizeMode: 'stretch',
//         marginRight: 10,
//     },
//     textContainer: {
//         flex: 1,
//     },
// });







import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Pressable } from 'react-native';
import Header from '../Components/Common/Header';
import Icon from 'react-native-vector-icons/Ionicons'

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
];

const MyOrders = () => {
    const [cart, setCart] = useState(Data1.map(item => ({ ...item, quantity: 1, totalPrice: 50 })));

    const incrementQuantity = (id) => {
        setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1, totalPrice: (item.quantity + 1) * item.price } : item));
    };

    const decrementQuantity = (id) => {
        setCart(cart.map(item => item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1, totalPrice: (item.quantity - 1) * item.price } : item));
    };

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image
                source={{ uri: item.image }}
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#000'
                }}>{item.name}</Text>
                <Text>{item.title}</Text>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#000'

                }}>Price: ${item.price}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.quantityButton} onPress={() => decrementQuantity(item.id)}>
                        <Icon
                            name="remove-outline"
                            size={20}
                            color={'#fff'}
                        />
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{item.quantity}</Text>
                    <TouchableOpacity style={styles.quantityButton} onPress={() => incrementQuantity(item.id)}>
                        <Icon
                            name="add-outline"
                            size={20}
                            color={'#fff'}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#000'
                }}>Total Price: ${item.totalPrice}</Text>
            </View>
        </View>
    );

    return (
        <>
            <View>
                <Header name={'Shopping Bag'} />
                <FlatList
                    data={cart}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                />


            </View>
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
                <Text style={styles.addToCartButtonText}>Pay Now</Text>
            </Pressable>
        </>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 5,
        resizeMode: 'stretch',
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    quantityButton: {
        backgroundColor: '#762264',
        height: 30,
        width: 50,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    quantity: {
        paddingHorizontal: 10,
        fontSize: 15,
        color: '#000',
        fontWeight: '500'
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

export default MyOrders;
