"use strict";
class OutPutMessage {
    constructor(code, msg, payload = {}) {
      this.code = code;
      this.msg = msg;
      this.payload = payload;
    }
  }
  
  module.exports = { OutPutMessage };