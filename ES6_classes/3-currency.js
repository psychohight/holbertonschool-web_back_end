export default class Currency {
    constructor(code, name) {
      this._code = this._validateString(code, 'Code');
      this._name = this._validateString(name, 'Name');
    }
  
    _validateString(value, attributeName) {
      if (typeof value !== 'string') {
        throw new TypeError(`${attributeName} must be a string`);
      }
      return value;
    }
  
    get code() {
      return this._code;
    }
  
    set code(value) {
      this._code = this._validateString(value, 'Code');
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      this._name = this._validateString(value, 'Name');
    }
  
    displayFullCurrency() {
      return `${this._name} (${this._code})`;
    }
  }
  