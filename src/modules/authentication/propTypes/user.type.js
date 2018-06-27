import { instanceOf } from 'prop-types'
import { User } from '../../../domain/User'

export const UserPropTypes = instanceOf(User)
