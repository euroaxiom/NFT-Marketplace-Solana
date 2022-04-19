import React from "react";
import { View, Image, Text } from "react-native";

import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";

// Component to show Title and Subtitle of NFTs
export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
    return (
        <View>
            <Text
                style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: titleSize,
                    color: COLORS.primary,
                }}
            >
                {title}
            </Text>
            <Text
                style={{
                    fontFamily: FONTS.regular,
                    fontSize: subTitleSize,
                    color: COLORS.primary,
                }}
            >
                by {subTitle}
            </Text>
        </View>
    );
};

// Component to show NFT price
export const EthPrice = ({ price }) => {
    return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
                source={assets.eth}
                resizeMode="contain"
                style={{ width: 20, height: 20, marginRight: 2 }}
            />
            <Text
                style={{
                    fontFamily: FONTS.medium,
                    fontSize: SIZES.font,
                    color: COLORS.primary,
                }}
            >
                {price}
            </Text>
        </View>
    );
};

// Component to show bidders avatars 
const ImageCmp = ({ imgUrl, index }) => {
    return (
        <Image
            source={imgUrl}
            resizeMode="contain"
            style={{
                width: 48,
                height: 48,
                marginLeft: index === 0 ? 0 : -SIZES.font,
            }}
        />
    );
};

// Componet to show images of people who have bid on NFT 
export const People = () => {
    return (
        <View style={{ flexDirection: "row" }}>
            {[assets.person02, assets.person03, assets.person04].map(
                (imgUrl, index) => (
                    <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
                )
            )}
        </View>
    );
};

// Component to show end date of bidding for NFT
export const EndDate = () => {
    return (
        <View
            style={{
                paddingHorizontal: SIZES.font,
                paddingVertical: SIZES.base,
                backgroundColor: COLORS.white,
                borderRadius: SIZES.font,
                justifyContent: "center",
                alignItems: "center",
                ...SHADOWS.light,
                elevation: 5,
                maxWidth: "50%",
            }}
        >
            <Text
                style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.small,
                    color: COLORS.primary,
                }}
            >
                Ending in
            </Text>
            <Text
                style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: SIZES.medium,
                    color: COLORS.primary,
                }}
            >
                12h 30m
            </Text>
        </View>
    );
};

// Component to show information related to NFT 
export const SubInfo = () => {
    return (
        <View
            style={{
                width: "100%",
                paddingHorizontal: SIZES.font,
                marginTop: -SIZES.extraLarge,
                flexDirection: "row",
                justifyContent: "space-between",
            }}
        >
            <People />
            <EndDate />
        </View>
    );
};