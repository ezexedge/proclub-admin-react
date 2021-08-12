import PropTypes from 'prop-types';

const BaseLayout = ({ children }) => {
  return <>{children}</>;
};

BaseLayout.propTypes = {
  children: PropTypes.node
};

export default BaseLayout;
