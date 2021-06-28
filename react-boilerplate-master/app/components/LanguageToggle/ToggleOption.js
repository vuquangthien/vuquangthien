import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import styled from 'styled-components';

const Option = styled.option`
  background: #3f51b5;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const ToggleOption = ({ value, message, intl }) => (
  <Option value={value}>{message ? intl.formatMessage(message) : value}</Option>
);

ToggleOption.propTypes = {
  value: PropTypes.string.isRequired,
  message: PropTypes.object,
  intl: intlShape.isRequired,
};

export default injectIntl(ToggleOption);
