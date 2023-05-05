var Body = {
  setColor: function (color) {
    $("body").css("color", color);
  },
  setBackgroundColor: function (color) {
    //document.querySelector('body').style.backgroundColor = color;
    $("body").css("backgroundColor", color);
  },
};
var Link = {
  // setColor : function(color){
  //     var i = 0;
  //         while (i < alist.length){
  //             alist[i].style.color = color;
  //             i += 1;
  //         }
  // }

  setColor: function (color) {
    $("a").css("color", color);
  },
};

function setcolor(color) {
  var i = 0;
  while (i < alist.length) {
    alist[i].style.color = color;
    i = i + 1;
  }
}
function BodySetColor(target, color1, color2) {
  target.style.backgroundColor = color1;
  target.style.color = color2;
}
function buttonNight(self) {
  var target = document.querySelector("body");
  if (self.value === "night") {
    Body.setBackgroundColor("black");
    Body.setColor("white");
    self.value = "day";
    var alist = document.querySelectorAll("a");
    Link.setColor("powderblue");
  } else {
    Body.setBackgroundColor("white");
    Body.setColor("black");
    self.value = "night";
    var alist = document.querySelectorAll("a");
    Link.setColor("blue");
  }
}
