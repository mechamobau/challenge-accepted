import React from 'react';

import styled, { CSSProperties } from 'styled-components';

import SpriteImage from '../../../assets/sprite.png';

export enum IconNameEnum {
  ARROW_UP = 'ARROW_UP',
  ARROW_BOTTOM = 'ARROW_BOTTOM',
  UMBRELLA = 'UMBRELLA',
  DROP_WATER = 'DROP_WATER',
  MAGNIFYING_GLASS = 'MAGNIFYING_GLASS'
}

type Props = {
  name: IconNameEnum;
  width?: number;
  height?: number;
};

const IconContainer = styled.div`
  display: inline-block;
`;

const Image = styled.div`
  background-image: url(${SpriteImage});
  display: inline-block;
`;

const getCoordinates = (name: Props['name']): CSSProperties => {
  switch (name) {
    case IconNameEnum.ARROW_BOTTOM:
      return {
        height: `32px`,
        width: `30px`,
        backgroundPosition: `0px 0px`
      };
    case IconNameEnum.ARROW_UP:
      return {
        height: `32px`,
        width: `30px`,
        backgroundPosition: `-128px 0px`
      };
    case IconNameEnum.DROP_WATER:
      return {
        height: `32px`,
        width: `32px`,
        backgroundPosition: `-64px 0px`
      };
    case IconNameEnum.MAGNIFYING_GLASS:
      return {
        height: `32px`,
        width: `34px`,
        backgroundPosition: `-95px 0px`
      };
    case IconNameEnum.UMBRELLA:
      return {
        height: `32px`,
        width: `36px`,
        backgroundPosition: `-30px 0px`
      };
    default:
      throw new Error(`${name} is not a IconNameEnum`);
  }
};

const Icon = ({ name }: Props) => {
  return (
    <IconContainer>
      <Image style={getCoordinates(name)} />
    </IconContainer>
  );
};

export default Icon;
