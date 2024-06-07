import assert from 'assert'
import { Account } from '../../exercises/d3e2.js'

describe('Day 3 Exercise 2', function () {
  let account

  this.beforeEach(function () {
    account = new Account('legolas', 'legolas@thefellowship.com', 'elf4life')
  })

  describe('Account', function () {
    it('should throw an error with code 400 if username is not provided', function () {
      assert.throws(
        () => account.updateUsername(null, 'elf4life'),
        err => err.code === 400,
        'Should have thrown an error with code 400'
      )
    })

    it('should throw an error with code 401 if no password is provided', function () {
      assert.throws(
        () => account.updateUsername('aragorn', null),
        err => err.code === 401,
        'Should have thrown an error with code 401'
      )
    })

    it('should throw an error with code 403 if password is provided but incorrect', function () {
      assert.throws(
        () => account.updateUsername('aragorn', 'wrongpassword'),
        err => err.code === 403,
        'Should have thrown an error with code 403'
      )
    })

    it('should update the username', function () {
      account.updateUsername('aragorn', 'elf4life')
      assert.strictEqual(account.username, 'aragorn')
    })
  })
})
