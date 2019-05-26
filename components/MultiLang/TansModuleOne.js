import React from 'react';
import { withNamespaces } from '@config/i18n';
import { transModuleOne } from './style';

// 普通的t函数方式
function TransModuleOne(props) {
  const { t } = props;
  return (
    <>
      <p>{t('打开JOOX')}</p>
      <p>{t('打开 {{name}}', { name: 'JOOX MUSIC APP' })}</p>
      <p>{t('打开', '没找到词条， 默认使用我')}</p>
      <p>{t('打开 {{name}}', { name: '<img />' })}</p>
      <style jsx>{transModuleOne}</style>
    </>
  );
}

export default withNamespaces('multilang')(TransModuleOne);
