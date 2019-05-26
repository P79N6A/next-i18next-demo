import React from 'react';
import { Trans, withNamespaces } from '@config/i18n';
import { style } from './style';
import TansModuleOne from './TansModuleOne';
import TansModuleTwo from './TansModuleTwo';

function MultiLang(props) {
  const { t } = props;

  return (
    <>
      <h1>{t('title')}</h1>
      <TansModuleOne />
      <TansModuleTwo />
      <style jsx>{`
        h1 {
          color: red;
          text-aglin: center;
        }
      `}</style>
    </>
  );
}

export default withNamespaces('multilang')(MultiLang);
