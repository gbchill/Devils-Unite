import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { images, icons } from "../constants/";

import { FontAwesome5 } from '@expo/vector-icons';

import { FontAwesome } from '@expo/vector-icons';

import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const Post = ({ post }) => {
  return (
    <View className = "bg-white">
      <Divider width={1} orientation="horizontal" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View className = "m-3">
      <PostFooter/>
      <Likes  post = {post} />
      <Caption post = {post}/>
      <CommentSection post = {post}/>
      <Comments post = {post}/>
      </View>
    </View>
  );
};


const PostHeader = ({ post }) => (
  <View className="flex-row justify-between m-2 items-center">
    <View className="flex-row items-center">
      <Image
        source={{ uri: post.profile_picture }}
        className="w-10 h-10 rounded-full border-2 border-secondary-200"
      />
      <Text className="ml-2 font-semibold">{post.user}</Text>
    </View>
    <Text className="font-bold">...</Text>
  </View>
);

const PostFooter = () => (
  <View className="flex-row ">
    <View className = "flex-row justify-between">
    <TouchableOpacity className = "mr-4 ml-1">
    <AntDesign name="hearto" size={26} color="black" />
    </TouchableOpacity>
    <TouchableOpacity className = "mr-4">
    <FontAwesome5 name="comment" size={26} color="black" />
    </TouchableOpacity>
    <TouchableOpacity className = "mr-4 -top-1.5">
    <MaterialCommunityIcons name="send-outline" size={29} color="black" style={{ transform: [{ rotate: '320deg' }] }} />
    </TouchableOpacity>
    <TouchableOpacity className = "-left-1">
    <MaterialCommunityIcons name="silverware-fork" size={25} color="black" style={{ transform: [{ rotate: '315deg' }] }} />
    </TouchableOpacity>
    </View>
    <View className = "flex-1 justify-end items-end pr-2 ">
      <TouchableOpacity>
      <Feather name="bookmark" size={28} color="black" />
      </TouchableOpacity>
    </View>
  </View>
);



const PostImage = ({ post }) => (
  <View className="w-full h-96">
    <Image
      source={{ uri: post.imageUrl }}
      className="w-full h-full"
      resizeMode="cover"
    />
  </View>
);

const Likes =({post}) => (
  <View className = "flex-row mt-1 ">
    <Text className = "font-semibold">
      {post.likes.toLocaleString('en')} likes
    </Text>
  </View>
)

const Caption = ({post}) => (
  <View className = "mt-1.5">
  <Text>
    <Text className = "font-semibold">{post.user}</Text>
    <Text> {post.caption}</Text>
  </Text>
  </View>
)

const CommentSection = ({post}) =>(
  <View className = "mt-1.5">
    {!!post.comments.length && ( 
  <Text className = "text-gray-400">
  View{post.comments.length > 1 ? ' all' : ''} {post.comments.length}{' '}
  {post.comments.length > 1 ? 'comments' : 'comment'}
  </Text>
  )}
  </View>
)

const Comments = ({post}) => (
  <>
  {post.comments.map((comments,index) => (
    <View key = {index} className = "mt-1.5 flex-row">
    <Text>
      <Text className = "font-semibold"> {comments.user}</Text>
      {' '} {comments.comment}
    </Text>
    </View>
  ))}
  </>
)

export default Post;
