// sections.jsx — page sections for 時間創造部

function Hero() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    requestAnimationFrame(() => el.classList.add("in"));
  }, []);
  return (
    <section id="top" className="hero" ref={ref}>
      <div className="hero-bg" />
      <div className="hero-grain" />
      <div className="hero-clock"><LiveClock size={760} ticking={true} /></div>
      <div className="hero-clock-glow" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-meta">
          <span className="live"><span className="dot" />NOW BROADCASTING — 時間学 SEMINAR 2026</span>
        </div>
        <h1>
          <span className="ima accent">今</span>を<br />
          <span className="grid-mark">生</span>きる、<br />
          という<br />
          技術。
        </h1>
        <p className="hero-sub">
          時間に追われるのではなく、<strong>時間を創り出す</strong>。<br />
          物理学・心理学・哲学が示す「時間学」の最前線から、<br />
          人生・仕事・家庭の三つの時間軸を取り戻すための、<br />
          実践的な手帳メソッドを学ぶ場所。
        </p>
        <div className="hero-cta-row">
          <a href="#seminar" className="btn btn-primary">
            無料体験会を予約する <span className="arrow">→</span>
          </a>
          <a href="#axes" className="btn btn-ghost">
            あなたの時間を診断 <span className="arrow">→</span>
          </a>
        </div>
      </div>

      <div className="hero-side">
        <div className="vert-jp">時間創造部</div>
        <LiveTime />
      </div>

      <div className="scroll-hint">
        <span className="line" />SCROLL — 時の流れを辿る
      </div>
    </section>);

}

