(function() {
  var bkv_trigger = document.querySelector('.bkv_menu_trigger');
  var bkv_menu = document.querySelector('.bkv_menu');
  var bkv_expanded = false;

  bkv = typeof bkv !== 'undefined'? bkv : {};
  bkv.init = function() {
    if (bkv_menu)
      bkv_menu.classList.add('contract');

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
    bkv_expanded = true;
    if (bkv_menu) {
      bkv_menu.classList.remove('contract');
      bkv_menu.classList.add('expand');
    }
  };
  bkv.contract = function() {
    bkv_expanded = false;
    if (bkv_menu) {
      bkv_menu.classList.remove('expand');
      bkv_menu.classList.add('contract');
    }
  };

  bkv.init();
})();