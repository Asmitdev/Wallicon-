import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'

const Header = ({ name }) => {
    const navigation = useNavigation()

    const openDrawer = () => {
        navigation.openDrawer();
    }
    return (
        <View>
            <View
                style={{ height: 50, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 }}
            >

                <TouchableOpacity
                    onPress={openDrawer}
                >
                    <Icon name='menu-outline'
                        size={35}
                        color="#000"
                    />
                </TouchableOpacity>

                <Text style={{ color: '#000', fontSize: 20, marginLeft: 25, fontWeight: 600 }}>{name}</Text>
            </View>
        </View>
    )
}

export default Header