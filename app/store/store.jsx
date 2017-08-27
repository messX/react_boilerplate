var redux = require('redux')
var MainReducer = require('MainReducer')

var Store = redux.createStore(MainReducer)
module.exports =  Store;
