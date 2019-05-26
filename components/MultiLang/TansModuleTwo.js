import React from 'react';
import { Trans, withNamespaces } from '@config/i18n';
import { transModuleTwo } from './style';

// 使用i18next 提供的Trans组件
function TransModuleTwo(props) {
  const { t } = props;
  const count = 1;
  const name = 'JOOX MUSIC APP';
  return (
    <>
      <p>
        <Trans i18nKey="userMessagesUnread" count={count}>
          Hello <strong title={t('下载JOOX')}>{{ name }}</strong>, you have{' '}
          {{ count }} unread message.
        </Trans>
      </p>
      <style jsx>{transModuleTwo}</style>
    </>
  );
}

export default withNamespaces('multilang')(TransModuleTwo);
