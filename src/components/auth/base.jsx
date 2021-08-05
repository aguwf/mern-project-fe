import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyB8sS29g_oA6cl8I_BDb_dPFfjjBEvRmm4',
  authDomain: 'memory-mern-c6879.firebaseapp.com',
  projectId: 'memory-mern-c6879',
  storageBucket: 'memory-mern-c6879.appspot.com',
  messagingSenderId: '966285494134',
  appId: '1:966285494134:web:db36affe06e4928d359c57',
  measurementId: 'G-SYKT0C4PFC'
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }
export default base
