import React from 'react';

import styled, { CSSProperties } from 'styled-components';

import LogoBlack from '../../../assets/logo.png';
import LogoWhite from '../../../assets/logo-white.png';

export enum LogoEnum {
  LETTERMARK_WHITE = 'LETTERMARK_WHITE',
  LETTERMARK_BLACK = 'LETTERMARK_BLACK'
}

type Props = {
  name: LogoEnum;
  className?: string;
};

const Image = styled.img`
  display: inline-block;
`;

/**
 * React Component that shows the image Logo variations
 */
const Logo = ({ name, className }: Props) => {
  return name === LogoEnum.LETTERMARK_BLACK ? (
    <Image className={className} src={LogoBlack} />
  ) : (
    <Image className={className} src={LogoWhite} />
  );
};

export default Logo;
