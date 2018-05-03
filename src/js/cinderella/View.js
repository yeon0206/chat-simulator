import domify from 'domify';
import _ from 'lodash';

var elementId = 0;

function View ({ template, model, element }) {
  this.template = _.template(template);
  this.context = model;
  this.element = element;
  this.elementId = null;
}

View.prototype.render = function () {
  if (this.elementId === null) {
    this.elementId = elementId;
    elementId++;
  } else {
    this.element.innerHTML = '';
  }

  this.element.appendChild(domify(this.template(this.context)));

  return this.element;
};

View.prototype.asyncRender = function () {
  if (this.elementId === null) {
    this.elementId = elementId;
    elementId++;
  } else {
    this.element.innerHTML = '';
  }

  var self = this;
  var data = this.context.data;

  for (var ele in data) {
    setTimeout(
      foo.bind(this, data[ele])
      , data[ele].delta);
  }

  function foo(ele) {
    this.element.appendChild(domify(this.template(ele)))
  }

  return this.element;
};

export default View;
