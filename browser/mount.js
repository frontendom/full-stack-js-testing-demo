const hyperdom = require('hyperdom')
const router = require('hyperdom/router')
const App = require('./browserApp')

hyperdom.append(document.body, new App(), {router})
