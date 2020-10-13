import { Map } from 'immutable'

const users = Map({
  '12345': 'dan',
})

const auth = ({ req }) => {
  const token = req.headers.authorization || ''
  const user = users.get(token)
  if (!user) console.log('You must be logged in')
  return { user }
}

export default auth
