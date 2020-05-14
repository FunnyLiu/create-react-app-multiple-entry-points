import * as React from "react";
// import notify from '../../../../lib/component-notify/src/notify/ui.js'

interface Props {
  name: string;
}

const Com: React.FunctionComponent<Props> = (props: Props) => {
  const click = () => {
    // (window as any).Notify.success("成功");
    alert('成功');
    // notify.success("成功");
  };
  const { name } = props;
  return <div onClick={() => click()}>Hello {name}</div>;
};
export default Com;
