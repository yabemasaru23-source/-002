// app.jsx — 時間創造部 main app + tweaks

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "porcelain",
  "display": "serif",
  "motion": "on",
  "accent": "#d7402c"
}/*EDITMODE-END*/;

function TopNav(){
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, {passive:true});
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`topnav ${scrolled?"scrolled":""}`}>
      <Brand/>
      <div className="nav-links">
        <a href="#philosophy">時間学</a>
        <a href="#time-nature">時間の正体</a>
        <a href="#axes">時間軸</a>
        <a href="#method">メソッド</a>
        <a href="#seminar">7/7セミナー</a>
        <a href="#company">会社</a>
        <a href="#contact" className="cta">7/7の席を確保 →</a>
      </div>
    </nav>
  );
}

function FloatCTA(){
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll, {passive:true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a href="#contact" className={`float-cta ${show?"show":""}`}>
      ● 7/7セミナー 席を確保 →
    </a>
  );
}

function ImageBand({ src, lat, ja, height }){
  return (
    <div className="image-band" style={height?{height}:null}>
      <img src={src} alt={ja||""} loading="lazy" />
      <div className="image-band-cap">
        <div className="lat">{lat}</div>
        <div className="ja">{ja}</div>
      </div>
    </div>
  );
}

const CLOCK_IMAGES = {
  pocketWatch: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=1800&q=80&auto=format&fit=crop",
  towerClock: "https://images.unsplash.com/photo-1606166187734-a4cb74079037?w=1800&q=80&auto=format&fit=crop",
  antiqueClock: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=1800&q=80&auto=format&fit=crop",
  gears: "https://images.unsplash.com/photo-1518139622582-d7f2bd55fb91?w=1800&q=80&auto=format&fit=crop",
};

function ClockImagePair({ a, b }){
  return (
    <div className="image-pair">
      <div className="frame"><img src={a.src} alt={a.ja} loading="lazy" /><div className="label"><em>{a.lat}</em>{a.ja}</div></div>
      <div className="frame"><img src={b.src} alt={b.ja} loading="lazy" /><div className="label"><em>{b.lat}</em>{b.ja}</div></div>
    </div>
  );
}

