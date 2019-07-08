import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions'

checkNpmVersions({
  'react': '16.8.6'
}, 'boomfly:react-meteor-hooks')

import useTracker from './hooks/useTracker'
import useSubscription from './hooks/useSubscription'
import useMethod from './hooks/useMethod'
import useCurrentUser from './hooks/useCurrentUser'
import useSession from './hooks/useSession'
import useMongoFetch from './hooks/useMongoFetch'

export {
  useTracker,
  useSubscription,
  useMethod,
  useCurrentUser,
  useSession,
  useMongoFetch,
}
