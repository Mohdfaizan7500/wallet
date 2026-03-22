import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../../constants/Color';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GrowIcon } from '../../../assets/svgIcons/SVGIcons';

const Home = () => {

  const user = {
    name: 'John Doe',
    profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
    isActive: true,
    notificationCount: 3,
    walletBalance: '₹2,500',
  };


  const insets = useSafeAreaInsets()
  return (
    <LinearGradient
      colors={[`${Colors.brand.highlight}`, '#fff', '#fff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      className="flex-1"
    >
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent={true}
      />

      {/* Header with Profile and Icons */}
      <View
        className="w-full bg-transparent flex-row items-center justify-between px-4"
        style={{ paddingTop: insets.top + 4, paddingBottom: 4 }}
      >
        {/* Left side - Profile */}
        <View className="flex-row items-center flex-1">
          <View className="relative">
            <Image
              source={{ uri: user.profileImage }}
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <View
              className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${user.isActive ? 'bg-green-500' : 'bg-gray-400'
                }`}
            />
          </View>
          <View className="ml-3">
            <Text className="text-gray-700 text-sm">Welcome Back</Text>
            <View className="flex-row items-center">
              <Text className="text-gray-900 font-bold text-lg">
                {user.name}
              </Text>
            </View>
            <Text
              className={`text-xs font-medium ${user.isActive ? 'text-green-600' : 'text-gray-500'
                }`}
            >
              {user.isActive ? '● Active' : '● Inactive'}
            </Text>
          </View>
        </View>


      </View>
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View className='px-5'>
          <Text className='font-bold text-3xl mt-3 text-black'>Money Tracker</Text>
          <Text className='font-normal text-lg text-gary-500'>Sunday, 22 March</Text>
        </View>

    <View className='px-5'>
  <Text className='font-bold text-lg text-gray-600 mb-3'>Today</Text>

  {/* Three-column grid using flexbox */}
  <View className='flex-row flex-wrap justify-between gap-1'>
    {/* Card 1 */}
    <View className='bg-white px-5 py-5 rounded-2xl w-[31%]' style={{ elevation: 2 }}>
      <View className='flex-row items-center justify-between mb-3'>
        <Text className='font-semibold text-xs text-gray-800'>Earned</Text>
        <View className='w-10 h-10 bg-green-100 justify-center items-center rounded-xl'>
          <GrowIcon width={20} height={20} stroke={Colors.primary.green} />
        </View>
      </View>
      <Text className='text-lg font-bold text-gray-900'>+100</Text>
    </View>

    {/* Card 2 */}
    <View className='bg-white px-5 py-5 rounded-2xl w-[31%]' style={{ elevation: 2 }}>
      <View className='flex-row items-center justify-between mb-3'>
        <Text className='font-semibold text-sm text-gray-800'>Earned</Text>
        <View className='w-10 h-10 bg-green-100 justify-center items-center rounded-xl'>
          <GrowIcon width={20} height={20} stroke={Colors.primary.green} />
        </View>
      </View>
      <Text className='text-lg font-bold text-gray-900'>+100</Text>
    </View>

    {/* Card 3 */}
    <View className='bg-white px-5 py-5 rounded-2xl w-[31%]' style={{ elevation: 2 }}>
      <View className='flex-row items-center justify-between mb-3'>
        <Text className='font-semibold text-sm text-gray-800'>Earned</Text>
        <View className='w-10 h-10 bg-green-100 justify-center items-center rounded-xl'>
          <GrowIcon width={20} height={20} stroke={Colors.primary.green} />
        </View>
      </View>
      <Text className='text-lg font-bold text-gray-900'>+100</Text>
    </View>
  </View>
</View>

      </ScrollView>
    </LinearGradient>
  )
}

export default Home

const styles = StyleSheet.create({})