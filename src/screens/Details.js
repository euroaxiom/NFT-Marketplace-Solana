import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, StatusBar, FlatList } from 'react-native'

import { COLORS, SIZES, assets, SHADOWS, FONTS } from '../constants'
import { RectButton, CircleButton, FocusedStatusBar, SubInfo, DetailsBid, DetailsDesc } from '../components'

// Header containing NFT Image, back button and like button
const DetailsHeader = ({ data, navigation }) => {
  return(  
    <View style={{ width: '100%', height: 373 }}>
      <Image
        source={data.image}
        resizeMode="cover"
        style={{ width: '100%', height: '100%' }}
      />
      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        left={15}
        top={StatusBar.currentHeight + 10}
      />

      <CircleButton
        imgUrl={assets.heart}
        right={15}
        top={StatusBar.currentHeight + 10}
      />
    </View>
  )
}

export default function Details({ route, navigation }) {
  
  // data passed from previous screen
  const { data } = route.params

  return (
    <View style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      {/* Place a bid button */}
      <View style={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingVertical: SIZES.font,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.5)",
        zIndex: 1,
      }}>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>


      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />

              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current Bid
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({})