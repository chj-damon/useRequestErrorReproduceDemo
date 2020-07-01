import React from 'react';
import { useRequest, UseRequestProvider } from 'umi';
import { message, Button } from 'antd';
import { fakeSubmit } from './service';
import styles from './index.less';

export default () => {
  const { run } = useRequest(fakeSubmit, {
    manual: true,
    onSuccess: () => {
      message.success('aaaaa');
    },
  })

  return (
    <UseRequestProvider value={{
      /** 全局请求的默认配置 */
      onError: (error: Error) => {
        console.error(error);
        if (error) {
          const errorJSON = JSON.parse(error.message);
          message.error(errorJSON.message);
        }
      },
    }}>
      <h1 className={styles.title}>Page index</h1>
      <Button onClick={() => run()}>提交</Button>
    </UseRequestProvider>
  );
}
