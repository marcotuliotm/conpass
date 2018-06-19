import React from 'react';
import PropTypes from 'prop-types';


function UserUploudHeader(props) {
  const { title } = props;
  return (
    <div className="row justify-content-center">
      <h1 className="display-4">{title}</h1>
    </div>
  );
}
UserUploudHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default UserUploudHeader;
