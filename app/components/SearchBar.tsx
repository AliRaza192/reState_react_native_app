import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams, usePathname } from "expo-router";
import { TextInput } from "react-native-gesture-handler";
import icons from "@/constants/icons";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = () => {
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query);

  //   const debouncedSearch = useDebouncedCallback(func:(text: string) => router.setParams(params{query: text}), wait: 500)

  const debouncedSearch = useDebouncedCallback((text: string) => {
    router.setParams({ query: text });
  }, 500);

  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  };

  return (
    <View className="flex flex-row items-center justify-between w-full px-4 rounded-lg bg-accent-100 border border-primary-100 mt-5 py-2">
      <View className="flex flex-1 flex-row items-center justify-start z-50">
        <Image source={icons.search} className="size-6" />
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Search for anything...."
          className="text-sm font-rubik text-black-300 ml-2 flex-1"
        />
      </View>
      <TouchableOpacity>
        <Image source={icons.filter} className="size-6" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
