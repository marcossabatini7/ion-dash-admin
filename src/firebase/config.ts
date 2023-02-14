import { Analytics, getAnalytics } from 'firebase/analytics'
import { FirebaseApp, getApp, getApps, initializeApp } from 'firebase/app'

let app!: FirebaseApp
let analytics!: Analytics

try {
  if (!getApps()?.length) {
    const firebaseConfig = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID
    }

    app = initializeApp(firebaseConfig)
  } else {
    app = getApp()
  }
  analytics = getAnalytics(app)
} catch (error) {
  console.error('Erro ao inicializar o Firebase')
}

export const firebase = { firebaseApp: app, firebaseAnalytics: analytics }
