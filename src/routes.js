import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();
//TODOS
import Home from './pages/Home';
//PRESTADOR
import Login from './pages/Prestador/Login';
import Cadastro from './pages/Prestador/Cadastro';
import Principal from './pages/Prestador/Principal';
import DadosPessoais from './pages/Prestador/DadosPessoais';
import AdServicos from './pages/Prestador/AdServicos';
import ListaServicos from './pages/Prestador/ListaServicos';
import AlterarDados from './pages/Prestador/AlterarDados';
import AlterarServicos from './pages/Prestador/AlterarServicos';
import VerServicos from './pages/Prestador/VerServicos';
//VISITANTE
import Principall from './pages/Visitante/Principal';
import Prestadores1 from './pages/Visitante/Prestadores/index';
import Prestadores2 from './pages/Visitante/Prestadores/index2';
import Prestadores3 from './pages/Visitante/Prestadores/index3';
import Prestadores4 from './pages/Visitante/Prestadores/index4';
import Prestadores5 from './pages/Visitante/Prestadores/index5';
import Detalhes1 from './pages/Visitante/Detalhes/index';
import Detalhes2 from './pages/Visitante/Detalhes/index2';
import Detalhes3 from './pages/Visitante/Detalhes/index3';
import Detalhes4 from './pages/Visitante/Detalhes/index4';
import Detalhes5 from './pages/Visitante/Detalhes/index5';


export default function Routes(){
 return(
    <NavigationContainer>

    <AppStack.Navigator screenOptions={{headerShown: false}}>
        {/* TODOS */}
        <AppStack.Screen name="Home" component={Home}/>
        {/* PRESTADOR */}
        <AppStack.Screen name="Login" component={Login}/>
        <AppStack.Screen name="Cadastro" component={Cadastro}/>
        <AppStack.Screen name="Principal" component={Principal}/>
        <AppStack.Screen name="DadosPessoais" component={DadosPessoais}/>
        <AppStack.Screen name="AdServicos" component={AdServicos}/>
        <AppStack.Screen name="ListaServicos" component={ListaServicos}/>
        <AppStack.Screen name="AlterarDados" component={AlterarDados}/>
        <AppStack.Screen name="AlterarServicos" component={AlterarServicos}/>
        <AppStack.Screen name="VerServicos" component={VerServicos}/>
        {/* VISITANTE */}
        <AppStack.Screen name="Principall" component={Principall}/>
        <AppStack.Screen name="Prestadores1" component={Prestadores1}/>
        <AppStack.Screen name="Prestadores2" component={Prestadores2}/>
        <AppStack.Screen name="Prestadores3" component={Prestadores3}/>
        <AppStack.Screen name="Prestadores4" component={Prestadores4}/>
        <AppStack.Screen name="Prestadores5" component={Prestadores5}/>
        <AppStack.Screen name="Detalhes1" component={Detalhes1}/>
        <AppStack.Screen name="Detalhes2" component={Detalhes2}/>
        <AppStack.Screen name="Detalhes3" component={Detalhes3}/>
        <AppStack.Screen name="Detalhes4" component={Detalhes4}/>
        <AppStack.Screen name="Detalhes5" component={Detalhes5}/>
    </AppStack.Navigator>

    </NavigationContainer>
 );
}