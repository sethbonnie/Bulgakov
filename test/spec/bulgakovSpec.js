describe('bkv object', function() {
  it("should exist", function() {
    expect(typeof bkv).not.toBe("undefined");
  });
});

describe('bkv.init', function() {
  var bkv_menu, bkv_menu_trigger;

  beforeEach(function() {
    bkv_menu = document.createElement('div');
    bkv_menu.className = 'bkv_menu';

    bkv_menu_trigger = document.createElement('div');
    bkv_menu_trigger.className = 'bkv_menu_trigger';

    bkv_menu.appendChild(bkv_menu_trigger);
    document.body.appendChild(bkv_menu);

    bkv.init();
  });

  afterEach(function() {
    document.body.removeChild(bkv_menu);
  });

  it('should attach .contract to .bkv_menu', function() {
    expect(bkv_menu.className.indexOf('contract')).not.toBe(-1);
  });
});

describe('addClass', function(){
  var elem = document.createElement('div');

  beforeEach(function(){
    elem.className = '';
  });

  it('should attach a class to an element', function() {
    bkv.addClass(elem, 'one');
    expect(elem.className.indexOf('one')).not.toBe(-1);
  });

  it('should attach multiple classes when given extra params', function() {
    bkv.addClass(elem, 'one', 'two', 'three');
    expect(elem.className.indexOf('one')).not.toBe(-1);
    expect(elem.className.indexOf('two')).not.toBe(-1);
    expect(elem.className.indexOf('three')).not.toBe(-1);
  });

  it('should not attach a class to an element if class already attached', function() {
    elem.className = 'one';
    bkv.addClass(elem, 'one');

    var classes = elem.className.split(' ');
    expect(classes.length).not.toBe(2);
    // That is,
    expect(classes.length).toBe(1);
  });
});

describe('removeClass', function(){
  var elem = document.createElement('div');

  beforeEach(function(){
    elem.className = '';
  });

  it('should remove a class from an element', function() {
    elem.className = 'blah';
    bkv.removeClass(elem, 'blah');
    expect(elem.className).toEqual('');

    elem.className = 'one two';
    bkv.removeClass(elem, 'one');
    expect(elem.className).toEqual('two');
  });

  it('should remove multiple classes from an element when specified', function() {
    elem.className = 'one two';
    bkv.removeClass(elem, 'one', 'two');
    
    expect(elem.className).toEqual('');
  });

  it('should remove repeated classes from an element', function() {
    elem.className = 'one one one';
    bkv.removeClass(elem, 'one');
    
    expect(elem.className).toEqual('');
  });
});

describe('expand', function(){
  var bkv_menu;

  beforeEach(function(){
    bkv_menu = document.createElement('div');
    // start in the contracted state
    bkv_menu.className = 'bkv_menu contract';
    document.body.appendChild(bkv_menu);
  });

  afterEach(function(){
    document.body.removeChild(bkv_menu);
  });

  it('should remove the contract class from the bkv_menu elem', function(){
    expect(bkv_menu.className.indexOf('contract')).not.toBe(-1);
    bkv.expand();
    expect(bkv_menu.className.indexOf('contract')).toBe(-1);
  });

  it('should add the expand class to the bkv_menu elem', function(){
    expect(bkv_menu.className.indexOf('expand')).toBe(-1);
    bkv.expand();
    expect(bkv_menu.className.indexOf('expand')).not.toBe(-1);
  });
});

describe('contract', function(){
  var bkv_menu;

  beforeEach(function(){
    bkv_menu = document.createElement('div');
    // start in the expanded state
    bkv_menu.className = 'bkv_menu expand';
    document.body.appendChild(bkv_menu);
  });

  afterEach(function(){
    document.body.removeChild(bkv_menu);
  });

  it('should remove the expand class from the bkv_menu elem', function(){
    expect(bkv_menu.className.indexOf('expand')).not.toBe(-1);
    bkv.contract();
    expect(bkv_menu.className.indexOf('expand')).toBe(-1);
  });

  it('should add the contract class to the bkv_menu elem', function(){
    expect(bkv_menu.className.indexOf('contract')).toBe(-1);
    bkv.contract();
    expect(bkv_menu.className.indexOf('contract')).not.toBe(-1);
  });
});