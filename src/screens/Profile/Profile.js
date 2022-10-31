import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'

import Colors from '../../constants/Colors'
import ProfileJD from '../../../assets/images/ProfileJD.png'
import Entypo from 'react-native-vector-icons/Entypo'
import { Caption, Paragraph, Surface, Title } from 'react-native-paper'
import ImagePicker, { openPicker } from 'react-native-image-crop-picker';
import { useState } from 'react'
import AppHeader from '../../components/AppHeader'
const dummy_text = "Gods Very Own Messenger / The One Who Delivers / Third Most Powerful Arch Angel / Human Pretender / Fastest and Swiftest Of them All "
const Profile = ({navigation, route}) => {
    const [profile, setProfile] = useState(null)

    const imagePick = () => {
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setProfile(image.path)
        });
    }

    return (
        <View style={styles.container}>
         <AppHeader
                title={route.name} headerBg={Colors.green} iconColor={Colors.black}
                menu titleAlight="center" optionalBadge={5} navigation={navigation}
                right="more-vertical" rightFunction={() => console.log('right')}
                optionalIcon="bell" optionalFunc={() => console.log('optional')}
            />
            <View style={styles.profileContainer}>
                <View style={styles.imgContainer}>
                    <Image style={styles.image} source={profile ? { uri: profile } : ProfileJD} />
                    <TouchableOpacity onPress={imagePick}
                        style={{ alignItems: 'flex-end', top: -10 }}>
                        <Entypo name="pencil" size={20} color={Colors.green} />
                    </TouchableOpacity>
                </View>
                <View style={styles.textContainer}>
                    <Title>Jher Domz</Title>
                    <Caption>github/JherDomz</Caption>
                </View>
            </View>
            <View style={styles.userInfo}>
                <Surface style={styles.bio}>
                    <Title>Bio</Title>
                    <Paragraph numberOfLines={4}>{dummy_text}</Paragraph>
                </Surface>
                <Surface style={styles.bio}>
                    <Title>Notes</Title>
                    <TextInput
                        placeholder="write here"
                        underlineColorAndroid={Colors.green}
                    />
                </Surface>
            </View>
        </View>
    )
}

export default Profile
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileContainer: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgContainer: {},
    textContainer: {
        alignItems: 'center',
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 55,
        borderColor: Colors.black,
        borderWidth: 3,
    },
    userInfo: {
        flex: 1,
    },
    bio: {
        borderRadius: 10,
        padding: 16,
        margin: 16
    }
})