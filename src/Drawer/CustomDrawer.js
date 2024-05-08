import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CustomDrawer = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, }}>

            <View style={{ backgroundColor: '##762264', height: 5 }}></View>

            <View>

                <View style={styles.Profile}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/originals/e3/7e/0e/e37e0e25686c2139b281a57a5b4906f2.jpg' }}
                        style={{
                            height: 160,
                            width: 160,
                            borderRadius: 80,
                            resizeMode: 'cover'
                        }}
                    />
                    <Text style={{ color: '#000', textAlign: 'center', marginTop: 20, fontSize: 20, fontWeight: '600' }}> James </Text>
                </View>
            </View>

            <View style={styles.SideContainer}>
                <TouchableOpacity

                    style={styles.btn}
                    onPress={() => navigation.navigate('My Profile')}
                >
                    <Image source={{ uri: 'https://cdn.icon-icons.com/icons2/1904/PNG/512/profile_121261.png' }}
                        style={{ height: 20, width: 20 }}
                    />
                    <Text style={styles.btnText}>My Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity

                    style={styles.btn}

                    onPress={() => navigation.navigate('Category')}
                >
                    <Image source={{ uri: 'https://icon-library.com/images/categories-icon/categories-icon-7.jpg' }}
                        style={{ height: 20, width: 20 }}
                    />
                    <Text style={styles.btnText}>All Categories</Text>
                </TouchableOpacity>

                <TouchableOpacity

                    style={styles.btn}
                    onPress={() => navigation.navigate('All Brands')}
                >
                    <Image source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.0B9qUkgn0IAUO6e2pP0pYQHaHa&pid=Api&P=0&h=180' }}
                        style={{ height: 20, width: 20 }}
                    />
                    <Text style={styles.btnText}>All Brands</Text>
                </TouchableOpacity>
                <TouchableOpacity

                    style={styles.btn}
                    onPress={() => navigation.navigate('Orders')}
                >
                    <Image source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.zHTLioryIoQ8_AS2VFLVnwHaHa&pid=Api&P=0&h=180' }}
                        style={{ height: 20, width: 20 }}
                    />
                    <Text style={styles.btnText}>My Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity

                    style={styles.btn}
                    onPress={() => navigation.navigate('My Wallet')}
                >
                    <Image source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.fqgmkJdlaeS4NqLDY36naAHaHa&pid=Api&P=0&w=300&h=300' }}
                        style={{ height: 20, width: 20 }}
                    />
                    <Text style={styles.btnText}>My Wallet</Text>
                </TouchableOpacity>
                <TouchableOpacity

                    style={styles.btn}
                    onPress={() => navigation.navigate('Save Address')}
                >
                    <Image source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.043_BgDjLWYln-YriQTNuwHaHa&pid=Api&P=0&h=180' }}
                        style={{ height: 20, width: 20 }}
                    />
                    <Text style={styles.btnText}>Save Address</Text>
                </TouchableOpacity>
                <TouchableOpacity

                    style={styles.btn}
                    onPress={() => navigation.navigate('Refer And Earn')}
                >
                    <Image source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.WezgDxh4A6IOi7hHK3W6QQAAAA&pid=Api&P=0&h=180' }}
                        style={{ height: 20, width: 20 }}
                    />
                    <Text style={styles.btnText}>Refer And Earn</Text>
                </TouchableOpacity>
                <TouchableOpacity

                    style={styles.btn}
                    onPress={() => navigation.navigate('Customer')}
                >
                    <Image source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.K80BHsuqwC8RZJp6HmqEewHaHa&pid=Api&P=0&h=180' }}
                        style={{ height: 20, width: 20 }}
                    />
                    <Text style={styles.btnText}>Customer</Text>
                </TouchableOpacity>
                <TouchableOpacity

                    style={styles.btn}
                    onPress={() => navigation.navigate('More')}
                >
                    <Image source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP._E4w6QvZtWz6T-NjcahaIQHaHa&pid=Api&P=0&h=180' }}
                        style={{ height: 20, width: 20 }}
                    />
                    <Text style={styles.btnText}>More</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Profile: {
        height: 170,
        width: 170,
        alignSelf: 'center',
        marginVertical: 20,
        borderRadius: 100,
        // borderColor: '#37B5B6',
        borderColor: '#762264',
        borderWidth: 5
    },
    SideContainer: {
        flex: 1,
        padding: 5,
        marginTop: 30

    },
    btn: {
        backgroundColor: '#fff',
        height: 50,
        borderBottomColor: '#959191',
        // borderTopColor: '#959191',
        borderBottomWidth: .2,
        // borderTopWidth: .2,
        flexDirection: 'row',
        paddingHorizontal: 30,
        alignItems: 'center',

    },
    btnText: {
        fontSize: 15,
        color: '#000',
        fontWeight: '500',
        textAlign: 'left',
        marginHorizontal: 20
    }

})
export default CustomDrawer