import { connect } from 'react-redux'
import { branch, renderComponent, compose, lifecycle } from 'recompose'
import { getProfileAndUpdateUserAction } from '../../../redux/actions/async'
import { userSelector } from '../../../redux/selectors/authenticationSelectors'
import { onAuthStateChanged } from '../../../services/firebase/authentication'
import { SignInContainer } from '../../authentication/containers/signInContainer'

const isUnauthorized = props => props.user === null

const renderSignInsteadOfComponentIfUserIsNotAuth = branch(
  isUnauthorized,
  renderComponent(SignInContainer)
)

const injectAuthStateListener = lifecycle({
  state: { unsubscriber: null },
  componentDidMount () {
    const unsubscriber = onAuthStateChanged((user) => { this.props.updateUser(user.uid) })
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
  updateUser: getProfileAndUpdateUserAction
})

export const withAuthentication = compose(
  connect(mapStateToProps, mapDispatchToProps),
  injectAuthStateListener,
  renderSignInsteadOfComponentIfUserIsNotAuth
)
