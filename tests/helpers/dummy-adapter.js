import { resolve } from 'rsvp';
import EmberObject from '@ember/object';

var dummyUser = EmberObject.create({
  email: 'someUser@example.com'
});

export default EmberObject.extend({
  open: function(){
    return resolve({
      currentUser: dummyUser
    });
  },
  fetch: function(){
    return resolve({
      currentUser: dummyUser
    });
  }
});
