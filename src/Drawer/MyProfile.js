// import { View, Text, Image } from 'react-native'
// import React from 'react'
// import Header from '../Components/Common/Header'

// const MyProfile = () => {
//     return (
//         <View>
//             <Header name={'My Profile'} />
//             <View>

//                 <View style={{ height: 250, width: 250, backgroundColor: '#fff', alignSelf: 'center', marginTop: 10, borderRadius: 8 }}>
//                     <Image
//                         source={{ uri: 'https://i.pinimg.com/originals/e3/7e/0e/e37e0e25686c2139b281a57a5b4906f2.jpg' }}
//                         style={{ height: 230, width: 230, backgroundColor: '#fff', alignSelf: 'center', marginTop: 10, borderRadius: 8 }}
//                     />

//                 </View>

//             </View>
//         </View>
//     )
// }

// export default MyProfile



import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Header from '../Components/Common/Header';

const MyProfile = () => {
    return (
        <View style={styles.container}>
            <Header name={'My Profile'} />
            <View style={styles.profileContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/originals/e3/7e/0e/e37e0e25686c2139b281a57a5b4906f2.jpg' }}
                        style={styles.image}
                    />
                </View>
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>John Doe</Text>
                    <Text style={styles.userEmail}>john.doe@example.com</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    profileContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginHorizontal: 20,
        marginTop: 20,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        marginRight: 20,
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    userInfo: {
        flex: 1,
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    userEmail: {
        fontSize: 16,
        color: '#888',
    },
});

export default MyProfile;
