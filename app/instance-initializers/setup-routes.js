import bootstrapRouting from 'torii/bootstrap/routing';
import { getConfiguration } from 'torii/configuration';
import "torii/router-dsl-ext";

export default {
  name: 'torii-setup-routes',
  initialize: function(applicationInstance, registry){
    const configuration = getConfiguration();

    if (!configuration.sessionServiceName) {
      return;
    }

    // backwards compat for Ember < 2.0
    var router = applicationInstance.get('router') || applicationInstance.lookup('router:main');
    var setupRoutes = function(){
      var _router = router._routerMicrolib || router.router;
      var authenticatedRoutes = _router.authenticatedRoutes;
      var hasAuthenticatedRoutes = !Ember.isEmpty(authenticatedRoutes);
      if (hasAuthenticatedRoutes) {
        bootstrapRouting(applicationInstance, authenticatedRoutes);
      }
      router.off('willTransition', setupRoutes);
    };
    router.on('willTransition', setupRoutes);
  }
};
