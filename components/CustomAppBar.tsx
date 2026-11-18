
import { Appbar } from 'react-native-paper';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

export default function CustomAppBar({ navigation, back, route, 
}: NativeStackHeaderProps): React.JSX.Element {
  return (
    <Appbar.Header style={{ backgroundColor: '#FFD700'}}>
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} color="#ff0000" />
      ) : null}

      <Appbar.Content title={route.name === 'Home' ? 'Homie' : 'Secondus'} 
        titleStyle={{ color: '#060000'}}  />

      {!back ? (
        <Appbar.Action
          icon="arrow-right"
          onPress={() => navigation.navigate('Second')} color="#00FF00" />
      ) : null}
      
    </Appbar.Header>
  );
}
