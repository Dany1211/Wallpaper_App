import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import Categories from "@/components/categories";
import { fetchWallpapers } from "@/src/pixabay";

interface ImageData {
  id: number;
  webformatURL: string;
}

const HomeScreen: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async (query: string = "wallpapers") => {
    setLoading(true);
    const fetchedImages = await fetchWallpapers(query);
    setImages(fetchedImages);
    setLoading(false);
  };

  const onSearch = () => {
    if (searchText.trim().length > 0) {
      loadImages(searchText);
    }
  };

  const onPressClearText = () => {
    setSearchText("");
    loadImages("wallpapers");
  };

  return (
    <View className="px-4 pt-12 flex-1">
      <View className="flex-row items-center justify-between p-2">
        <TouchableOpacity>
          <Text className="text-4xl font-bold">PixelPerfect</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome6 name="bars-staggered" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View className="flex-row   items-center mt-4 bg-white px-4 py-2 rounded-[30px]">
        <FontAwesome name="search" size={24} color="gray" />

        <TextInput
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={onSearch}
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

      <Categories />

      {loading ? (
        <ActivityIndicator
          size="large"
          color="#00bcd4"
          style={{ marginTop: 20 }}
        />
      ) : (
        <FlatList
          className="mb-2"
          showsVerticalScrollIndicator={false}
          data={images}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item.webformatURL }}
              className=" mt-2 my-auto w-[48%] h-52  mx-auto rounded-xl"
            />
          )}
        />
      )}
    </View>
  );
};

export default HomeScreen;
