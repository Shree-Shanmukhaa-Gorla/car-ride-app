import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const data=[
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "1247 W 30th Street, Los Angeles, CA"
    },
    {
        id: "456",
        icon: "school",
        location: "School",
        destination: "3551 Trousdale Pkwy, Los Angeles, CA"
    },
];

const NavFavourites = () => {
  return (
    <FlatList 
        data={data} 
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
            <View style={[tw `bg-gray-200`, { height: 1, width:330, alignSelf: 'center'}]} />
        )}
        renderItem={({item: {icon, location, destination}}) => (
            <TouchableOpacity style={tw `flex-row items-center p-5`}>
                <Icon 
                    style={tw `mr-4 rounded-full bg-gray-300 p-3`}
                    name={icon}
                    type="ionicon"
                    color="white"
                    size={18}
                />
                <View>
                    <Text style={tw `font-semibold text-lg`}>{location}</Text>
                    <Text style={tw `text-gray-500`}>{destination}</Text>
                </View>
            </TouchableOpacity>
        )} />
    ) 
}

export default NavFavourites

const styles = StyleSheet.create({})