'use strict';

// describe('Plane',function(){
//   var plane;
//   beforeEach(function(){
//     plane = new Plane();
//   });
//   it('can land at an airport', function(){
//     expect(plane.land).not.toBeUndefined()
//   });
// });


describe('Plane',function(){
  var plane;
  var airport;
  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding']);
  });
  it('can land at an airport', function(){
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });
});
