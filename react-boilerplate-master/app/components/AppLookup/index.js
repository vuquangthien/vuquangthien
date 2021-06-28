import React from 'react';
import { PropTypes } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Box, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import CustomTable from 'components/CustomTable';

function AppLookup({ messages }) {
  return (
    <Box mx={4}>
      <p className="mb-1 mt-3">
        <FormattedMessage {...messages.searchInformation} />
      </p>
      <Box p={3} className="border d-flex align-items-center">
        <Box mx={3} className="d-inline">
          <FormControl variant="outlined">
            <InputLabel htmlFor="my-input1">
              <FormattedMessage {...messages.applicationCode} />
            </InputLabel>
            <Input id="my-input1" aria-describedby="my-helper-text" />
          </FormControl>
        </Box>

        <Box mx={3} className="d-inline">
          <FormControl variant="outlined">
            <InputLabel htmlFor="my-input2">
              <FormattedMessage {...messages.applicationName} />
            </InputLabel>
            <Input id="my-input2" aria-describedby="my-helper-text" />
          </FormControl>
        </Box>

        <Box mx={3} className="d-inline">
          <FormControl variant="outlined">
            <InputLabel htmlFor="my-input3">
              <FormattedMessage {...messages.status} />
            </InputLabel>
            <Input id="my-input3" aria-describedby="my-helper-text" />
          </FormControl>
        </Box>

        <Box mx={3} className="d-inline">
          <Button variant="contained" color="primary">
            <SearchIcon />
          </Button>
        </Box>
      </Box>
      <CustomTable />
    </Box>
  );
}

AppLookup.propTypes = {
  messages: PropTypes.object,
};

export default AppLookup;
