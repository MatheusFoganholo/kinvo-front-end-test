import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataContextProvider } from './contexts/DataContext';
import { Content } from './components/Content';
import { ContentSection } from './components/ContentSection';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Menu } from './components/Menu';
import { MyFixedIncome } from './components/MyFixedIncome';
import { SearchInput } from './components/SearchInput';
import { SelectInput } from './components/SelectInput';
import { SnapshotByPortfolio } from './components/SnapshotByPortfolio';
import { GlobalStyle } from './styles/globalStyle';

const App = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState('OrdenarPor');
  const [search, setSearch] = useState('');
  const selectOptions = [
    { name: 'Valor Investido', value: 'position.valueApplied' },
    { name: 'Saldo Bruto', value: 'position.equity' },
    { name: 'Rentabilidade', value: 'position.profitability' },
    { name: '% da Carteira', value: 'position.portfolioPercentage' },
    { name: 'Indexer', value: 'position.indexerValue' },
    { name: '% Sobre Indexer', value: 'position.percentageOverIndexer' },
    { name: 'Data de expiração', value: 'due.daysUntilExpiration' },
  ];

  const { api_data: apiData, loaded, success } = useSelector(
    (state) => state.data,
  );

  useEffect(() => {
    dispatch({ type: '@data/GET_REQUEST' });
  }, []);

  console.log(loaded, apiData, success);

  return (
    <DataContextProvider>
      <GlobalStyle />
      <Header />
      <Main>
        <Menu />
        <Content title="Renda Fixa">
          <SnapshotByPortfolio />
          <ContentSection
            title="Minhas Rendas Fixas"
            filter={
              <div style={{ display: 'flex' }}>
                <SelectInput
                  options={selectOptions}
                  onChange={({ target: { value } }) => setType(value)}
                  defaultValue={type}
                />
                <SearchInput
                  value={search}
                  onChange={({ target: { value } }) => setSearch(value)}
                />
              </div>
            }
          >
            <MyFixedIncome type={type} search={search} />
          </ContentSection>
        </Content>
      </Main>
    </DataContextProvider>
  );
};

export default App;
