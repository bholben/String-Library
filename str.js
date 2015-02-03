
// A String Library.  It might be nice to add all these functions to
// the String prototype, but for now they are defined as properties
// under the str object.

var str = {};

(function () {

  // Return true if value is a string, false otherwise.
  str.isString = function (value) {
    return String(value) === value;
  };


  // Add .contains method to the String prototype.
  // Return true if the character is in the string, false otherwise.
  String.prototype.contains = function (char) {
    return this.indexOf(char) !== -1;
  };


  // Return true if all characters in the val string are members
  // of the stringType string, false otherwise.
  isMember = function (stringType, val) {
    var len = (val !== null && val !== undefined) ? val.length : 0;
    if (str.isString(val) && len > 0) {
      for (var i = 0; i < len; i++) {
        if (!stringType.contains(val[i])) { return false; }
      }
    } else { return false; }
    return true;
  };


  // Return true if all cased characters in the string are lowercase
  // and there is at least one cased character, false otherwise.
  str.isLower = function (val) {
    return isMember('abcdefghijklmnopqrstuvwxyz', val);
  };


  // Return true if all cased characters in the string are uppercase
  // and there is at least one cased character, false otherwise.
  str.isUpper = function (val) {
    return isMember('ABCDEFGHIJKLMNOPQRSTUVWXYZ', val);
  };


  // Return true if all characters in the string are digits
  // and there is at least one character, false otherwise.
  str.isDigit = function (val) {
    return isMember('0123456789', val);
  };


  // Return true if there are only whitespace characters in the string
  // and there is at least one character, false otherwise.
  str.isSpace = function (val) {
    return isMember(' ', val);
  };


  // Return true if all characters in the string are alphabetic
  // and there is at least one character, false otherwise.
  str.isAlphaNum = function (val) {
    var len = (val !== null && val !== undefined) ? val.length : 0;
    if (str.isString(val) && len > 0) {
      for (var i = 0; i < len; i++) {
        if (!str.isLower(val[i]) && !str.isUpper(val[i]) && !str.isDigit(val[i])) {
          return false;
        }
      }
    } else { return false; }
    return true;
  };


  // Return true if the string is titlecased and there is at least one
  // character, false otherwise (e.g. first character in all words must
  // be uppercase and all other characters must be lower case).
  // Non-alphabetic characters are permitted in any position.
  str.isTitle = function (val) {
    var len = val.length;
    if (str.isString(val) && len > 0 && !str.isLower(val[0])) {
      for (var i = 0; i < len; i++) {
        if (str.isSpace(val[i]) && str.isLower(val[i+1])) {
          return false;
        }
      }
    } else { return false; }
    return true;
  };


  // Return true if the string is spinal-case and there are at least
  // three characters, false otherwise (e.g. no spaces and only lowercase
  // with hyphens separating words).  At least one hyphen is required.
  str.isSpinal = function (val) {
    var len = val.length;
    if (str.isString(val) &&        // Must be a string
        str.isLower(val[0]) &&      // First character must be lowercase
        str.isLower(val[len-1]) &&  // Last character must be lowercase
        val.contains('-')) {        // Must be at least one hyphen
      for (var i = 0; i < len; i++) {
        if (!str.isLower(val[i]) && !val[i].contains('-')) { return false; }
        if (val[i].contains('-') && !str.isLower(val[i+1])) { return false; }
      }
    } else { return false; }
    return true;
  };


  // Return true if the string is snake_case and there are at least
  // three characters, false otherwise (e.g. no spaces and only lowercase
  // with underscores separating words).  At least one underscore is required.
  str.isSnake = function (val) {
    var len = val.length;
    if (str.isString(val) &&        // Must be a string
        str.isLower(val[0]) &&      // First character must be lowercase
        str.isLower(val[len-1]) &&  // Last character must be lowercase
        val.contains('_')) {        // Must be at least one hyphen
      for (var i = 0; i < len; i++) {
        if (!str.isLower(val[i]) && !val[i].contains('_')) { return false; }
        if (val[i].contains('_') && !str.isLower(val[i+1])) { return false; }
      }
    } else { return false; }
    return true;
  };


}());

