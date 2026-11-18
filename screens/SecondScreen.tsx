import { StyleSheet,  View } from 'react-native';
import { Text } from 'react-native-paper';

function SecondScreen (): React.JSX.Element { 
return ( 
    <View style={style.container}>
      <Text style={style.text}>Second screen</Text>
    </View>
);
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0F0F0F'
    
  },
  text: {
    color: 'rgb(229, 19, 215)'
  }
});

export default SecondScreen