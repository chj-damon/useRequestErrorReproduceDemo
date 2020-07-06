import React from 'react';
import { useRequest } from 'umi';
import { message, Button } from 'antd';
import { fakeSubmit } from './service';

export default () => {

  const { run } = useRequest(fakeSubmit, {
    manual: true,
    onSuccess: () => {
      message.success('aaaaa');
    },
  })

  return (
    <div>
      <h1>Page index</h1>
      <Button onClick={() => run()}>提交</Button>
    </div>
  );
}
