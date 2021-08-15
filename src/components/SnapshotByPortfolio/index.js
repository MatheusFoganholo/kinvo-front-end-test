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
            <Value title="Saldo Bruto">
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
            <Value title="Valor Aplicado">
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
            <Value title="Resultado">
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
            <Value title="Rentabilidade">
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
            <Value title="% Sobre CDI">
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
