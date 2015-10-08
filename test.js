var expect = require('chai').expect
  , hashcode = require('./')

describe('hashcode', function() {
  it('should string to hashcode', function() {
    expect(hashcode('foobar')).to.eql(-1268878963)
  })

  it('should return 0 for falsys', function() {
    expect(hashcode('')).to.eql(0)
    expect(hashcode(null)).to.eql(0)
  })
})