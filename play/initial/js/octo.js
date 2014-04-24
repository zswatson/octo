(function(exports) {
  var octo = exports.octo = exports.octo || {};

  octo.octo = function(selector, params) {
    var defaults = {
      arms: 8,
      segments: 15,
      minLength: 10,
      maxLength: 20
    };
    var options = extend({}, defaults, params);

    var root = d3.select(selector),
        svg = root.append('svg');
    
    var setup = function() {
        var octopus = svg.append("g")
          .attr("class", "octo");

        var arms = octopus.selectAll('g')
          .data(d3.range(8).map(function(d) {return {}}))
        .enter().append('g')
          .attr("class", "arm")
    }
        
  }

  var extend = octo.extend = function() {
    for(var i=1; i<arguments.length; i++) {
      for(var key in arguments[i]) {
        if(arguments[i].hasOwnProperty(key)) {
          arguments[0][key] = arguments[i][key];
        }
      }
    }
    return arguments[0];
  }

})(this)
