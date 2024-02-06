/* eslint no-undef: "off" */
import assert from 'node:assert'
import { FirestoreDBContextStore } from '../index.js'

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
