import DotEnv from 'dotenv'
import { initializePaypalSDK } from './paypal'
import { initializeFirebase } from './firebase'
import { initializeAxios } from './axios'

export const setUpConfigs = () => {
  DotEnv.config()
  initializePaypalSDK()
  initializeFirebase()
  initializeAxios()
}
