import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { ReactComponent as Info } from '../../assets/info.svg';
import { ReactComponent as ArrowPage } from '../../assets/arrow-page.svg';
import { Wrapper, Item, Result, Navigation } from './styles';

export const MyFixedIncome = ({ data, limit, search, type }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const renderProducts = () => {
    let products;
    if (search !== '') {
      products = data.filter((product) =>
        product.fixedIncome.name.toLowerCase().includes(search.toLowerCase()),
      );

      if (type !== 'OrdenarPor') {
        products.sort((a, b) =>
          a[type.split('.')[0]][type.split('.')[1]] >
          b[type.split('.')[0]][type.split('.')[1]]
            ? 1
            : -1,
        );
      }
    } else {
      products = data;

      if (type !== 'OrdenarPor') {
        products = data.sort((a, b) =>
          a[type.split('.')[0]][type.split('.')[1]] >
          b[type.split('.')[0]][type.split('.')[1]]
            ? 1
            : -1,
        );
      }
    }

    return products
      .slice(
        currentPage === 0 ? 0 : currentPage * limit,
        currentPage === 0 ? limit : (currentPage + 1) * limit,
      )
      .map(
        ({
          due: { date, daysUntilExpiration },
          fixedIncome: { bondType, name },
          position: {
            equity,
            valueApplied,
            profitability,
            portfolioPercentage,
            indexerLabel,
            indexerValue,
            percentageOverIndexer,
          },
        }) => (
          <Item key={name}>
            <div>
              <h2>
                Título <Info />
              </h2>
              <section>
                <h2>{name}</h2>
                <Result color="#8A51BA" text="Classe">
                  {bondType}
                </Result>
              </section>
            </div>
            <div>
              <h2>
                Minha Posição <Info />
              </h2>
              <section>
                <Result color="#38BFA0" text="Valor Inves.">
                  {valueApplied.toLocaleString('pt-br')}
                </Result>
                <Result color="#38BFA0" text="Saldo Bruto">
                  {equity.toLocaleString('pt-br')}
                </Result>
                <Result color="#38BFA0" text="Rent.">
                  {profitability.toLocaleString('pt-br')}%
                </Result>
                <Result color="#38BFA0" text="% da Cart.">
                  {portfolioPercentage.toLocaleString('pt-br')}%
                </Result>
                <Result color="#38BFA0" text={indexerLabel}>
                  {indexerValue.toLocaleString('pt-br')}
                </Result>
                <Result color="#38BFA0" text={`Sobre ${indexerLabel}`}>
                  {percentageOverIndexer.toLocaleString('pt-br')}%
                </Result>
              </section>
            </div>
            <div>
              <h2>
                Vencimento <Info />
              </h2>
              <section>
                <Result color="#008DCB" text="Data Venc.">
                  {date}
                </Result>
                <Result color="#008DCB" text="Dias até Venc.">
                  {daysUntilExpiration}
                </Result>
              </section>
            </div>
          </Item>
        ),
      );
  };

  return (
    <Wrapper>
      {data
        ? renderProducts()
        : Array.from(Array(limit), (e, i) => (
            <Item key={i}>
              <div>
                <h2>
                  <Skeleton width={100} />
                </h2>
                <section>
                  <h2>
                    <Skeleton width={180} count={2} />
                  </h2>
                  <Skeleton width={80} height={25} />
                </section>
              </div>
              <div>
                <h2>
                  <Skeleton width={100} />
                </h2>
                <section>
                  <Skeleton width={80} height={25} />
                  <Skeleton width={80} height={25} />
                  <Skeleton width={80} height={25} />
                  <Skeleton width={80} height={25} />
                  <Skeleton width={80} height={25} />
                  <Skeleton width={80} height={25} />
                </section>
              </div>
              <div>
                <h2>
                  <Skeleton width={100} />
                </h2>
                <section>
                  <Skeleton width={80} height={25} />
                  <Skeleton
                    width={80}
                    height={25}
                    style={{ marginLeft: '20px' }}
                  />
                </section>
              </div>
            </Item>
          ))}
      {data && data.length > 5 && (
        <Navigation>
          {currentPage !== 0 && (
            <button
              type="button"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 0}
              className="left"
            >
              <ArrowPage />
            </button>
          )}
          {Array.from(Array(Math.ceil(data.length / limit)), (e, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentPage(i)}
              disabled={currentPage === i && 'active'}
              className={currentPage === i ? 'active' : ''}
            >
              {i + 1}
            </button>
          ))}
          {currentPage !== Math.ceil(data.length / limit - 1) && (
            <button
              type="button"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === Math.ceil(data.length / limit - 1)}
              className="right"
            >
              <ArrowPage />
            </button>
          )}
        </Navigation>
      )}
      {!data && (
        <Navigation>
          <Skeleton width={35} height={35} />
          <Skeleton width={35} height={35} />
          <Skeleton width={35} height={35} />
        </Navigation>
      )}
    </Wrapper>
  );
};

MyFixedIncome.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      due: PropTypes.shape({
        date: PropTypes.string,
        daysUntilExpiration: PropTypes.number,
      }),
      fixedIncome: PropTypes.shape({
        bondType: PropTypes.string,
        name: PropTypes.string,
        portfolioProductId: PropTypes.number,
      }),
      hasBalance: PropTypes.number,
      position: PropTypes.shape({
        equity: PropTypes.number,
        indexerLabel: PropTypes.string,
        indexerValue: PropTypes.number,
        percentageOverIndexer: PropTypes.number,
        portfolioPercentage: PropTypes.number,
        profitability: PropTypes.number,
        valueApplied: PropTypes.number,
      }),
      productHasQuotation: PropTypes.number,
    }),
  ).isRequired,
  type: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  limit: PropTypes.number,
};

MyFixedIncome.defaultProps = {
  limit: 5,
};
