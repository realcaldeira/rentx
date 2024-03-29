import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import FastImage from 'react-native-fast-image';

interface ImageIndexProps{
    active: boolean;
}

export const Container = styled.View`
  width: 100%;
  margin-top: ${RFValue(30)}px;
`;

export const ImageIndexes = styled.View`
    flex-direction: row;
    align-self: flex-end;
    padding-right: 24px;
`;



export const CarImageWrapper = styled.View`
    width: ${Dimensions.get('window').width}px;
    height: 132px;

    justify-content: center;
    align-items: center;
`;

export const CarImage = styled(FastImage)`
    width: 280px;
    height: 132px;
`;
