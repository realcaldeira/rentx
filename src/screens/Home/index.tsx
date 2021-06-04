import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars
} from './styles';

export function Home(){
  const carDataOne = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent:{
        period: 'AO DIA',
        price: 120,
    },
    thumbnail: 'https://automobile-assets.s3.amazonaws.com/automobile/body/audi-rs5-2020-2022-1613028935.6138937.png'
  }
  const carDataTwo = {
    brand: 'Porche',
    name: 'Panamera',
    rent:{
        period: 'AO DIA',
        price: 340,
    },
    thumbnail: 'https://www.pngkit.com/png/full/237-2375888_porsche-panamera-s.png'
  }


  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>  
        <HeaderContent>
          <Logo 
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>

      <Car data={carDataOne}/>
      <Car data={carDataTwo}/>

    </Container>
   );
}