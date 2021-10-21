import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const ContentWrapper = ({ children, title = '' }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  );
};

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default ContentWrapper;
