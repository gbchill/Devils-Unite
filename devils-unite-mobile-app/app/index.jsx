import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import { Link } from 'expo-router'
import { Redirect, router } from "expo-router";
import CustomButton from '../components/CustomButton';

import { SafeAreaView } from "react-native-safe-area-context";

import { images } from '../constants';

export default function App() {
  return (
    <SafeAreaView className ="bg-white h-full">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
        }}
      >
        <View className="w-full flex justify-center items-center px-4">
          <Image
            source={images.logo}
            className="w-[200px] h-[130px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[298px]"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-secondary-100 font-bold text-center">
              Connect and Thrive with{' '}
              <Text className="text-secondary-200">DevilsUnite</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[400px] h-[160px] absolute -bottom-21 -right-7"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-black-DEFAULT mt-7 text-center">
            Where Community Meets Connection and Embark on a Journey of Meaningful Interactions with DevilsUnite
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
