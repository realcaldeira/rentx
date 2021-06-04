import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Acessories,
  Footer
} from './styles';

export function CarDetails(){
  return (
    <Container>
        <Header>
            <BackButton 
                onPress={()=> {}}
            />
        </Header>

        
          <ImageSlider imagesUrl={['https://automobile-assets.s3.amazonaws.com/automobile/body/audi-rs5-2020-2022-1613028935.6138937.png']}
          />

          <Content>
            <Details>
              <Description>
                <Brand>Lamborghini</Brand>
                <Name>Huracan</Name>
              </Description>

              <Rent>
                <Period>Ao dia</Period>
                <Price>R$ 580</Price>
              </Rent>
            </Details>

            <Acessories>
              <Accessory name="380Km/h" icon={speedSvg}/>
              <Accessory name="3.2s" icon={accelerationSvg}/>
              <Accessory name="800 HP" icon={forceSvg}/>
              <Accessory name="Gasolina" icon={gasolineSvg}/>
              <Accessory name="Auto" icon={exchangeSvg}/>
              <Accessory name="2 pessoas" icon={peopleSvg}/>
            </Acessories>

            <About>
              Este é automóvel despostivo. Surgiu do lendário 
              touro de lide indultado ma praça Real Maestranza de Sevilla. 
              É um belíssimo carro para quem gosta de acelerar
            </About>
          </Content>

          <Footer>
            <Button title="Confirmar"/>
          </Footer>

        
    </Container>
   );
}