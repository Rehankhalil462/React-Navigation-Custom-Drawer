import React from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

import { IconButton, useTheme } from "react-native-paper";

export const CustomDrawerSidebar = (props) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            alignItems: "center",
            borderBottomColor: colors.onBoardingBackground,
            borderBottomWidth: 0.5,
          }}
        >
          <Image
            source={require("../../assets/entervo.png")}
            style={{ width: 230, height: 150 }}
            resizeMode="contain"
          />
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View
        style={{
          width: "100%",

          paddingLeft: 18,
          paddingVertical: 10,
          borderTopWidth: 0.5,
          borderTopColor: colors.onBoardingBackground,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
          }}
          onPress={() =>
            Alert.alert("Are you sure you want to logout?", null, [
              {
                text: "No",
                style: "cancel",
                onPress: () => null,
              },
              {
                text: "Yes",
                style: "default",
                onPress: () => navigation.navigate("login"),
              },
            ])
          }
        >
          <IconButton icon="logout" size={22} />
          <Text style={{ color: "#333", fontWeight: "500", fontSize: 18 }}>
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
