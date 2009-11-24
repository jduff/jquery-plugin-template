/*********************************
* jQuery NAME Plugin
* version: x.x
* URL: URL
* Description: DESCRIPTION
* Requires: JQUERY_VERSION, ETC.
* Author: AUTHOR
* Copyright: Copyright 2009 NAME
*********************************/

(function($) {
  
  // define the plugin
  $.fn.PLUGIN = function(options) {
    // extend the default options with those provided
    // extending an empty object prevents overriding of our defaults object
    var opts = $.extend({}, $.fn.PLUGIN.defaults, options);
    
    // iterate through the matched elements
    // returning this at the end
    return this.each(function() {
      // use the helper function
      var something = $.fn.PLUGIN.helper();
      
      // plugin logic here
    });
  };
  
  // private function that can only be used within the plugin
  function private() {
    // do something internal
  };
  
  // public helper function that can be overridden by the user
  $.fn.PLUGIN.helper = function () {
    // do something that helps
  };
  
  
  // plugin defaults
  $.fn.PLUGIN.defaults = {
    color: 'red'
  };

})(jQuery);