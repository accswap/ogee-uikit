import React from "react";
import styled from "styled-components";
import { OgeefinanceRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  oytPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const OytPrice: React.FC<Props> = ({ oytPriceUsd }) => {
  return oytPriceUsd ? (
    <PriceLink
      href="https://info.ogeeswap.com/token/0xf7e522999cA7F1306D4df1B5eFcCFAB6A1eD99d6"
      target="_blank"
    >
      <OgeefinanceRoundIcon width="20px" mr="4px" />
      <Text color="textSubtle" bold>{`$${oytPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(OytPrice);
