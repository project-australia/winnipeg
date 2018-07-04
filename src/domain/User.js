import _ from 'lodash'

export class User {
  constructor (
    id,
    referredBy,
    name,
    email,
    birthDate,
    telephone,
    school,
    referId,
    club,
    role,
    address,
    wallet,
    orders,
    network
  ) {
    this.id = id
    this.referredBy = referredBy
    this.name = _.capitalize(name)
    this.email = email
    this.birthDate = birthDate
    this.telephone = telephone
    this.school = school
    this.referId = referId
    this.club = club
    this.role = role
    this.address = address
    this.wallet = wallet
    this.orders = orders
    this.network = network
  }

  id
  referredBy
  name
  email
  birthDate
  telephone
  school
  referId
  club
  role
  address
  wallet
  orders
  network

  isLoggedIn() {
    return !!this.id
  }
}
