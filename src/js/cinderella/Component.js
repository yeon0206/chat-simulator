import View from './View';

function Component (template) {
  var view = null;

  var component = {
    create : function (data) {
      view = new View({
        template,
        model: data.model,
        element: data.element
      })

      return this;
    },

    render : function () {
      return view.render();
    },

    asyncRender : function () {
      return view.asyncRender();
    }
  }

  return component;
}

export default Component;