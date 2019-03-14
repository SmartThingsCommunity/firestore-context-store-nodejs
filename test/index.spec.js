/* eslint no-undef: "off" */
const assert = require('assert')
const FirestoreDBContextStore = require('..')

describe('index', () => {
  it('should reject invalid service account', () => {
    assert.throws(() => new FirestoreDBContextStore(),
      Error,
      'Need a valid serviceAccount.json')

    assert.throws(() => new FirestoreDBContextStore('installedapps'),
      Error,
      'Need a valid serviceAccount.json')

    assert.throws(() => new FirestoreDBContextStore(null, 'installedapps'),
      Error,
      'Need a valid serviceAccount.json')
  })
})
