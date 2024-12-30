import { Card, FeaturedCard } from "@/app/components/Cards";
import Filters from "@/app/components/Filters";
import SearchBar from "@/app/components/SearchBar";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-col items-center">
            <Image source={images.avatar} className="size-12 rounded-full" />
            <View className="flex flex-col items-center justify-center ml-2">
              <Text className="text-xs font-rubik text-black-100">
                Good Morning
              </Text>
              <Text className="text-base font-rubik-medium text-black-300">
                Ali Raza Qasim
              </Text>
            </View>
          </View>
          <Image source={icons.bell} className="size-6" />
        </View>
        <SearchBar />
        <View className="my-5">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-sm font-rubik-bold text-black-300">
              Featured
            </Text>
            <TouchableOpacity>
              <Text className="text-base font-rubik-bold text-primary-300">
                See All
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex flex-row gap-5 mt-5">
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />

          </View>

        </View>


        <View className="flex flex-row items-center justify-between">
          <Text className="text-sm font-rubik-bold text-black-300">
            Our Recommendation
          </Text>
          <TouchableOpacity>
            <Text className="text-base font-rubik-bold text-primary-300">
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <Filters />
        <View className="flex flex-row gap-5 mt-5">
          <Card />
          <Card />
        </View>
      </View>
    </SafeAreaView>
  );
}
