import React from 'react';
import { UseRequestProvider } from 'umi';
import { message } from 'antd';
import Demo from './Demo';

export default () => {
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
      <Demo />
    </UseRequestProvider>
  );
}
