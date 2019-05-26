import React from 'react';
import PropTypes from 'prop-types';

import { i18n, Link, withNamespaces } from '@config/i18n';
import { getBaseUrl } from '@utils/getL5';
import { fetchByGet } from '@utils/request';

import MultiLang from '@components/MultiLang/index';

function HomePage(props) {
  return (
    <>
      <MultiLang />
    </>
  );
}

HomePage.getInitialProps = async function(ctx) {
  const baseUrl = await getBaseUrl('NODE_API_URL', 'new_common_cgi');
  console.log(baseUrl);

  const data = await fetchByGet(baseUrl, { id: 1 });

  return {
    namespacesRequired: ['multilang', 'common'],
  };
};

export default withNamespaces('multilang')(HomePage);
