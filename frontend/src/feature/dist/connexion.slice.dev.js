"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setConnexion = exports.ConnexionSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var ConnexionSlice = (0, _toolkit.createSlice)({
  name: 'connexion',
  initialState: {
    connexionStatus: {
      status: false
    }
  },
  reducers: {
    setConnexion: function setConnexion(state, action) {
      state.connexionStatus = action.payload;
    }
  }
});
exports.ConnexionSlice = ConnexionSlice;
var setConnexion = ConnexionSlice.actions.setConnexion;
exports.setConnexion = setConnexion;
var _default = ConnexionSlice.reducer;
exports["default"] = _default;