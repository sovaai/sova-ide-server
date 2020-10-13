import { List, fromJS } from 'immutable'

const usersJS = [
  { id: 0, data: { username: 'a', password: 'a', role: 'admin' } },
  { id: 1, data: { username: 'b', password: 'b', role: 'notadmin' } },
]
const users: any = List(fromJS(usersJS))

export default users
