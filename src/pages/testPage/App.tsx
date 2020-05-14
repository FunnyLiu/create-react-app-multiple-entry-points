import * as React from 'react';
import Com from './components/Com';

interface Props {
   name: string
}

class App extends React.Component<Props> {
  render() {

    const { name } = this.props;
    return <Com name={name} />
  }
}

export default App;