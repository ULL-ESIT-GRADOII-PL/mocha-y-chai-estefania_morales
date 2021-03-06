var assert = chai.assert;
suite('temperature', function() {
   setup(function(){
      if (typeof __html__ !== 'undefined') {
          document.body.innerHTML = __html__['test/index.html'];
          original = document.getElementById('original');
          converted = document.getElementById('converted');
      }
    });
    test('32F to C = 0C', function() {
      var m = new Medida(32, 'f');
      assert.deepEqual(m.getNumero(),32);
        
    });
    test('12F to C = -11.1C', function() {
        original.value = "12F to C";
        main();
        assert.deepEqual(converted.innerHTML, "-11.11 Celsius");
    });
    test('6.1f to k = 43F', function() {
        original.value = "6.1f to k";
        main();
        assert.deepEqual(converted.innerHTML, "258.61 Kelvin");
    });
    test('3te = Numero introducido no valido', function() {
        original.value = "3te";
        main();
        assert.match(converted.innerHTML, /ERROR/);
    });

    test('45C to k = 113.0 Farenheit', function() {
        original.value = "45C to k";
        main();
        assert.deepEqual(converted.innerHTML, "318.15 Kelvin");
    });
    test('5X = error', function() {
        original.value = "5X";
        main();
        assert.match(converted.innerHTML, /ERROR/);
    });
});
