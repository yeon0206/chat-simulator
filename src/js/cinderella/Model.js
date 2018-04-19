import _ from 'lodash';

function Model (options) {
  this.data = options.data;

  _.extend(this, _.omit(options, 'data'));
}

Model.prototype.find = function (predicate) {
  return _.find(this.data, predicate);
};

Model.prototype.filter = function (predicate) {
  return _.filter(this.data, predicate)
};

export default Model;
