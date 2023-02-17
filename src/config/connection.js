import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: 'AIzaSyBS27CaddQ59oY_LiaN2xouPcxclLI-dL0',
    authDomain: 'pair-timer-99885.firebaseapp.com',
    projectId: 'pair-timer-99885',
    storageBucket: 'pair-timer-99885.appspot.com',
    messagingSenderId: '8931563334',
    appId: '1:8931563334:web:33a13745eded018904b747',
    databaseURL: 'https://pair-timer-99885-default-rtdb.firebaseio.com/',
}
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
