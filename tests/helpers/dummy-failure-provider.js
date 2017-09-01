/**
 * This class emulates a failed authentication.
 */

import { reject } from 'rsvp';

import EmberObject from '@ember/object';

export default EmberObject.extend({

  open: function(){
    return reject("Dummy authentication failure");
  }

});
