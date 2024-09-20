import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { USERS } from '../data/users';
import { images, icons } from "../constants/";




const Stories = () => {
  return (
    
    <SafeAreaView className="bg-white">
        <View className = "-top-60 ml-2 mb-13">
            <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}>
                {USERS.map((story,index ) => (
                    <View key = {index} className = "items-center right-1 ">
                     <Image source = {{uri:story.image}}
                     className="w-[70px] h-[70px] rounded-full border-2 ml-4 border-secondary-200"
                     />
                     <Text className = "left-2 text">{
                     
                     
                     story.user.length > 11 ? story.user.slice(0,10) + '...' : story.user}</Text>
                     </View>
                    ))}
              
            </ScrollView>
       
        </View>
    </SafeAreaView>
    
  )
}

export default Stories