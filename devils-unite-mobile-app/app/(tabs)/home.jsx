import { View, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import Stories from '../../components/Stories';
import Post from '../../components/Post';
import { POSTS } from '../../data/posts';

const Home = () => {
  return (
    <SafeAreaView className="bg-white h-full flex-1 -top-12">
      <Header />
      <Stories />
      <View className = "h-full -top-5">
      <ScrollView className="flex-1 h-full -top-60  ">
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
