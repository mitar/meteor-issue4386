if (Meteor.isClient) {
  var HelperFunctions = {
    templateInstance: function () {
      return '' + !!Template.instance();
    }
  };

  Template.mainTemplate.helpers({
    dataContext: {
      dataTemplateInstance: function () {
        return '' + !!Template.instance();
      }
    }
  });

  Template.hello.onCreated(function () {
    this.tmplTemplateInstance = function () {
      // Imagine that this is somewhere deep after multiple function calls.
      return '' + !!Template.instance();
    };
  });

  Template.hello.helpers({
    templateInstance: function () {
      return '' + !!Template.instance();
    },
    getTemplateInstance: function () {
      return Template.instance();
    },
    getHelperFunctions: function () {
      return HelperFunctions;
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
