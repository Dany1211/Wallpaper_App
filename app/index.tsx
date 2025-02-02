import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import React from "react";
import "@/nativewind.css";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  FadeInDown,
  FadeInRight,
  FadeInUp,
} from "react-native-reanimated";
import { useRouter } from "expo-router";

const WelcomeScreen = () => {
  const router = useRouter();
  return (
    <View className="flex-1">
      <StatusBar hidden={true} />
      <Image
        className="size-full flex-1 absolute"
        source={require("../assets/images/welcome.png")}
        resizeMode="cover"
      />

      <LinearGradient
        className="flex-1 w-full h-[65%]"
        colors={["rgba(255,255,255,0)", "rgba(255,255,255,1)"]}
        start={{ x: 0.5, y: 0.2 }}
        end={{ x: 0.5, y: 0.7 }}
      />

      <Animated.View
        entering={FadeInDown.duration(600).springify()}
        className="absolute w-[80%] top-[74%] left-[10%]  items-center justify-center gap-2"
      >
        <Animated.Text  entering={FadeInDown.delay(700).springify()} className="text-center font-bold text-5xl">PixelPerfect</Animated.Text>
        <Animated.Text entering={FadeInDown.delay(700).springify()} className="text-center text-xl">
          Your Perfect Wallpaper Awaits!
        </Animated.Text>
        <Animated.View entering={FadeInDown.delay(800).springify()}>
          {/* @ts-ignore */}
          <TouchableOpacity onPress={()=>router.push('home')} className="bg-black mt-8 py-4 px-6 rounded-[50px]">
            <Text className="text-white text-2xl">Get Started</Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default WelcomeScreen;