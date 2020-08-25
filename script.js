$(document).ready(function() {
  animateDiv($("#target1"));
  animateDiv($("#target2"));
  animateDiv($("#target3"));
  animateDiv($("#target4"));
  animateDiv($("#target5"));
  animateDiv($("#target6"));
  animateDiv($("#target7"));
  animateDiv($("#target8"));
  animateDiv($("#target9"));
  animateDiv($("#target10"));
});

function animateDiv(target) {
  var newq = makeNewPosition();
  var oldq = target.offset();
  var speed = calcSpeed([oldq.top, oldq.left], newq);
  target.animate({ top: newq[0], left: newq[1] }, speed, function() {
    animateDiv(target);
  });
};

function makeNewPosition() {
  var h = $(window).height() - 50;
  var w = $(window).width() - 50;
  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);
  return [nh,nw];
}

function calcSpeed(prev, next) {
  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);
  var greatest = x > y ? x : y;
  var speedModifier = 0.1;
  var speed = Math.ceil(greatest/speedModifier);
  return speed;
}

var score = 0;
$("#score").html(score);

$(".hungry").click(function() {
  var target = $(this);
  score++;
  $("#score").html(score);
  target.hide();
  setTimeout(function() {
    target.show();
  }, 5000);
});
