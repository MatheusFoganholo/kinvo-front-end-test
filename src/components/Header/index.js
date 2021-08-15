import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { ReactComponent as Logo } from '../../assets/logo-xd.svg';
import { ReactComponent as GrossBalance } from '../../assets/gross-balance.svg';
import { ReactComponent as ValueApplied } from '../../assets/value-applied.svg';
import { ReactComponent as Rentability } from '../../assets/rentability-2.svg';
import { ReactComponent as Arrow } from '../../assets/arrow-2.svg';
import { ReactComponent as Menu } from '../../assets/menu.svg';
import { Wrapper, Info, Value } from './styles';

export const Header = ({ data }) => {
  return (
    <Wrapper>
      <div>
        <Logo />
      </div>
      <Info>
        <Value title="Gross Balance">
          <div>
            <GrossBalance />
          </div>
          <h2>
            {data && data.equity ? (
              data.equity.toLocaleString('pt-br')
            ) : (
              <Skeleton width={90} />
            )}
          </h2>
        </Value>
        <Value title="Value Applied">
          <div>
            <ValueApplied />
          </div>
          <h2>
            {data && data.valueApplied ? (
              data.valueApplied.toLocaleString('pt-br')
            ) : (
              <Skeleton width={90} />
            )}
          </h2>
        </Value>
        <Value title="Rentability">
          <div>
            <Rentability />
          </div>
          <h2>
            {data && data.percentageProfit ? (
              `${data.percentageProfit.toLocaleString('pt-br')}%`
            ) : (
              <Skeleton width={100} />
            )}
          </h2>
        </Value>
        <Value title="Wallet" color="#5D41AC" bold cursorPointer>
          <div>
            <Arrow />
          </div>
          <h2>My Wallet</h2>
        </Value>
        <Value color="#5D41AC" cursorPointer>
          <div>
            <Menu />
          </div>
        </Value>
      </Info>
    </Wrapper>
  );
};

Header.propTypes = {
  data: PropTypes.shape({
    equity: PropTypes.number,
    equityProfit: PropTypes.number,
    indexerValue: PropTypes.number,
    percentageOverIndexer: PropTypes.number,
    percentageProfit: PropTypes.number,
    valueApplied: PropTypes.number,
  }).isRequired,
};
