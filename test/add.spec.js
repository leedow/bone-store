
describe('test easystore', function(){
  it('test add number', function(){
    expect(easystore.add('number', 1)).toBe(true);
  });

  it('test add string', function(){
    expect(easystore.add('string', 'hello from easystore')).toBe(true);
  });

  it('test add boolean', function(){
    expect(easystore.add('boolean', true)).toBe(true);
  });

  it('test add object', function(){
    expect(easystore.add('object', {msg: 'hello from easystore'})).toBe(true);
  });

  it('test add array', function(){
    expect(easystore.add('array', [1,2,3])).toBe(true);
  });

  it('test get number', function(){
    expect(easystore.get('number')).toBe(1);
  });

  it('test get string', function(){
    expect(easystore.get('string', 'hello from easystore')).toBe('hello from easystore');
  });

  it('test get boolean', function(){
    expect(easystore.get('boolean')).toBe(true);
  });

  it('test get object', function(){
    expect(easystore.get('object')).toEqual({msg: 'hello from easystore'});
  });

  it('test get array', function(){
    expect(easystore.get('array')).toEqual([1,2,3]);
  });

  it('test delete', function(){
    easystore.del('number')
    expect(easystore.get('number')).toBe(false);
  });

  it('test clear all', function(){
    easystore.clear()
    expect(easystore.get('string')).toBe(false);
    expect(easystore.get('number')).toBe(false);
    expect(easystore.get('object')).toBe(false);
    expect(easystore.get('array')).toBe(false);
  });



});
