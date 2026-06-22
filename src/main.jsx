import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './redux/main'
import App from './App'
import './index.css'

const store = createStore(reducer)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