function TimeNature(){
  const items = [
    {
      n:"01",
      icon:"🌌",
      cat:"PHYSICS",
      catJa:"物理学",
      title:"部屋が散らかるのは「時間が進んでいる」証拠",
      sub:"エントロピーの矢",
      time:{hour:2, minute:30},
      timeCaption:"宇宙の時間は、一方向へと確実に進んでいく。",
      tagline:"時間は流れの方向を教えてくれる。",
      body:"時間はなぜ、過去から未来にしか進まないのか。答えは、宇宙が「勝手にどんどん散らかっていく」ルールを持っているから。",
      examples:[
        {k:"卵の例え",v:"卵を割って目玉焼きを作るのは簡単。でも焼いた目玉焼きを生卵に戻すのは不可能。"},
        {k:"部屋の例え",v:"片付けをサボれば部屋は散らかる。放置して勝手にピカピカになることはない。"}
      ],
      conclusion:"この「元に戻せない、散らかっていく流れ」そのものが時間の正体。宇宙は片道切符の片付けられない部屋。"
    },
    {
      n:"02",
      icon:"🧠",
      cat:"PSYCHOLOGY",
      catJa:"心理学",
      title:"脳は「時間の伸び縮み」を楽しむ嘘つき",
      sub:"知覚は脳の推測",
      time:{hour:9, minute:5},
      timeCaption:"時間は、脳の中で色づく主観の時計だ。",
      tagline:"感じる時間は、心が刻む私的な時計だ。",
      body:"「1時間は60分」と決まっていても、心の中では全然違う。人間には「時間を感じる専用の感覚器官」が存在しない。",
      examples:[
        {k:"楽しい時",v:"「えっ、もう終わり？」── 脳が情報を一気に処理して、後で「短かった」と勘違いする。"},
        {k:"退屈な時",v:"「まだ10分か…」── 脳が暇すぎて「まだかな？」と何度も確認するから長く感じる。"}
      ],
      conclusion:"心臓のリズムや外の明るさを見て、脳が勝手に時間を「予想」して作っている。時間は外にあるものではなく、あなたの脳が作り出す感覚にすぎない。"
    },
    {
      n:"03",
      icon:"🌊",
      cat:"PHILOSOPHY",
      catJa:"哲学",
      title:"「流されるプール」か「自分で泳ぐ」か",
      sub:"能動的引き受け",
      time:{hour:5, minute:50},
      timeCaption:"時間に主体性を持つことが、最も重要な選択だ。",
      tagline:"自分で泳ぐか、流されるか、選ぶのは今。",
      body:"一番大事なのがここ。時間は「ただ過ぎ去るもの」だと思っていないか。",
      examples:[
        {k:"流される人",v:"時間を「流れるプール」だと思っている。浮き輪で、ただぼーっとゴールへ運ばれていくだけ。「時間がない！」と嘆くのはこのタイプ。"},
        {k:"創る人",v:"時間を「自分で泳ぐ水」だと思っている。自分が「これをやるぞ」と決めて動いた瞬間、そこに「意味のある時間」が生まれる。"}
      ],
      conclusion:"時間の正体はカレンダーの数字ではない。あなたが「自分の人生として、今この瞬間をどれだけ本気で引き受けたか」── その中身の濃さそのもの。"
    }
  ];
  return (
    <section id="time-nature" className="section time-nature" style={{fontFamily:"\"Shippori Mincho\""}}>
      <div className="wrap">
        <div className="section-head">
          <span className="num">02.5</span>
          <div>
            <div className="eyebrow">THE NATURE OF TIME — 時間の正体</div>
            <h2>「時間って、結局<em>なに</em>？」</h2>
            <p className="lead">
              小難しい理論は抜きにして、世界一わかりやすく<strong>3つの核心</strong>に凝縮しました。<br/>
              物理学・心理学・哲学が示す、時間という不思議の正体です。
            </p>
          </div>
        </div>
        <Reveal delay={120}>
          <ImageBand
            src={CLOCK_IMAGES.antiqueClock}
            lat="TIME"
            ja="時間の正体を、視覚で感じる"
          />
        </Reveal>
        <div className="tn-grid">
          {items.map((it) => (
            <article key={it.n} className="tn-card">
              <header className="tn-head">
                <div className="tn-icon">{it.icon}</div>
                <div>
                  <div className="tn-cat"><em>{it.cat}</em>　{it.catJa}</div>
                  <h3 className="tn-title">{it.title}</h3>
                  <div className="tn-sub">── {it.sub}</div>
                </div>
                <div className="tn-num">{it.n}</div>
              </header>
              <div className="tn-tagline">{it.tagline}</div>
              <p className="tn-body">{it.body}</p>
              <div className="tn-visual">
                <div className="clock-wrapper"><ClockMotif size={120} hour={it.time.hour} minute={it.time.minute} opacity={.15} accent={false} /></div>
                <div className="tn-visual-label">{it.timeCaption}</div>
              </div>
              <div className="tn-examples">
                {it.examples.map((ex,i) => (
                  <div key={i} className="tn-ex">
                    <div className="tn-ex-k">{ex.k}</div>
                    <div className="tn-ex-v">{ex.v}</div>
                  </div>
                ))}
              </div>
              <div className="tn-conclusion">
                <span className="tn-conclusion-mark">結論</span>
                <p>{it.conclusion}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="tn-summary">
          <div className="tn-summary-head">まとめ ── 時間とは、</div>
          <ol className="tn-summary-list">
            <li><span className="tn-num-sm">①</span>宇宙が「元に戻らない」というルールだから、時間は<em>進む</em>。</li>
            <li><span className="tn-num-sm">②</span>あなたの「脳」が、その時々の気分で時間の<em>長さ</em>を決めている。</li>
            <li><span className="tn-num-sm">③</span>あなたが「自分で決めて動く」ことで、時間は<em>価値</em>に変わる。</li>
          </ol>
          <blockquote className="tn-quote">
            「時間は勝手に流れてくるもの」ではなく、<br/>
            <strong>「自分の内側で創り、自分で意味を決めるもの」</strong>。<br/>
            そう考えると、少しワクワクしてきませんか？
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function App(){
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // apply tweaks to body data-attrs
  React.useEffect(() => {
    document.body.dataset.palette = t.palette;
    document.body.dataset.display = t.display;
    document.body.dataset.motion = t.motion;
    if(t.accent){ document.documentElement.style.setProperty("--accent", t.accent); }
  }, [t.palette, t.display, t.motion, t.accent]);

  return (
    <>
      <TopNav/>
      <Hero/>
      <Empathy/>
      <TimeNature/>
      <Pillars/>
      <Axes/>
      <Method/>
      <Seminar/>
      <Testimonials/>
      <Instructor/>
      <FAQ/>
      <Blog/>
      <Contact/>
      <Company/>
      <Footer/>
      <FloatCTA/>

      <TweaksPanel title="時間創造部 — Tweaks">
        <TweakSection label="Palette / 配色"/>
        <TweakRadio label="基調" value={t.palette}
          options={[
            {value:"ink", label:"墨朱"},
            {value:"porcelain", label:"白磁"},
            {value:"midnight", label:"群青"},
          ]}
          onChange={(v) => setTweak("palette", v)}/>
        <TweakColor label="差し色" value={t.accent}
          options={["#d7402c","#e8b54a","#2a6fdb","#1f8a5b","#7a5ae0"]}
          onChange={(v) => setTweak("accent", v)}/>

        <TweakSection label="Typography / 書体"/>
        <TweakRadio label="見出し" value={t.display}
          options={[
            {value:"serif", label:"明朝"},
            {value:"sans", label:"ゴシック"},
          ]}
          onChange={(v) => setTweak("display", v)}/>

        <TweakSection label="Motion / 動き"/>
        <TweakRadio label="アニメーション" value={t.motion}
          options={[
            {value:"on", label:"オン"},
            {value:"off", label:"オフ"},
          ]}
          onChange={(v) => setTweak("motion", v)}/>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
