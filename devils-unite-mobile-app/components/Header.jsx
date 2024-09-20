import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { images, icons } from "../constants/";
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Header = () => {
  return (
    <SafeAreaView>   
        <View className="flex-row justify-between items-center mx-5">
          <TouchableOpacity>
          <View className=" items-center -top-20 -left-9">
            <Image
              source={images.logoSmall}
              resizeMode="contain"
              className="w-[160px] h-[180px]"
            />
          </View>
          </TouchableOpacity>

          <View className="-top-20 flex-row space-x-3">
            <TouchableOpacity>
            <AntDesign name="pluscircleo" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
            <FontAwesome6 name="heart" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
            <Feather name="message-circle" size={24} color="black"  />
            </TouchableOpacity>

          </View>
        </View>
    </SafeAreaView>
  )
}

export default Header