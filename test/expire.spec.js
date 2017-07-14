
describe('test expire', function(){


  it('test add expire', function(){
    expect(easystore.add('expire', 'expire', 4)).toBe(true);

  });

  it('test get expire whtin the effective period', function(){
    expect(easystore.get('expire')).toBe('expire');

  });

  it('test data to be expired', function(){
    setTimeout(function(){
      expect(easystore.get('expire')).toBe(true);

    },5 )

  });


});
