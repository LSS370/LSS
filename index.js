
const texts = {
  ja: {
    n1: "私たちについて",
    n2: "",
    n3: "代表挨拶",
    n4: "公式SNS",
    //opening
    ot: "BEYOND EXPECTATIONS",
    od: "小さな善意、\\r\\n   大きな変化。\\r\\n   人と地域と未来をつなげる。",
    //about us
    au1: "【私たちについて】",
    au11: "",
    au2: "【名称について】",
    au22: "当NPO団体の『Little SeedS』という名称は、皆んなが小さな種(Little Seeds)であり、種というのは、水をやり、肥料を与えなければすぐに枯れてしまう。水と肥料を与えて、皆んなで協力すれば綺麗な花が咲き誇る。当団体はその水と肥料になり、綺麗な花をさかせてあげたい。という意味を込めて名付けました。当NPO団体は「小さな善意大きな変化」を掲げています。大きなことを背伸びしてするのではなく、自分ができることをたとえ小さなことであってもやって欲しい。<br>当団体は、「皆んながそれぞれに出来る小さなことをやっていくとそれが大きな変化をもたらす」そう信じています。",
    au3: "【ロゴについて】",
    au31: "当NPO団体のロゴの上の方にはダイヤモンドの岩石が5つあります。<br>ダイヤモンドは研がれなければ輝かない。この地球上のすべての人間はダイヤモンドの岩石であり、自分自身を研いて光り輝く人間になっていって欲しいという意味を込めてダイヤモンドの岩石をあしらっています。<br>ダイヤモンドの岩石が5つあしらわれている理由は、5という数字には「人との繋がり自己の自立」という意味が込められているからです。人生のあらゆる可能性を模索し、人生がより豊かになっていって欲しいという意味を込めて、ダイヤモンドの岩石を5つあしらいました。\\r\\nそのダイヤモンドの岩石が水色な理由は、水色という色には、「変化」という意味が込められているからです。<br>今の自分に納得せず、より良い自分を目指して変化していって欲しいという意味を込めて水色にしました。",
    f1: "社会部",
    f11:"",
    f2:"文化部",
    f21: "",
    f3:"環境部",
    f31: "",
    f4: "知育部",
    f41:"",
  },
  en: {
    n1: "About Us",
    n2: "4 Pillars",
    n3: "Representative's Greetings",
    n4: "Official SNS",
    //opening
    ot: "BEYOND EXPECTATIONS",
    od: "",
    //about us
    au1: "【About Us】",
    au11: "",
    au2: "【Our Name】",
    au21: "The name of our NPO, Little SeedS, embodies the idea that everyone is a little seed. Seeds without water and fertilizer will wither and die quickly. But with working together, and with water and fertilizer, beautiful flowers will bloom. We chose this name because we want to be that water and fertiliser, helping those beautiful flowers to bloom. <br> Our NPO’s motto is “Small Acts of Kindness, Makes Big Changes.” Instead of doing big things beyond our means, we encourage everyone to do what they can, no matter how small. We firmly believe that when everyone does their own small part, it brings about significant change.",
    au3: "【Our Logo】",
    au31: "At the top of our NPO's logo are five diamond-shaped stones. <br>Diamonds won't shine unless they are polished. Every person on this earth is like a diamond stone, and we have incorporated these stones to convey our wish that everyone polishes themselves to become shining individuals.<br> The reason five diamond stones are featured is because the number five embodies the meaning of “connections with others and self-reliance.” We incorporated five diamond stones to express our wish for people to explore all possibilities in life and for their lives to become richer. <br>The reason these diamond stones are light blue is because the color light blue carries the meaning of “change.”<br> We chose light blue to convey our hope that people will not settle for their current selves but strive to change and become better versions of themselves.",
    f1: "Social Department",
    f11:"",
    f2:"Cultural Department",
    f21: "",
    f3:"Environmental Department",
    f31: "",
    f4: "Educational Department",
    f41:"",
  }
};

function setLanguage(lang) {
  document.getElementById('n1').textContent = texts[lang].n1;
  document.getElementById('n2').textContent = texts[lang].n2;
  document.getElementById('n3').textContent = texts[lang].n3;
  document.getElementById('n4').textContent = texts[lang].n4;
  document.getElementById('ot').textContent = texts[lang].ot;
  document.getElementById('od').textContent = texts[lang].od;
  document.getElementById('au1').textContent = texts[lang].au1;
  document.getElementById('au11').textContent = texts[lang].au11;
  document.getElementById('au2').textContent = texts[lang].au2;
  document.getElementById('au21').textContent = texts[lang].au21;
  document.getElementById('au3').textContent = texts[lang].au3;
  document.getElementById('au31').textContent = texts[lang].au31; 
  document.getElementById('f1').textContent = texts[lang].f1;
  document.getElementById('f11').textContent = texts[lang].f11;
  document.getElementById('f2').textContent = texts[lang].f2;
  document.getElementById('f21').textContent = texts[lang].f21;
  document.getElementById('f3').textContent = texts[lang].f3;
  document.getElementById('f31').textContent = texts[lang].f31;
  document.getElementById('f4').textContent = texts[lang].f4;
  document.getElementById('f41').textContent = texts[lang].f41;

};


// 初期言語設定
setLanguage('ja');
