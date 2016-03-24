'use strict'

const rollpoll = require('../lib/rollpoll')
const Spinner = require('cli-spinner').Spinner
const SPINNER_TYPE_LINES = 1

let url = process.argv[2]

let spinner = new Spinner(`Polling ${url} %s`)
spinner.setSpinnerString(SPINNER_TYPE_LINES)
spinner.start()
rollpoll(url).then(() => {
  spinner.stop(true)
  console.log('✔ Host replied')
}, e => {
  spinner.stop(true)
  console.log('✗ ' + e.message)
  process.exit(1)
})
