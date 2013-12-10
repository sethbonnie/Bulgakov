(function() {
  var get_trigger = function() {
    document.querySelector('.bkv_menu_trigger');
  };
  var get_menu = function() {
    return document.querySelector('.bkv_menu');
  };
  var bkv_expanded = false;

  bkv = typeof bkv !== 'undefined'? bkv : {};
  
  bkv.init = function() {
    var bkv_menu = get_menu();
    var bkv_trigger = get_trigger();
    if (bkv_menu)
      bkv.addClass(bkv_menu, 'contract');

    if (bkv_trigger) {
      bkv_trigger.onclick = function() {
        if (bkv_expanded) {
          bkv.contract();
        } else {
          bkv.expand();
        }
      };
    }
  };
  
  bkv.expand = function() {
    var bkv_menu = get_menu();
    bkv_expanded = true;
    if (bkv_menu) {
      bkv.removeClass(bkv_menu, 'contract');
      bkv.addClass(bkv_menu, 'expand');
    }
  };
  
  bkv.contract = function() {
    var bkv_menu = get_menu();
    bkv_expanded = false;
    if (bkv_menu) {
      bkv.removeClass(bkv_menu, 'expand');
      bkv.addClass(bkv_menu, 'contract');
    }
  };

  // Class Helpers
  bkv.addClass = function(el, cl) {
    if (typeof document.body.classList !== "undefined") {
      for (var i = 1, len = arguments.length; i < len; i++) {
        el.classList.add(arguments[i].trim());
      }

    } else {
      var classList = el.className.split(' ').filter(isNot(''));

      for (var i = 1, len = arguments.length; i < len; i++) {
        var className = arguments[i];
        // Only append className if it's not already on the list
        if (classList.indexOf(className) == -1)
          el.className +=  ' ' + arguments[i].trim();
      }
    }
  };

  bkv.removeClass = function(el, cl) {
    if (typeof document.body.classList !== "undefined") {
      // Iterate through args
      for (var i = 1, len = arguments.length; i < len; i++) {
        el.classList.remove(arguments[i].trim());
      }

    } else {
      var classList = el.className.split(' ').filter(isNot(''));

      // Filter out the classname(s) supplied in the args
      for (var i = 1, len = arguments.length; i < len; i++) {
        var className = arguments[i].trim();
        classList = classList.filter(isNot(className));
      }

      el.className = classList.join(' ');
    }
  };

  // Private Methods
  function isNot(x) { return function(el) { return el !== x; }; }
  function is(x)    { return function(el) { return el === x; }; }

  bkv.init();
})();