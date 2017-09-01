/**
 * This class emulates a successful authentication, returning
 * a dummy authorization object.
 */

import { Promise as EmberPromise } from 'rsvp';

import EmberObject from '@ember/object';

export default EmberObject.extend({

  open: function(authorization){
    return EmberPromise.resolve(authorization);
  }

});
