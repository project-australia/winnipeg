import { createBrowserHistory } from 'history'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { setUpConfigs } from './config'
import { createStore } from './config/redux'
import registerServiceWorker from './config/registerServiceWorker'
import { App } from './modules/App'
import './stylesheets/index.css'

setUpConfigs()

const element = (
  <Provider store={createStore()}>
    <Router history={createBrowserHistory({})}>
      <App />
    </Router>
  </Provider>
)

ReactDOM.render(element, document.getElementById('root'))
registerServiceWorker()
