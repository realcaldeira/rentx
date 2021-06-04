import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {
  Container,
  Header,
  CarImages
} from './styles';

export function CarDetails(){
  return (
    <Container>
        <Header>
            <BackButton 
                onPress={()=> {}}
            />
        </Header>

        <CarImages>
          <ImageSlider imagesUrl={['https://automobile-assets.s3.amazonaws.com/automobile/body/audi-rs5-2020-2022-1613028935.6138937.png']}
          />
        </CarImages>
    </Container>
   );
}