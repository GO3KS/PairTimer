import _ from 'lodash'
export const isFilled = (username, password) => {
	if (_.isEmpty(username)) {
		return false
	}
	if (_.isEmpty(password)) {
		return false
	}
	return true
}
