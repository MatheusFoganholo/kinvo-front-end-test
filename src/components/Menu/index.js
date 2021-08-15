import React, { Fragment, useState } from 'react';
import { ReactComponent as WalletSummary } from '../../assets/wallet-summary.svg';
import { ReactComponent as MyProducts } from '../../assets/my-products.svg';
import { ReactComponent as MyEarnings } from '../../assets/my-earnings.svg';
import { ReactComponent as AssetClass } from '../../assets/asset-class.svg';
import { ReactComponent as RealRentability } from '../../assets/real-rentability.svg';
import { ReactComponent as WalletProjection } from '../../assets/wallet-projection.svg';
import { ReactComponent as RiskXReturn } from '../../assets/risk-x-return.svg';
import { ReactComponent as FGCCoverage } from '../../assets/fgc-coverage.svg';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import { Wrapper, NavItem, SubItem } from './styles';

export const Menu = () => {
  const [isOpened, setIsOpened] = useState(true);

  const menuItems = [
    {
      title: (
        <span>
          Wallet
          <br />
          Summary
        </span>
      ),
      icon: <WalletSummary />,
      path: '/wallet-summary',
    },
    {
      title: (
        <span>
          My
          <br />
          Products
        </span>
      ),
      icon: <MyProducts />,
      path: '/my-products',
    },
    {
      title: (
        <span>
          My
          <br />
          Earnings
        </span>
      ),
      icon: <MyEarnings />,
      path: '/my-earnings',
    },
    {
      title: (
        <span>
          Asset
          <br />
          Class
        </span>
      ),
      icon: <AssetClass />,
      path: '/',
      subMenu: [
        { title: 'Actions', active: false },
        { title: 'Fund', active: false },
        { title: 'Real State Fund', active: false },
        { title: 'Fixed Income Fund', active: true },
      ],
    },
    {
      title: (
        <span>
          Real
          <br />
          Rentability
        </span>
      ),
      icon: <RealRentability />,
      path: '/real-rentability',
    },
    {
      title: (
        <span>
          Wallet
          <br />
          Projection
        </span>
      ),
      icon: <WalletProjection />,
      path: '/wallet-projection',
    },
    {
      title: (
        <span>
          Risk
          <br />x Return
        </span>
      ),
      icon: <RiskXReturn />,
      path: '/risk-and-return',
    },
    {
      title: (
        <span>
          FGC
          <br />
          Coverage
        </span>
      ),
      icon: <FGCCoverage />,
      path: '/fgc-coverage',
    },
  ];

  return (
    <Wrapper>
      {menuItems.map(({ title, icon, path, subMenu }) => (
        <Fragment key={path}>
          <NavItem
            active={window.location.pathname === path}
            onClick={() => subMenu && setIsOpened(!isOpened)}
            className={subMenu && isOpened && 'active'}
          >
            <div>{icon}</div>
            <h1>{title}</h1>
            <span
              style={{
                transform: subMenu && isOpened && 'rotate(-90deg)',
                transition: '0.2s',
              }}
            >
              <Arrow />
            </span>
          </NavItem>
          {subMenu && (
            <ul style={{ margin: 0, padding: 0 }}>
              {subMenu.map(({ title: subMenuTitle, active }) => (
                <Fragment key={subMenuTitle}>
                  {isOpened && (
                    <SubItem className={active && 'active'}>
                      {subMenuTitle}
                      <Arrow />
                    </SubItem>
                  )}
                </Fragment>
              ))}
            </ul>
          )}
        </Fragment>
      ))}
    </Wrapper>
  );
};
