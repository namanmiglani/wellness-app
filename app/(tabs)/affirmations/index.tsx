import GuidedAffirmationsGallery from "@/components/GuidedAffirmationsGallery";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallary";
import images from "@/constants/affirmation-images";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Page = () => {
    const insets = useSafeAreaInsets();

    return (
        <ScrollView>
            <View className="flex-1">
                <LinearGradient
                    colors={["#2e1f58", "#54426b", "#a790af"]}
                    className="px-5"
                    style={{ paddingTop: insets.top }}
                >
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text className="text-zinc-50 text-3xl font-bold">
                            Change your beliefs with affirmations
                        </Text>
                        <View>
                            {AFFIRMATION_GALLERY.map((g) => (
                                <GuidedAffirmationsGallery
                                    key={g.title}
                                    title={g.title}
                                    products={g.data}
                                />
                            ))}
                        </View>
                    </ScrollView>
                </LinearGradient>
                <StatusBar style="light" />
            </View>
        </ScrollView>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
    },
});

export default Page;
