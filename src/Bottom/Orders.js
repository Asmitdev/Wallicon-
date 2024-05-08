import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Header from '../Components/Common/Header'

const Orders = () => {

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

    ]
    return (
        <View>
            <Header name={'Orders'} />


            <View style={{ backgroundColor: '#e8e1e1', }}>

                <FlatList
                    data={Data}

                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity key={item.id} style={{ height: 250, width: 250, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderRadius: 6, marginVertical: 10, marginLeft: 10, alignSelf: 'center' }} >
                                <Image
                                    source={{ uri: item.image }}
                                    style={{ height: 200, width: 200, borderRadius: 6 }}

                                />
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default Orders