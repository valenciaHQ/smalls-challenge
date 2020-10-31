import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

export default ({ size, loading }) => (
  <ClipLoader size={size || 50} color="orange" loading={loading} />
);
