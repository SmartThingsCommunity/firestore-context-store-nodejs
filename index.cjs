const admin = require('firebase-admin')

module.exports = class FirestoreDBContextStore {
  constructor(serviceAccount, collectionName) {
    if (!serviceAccount) {
      throw new Error('Need a valid serviceAccount.json')
    }

    this.serviceAccount = serviceAccount
    this.collectionName = collectionName || 'installedApps'

    admin.initializeApp({
      credential: admin.credential.cert(this.serviceAccount),
    })
    this.db = admin.firestore()
    this.installedApps = this.db.collection(this.collectionName)
  }

  get(installedAppId) {
    return new Promise((resolve, reject) => {
      this.installedApps
        .doc(installedAppId)
        .get()
        .then(snapshot => {
          resolve(snapshot.data())
        })
        .catch(reject)
    })
  }

  put(parameters) {
    return new Promise((resolve, reject) => {
      this.installedApps
        .doc(parameters.installedAppId)
        .set(parameters, {merge: true})
        .then(resolve)
        .catch(reject)
    })
  }

  update(installedAppId, parameters) {
    return new Promise((resolve, reject) => {
      this.installedApps
        .doc(installedAppId)
        .update(parameters, {merge: true})
        .then(resolve)
        .catch(reject)
    })
  }

  delete(installedAppId) {
    return new Promise((resolve, reject) => {
      this.installedApps
        .doc(installedAppId)
        .delete()
        .then(resolve)
        .catch(reject)
    })
  }
}
