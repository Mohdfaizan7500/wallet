import { Text, View, ScrollView, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GrabIcon } from 'lucide-react-native';
import { DownIcon, GrowIcon } from '../../../assets/svgIcons/SVGIcons';

const History = () => {
  const [activeTab, setActiveTab] = useState('All'); // 'All', 'Earnings', 'Expenses'

  // Sample data - replace with actual transaction data
  const transactions = [
    { id: '1', type: 'Earned', amount: 2500, description: 'Freelance project', date: 'Today, 10:30 AM' },
    { id: '2', type: 'Spent', amount: 500, description: 'Grocery shopping', date: 'Yesterday, 6:45 PM' },
    { id: '3', type: 'Earned', amount: 1500, description: 'Salary advance', date: 'Mar 28, 2025' },
    { id: '4', type: 'Spent', amount: 200, description: 'Movie tickets', date: 'Mar 27, 2025' },
    { id: '5', type: 'Earned', amount: 800, description: 'Online sale', date: 'Mar 26, 2025' },
  ];

  // Filter transactions based on active tab
  const getFilteredTransactions = () => {
    if (activeTab === 'Earnings') {
      return transactions.filter(t => t.type === 'Earned');
    } else if (activeTab === 'Expenses') {
      return transactions.filter(t => t.type === 'Spent');
    }
    return transactions;
  };

  // Calculate totals
  const calculateTotals = () => {
    const earnings = transactions
      .filter(t => t.type === 'Earned')
      .reduce((sum, t) => sum + t.amount, 0);
    const expenses = transactions
      .filter(t => t.type === 'Spent')
      .reduce((sum, t) => sum + t.amount, 0);
    const net = earnings - expenses;
    return { earnings, expenses, net };
  };

  const { earnings, expenses, net } = calculateTotals();
  const filteredTransactions = getFilteredTransactions();

  const renderTransactionItem = ({ item }) => (
    <View className="flex-row justify-between items-center bg-white rounded-xl p-4 mb-3 shadow-sm">
      <View className="flex-row items-center flex-1">
        <View className={`w-10 h-10 flex justify-center items-center rounded-xl mr-3 ${item.type === 'Earned' ? 'bg-green-100' : 'bg-violet-100'}`} >
         {item.type === 'Earned'  ? <GrowIcon width={20} height={20} stroke={'#10B981'}/> : <DownIcon width={20} height={20} stroke={'#8B5CF6'}/>}
        </View>
        <View>
          <Text className="text-base font-medium text-gray-800 mb-1">{item.description}</Text>
          <Text className="text-xs text-gray-400">{item.date}</Text>
        </View>
      </View>
      <Text className={`text-base font-semibold ${item.type === 'Earned' ? 'text-green-600' : 'text-violet-600'}`}>
        {item.type === 'Earned' ? '+' : '-'} ₹{item.amount.toLocaleString()}
      </Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />
      
      {/* Header */}
      <View className="px-5 pt-4 pb-2">
        <Text className="text-3xl font-bold text-gray-800 mb-1">History</Text>
        <Text className="text-sm text-gray-500">All your transactions</Text>
      </View>

      {/* Tabs */}
      <View className="flex-row px-2 mt-2 mb-5  bg-gray-300 rounded-2xl py-2 mx-5">
        <TouchableOpacity
          className={`py-2 px-4 mr-3 flex-1 justify-center items-center rounded-xl ${activeTab === 'All' ? 'bg-white' : ''}`}
          onPress={() => setActiveTab('All')}
        >
          <Text className={`text-sm font-medium ${activeTab === 'All' ? 'text-black' : 'text-stone-600'}`}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`py-2 px-4 mr-3 flex-1 justify-center items-center rounded-xl ${activeTab === 'Earnings' ? 'bg-white' : ''}`}
          onPress={() => setActiveTab('Earnings')}
        >
          <Text className={`text-sm font-medium ${activeTab === 'Earnings' ? 'text-black' : 'text-stone-600'}`}>
            Earnings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`py-2 px-4 flex-1 justify-center items-center  rounded-xl ${activeTab === 'Expenses' ? 'bg-white' : ''}`}
          onPress={() => setActiveTab('Expenses')}
        >
          <Text className={`text-sm font-medium ${activeTab === 'Expenses' ? 'text-black' : 'text-stone-600'}`}>
            Expenses
          </Text>
        </TouchableOpacity>
      </View>

      {/* Summary Cards */}
      <View className="flex-row justify-between px-5 mb-6">
        <View className="flex-1 bg-white rounded-2xl py-3 px-2 items-center mx-1  ">
          <Text className="text-xs font-medium text-gray-500 mb-1">Earned</Text>
          <Text className="text-base font-bold text-gray-800">₹{earnings.toLocaleString()}</Text>
        </View>
        <View className="flex-1 bg-white rounded-2xl py-3 px-2 items-center mx-1 ">
          <Text className="text-xs font-medium text-gray-500 mb-1">Spent</Text>
          <Text className="text-base font-bold text-gray-800">₹{expenses.toLocaleString()}</Text>
        </View>
        <View className="flex-1 bg-white rounded-2xl py-3 px-2 items-center mx-1 ">
          <Text className="text-xs font-medium text-gray-500 mb-1">Net</Text>
          <Text className={`text-base font-bold ${net >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            ₹{net.toLocaleString()}
          </Text>
        </View>
      </View>

      {/* Transactions List */}
      <FlatList
        data={filteredTransactions}
        keyExtractor={(item) => item.id}
        renderItem={renderTransactionItem}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View className="items-center justify-center py-12">
            <Text className="text-base text-gray-400">No entries found.</Text>
          </View>
        }
      />

      
    </SafeAreaView>
  );
};

export default History;