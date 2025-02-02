import {
  View,
  Text,
  FlatList,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import "@/nativewind.css";
import { categories } from "@/constants/data";
import Animated, {
  FadeInDown,
  FadeInRight,
  FadeInUp,
  FadeOutDown,
  FadeOutUp,
} from "react-native-reanimated";

// @ts-ignore
const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryPress = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <FlatList
      className="h-[80px] mb-1"
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={categories}
      keyExtractor={(item) => item}
      renderItem={({ item, index }) => (
        <Animated.View
          entering={FadeInRight.delay(index * 200)
            .duration(1000)
            .springify()
            .damping(14)}
        >
          <TouchableOpacity
            onPress={() => handleCategoryPress(item)}
            className={`mr-3 px-5 py-3 rounded-[30px] mt-4 border-[1px] border-gray-200
           ${selectedCategory === item ? "bg-black" : "bg-white"}`}
          >
            <Text
              className={`text-[18px] font-medium text-center
            ${selectedCategory === item ? "text-white" : "text-black"}
            `}
            >
              {item}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    />
  );
};

export default Categories;
