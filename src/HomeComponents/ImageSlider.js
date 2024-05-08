import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
const ImageSlider = () => {
    return (
        <View style={{
            height: 150,
            // backgroundColor: '#fff',
            marginVertical: 10,
            borderRadius: 6
        }}>

            <Swiper
                showsButtons={false} autoplay={true}

            >
                <View style={styles.slide1}>
                    <Image
                        source={{ uri: 'https://img.freepik.com/free-vector/fashion-template-design_23-2150746000.jpg?w=1380&t=st=1714984629~exp=1714985229~hmac=f60812be3bccebd2828966f64dafe7c25856bcc5778b40da705f057a5fd06a2a' }}
                        style={{
                            height: 150,
                            width: '98%',
                            alignSelf: 'center',
                            borderRadius: 5,
                            resizeMode: 'cover',

                        }}
                    />

                </View>
                <View style={styles.slide1}>
                    <Image
                        source={{ uri: 'https://img.freepik.com/free-vector/fashion-collection-style-twitch-banner-template_23-2149961812.jpg?w=1380&t=st=1714984581~exp=1714985181~hmac=381bb0cb28d68cb0410849ac30073a3ca3b12e899eb15d22fd3e6a28551fae16' }}
                        style={{
                            height: 150,
                            width: '98%',
                            alignSelf: 'center',
                            borderRadius: 5,
                            resizeMode: 'cover',

                        }}

                    />
                </View>
                <View style={styles.slide1}>
                    <Image

                        source={{ uri: 'https://img.freepik.com/free-vector/flat-design-fashion-template_23-2150382706.jpg?w=1380&t=st=1714984554~exp=1714985154~hmac=baa5fdfdc4efe19cfade9963c618151ce6dddbe6bb2a0e488c9418dc421c1b00' }}
                        style={{
                            height: 150,
                            width: '98%',
                            borderRadius: 5,
                            resizeMode: 'cover',
                        }}
                    />
                </View>
            </Swiper>

        </View>
    )
}

const styles = StyleSheet.create({
    slide1: {
        height: 150,
        width: '98%',
        alignSelf: 'center'
    }
})

export default ImageSlider