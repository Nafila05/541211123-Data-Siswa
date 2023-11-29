import{NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();



import Login from './components/login';
import Reg from './components/register';
import Home from './components/Home';
import Data from './components/data';
import Tambah from './components/tambah';
import Cari from './components/cari';
import Ubah from './components/ubah';
import Hapus from './components/delete';



function App(){
  return (
    <NavigationContainer>
    <Stack.Navigator initialRoutName='Login'>
     <Stack.Screen name='Login' component={Login} options={{
       headerShown : false  
     }}/>
     <Stack.Screen name='Reg' component={Reg}options={{
       headerShown : false  
     }}/>
     <Stack.Screen name='Home' component={Home}options={{
       headerShown : false
     }}/>
     <Stack.Screen name='Data' component={Data}options={{
       headerShown : false
     }}/>
     <Stack.Screen name='Tambah' component={Tambah}options={{
       headerShown : false
     }}/>
     <Stack.Screen name='Cari' component={Cari}options={{
       headerShown : false
     }}/>
     <Stack.Screen name='Ubah' component={Ubah}options={{
       headerShown : false
     }}/>
      <Stack.Screen name='Hapus' component={Hapus}options={{
       headerShown : false
     }}/>
     
     </Stack.Navigator>
     </NavigationContainer>

  );
}

export default App;



