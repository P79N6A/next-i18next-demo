import React from 'react';
import { Trans, withNamespaces } from '@config/i18n';
import style from './style.js';

class Title extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Trans i18nKey="测试" />
        </h1>
        <style>{style}</style>
      </div>
    );
  }
}

export default withNamespaces('common')(Title);
