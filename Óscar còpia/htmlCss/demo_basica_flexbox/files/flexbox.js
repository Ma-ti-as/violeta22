const cambiaFlex = (e, t) => {
  for (
    let n = document.querySelectorAll(`.${e}`),
      l = document.querySelector(`#${t}`),
      r = 0;
    r < n.length;
    r++
  )
    n[r].addEventListener(
      "change",
      function () {
        let e = this.value;
        l.setAttribute("class", `flex-container ${e}`);
      },
      !1
    );
};

const cambiaItemFlex = (e, t) => {
  for (
    let n = document.querySelectorAll(`.${e}`),
      l = document.querySelector(`#${t}`),
      r = 0;
    r < n.length;
    r++
  )
    n[r].addEventListener(
      "change",
      function () {
        let e = this.value;
        l.setAttribute("class", `item ${e}`);
      },
      !1
    );
};

const cambiaFlexBasis = (e, t) => {
  let n = isNaN(e.value) ? 0 : e.value;
  console.log(`B: ${n}`),
    (document.querySelector(`#${t}`).style.WebkitFlexBasis = `${n}%`),
    (document.querySelector(`#${t}`).style.flexBasis = `${n}%`);
};

const cambiaFlexGrow = (e, t) => {
  let n = isNaN(e.value) ? 0 : e.value;
  console.log(`G: ${n}`),
    (document.querySelector(`#${t}`).style.WebkitFlexGrow = n),
    (document.querySelector(`#${t}`).style.flexGrow = n);
};

function cambiaFlexShrink(e, t) {
  let n = isNaN(e.value) ? 0 : e.value;
  console.log(`S: ${n}`),
    (document.querySelector(`#${t}`).style.WebkitFlexShrink = n),
    (document.querySelector(`#${t}`).style.flexShrink = n);
}

function cambiaFlexOrder(e, t) {
  let n = isNaN(e.value) ? 0 : e.value;
  console.log(`O: ${n}`),
    (document.querySelector(`#${t}`).style.WebkitOrder = n),
    (document.querySelector(`#${t}`).style.order = n);
}

const changeAll = (e, t, n, l) => {
  cambiaFlexBasis(e, l), cambiaFlexGrow(t, l), cambiaFlexShrink(n, l);
};
for (
  let items = document.querySelectorAll(".item"), i = 0;
  i < items.length;
  i++
)
  if (items[i].hasAttribute("data-color")) {
    let color = items[i].getAttribute("data-color");
    items[i].style.backgroundColor = `#${color}`;
  }
for (
  let flexO = document.querySelectorAll(".flex-order"), o = 0;
  o < flexO.length;
  o++
)
  flexO[o].addEventListener(
    "change",
    function () {
      cambiaFlexOrder(this, "order" + this.id);
    },
    !1
  );
cambiaFlex("flex-direction", "direction"),
  cambiaFlex("flex-wrap", "wrap"),
  cambiaFlex("flex-align-items", "align"),
  cambiaFlex("justify-content", "justify"),
  cambiaFlex("align-content", "alignContent"),
  cambiaItemFlex("align-self", "alignSelf");
for (
  let flexGrow = document.querySelectorAll(".flex-grow"), i = 0;
  i < flexGrow.length;
  i++
)
  flexGrow[i].addEventListener("change", function () {
    let e = "item" + this.id;
    cambiaFlexGrow(this, e);
  });
for (
  let flexShrink = document.querySelectorAll(".flex-shrink"), j = 0;
  j < flexShrink.length;
  j++
)
  flexShrink[j].addEventListener("change", function () {
    let e = "item" + this.id;
    cambiaFlexShrink(this, e);
  });

const B1 = document.querySelector("#B1"),
  G1 = document.querySelector("#G1"),
  S1 = document.querySelector("#S1"),
  B2 = document.querySelector("#B2"),
  G2 = document.querySelector("#G2"),
  S2 = document.querySelector("#S2");

const listeners1 = [B1, G1, S1];
const listeners2 = [B2, G2, S2];

for (const listener of listeners1)
  listener.addEventListener("change", () => {
    changeAll(B1, G1, S1, "item1");
  });

for (const listener of listeners2)
  listener.addEventListener("change", () => {
    changeAll(B2, G2, S2, "item2");
  });
