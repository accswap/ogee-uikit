import React from "react";
import styled from "styled-components";
import { OgeefinanceRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  ogeePriceUsd?: number;
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

const OgeePrice: React.FC<Props> = ({ ogeePriceUsd }) => {
  return ogeePriceUsd ? (
    <PriceLink href="https://info.ogee.finance/token/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82" target="_blank">
      <OgeefinanceRoundIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${ogeePriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(OgeePrice);
