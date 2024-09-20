import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";

import { images } from "../../constants";
import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";

const SignIn = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const auth = FIREBASE_AUTH;

  const submit = async () => {
    setSubmitting(true);
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      Alert.alert("Success", "You have successfully signed in!");
      router.push("/home");
    } catch (error) {
      Alert.alert("Sign in failed ", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full flex justify-center min-h-[75vh] px-4 my-6">
          <View className="items-center">
            <Image
              source={images.logo}
              resizeMode="contain"
              className="w-[140px] h-[180px]"
            />
          </View>
          <Text className="text-2xl font-semibold text-black mt-10 font-psemibold">
            Log in to Devils Unite
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            secureTextEntry
          />
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-10"
            isLoading={isSubmitting}
          />
          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-black font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-black"
            >
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
