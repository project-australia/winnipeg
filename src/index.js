import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { setUpConfigs, history, createStore, registerServiceWorker } from './config'

import { App } from './modules/app'

setUpConfigs()

ReactDOM.render(
  <Provider store={createStore()}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
