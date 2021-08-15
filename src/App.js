import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataContextProvider } from './contexts/DataContext';
import {
  Content,
  ContentSection,
  Header,
  Main,
  Menu,
  MyFixedIncome,
  SearchInput,
  SelectInput,
  SnapshotByPortfolio,
} from './components';
import { GlobalStyle } from './styles';

const App = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState('OrderBy');
  const [search, setSearch] = useState('');
  const selectOptions = [
    { name: 'Value Applied', value: 'position.valueApplied' },
    { name: 'Gross Balance', value: 'position.equity' },
    { name: 'Rentability', value: 'position.profitability' },
    { name: '% of Wallet', value: 'position.portfolioPercentage' },
    { name: 'Indexer', value: 'position.indexerValue' },
    { name: '% Over Indexer', value: 'position.percentageOverIndexer' },
    { name: 'Expiration Date', value: 'due.daysUntilExpiration' },
  ];

  const { api_data: apiData } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch({ type: '@data/GET_REQUEST' });
  }, []);

  return (
    <DataContextProvider>
      <GlobalStyle />
      <Header data={apiData ? apiData.snapshotByPortfolio : {}} />
      <Main>
        <Menu />
        <Content title="Fixed Income">
          <SnapshotByPortfolio
            data={apiData ? apiData.snapshotByPortfolio : {}}
          />
          <ContentSection
            title="My Fixed Income"
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
            <MyFixedIncome
              data={apiData ? apiData.snapshotByProduct : [{}]}
              search={search}
              type={type}
            />
          </ContentSection>
        </Content>
      </Main>
    </DataContextProvider>
  );
};

export default App;
