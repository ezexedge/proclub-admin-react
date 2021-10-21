import PropTypes from 'prop-types';
import { experimentalStyled } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import Sidebar from './Sidebar';
import Header from './Header';

const MainWrapper = experimentalStyled(Box)(
  () => `
        flex: 1 1 auto;
        display: flex;
        height: 100%;
`
);

const MainContent = experimentalStyled(Box)(
  () => `
        margin-top: 74px;
        flex: 1 1 auto;
        overflow: auto;
`
);

const AccentHeaderLayout = ({ children }) => {
  return (
    <>
      <Header />
      <MainWrapper>
        <Sidebar />
        <MainContent>{children}</MainContent>
      </MainWrapper>
    </>
  );
};

AccentHeaderLayout.propTypes = {
  children: PropTypes.node
};

export default AccentHeaderLayout;
