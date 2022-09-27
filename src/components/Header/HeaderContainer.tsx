import React from 'react';
import * as S from './styled';
import { Content } from '@/components/Content';

export const HeaderContainer: React.FC = () => {
  return (
    <S.HeaderWrapper>
      <S.Title>simple - alarm</S.Title>
      <Content />
    </S.HeaderWrapper>
  );
};
