'use strict'

const CONTINUE_ERRORS = [
  'ECONNREFUSED',
  'ETIMEDOUT',
  'ENOTFOUND'
]

const request = require('request-promise')
const wait = require('promise-wait')

function poll (url, options) {
  return request({
    url: url,
    timeout: 5e3
  }).catch(function (e) {
    if (CONTINUE_ERRORS.indexOf(e.error.code) !== -1) {
      return wait(1e3).then(() => poll(url, options))
    }

    return Promise.reject(e.error)
  })
}

module.exports = poll
