loopBanner();

/**
 * Loop the banner
 */
function loopBanner() {
  const banner = document.getElementsByClassName("banner")[0];
  const bannerLis = banner.getElementsByTagName("li");

  const pointer = document.getElementsByClassName("pointer")[0];

  const pointerArchors = pointer.getElementsByTagName("a");
  for (let i = 0; i < pointerArchors.length; i++) {
    let pointerArchor = pointerArchors[i];

    pointerArchor.onclick = function (e) {
      for (let j = 0; j < bannerLis.length; j++) {
        if (i != j) {
          bannerLis[j].className = "none";
          pointerArchors[j].className = "none";
        } else {
          this.className = "active";
          bannerLis[i].className = "active";
        }
      }
    };
  }
}
