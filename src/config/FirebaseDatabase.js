const { getFirestore } = require('firebase-admin/firestore')
class FirebaseDatabase {
	getFirestore = () => {
		return getFirestore()
	}
}

export default FirebaseDatabase
