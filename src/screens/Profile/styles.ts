import styled, { css } from 'styled-components/native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

interface OptionProps {
  active: boolean;
}

export const Container = styled.View`

  background-color: ${({ theme })=> theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height:  ${RFValue(227)}px;
  background-color: ${({ theme })=> theme.colors.header};

  padding: 0  ${RFValue(24)}px;
  align-items: center;
`;

export const HeaderTop = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: ${getStatusBarHeight() + 10}px;
`;

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme })=> theme.fonts.secondary_600};
  color: ${({ theme })=> theme.colors.background_secondary};
`;

export const LogoutButton = styled(BorderlessButton)`
`;

export const PhotoContainer = styled.View`
  width:  ${RFValue(180)}px;
  height:  ${RFValue(180)}px;
  border-radius:  ${RFValue(90)}px;
  background-color: ${({ theme })=> theme.colors.shape};
  margin-top:  ${RFValue(18)}px;
`;

export const Photo = styled.Image`
  width:  ${RFValue(180)}px;
  height:  ${RFValue(180)}px;
  border-radius:  ${RFValue(90)}px;
`;

export const PhotoButton = styled(RectButton)`
  width:  ${RFValue(40)}px;
  height:  ${RFValue(40)}px;

  background-color: ${({ theme })=> theme.colors.main};

  justify-content: center;
  align-items: center;

  position: absolute;
  bottom:  ${RFValue(10)}px;
  right: ${RFValue(10)}px;
`;

export const Content = styled.View`

  padding: 0  ${RFValue(24)}px;
  margin-top:  ${RFValue(50)}px;
`;

export const Options = styled.View`
  border-bottom-width:  ${RFValue(1)}px;
  border-bottom-color: ${({ theme }) => theme.colors.line};
  flex-direction: row;
  justify-content: space-around;

  margin-bottom:  ${RFValue(24)}px;
`;

export const Option = styled.TouchableOpacity<OptionProps>`
  padding-bottom:  ${RFValue(14)}px;
  ${({ active })=> active && css`
    border-bottom-width:  ${RFValue(3)}px;
    border-bottom-color: ${({ theme })=> theme.colors.main};
    
  `}
`;

export const OptionTitle = styled.Text<OptionProps>`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme, active })=> 
  active ? theme.fonts.secondary_600 : theme.fonts.secondary_500};
  color: ${({ theme, active })=> 
  active ? theme.colors.header : theme.colors.text_detail};
`;

export const Section = styled.View``;