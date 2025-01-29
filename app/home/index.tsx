import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import Categories from "@/components/categories";

const index = () => {
  const [searchText, setSearchText] = useState("");

  const onPressClearText = () => {
    setSearchText("");
  }


  return (
    <View className="px-4 pt-12">
      <View className="flex-row items-center justify-between p-2">
        <TouchableOpacity>
          <Text className="text-4xl font-bold">PixelPerfect</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome6 name="bars-staggered" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View className="flex-row  items-center mt-4 bg-white px-4 py-2 rounded-[30px]">
          <FontAwesome name="search" size={24} color="gray" />

          <TextInput
            value={searchText}
            onChangeText={setSearchText}
            className="bg-white w-[85%] text-lg ml-2"
            placeholder="Search for photos"
          ></TextInput>

          {searchText?.length > 0 && (
            <Ionicons
              onPress={onPressClearText}
              name="close-circle"
              size={24}
              color="gray"
            />
          )}
        </View>

{/* categories starts here  */}
        <Categories/>

        
      </ScrollView>
    </View>
  );
};

export default index;
