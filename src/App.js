import { AppRouter } from './components/AppRouter';
import { Provider } from 'react-redux';

import store from './store';
import "./style/style.css"
function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
