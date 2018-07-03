import { connect } from 'react-redux'
import { branch, renderComponent, compose, lifecycle } from 'recompose'
import { getProfileAndUpdateUserAction } from '../../../redux/actions/async'
import { updateUserProfile } from '../../../redux/actions/sync/authenticationActions'
import { NOT_LOGGED_IN } from '../../../redux/reducers/authentication/constants'
import { userSelector } from '../../../redux/selectors/authenticationSelectors'
import { onAuthStateChanged } from '../../../services/firebase/authentication'
import { SignInContainer } from '../../authentication/containers/signInContainer'

const isUnauthorized = props => props.user === null || Object.is(props.user, NOT_LOGGED_IN)

const renderSignInsteadOfComponentIfUserIsNotAuth = branch(
  isUnauthorized,
  renderComponent(SignInContainer)
)

const injectAuthStateListener = lifecycle({
  state: { unsubscriber: null },
  componentDidMount () {
    const unsubscriber = onAuthStateChanged((user) => {
      if (user && user.uid !== this.props.user.id) {
        console.log('Firebase auth state has changed to logged in.', user.email)
        this.props.getProfileAndUpdate(user.uid)
      } else if (user === null) {
        this.props.updateUser(NOT_LOGGED_IN)
      }
    })
    this.setState({ unsubscriber })
  },
  componentWillUnmount () {
    if (this.state.unsubscriber) {
      this.state.unsubscriber()
    }
  }
})

const mapStateToProps = state => ({
  user: userSelector(state)
})

const mapDispatchToProps = ({
  getProfileAndUpdate: getProfileAndUpdateUserAction,
  updateUser: updateUserProfile
})

export const withAuthentication = compose(
  connect(mapStateToProps, mapDispatchToProps),
  injectAuthStateListener,
  renderSignInsteadOfComponentIfUserIsNotAuth
)
