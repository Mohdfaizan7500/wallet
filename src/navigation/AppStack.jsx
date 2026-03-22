import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import ProfileEdit from '../screens/AppScreens/Profile/ProfileEdit';
import Support from '../screens/AppScreens/Support';
import TermsConditions from '../screens/AppScreens/TermsConditions';

// import BottomTabs from 
const Stack = createNativeStackNavigator();

// App Stack (for authenticated users)
const AppStack = () => {

  return (
    <Stack.Navigator
      initialRouteName="TabNavigation"
      screenOptions={{
        headerShown: false, // Hide header since BottomTabs has its own
      }}
    >
      <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
      />
      <Stack.Screen
        name="ProfileEdit"
        component={ProfileEdit}
      />
      <Stack.Screen
        name="Support"
        component={Support}
      />
      <Stack.Screen
        name="TermsConditions"
        component={TermsConditions}
      />


    </Stack.Navigator>
  )
}

export default AppStack;