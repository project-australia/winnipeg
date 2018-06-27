import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { App } from './App'
import { setUpConfigs } from './config'
import { createStore } from './config/redux'
import registerServiceWorker from './registerServiceWorker'

setUpConfigs()

const element = (
  <Provider store={createStore()}>
    <App />
  </Provider>
)

ReactDOM.render(element, document.getElementById('root'))
registerServiceWorker()
