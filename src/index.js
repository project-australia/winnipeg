import React from 'react'
import ReactDOM from 'react-dom'
import './stylesheets/index.css'
import { Provider } from 'react-redux'
import { App } from './modules/App'
import { setUpConfigs } from './config'
import { createStore } from './config/redux'
import registerServiceWorker from './config/registerServiceWorker'

setUpConfigs()

const element = (
  <Provider store={createStore()}>
    <App />
  </Provider>
)

ReactDOM.render(element, document.getElementById('root'))
registerServiceWorker()
