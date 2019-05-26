import React from 'react';
import { Trans, withNamespaces } from '@config/i18n';
import { STitle } from './style.js';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <STitle>
          <Trans i18nKey="测试" />
        </STitle>
      </div>
    );
  }
}

export default withNamespaces('common')(Footer);
