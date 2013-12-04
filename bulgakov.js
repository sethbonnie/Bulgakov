(function() {
  var bkv_trigger = document.getElementById('bkv_menu_trigger');
  var bkv_menu = document.getElementById('bkv_menu');
  var bkv_expanded = false;
  bkv_trigger.onclick = function() {
    if (bkv_expanded) {
      // contract
      bkv_expanded = false;
      bkv_menu.classList.remove('expand');
      bkv_menu.classList.add('contract');
    } else {
      // expand
      bkv_expanded = true;
      bkv_menu.classList.remove('contract');
      bkv_menu.classList.add('expand');
    }
  }
})();