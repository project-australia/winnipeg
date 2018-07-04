import { User } from '../../../domain/user'

export const NOT_LOGGED_IN = new User()

export const NO_ALERTS = { showAlert: false, message: '' }

export const AUTH_INITIAL_STATE = {
  user: NOT_LOGGED_IN,
  alert: NO_ALERTS
}
