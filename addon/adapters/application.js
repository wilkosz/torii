import { Promise as EmberPromise } from 'rsvp';
import EmberObject from '@ember/object';
var ApplicationAdapter = EmberObject.extend({

  open: function(){
    return new EmberPromise(function(){
      throw new Error(
        'The Torii adapter must implement `open` for a session to be opened');
    });
  },

  fetch: function(){
    return new EmberPromise(function(){
      throw new Error(
        'The Torii adapter must implement `fetch` for a session to be fetched');
    });
  },

  close: function(){
    return new EmberPromise(function(){
      throw new Error(
        'The Torii adapter must implement `close` for a session to be closed');
    });
  }

});

export default ApplicationAdapter;
