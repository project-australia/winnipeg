import history from './config/historyRouter'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { setUpConfigs } from './config'
import { createStore } from './config/redux'
import registerServiceWorker from './config/registerServiceWorker'
import { App } from './modules/app'
import './stylesheets/index.css'

setUpConfigs()

ReactDOM.render(
  <Provider store={createStore()}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
