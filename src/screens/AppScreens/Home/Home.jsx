import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList, ActivityIndicator, Platform } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../../constants/Color';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DownIcon, FileIcon, GrowIcon, WalletIcon } from '../../../assets/svgIcons/SVGIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import Toast from 'react-native-toast-message';

const Home = () => {
  const [activeTab, setActiveTab] = useState('Expense');
  const [expenses, setExpenses] = useState([]);
  const [earnings, setEarnings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Form states
  const [whatFor, setWhatFor] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const user = {
    name: 'John Doe',
    profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
    isActive: true,
    notificationCount: 3,
    walletBalance: '₹2,500',
  };

  const insets = useSafeAreaInsets()

  // Show toast using react-native-toast-message
  const showToast = (message, type = 'success') => {
    Toast.show({
      type: type, // 'success', 'error', 'info'
      text1: type === 'success' ? 'Success!' : 'Error!',
      text2: message,
      position: 'top',
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 50,
    });
  };

  const handleAdd = async () => {
    if (!whatFor.trim() || !amount.trim()) {
      showToast('Please fill all fields', 'error');
      return;
    }

    // Start loading
    setIsLoading(true);

    // Simulate API call or processing with 2 second delay
    setTimeout(() => {
      const newItem = {
        id: Date.now().toString(),
        whatFor: whatFor,
        amount: parseFloat(amount),
        date: date.toLocaleDateString(),
        fullDate: date
      };

      if (activeTab === 'Expense') {
        setExpenses([newItem, ...expenses]);
        showToast(`Expense of ₹${amount} added successfully!`, 'success');
      } else {
        setEarnings([newItem, ...earnings]);
        showToast(`Earning of ₹${amount} added successfully!`, 'success');
      }

      // Reset form
      setWhatFor('');
      setAmount('');
      setDate(new Date());
      
      // Stop loading
      setIsLoading(false);
    }, 2000);
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const renderItem = ({ item }) => (
    <View className="bg-white rounded-xl p-4 mb-3 flex-row justify-between items-center border border-gray-200" >
      <View className="flex-1">
        <Text className="font-semibold text-gray-800 text-base">{item.whatFor}</Text>
        <Text className="text-gray-500 text-xs mt-1">{item.date}</Text>
      </View>
      <Text className={`font-bold text-lg ${activeTab === 'Expense' ? 'text-red-600' : 'text-green-600'}`}>
        {activeTab === 'Expense' ? '-' : '+'}₹{item.amount}
      </Text>
    </View>
  );

  return (
    <View className="bg-gray-50 flex-1">
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

        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
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
          <View className='px-5'>
            <Text className='font-bold text-3xl mt-3 text-black'>Money Tracker</Text>
            <Text className='font-normal text-lg text-gray-500'>
              {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </Text>
          </View>

          <View className='px-5'>
            <Text className='font-bold text-lg text-gray-600 mb-3'>Today</Text>

            {/* Three-column grid using flexbox */}
            <View className='flex-row flex-wrap justify-between gap-1'>
              {/* Card 1 - Total Expenses */}
              <View className='bg-white px-5 py-5 rounded-2xl w-[31%] border border-gray-300' >
                <View className='flex items-center justify-between mb-3'>
                  <View className='w-10 h-10 bg-red-100 justify-center items-center rounded-xl'>
                    <DownIcon width={20} height={20} stroke={'#EB6738'} />
                  </View>
                  <Text className='font-semibold mt-3 text-xs text-gray-800'>Expenses</Text>

                </View>
                <Text className='text-lg text-center font-bold text-gray-900'>
                  ₹{expenses.reduce((sum, item) => sum + item.amount, 0)}
                </Text>
              </View>

              {/* Card 2 - Total Earnings */}
              <View className='bg-white px-5 py-5 rounded-2xl w-[31%] border border-gray-300' >
                <View className='flex items-center justify-between mb-3'>
                  <View className='w-10 h-10 bg-green-100 justify-center items-center rounded-xl'>
                    <GrowIcon width={20} height={20} stroke={'#4CAF50'} />
                  </View>
                  <Text className='font-semibold mt-3 text-xs text-gray-800'>Earning</Text>

                </View>
                <Text className='text-lg text-center font-bold text-gray-900'>
                  ₹{earnings.reduce((sum, item) => sum + item.amount, 0)}
                </Text>
              </View>

              {/* Card 3 - Balance */}
              <View className='bg-white px-5 py-5 rounded-2xl w-[31%] border border-gray-300' >
                <View className='flex items-center justify-between mb-3'>
                  <View className='w-10 h-10 bg-violet-100 justify-center items-center rounded-xl'>
                    <WalletIcon width={20} height={20} stroke={'#9E35F0'} />
                  </View>
                  <Text className='font-semibold mt-3 text-xs text-gray-800'>Balance</Text>

                </View>
                <Text className='text-lg text-center font-bold text-gray-900'>
                  ₹{(earnings.reduce((sum, item) => sum + item.amount, 0) - expenses.reduce((sum, item) => sum + item.amount, 0))}
                </Text>
              </View>

            </View>
          </View>

          {/* Tabs */}
          <View className="flex-row px-2 mt-2 mb-5 mt-5 bg-gray-300 rounded-2xl py-2 mx-5">
            <TouchableOpacity
              className={`py-2 px-4 mr-3 flex-1 justify-center items-center rounded-xl ${activeTab === 'Expense' ? 'bg-white' : ''}`}
              onPress={() => setActiveTab('Expense')}
              disabled={isLoading}
            >
              <Text className={`text-sm font-medium ${activeTab === 'Expense' ? 'text-black' : 'text-stone-600'}`}>
                Expense
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`py-2 px-4 mr-3 flex-1 justify-center items-center rounded-xl ${activeTab === 'Earnings' ? 'bg-white' : ''}`}
              onPress={() => setActiveTab('Earnings')}
              disabled={isLoading}
            >
              <Text className={`text-sm font-medium ${activeTab === 'Earnings' ? 'text-black' : 'text-stone-600'}`}>
                Earnings
              </Text>
            </TouchableOpacity>
          </View>

          {/* Input Form */}
          <View className="mx-5 bg-white rounded-2xl p-4 mb-5 border border-gray-300" >
            <Text className="font-bold text-lg text-gray-800 mb-3">
              Add {activeTab === 'Expense' ? 'Expense' : 'Earning'}
            </Text>

            {/* What For Input */}
            <View className="mb-4">
              <Text className="text-gray-700 text-sm mb-2 font-medium">What for?</Text>
              <TextInput
                className={`border rounded-xl px-4 py-3 text-gray-800 ${isLoading ? 'bg-gray-100 border-gray-200' : 'border-gray-300'}`}
                placeholder="e.g., Grocery, Shopping, Salary"
                value={whatFor}
                onChangeText={setWhatFor}
                placeholderTextColor="#999"
                editable={!isLoading}
              />
            </View>

            {/* Amount Input */}
            <View className="mb-4">
              <Text className="text-gray-700 text-sm mb-2 font-medium">Amount (₹)</Text>
              <TextInput
                className={`border rounded-xl px-4 py-3 text-gray-800 ${isLoading ? 'bg-gray-100 border-gray-200' : 'border-gray-300'}`}
                placeholder="Enter amount"
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
                placeholderTextColor="#999"
                editable={!isLoading}
              />
            </View>

            {/* Calendar Input */}
            <View className="mb-4">
              <Text className="text-gray-700 text-sm mb-2 font-medium">Date</Text>
              <TouchableOpacity
                className={`border rounded-xl px-4 py-3 ${isLoading ? 'bg-gray-100 border-gray-200' : 'border-gray-300'}`}
                onPress={() => !isLoading && setShowDatePicker(true)}
                disabled={isLoading}
              >
                <Text className={`${isLoading ? 'text-gray-400' : 'text-gray-800'}`}>{formatDate(date)}</Text>
              </TouchableOpacity>

              {showDatePicker && (
                <DateTimePicker
                  value={date}
                  mode="date"
                  display="default"
                  onChange={onDateChange}
                />
              )}
            </View>

            {/* Add Button with Loader */}
            <TouchableOpacity
              className={`rounded-xl py-3 ${activeTab === 'Expense' ? 'bg-red-600' : 'bg-green-600'} ${isLoading ? 'opacity-70' : ''}`}
              onPress={handleAdd}
              disabled={isLoading}
            >
              {isLoading ? (
                <View className="flex-row items-center justify-center">
                  <ActivityIndicator size="small" color="#ffffff" />
                  <Text className="text-white text-center font-bold text-base ml-2">
                    Adding...
                  </Text>
                </View>
              ) : (
                <Text className="text-white text-center font-bold text-base">
                  Add {activeTab === 'Expense' ? 'Expense' : 'Earning'}
                </Text>
              )}
            </TouchableOpacity>
          </View>

          {/* List Display */}
          <View className="mx-5 mb-5">
            <View className="flex-row justify-between items-center mb-3">
              <Text className="font-bold text-lg text-gray-800">
                Recent {activeTab === 'Expense' ? 'Expenses' : 'Earnings'}
              </Text>
              <Text className="text-gray-500 text-sm">
                Total: ₹{(activeTab === 'Expense' ? expenses : earnings).reduce((sum, item) => sum + item.amount, 0)}
              </Text>
            </View>

            {(activeTab === 'Expense' ? expenses : earnings).length === 0 ? (
              <View className="bg-white rounded-xl p-8 items-center border border-gray-300" >
                <Text className="text-gray-500 text-center">
                  No {activeTab === 'Expense' ? 'expenses' : 'earnings'} added yet.
                </Text>
                <Text className="text-gray-400 text-sm text-center mt-2">
                  Use the form above to add your first {activeTab === 'Expense' ? 'expense' : 'earning'}.
                </Text>
              </View>
            ) : (
              <FlatList
                data={activeTab === 'Expense' ? expenses : earnings}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                scrollEnabled={false}
              />
            )}
          </View>

        </ScrollView>
      </LinearGradient>
      
      {/* Add Toast component at the end of your component */}
      <Toast />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})