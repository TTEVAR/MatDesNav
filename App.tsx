
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import CustomAppBar from './components/CustomAppBar';

type RootStackParamList = {
  Home: undefined;
  Second: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App(): React.JSX.Element{
  return (
    <PaperProvider>
      <View style={{ flex: 1, backgroundColor: '#000000'}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: (props) => <CustomAppBar {...props} />,
            contentStyle: { backgroundColor: '#000000',},
            animation: 'none',
          }}
          
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />

          <Stack.Screen
            name="Second"
            component={SecondScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </View>
    </PaperProvider>
  );
}