function Empathy() {
  const pains = [
  { n: "01", t: "気づけば、一日が終わっている。", p: "出社・会議・メール・帰宅。タスクは消化したはずなのに、自分が「何を生きたか」を思い出せない。" },
  { n: "02", t: "家族との時間が、いつも余白になる。", p: "仕事の残りで家庭を回している。本当は最初に置きたい時間のはずが、いつも「あとで」になっている。" },
  { n: "03", t: "自分の人生の時間軸が、見えない。", p: "5年後・10年後の自分を想像できない。今日の一日が、どこに繋がっているのか、わからないまま走っている。" },
  { n: "04", t: "手帳は埋まる。けれど、満たされない。", p: "スケジュールはびっしり。予定通りに動けている。なのに、なぜか心が痩せていく感覚がある。" }];

  return (
    <section id="empathy" className="section empathy">
      <div className="wrap">
        <SectionHead
          num="01"
          en="The Symptom — 兆候"
          ja={<span>もしあなたが、<em>「時間に追われている」</em>と<br />感じているのなら。</span>}
          lead="それは怠慢でも能力不足でもありません。私たちが時間を、自分の外側にある『計測されるもの』としてしか扱ってこなかった、その文化の結果です。" />

        <Reveal>
          <TimeQuote
            jp="時は金なり。── あなたが浪費している時間は、二度と取り戻せない。"
            en="Time is money. — Lost time is never found again."
            who="ベンジャミン・フランクリン" />
        </Reveal>

        <Reveal>
          <div className="empathy-grid">
            {pains.map((p) =>
            <div className="empathy-card" key={p.n}>
                <div className="pain-num">SYMPTOM / {p.n}</div>
                <h3>{p.t}</h3>
                <p>{p.p}</p>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ImageBand
            src={CLOCK_IMAGES.iconGrid}
            lat="CLOCKS"
            ja="針と時間のリズムを、視覚で感じる"
          />
        </Reveal>
      </div>
    </section>);

}

function Pillars() {
  const items = [
  {
    n: "I", kanji: "序", title: "エントロピーに抗う",
    label: "Physics — 物理学が語る時間",
    body: "宇宙の時間はエントロピー増大の法則に従い、常に秩序から混沌へと一方通行で流れる。放っておけば散らばる。けれど人間にはその流れに「意味」を投じ、秩序を編み直す力がある。",
    quote: "時間は決して後戻りできない。だからこそ、こちらから能動的に編み直す。"
  },
  {
    n: "II", kanji: "質", title: "クオリアを生む",
    label: "Psychology — 心理学が語る時間",
    body: "人間に「時間を測る器官」はない。脳が推測し、心が感じることで初めて時間は現れる。1時間の量は同じでも、その質（クオリア）はあなたの内側で無限に変化する。",
    quote: "時間は使うものではない。内側から湧き上がらせるものだ。"
  },
  {
    n: "III", kanji: "覚", title: "引き受ける覚悟",
    label: "Philosophy — 哲学が導く時間",
    body: "自分の人生を受動的に生きるのではなく、能動的に引き受ける。引き受けなければならない。目の前のタスク、目の前の人、目の前の喜怒哀楽から逃げず、自分の人生として引き受ける覚悟を持つこと。",
    quote: "その姿勢こそが、質の高い時間を「創り出す」唯一の方法である。"
  }];

  return (
    <section id="philosophy" className="section pillars">
      <div className="wrap">
        <SectionHead
          num="02"
          en="The Foundation — 三つの土台"
          ja={<span>時間学が示す、<br />三つの真実。</span>}
          lead="物理学・心理学・哲学。三つの異なる視点が、ひとつの結論に向かう。──時間とは、外から与えられるものではなく、内側から創り出すものである。" />

        <Reveal>
          <TimeQuote
            align="right"
            jp="我々は短い時間を持っているのではない。多くの時間を浪費しているのだ。"
            en="It is not that we have a short time to live, but that we waste a lot of it."
            who="セネカ（古代ローマの哲学者）" />
        </Reveal>
        
        <Reveal delay={120}>
          <ClockImagePair
            a={{ src: CLOCK_IMAGES.pocketWatch, ja: "今この瞬間を刻む" }}
            b={{ src: CLOCK_IMAGES.towerClock, ja: "時間の構造を感じる" }}
          />
        </Reveal>

        <Reveal>
          <div className="pillar-row">
            {items.map((it) =>
            <div className="pillar" key={it.n}>
                <div className="kanji">{it.kanji}</div>
                <div className="pillar-meta">
                  <span className="num">CHAPTER {it.n}</span>
                </div>
                <h3>{it.title}</h3>
                <div className="label">{it.label}</div>
                <p>{it.body}</p>
                <blockquote>「{it.quote}」</blockquote>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>);

}

// Three time axes interactive
function Axes() {
  const [age, setAge] = React.useState(38);
  const lifeMax = 100;

  // events for each axis: {age, label, sub}
  const lifeEvents = [
  { age: 0, label: "誕生", sub: "start" },
  { age: 18, label: "自立", sub: "自分の人生を歩み始める" },
  { age: 30, label: "確立", sub: "職業・家族の基盤" },
  { age: 50, label: "転換", sub: "人生後半の入口" },
  { age: 70, label: "成熟", sub: "知恵を渡す時間" },
  { age: 85, label: "円熟", sub: "深い知恵が輝く" },
  { age: 92, label: "自由", sub: "ただ在ることを楽しむ" },
  { age: 100, label: "祝祭", sub: "人生の最高傑作" }];

  const workEvents = [
  { age: 22, label: "入社" },
  { age: 30, label: "中核" },
  { age: 42, label: "管理職" },
  { age: 55, label: "後進育成" },
  { age: 65, label: "卒業" },
  { age: 75, label: "新たな貢献" },
  { age: 88, label: "知恵の継承" }];

  const familyEvents = [
  { age: 28, label: "結婚" },
  { age: 32, label: "子の誕生" },
  { age: 50, label: "子の独立" },
  { age: 65, label: "孫" },
  { age: 80, label: "家族の集い" },
  { age: 95, label: "永続する絆" }];


  const pct = (a) => Math.min(100, Math.max(0, a / lifeMax * 100));
  const nowPct = pct(age);

  // What "qualia" (quality) summary based on age
  const qualia = (() => {
    if (age < 25) return { label: "探究の時間", body: "未完了。可能性が散らばっている時期。" };
    if (age < 40) return { label: "加速の時間", body: "密度が最も高い。今を引き受ける訓練を。" };
    if (age < 55) return { label: "再編の時間", body: "持っているものを、何に使うかを問い直す。" };
    if (age < 70) return { label: "贈与の時間", body: "得たものを、次へ手渡していく。" };
    if (age < 85) return { label: "円熟の時間", body: "重ねた経験が、深い知恵となって輝き出す。" };
    if (age < 95) return { label: "自由の時間", body: "何にも縛られず、ただ「在る」ことを楽しむ黄金期。" };
    return { label: "祝祭の時間", body: "100年生きた人だけに見える景色がある。今この瞬間こそ、人生の最高傑作。" };
  })();

  const renderTrack = (events, below = false) =>
  <div className="axis-track">
      <div className="axis-line" style={{ "--axis-progress": nowPct + "%" }} />
      {events.map((e, i) =>
    <React.Fragment key={i}>
          <div className={`axis-tick ${e.age <= age ? "passed" : ""} ${Math.abs(e.age - age) < 2 ? "now" : ""}`}
      style={{ left: pct(e.age) + "%" }} />
          <div className={`axis-event ${below ? "below" : ""}`}
      style={{ left: pct(e.age) + "%", [below ? "top" : "bottom"]: "26px" }}>
            <strong>{e.label}</strong>
            <span style={{ opacity: .6, fontSize: "10px" }}>{e.age}歳</span>
          </div>
        </React.Fragment>
    )}
      <div className="axis-now-line" style={{ "--now-x": nowPct + "%" }} />
    </div>;


  return (
    <section id="axes" className="section axes">
      <div className="wrap">
        <SectionHead
          num="03"
          en="Three Timelines — 三つの時間軸"
          ja={<span>あなたの人生は、<br />三つの時間が同時に流れている。</span>}
          lead="人生・仕事・家庭。三つの時間は、それぞれ違うリズムで進む。下のスライダーをあなたの年齢に合わせて動かしてみてください。" />

        <Reveal>
          <div className="axes-howto">
            <div className="axes-howto-step">
              <span className="step-num">①</span>
              <span className="step-text">下のスライダーを<strong>あなたの年齢</strong>に合わせる</span>
            </div>
            <div className="axes-howto-arrow" aria-hidden="true">→</div>
            <div className="axes-howto-step">
              <span className="step-num">②</span>
              <span className="step-text">人生・仕事・家庭の <strong>「いま」</strong> を確認</span>
            </div>
            <div className="axes-howto-arrow" aria-hidden="true">→</div>
            <div className="axes-howto-step">
              <span className="step-num">③</span>
              <span className="step-text">残された時間の <strong>「質」</strong> を考える</span>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="axes-stage">
            <div className="stage-head">
              <div>
                <div className="age-display"><em>{age}</em>歳・<em>{Math.round(nowPct)}</em>%地点</div>
                <div className="age-sub">{qualia.label} — {qualia.body}</div>
              </div>
              <div className="axis-legend">
                <span><i style={{ background: "var(--accent)" }} />経過</span>
                <span><i style={{ background: "var(--rule)" }} />未来</span>
              </div>
            </div>

            <div className="axis-rails">
              <div className="axis-rail">
                <div className="axis-label">人生<span className="en">LIFE</span></div>
                {renderTrack(lifeEvents, false)}
              </div>
              <div className="axis-rail">
                <div className="axis-label">仕事<span className="en">WORK</span></div>
                {renderTrack(workEvents, true)}
              </div>
              <div className="axis-rail">
                <div className="axis-label">家庭<span className="en">FAMILY</span></div>
                {renderTrack(familyEvents, false)}
              </div>
            </div>

            <div className="scrubber-wrap">
              <label className="scrubber-label">
                <span className="scrubber-arrow" aria-hidden="true">⇣</span>
                ここを動かしてください — あなたの今の年齢
              </label>
              <div className="scrubber-row">
                <span className="scrubber-end">18</span>
                <input type="range" className="scrubber" min="18" max="100" value={age}
                onChange={(e) => setAge(+e.target.value)} />
                <span className="scrubber-end">100</span>
                <div className="scrubber-val">{age}歳</div>
              </div>
            </div>

            <blockquote className="axes-quote">
              「自分の人生を受動的に生きるのではなく、<em>能動的に引き受ける</em>。<br />
              引き受けなければならないんだ。そういうことを教えてくれる。これが、時間。」
              <cite>— 哲学者・植村恒一郎</cite>
            </blockquote>
          </div>
        </Reveal>
      </div>
    </section>);

}

function Method() {
  const steps = [
  { n: "01", t: "棚卸し", body: "いま自分が抱えている時間を、人生・仕事・家庭の三軸に分解。受動的に流れている時間を可視化する。" },
  { n: "02", t: "問い直し", body: "その時間は、自分が能動的に「引き受けた」時間か。それとも、誰かの予定に貸している時間か。" },
  { n: "03", t: "質の設計", body: "1時間の量ではなく、その1時間に持たせたい『クオリア』を先に決める。質から逆算する手帳術。" },
  { n: "04", t: "今の所作", body: "今日の一手を、明日の自分に手渡す。手帳に毎日書き込む、3分間の所作で習慣化する。" }];

  return (
    <section id="method" className="section method">
      <div className="wrap">
        <SectionHead
          num="04"
          en="The Method — 時間創造メソッド"
          ja={<span>四つの所作で、<br />時間を「創る」側へ回る。</span>}
          lead="セミナーで学ぶのは、特別な精神論ではありません。明日の朝、手帳の最初の1ページから始められる、四つの実践的な所作です。" />

        <Reveal>
          <TimeQuote
            jp="時間は、最も乏しい資源である。それを管理できなければ、他の何物をも管理することはできない。"
            en="Time is the scarcest resource. Unless it is managed, nothing else can be managed."
            who="P.F.ドラッカー" />
        </Reveal>
        

        <Reveal>
          <div className="method-grid">
            {steps.map((s) =>
            <div className="method-step" key={s.n}>
                <div className="step-num">{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.body}</p>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="method-tehou">
            <div className="tehou-text">
              <div className="eyebrow"><span className="num">—</span>The Notebook</div>
              <h3>『時間創造手帳』<br />──質から逆算する一週間。</h3>
              <p>
                セミナー受講者には、当部が独自に設計した『時間創造手帳』をお渡しします。
                左ページに「今週、どんなクオリアを生むか」を書き、右ページにそのための時間配分を置く。
                量ではなく質から設計する、新しい手帳の使い方です。
              </p>
              <p style={{ color: "var(--accent)", fontFamily: "var(--display)", fontStyle: "italic", fontSize: 18 }}>
                ※ 体験会でも実物を手にとってご覧いただけます。
              </p>
            </div>
            <div className="tehou-mock" aria-hidden="true">
              <div className="tehou-mock-head">
                <div className="month">5月 第3週</div>
                <div className="week">QUALIA / 能動の質</div>
              </div>
              <div className="tehou-row gold"><span className="t">06:30</span><span className="e">家族と朝食、対話</span><span className="tag">家庭</span></div>
              <div className="tehou-row"><span className="t">09:00</span><span className="e">深い集中の2時間</span><span className="tag">仕事</span></div>
              <div className="tehou-row"><span className="t">12:30</span><span className="e">独りの30分・歩く</span><span className="tag">人生</span></div>
              <div className="tehou-row"><span className="t">15:00</span><span className="e">対話のための会議</span><span className="tag">仕事</span></div>
              <div className="tehou-row gold"><span className="t">19:00</span><span className="e">子と読書の時間</span><span className="tag">家庭</span></div>
              <div className="tehou-row"><span className="t">22:00</span><span className="e">明日の質を書き出す</span><span className="tag">人生</span></div>
              <div className="tehou-stamp">時間<br />創造<br />SOZO</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}

function Seminar() {
  const bullets = [
  "物理学・心理学・哲学から見た「時間の正体」",
  "受動的な時間と、能動的に創り出す時間の違い",
  "三つの時間軸（人生・仕事・家庭）の整え方",
  "『時間創造手帳』の使い方ワークショップ",
  "1ヶ月後の自分への、最初の一手の設計",
  "参加者全員との対話・個別質疑応答"];

  return (
    <section id="seminar" className="section seminar">
      <div className="wrap">
        <Reveal>
          <TimeQuote
            align="right"
            jp="あなたの時間は限られている。だから、他人の人生を生きて、その時間を無駄にしてはいけない。"
            en="Your time is limited, so don't waste it living someone else's life."
            who="スティーブ・ジョブズ" />
        </Reveal>
        <SectionHead
          num="05"
          en="The Seminar — 一夜限りの招集"
          ja={<span>2026.<em style={{ fontStyle: "normal", color: "var(--accent)" }}>7月7日</em>、<br />この日に集結してください。</span>}
          lead={<>七夕の夜、一回限りのオンラインセミナー。参加費<strong style={{ color: "var(--accent)" }}>7,777円</strong>、先着<strong style={{ color: "var(--accent)" }}>77名</strong>限定。「時間」を御諸共に、夜を越える一夜。</>} />
        

        <Reveal>
          <div className="seminar-card">
            <div className="seminar-tag">● 2026.07.07 / Zoom開催 / 先着77名</div>
            <h3>
              時間とは、何か？<br />
              ──最新の<span className="accent">「時間学」</span>が明かす、<br />
              人生の質を変える考え方。
            </h3>
            <p className="lede">
              物理学・心理学・哲学を統合した「時間学」という新しい知の領域から、
              受動的な時間を能動的に引き受け直すための具体的な手法をお伝えします。
              講師は、書籍『時間創造部』著者・矢部 大。
            </p>

            <div className="seminar-info">
              <div>
                <div className="k">DATE — 開催日</div>
                <div className="v">2026.07.07 (火)<small>20:00 — 22:00 / 一夜限り</small></div>
              </div>
              <div>
                <div className="k">FORMAT — 形式</div>
                <div className="v">Zoomオンライン<small>お申込みの方へ前日にURLをお送り</small></div>
              </div>
              <div>
                <div className="k">FEE — 参加費</div>
                <div className="v">¥7,777<small>先着77名限定・定員になり次第〆切</small></div>
              </div>
            </div>

            <ul className="seminar-bullets">
              {bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>

            <div className="hero-cta-row" style={{ marginTop: 0 }}>
              <a href="#contact" className="btn btn-primary">7月7日の席を確保する <span className="arrow">→</span></a>
              <a href="#contact" className="btn btn-ghost">セミナーについて質問する <span className="arrow">→</span></a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}

function Testimonials() {
  const list = [
  { q: "スケジュールが詰まっていることが、優秀さの証だと思っていました。受講後は、空白の時間を意図して置けるように。家族との夕食が変わりました。", who: "K. 田村さん", role: "40代・製造業 部長" },
  { q: "『質から逆算する』という考え方が、まったく新しかった。手帳を開くのが楽しみになる、というのを大人になって初めて経験しています。", who: "M. 佐々木さん", role: "30代・経営者" },
  { q: "60代から人生をどう過ごすか、漠然と不安だった。でも『完了ではなく完結』という言葉に、肩の力が抜けました。今が一番、能動的です。", who: "H. 中島さん", role: "60代・元・公務員" }];

  return (
    <section id="testimonials" className="section testimonials">
      <div className="wrap">
        <SectionHead
          num="06"
          en="Voices — 受講生の声"
          ja={<span>時間が変われば、<br />生き方の質が変わる。</span>}
          lead="20代から60代まで、これまでに矢部の指導を受けた方々の一部をご紹介します。" />
        
        <Reveal>
          <div className="testi-grid">
            {list.map((t, i) =>
            <div className="testi-card" key={i}>
                <div className="testi-quote-mark">&ldquo;</div>
                <blockquote>{t.q}</blockquote>
                <div className="testi-author">
                  <div className="testi-avatar">{t.who.split(".")[0].trim()}</div>
                  <div className="who">{t.who}<small>{t.role}</small></div>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>);

}

function Instructor() {
  return (
    <section id="instructor" className="section instructor" style={{ fontFamily: "\"Shippori Mincho\"" }}>
      <div className="wrap">
        <SectionHead
          num="07"
          en="The Teacher — 講師"
          ja={<span>『時間創造部』著者、<br />矢部 大。</span>} />
        
        <Reveal>
          <div className="ins-grid">
            <div className="ins-portrait ins-portrait-photo">
              <div className="ins-clock-bg" aria-hidden="true">
                <ClockMotif size={520} hour={10} minute={10} opacity={.45} />
              </div>
              <div className="ins-portrait-img">
                <img src="assets/yabe-portrait.jpg" alt="矢部 大" />
              </div>
              <div className="name-mark">
                矢部 大<br />
                <small>YABE MASARU / 時間創造部 著者</small>
              </div>
            </div>
            <div className="ins-bio">
              <div className="eyebrow"><span className="num">—</span>Profile</div>
              <h3>矢部 大（やべ まさる）</h3>
              <div className="role">『時間創造部』著者 / 株式会社クオリティマネジメント 代表取締役</div>
              <p>「時間とは何か」という問いを軸に、物理学・心理学・哲学を横断する「時間学」を探求。 経営革命・業績保証を掲げる株式会社クオリティマネジメント（1989年創業）の創業者カリスマ的営業セミナー講師：矢部廣重から師事。2023年に代表取締役として、 経営者・ビジネスパーソンへの指導を重ねてきた。



              </p>
              <p>
                著書『時間創造部』では、「受動的な時間」から「能動的に引き受ける時間」へ転換するための
                手帳術と人生設計論を提示。本セミナーでは、その中核となる考え方と、明日から使える具体的な手順を語る。
              </p>
              <p style={{ marginTop: 8 }}>
                <a href="https://yabemasaru.site/" target="_blank" rel="noopener"
                style={{ color: "var(--accent)", borderBottom: "1px solid currentColor", fontFamily: "var(--latin)", fontStyle: "italic", letterSpacing: ".1em", fontSize: 14 }}>
                  yabemasaru.site — 公式サイトを見る ↗
                </a>
              </p>
              <div className="ins-creds">
                <div><div className="n">４<sup>冊</sup></div><div className="l">著書『時間創造部』</div></div>
                <div><div className="n">２５<sup>年</sup></div><div className="l">QM・経営指導の歴</div></div>
                <div><div className="n">QM</div><div className="l">クオリティマネジメント</div></div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}

function FAQ() {
  const items = [
  { q: "参加費は、いくらですか?", a: "参加費は7,777円（税込）です。先着77名限定でお申込みを承っており、定員になり次第〆切とさせていただきます。お早めにお申込みください。" },
  { q: "オンラインのみの開催ですか?", a: "はい、本セミナーはZoomによるオンライン開催のみです。お申込みいただいた方へ、開催前日までにZoom URLをメールでお送りいたします。" },
  { q: "手帳を使うのが苦手ですが、大丈夫でしょうか?", a: "問題ありません。むしろ「手帳を続けられなかった」という方のためのメソッドです。一日3分から始められる、最小単位の所作からお伝えします。" },
  { q: "忙しくて、なかなか時間が取れません。", a: "その「時間が取れない」という感覚こそが、まさに本セミナーで扱うテーマです。7月7日の夜、120分間だけ、ご自身のために時間を引き受けてみてください。" },
  { q: "年齢層は、どれくらいの方が参加していますか?", a: "20代の若手社会人から60代の方まで、幅広くご参加いただいています。世代によって時間との付き合い方は違いますが、「能動的に引き受ける」という根本は同じです。" }];

  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" className="section">
      <div className="wrap">
        <Reveal>
          <TimeQuote
            jp="明日死ぬかのように生きよ。永遠に生きるかのように学べ。"
            en="Live as if you were to die tomorrow. Learn as if you were to live forever."
            who="マハトマ・ガンディー" />
        </Reveal>
        <SectionHead
          num="08"
          en="Questions — よくある質問"
          ja={<span>はじめての方が、<br />よく聞かれること。</span>} />
        
        <Reveal>
          <div className="faq-list">
            {items.map((it, i) =>
            <div className={`faq-item ${open === i ? "open" : ""}`} key={i}>
                <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span className="qn">Q.0{i + 1}</span>
                  <span className="qt">{it.q}</span>
                  <span className="toggle" />
                </button>
                <div className="faq-a"><div className="faq-a-inner">{it.a}</div></div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>);

}

function BlogThumb({ i }) {
  // Three abstract clock motifs, color-shifted
  const motifs = [

  <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="g1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity=".4" />
            <stop offset="100%" stopColor="var(--ink-2)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="250" fill="var(--ink-3)" />
        <circle cx="200" cy="125" r="120" fill="url(#g1)" />
        <circle cx="200" cy="125" r="80" fill="none" stroke="var(--paper)" strokeWidth=".5" opacity=".4" />
        <circle cx="200" cy="125" r="100" fill="none" stroke="var(--paper)" strokeWidth=".4" opacity=".25" />
        <line x1="200" y1="125" x2="200" y2="55" stroke="var(--accent)" strokeWidth="1.5" />
        <line x1="200" y1="125" x2="248" y2="160" stroke="var(--paper)" strokeWidth="1" opacity=".7" />
        <circle cx="200" cy="125" r="3" fill="var(--accent)" />
      </svg>,


  <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="250" fill="var(--ink-3)" />
        {Array.from({ length: 14 }).map((_, k) =>
    <line key={k} x1={k * 30 + 10} y1="0" x2={k * 30 + 10} y2="250" stroke="var(--paper)" strokeWidth=".4" opacity={k % 4 === 0 ? .45 : .18} />
    )}
        <line x1="220" y1="0" x2="220" y2="250" stroke="var(--accent)" strokeWidth="1.5" />
        <text x="225" y="30" fill="var(--accent)" fontFamily="var(--display)" fontWeight="700" fontSize="18">今</text>
        <circle cx="220" cy="125" r="8" fill="var(--accent)" />
        <circle cx="220" cy="125" r="14" fill="none" stroke="var(--accent)" strokeWidth=".5" />
      </svg>,


  <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="250" fill="var(--ink-3)" />
        <path d="M30 200 Q120 80 200 130 T370 70" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
        <path d="M30 220 Q120 200 200 195 T370 180" fill="none" stroke="var(--paper)" strokeWidth=".7" opacity=".55" />
        <path d="M30 50 Q120 130 200 110 T370 220" fill="none" stroke="var(--paper)" strokeWidth=".5" opacity=".35" />
        <text x="40" y="40" fill="var(--paper)" fontFamily="var(--latin)" fontStyle="italic" fontSize="13" opacity=".5">ENTROPY</text>
      </svg>];


  return motifs[i % 3];
}

function Blog() {
  const posts = [
  { date: "2026.04.18", cat: "PHILOSOPHY", t: "アスペクトという視点 ── 時間は『未完了/完了/完結』で位置づけられる。" },
  { date: "2026.04.02", cat: "PSYCHOLOGY", t: "なぜ熱中する1時間は、一瞬で過ぎるのか。脳の『推測』としての時間感覚。" },
  { date: "2026.03.21", cat: "METHOD", t: "手帳の左ページに『質』を、右ページに『量』を。一週間の組み立て方。" }];

  return (
    <section id="blog" className="section blog">
      <div className="wrap">
        <SectionHead
          num="09"
          en="Journal — 時間学コラム"
          ja={<span>時間について、<br />静かに考える場所。</span>}
          lead="セミナーで扱いきれない、より深い時間学の話題を綴っています。" />
        
        <Reveal>
          <div className="blog-grid">
            {posts.map((p, i) =>
            <a className="blog-card" href="#" key={i}>
                <div className="blog-thumb"><BlogThumb i={i} /></div>
                <div className="meta"><span>{p.date}</span><span>{p.cat}</span></div>
                <h4>{p.t}</h4>
                <div className="read">READ — 続きを読む →</div>
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>);

}

function Contact() {
  const [form, setForm] = React.useState({
    name: "", address: "", age: "30代", gender: "未回答", contact: "", comment: ""
  });
  const [submitted, setSubmitted] = React.useState(false);
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const body = [
    "■ 時間創造部 セミナー（2026.07.07）お申込み",
    "",
    "お名前: " + form.name,
    "ご住所: " + form.address,
    "年齢:   " + form.age,
    "性別:   " + form.gender,
    "連絡先: " + form.contact,
    "",
    "─ このセミナーで聞きたいこと ─",
    form.comment].
    join("\n");
    const subject = "【時間創造部】7/7セミナー お申込み: " + form.name;
    const mailto = "mailto:yabemasaru23@gmil.com" +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section contact">
      <div className="wrap">
        <Reveal>
          <div className="contact-card">
            <div>
              <div className="eyebrow"><span className="num">10</span>Apply — 7/7 セミナーお申込み</div>
              <h2>あなたの「<span className="accent">今</span>」を、<br />七夕の夜に集結する。</h2>
              <p>
                2026年7月7日（火）20:00 — 22:00 / Zoom開催。<br />
                参加費 ¥7,777・先着77名限定。<br />
                ──下記フォームよりお申込みください。送信ボタンを押すと、メールアプリが開きます。
              </p>
              <div className="info-row"><span className="k">DATE —</span><span className="v">2026.07.07 (火) 20:00 — 22:00</span></div>
              <div className="info-row"><span className="k">FEE —</span><span className="v">¥7,777 / 先着77名</span></div>
              <div className="info-row"><span className="k">MAIL —</span><span className="v">yabemasaru23@gmil.com</span></div>
              <div className="info-row"><span className="k">SITE —</span><span className="v"><a href="https://yabemasaru.site/" target="_blank" rel="noopener" style={{ color: "var(--accent)" }}>yabemasaru.site ↗</a></span></div>
            </div>
            {submitted ?
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 14, minHeight: 320, textAlign: "center" }}>
                <div style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 32, color: "var(--accent)" }}>メールアプリを開きました。</div>
                <p style={{ color: "var(--muted)" }}>
                  そのまま送信ボタンを押してください。<br />
                  確認後、3営業日以内にご返信いたします。<br /><br />
                  ※ メールが起動しない場合は、<br />
                  <strong style={{ color: "var(--paper)" }}>yabemasaru23@gmil.com</strong> 宛にお送りください。
                </p>
                <button className="btn btn-ghost" onClick={() => setSubmitted(false)}>もう一度入力する</button>
              </div> :

            <form className="contact-form" onSubmit={onSubmit}>
                <div className="form-grid">
                  <div className="field">
                    <label>お名前 <span style={{ color: "var(--accent)" }}>*</span></label>
                    <input required value={form.name} onChange={update("name")} placeholder="山田 太郎" />
                  </div>
                  <div className="field">
                    <label>連絡先（メール / 電話）<span style={{ color: "var(--accent)" }}>*</span></label>
                    <input required value={form.contact} onChange={update("contact")} placeholder="you@example.com / 090-0000-0000" />
                  </div>
                </div>
                <div className="field">
                  <label>ご住所 <span style={{ color: "var(--accent)" }}>*</span></label>
                  <input required value={form.address} onChange={update("address")} placeholder="東京都〇〇区〇〇 0-0-0" />
                </div>
                <div className="form-grid">
                  <div className="field">
                    <label>年齢</label>
                    <select value={form.age} onChange={update("age")}>
                      <option>20代</option><option>30代</option><option>40代</option>
                      <option>50代</option><option>60代以上</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>性別</label>
                    <select value={form.gender} onChange={update("gender")}>
                      <option>男性</option><option>女性</option>
                      <option>その他</option><option>未回答</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label>このセミナーで聞きたいこと・コメント</label>
                  <textarea value={form.comment} onChange={update("comment")} placeholder="「時間」について、いま気になっていること・聞いてみたいことを自由にお書きください。" style={{ minHeight: 120 }} />
                </div>
                <button type="submit" className="btn btn-primary form-submit">7月7日の席を確保する <span className="arrow">→</span></button>
                <small style={{ color: "var(--muted)", fontSize: 11, marginTop: 6, letterSpacing: ".06em" }}>
                  ※ 送信ボタンを押すとメールアプリが開きます。そのまま送信してください。
                </small>
              </form>
            }
          </div>
        </Reveal>
      </div>
    </section>);

}

function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Brand />
            <p style={{ marginTop: 18, fontSize: 13, color: "var(--muted)", lineHeight: 1.85, maxWidth: "36ch" }}>
              時間に追われる人生から、<br />時間を創り出す人生へ。<br />
              ──時間学を、暮らしの中へ。
            </p>
            <div style={{ marginTop: 20, display: "inline-block" }}>
              <img src="assets/qm-logo-transparent.png" alt="Quality Management" className="qm-logo-mono" style={{ height: 36, display: "block" }} />
            </div>
            <p style={{ marginTop: 10, fontSize: 11, color: "var(--muted)", letterSpacing: ".06em" }}>運営：株式会社クオリティマネジメント</p>
          </div>
          <div>
            <h5>セクション</h5>
            <ul>
              <li><a href="#empathy">兆候</a></li>
              <li><a href="#philosophy">三つの土台</a></li>
              <li><a href="#axes">時間軸</a></li>
              <li><a href="#method">メソッド</a></li>
            </ul>
          </div>
          <div>
            <h5>セミナー</h5>
            <ul>
              <li><a href="#seminar">体験会</a></li>
              <li><a href="#instructor">講師紹介</a></li>
              <li><a href="#testimonials">受講生の声</a></li>
              <li><a href="#faq">よくある質問</a></li>
            </ul>
          </div>
          <div>
            <h5>その他</h5>
            <ul>
              <li><a href="#blog">コラム</a></li>
              <li><a href="#company">会社概要</a></li>
              <li><a href="#contact">お問い合わせ</a></li>
              <li><a href="#">プライバシーポリシー</a></li>
              <li><a href="#">特定商取引法に基づく表記</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 時間創造部 — JIKAN SOZO BU</span>
          <span style={{ fontFamily: "var(--latin)", fontStyle: "italic" }}>Live in the Now.</span>
        </div>
      </div>
    </footer>);

}

function Company() {
  const rows = [
  { k: "会社名", v: "株式会社クオリティマネジメント" },
  { k: "設立", v: "平成1年（1989年）5月30日" },
  { k: "資本金", v: "1,000万円" },
  { k: "本店所在地", v: "東京都八王子市めじろ台四丁目26番地15" },
  { k: "役員構成", v: <>取締役：矢部 廣重（創業者・思想家）<br />代表取締役：矢部 大</> },
  { k: "事業内容", v: "経営コンサルティング（営業革命・業績保証）" }];

  return (
    <section id="company" className="section" style={{ background: "var(--ink-2)" }}>
      <div className="wrap">
        <SectionHead num="11" en="Company — 会社概要" ja={<span>運営会社のご案内。</span>} />
        <Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "48px", alignItems: "start" }} className="company-grid">
            <div className="company-logo-card">
              <img src="assets/qm-logo-transparent.png" alt="Quality Management" className="qm-logo-mono" style={{ maxWidth: 220, width: "100%", display: "block", margin: "0 auto" }} />
              <div style={{ marginTop: 14, fontFamily: "var(--display)", color: "var(--paper)", fontSize: 13, letterSpacing: ".06em" }}>株式会社クオリティマネジメント</div>
            </div>
            <div>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14.5 }}>
                <tbody>
                  {rows.map((r, i) =>
                  <tr key={i} style={{ borderBottom: "1px solid var(--rule)" }}>
                      <th style={{ textAlign: "left", padding: "18px 28px 18px 0", color: "var(--accent)", fontFamily: "var(--latin)", fontStyle: "italic", fontWeight: 400, letterSpacing: ".1em", width: 140, verticalAlign: "top" }}>{r.k}</th>
                      <td style={{ padding: "18px 0", color: "var(--paper)", lineHeight: 1.7 }}>{r.v}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}

Object.assign(window, {
  Hero, Empathy, Pillars, Axes, Method, Seminar,
  Testimonials, Instructor, FAQ, Blog, Contact, Company, Footer
});