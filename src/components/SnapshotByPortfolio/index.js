import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { Wrapper, Value } from './styles';

export const SnapshotByPortfolio = ({ data }) => {
  return (
    <Wrapper>
      <div>
        {data ? (
          <>
            <span />
            <Value title="Gross Balance">
              R$ {data.equity.toLocaleString('pt-br')}
            </Value>
          </>
        ) : (
          <Skeleton
            width={100}
            height={12}
            count={2}
            style={{ marginLeft: '10px', marginTop: '2px' }}
          />
        )}
      </div>
      <div>
        {data ? (
          <>
            <span />
            <Value title="Value Applied">
              R$ {data.valueApplied.toLocaleString('pt-br')}
            </Value>
          </>
        ) : (
          <Skeleton
            width={100}
            height={12}
            count={2}
            style={{ marginLeft: '10px', marginTop: '2px' }}
          />
        )}
      </div>
      <div>
        {data ? (
          <>
            <span />
            <Value title="Result">
              R$ {data.equityProfit.toLocaleString('pt-br')}
            </Value>
          </>
        ) : (
          <Skeleton
            width={100}
            height={12}
            count={2}
            style={{ marginLeft: '10px', marginTop: '2px' }}
          />
        )}
      </div>
      <div>
        {data ? (
          <>
            <span />
            <Value title="Rentability">
              {data.percentageProfit.toLocaleString('pt-br')}%
            </Value>
          </>
        ) : (
          <Skeleton
            width={100}
            height={12}
            count={2}
            style={{ marginLeft: '10px', marginTop: '2px' }}
          />
        )}
      </div>
      <div>
        {data ? (
          <>
            <span />
            <Value title="CDI">
              {data.indexerValue.toLocaleString('pt-br')}%
            </Value>
          </>
        ) : (
          <Skeleton
            width={100}
            height={12}
            count={2}
            style={{ marginLeft: '10px', marginTop: '2px' }}
          />
        )}
      </div>
      <div>
        {data ? (
          <>
            <span />
            <Value title="% Over CDI">
              {data.percentageOverIndexer.toLocaleString('pt-br')}%
            </Value>
          </>
        ) : (
          <Skeleton
            width={100}
            height={12}
            count={2}
            style={{ marginLeft: '10px', marginTop: '2px' }}
          />
        )}
      </div>
    </Wrapper>
  );
};

SnapshotByPortfolio.propTypes = {
  data: PropTypes.shape({
    equity: PropTypes.number,
    equityProfit: PropTypes.number,
    indexerValue: PropTypes.number,
    percentageOverIndexer: PropTypes.number,
    percentageProfit: PropTypes.number,
    valueApplied: PropTypes.number,
  }).isRequired,
};
