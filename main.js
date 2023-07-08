setInterval(() => {
  let date = new Date();

  console.log(date);
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  console.log(hh);
  hh = hh * 30;
  newhh = mm / 2;
  hh += newhh;
  mm = 6 * mm;
  ss = 6 * ss;

  console.log(hh);

  let hhand = (document.querySelector(".hh").style.rotate = `${hh}deg`);
  let mhand = (document.querySelector(".mm").style.rotate = `${mm}deg`);
  let shand = (document.querySelector(".ss").style.rotate = `${ss}deg`);
}, 1000);
