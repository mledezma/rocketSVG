;(function () {
  var rocket = document.querySelector('.rocket');
  var lines = document.querySelectorAll('.lines');
  var fire = document.querySelector('.mo-fire');
  var flames = document.querySelectorAll('.flame-main');
  var littleFlames = document.querySelectorAll('.flame');
  var smokes = document.querySelectorAll('.smoke');

  setTimeout(function () {
    smokes.forEach(function (smoke) {
      smoke.classList.add('smokeTageOff');
    });
  }, 2000);

  setTimeout(function () {
    rocket.classList.add('takeOff');
    fire.classList.add('fireTakeOff');

    setTimeout(function () {
      fire.classList.add('flyFire');
      rocket.classList.add('fly');
      fire.classList.remove('fireTakeOff');
      fire.classList.remove('hidden');
      flames.forEach(function(flame) {
        flame.classList.add('flameWobble');
      });
      littleFlames.forEach(function (flame) {
        flame.classList.add('flamefly');
      });
    }, 2000);
  }, 3000);
})();