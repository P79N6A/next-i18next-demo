import React from 'react';
import { Trans, withNamespaces } from '@config/i18n';
import css from './index.scss';

class Title extends React.Component {
  render() {
    return (
      <p className={css.desc}>
        <Trans i18nKey="测试" />
      </p>
    );
  }
}

export default withNamespaces('common')(Title);
