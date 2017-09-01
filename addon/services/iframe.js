import $ from 'jquery';
import Evented from '@ember/object/evented';
import EmberObject from '@ember/object';
import UiServiceMixin from 'torii/mixins/ui-service-mixin';

var Iframe = EmberObject.extend(Evented, UiServiceMixin, {

  openRemote: function(url){
    this.remote = $('<iframe src="'+url+'" id="torii-iframe"></iframe>');
    var iframeParent = '.torii-iframe-placeholder';
    $(iframeParent).append(this.remote);
  },

  closeRemote: function(){
    this.remote.remove();
  },

  pollRemote: function(){
    if ($('#torii-iframe').length === 0) {
      this.trigger('didClose');
    }
  }

});

export default Iframe;
