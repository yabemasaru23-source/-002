// components.jsx — shared visual components for 時間創造部

// Live ticking clock (analog SVG)
function LiveClock({size=520, ticking=true}){
  const [now, setNow] = React.useState(new Date());
  React.useEffect(() => {
    if(!ticking) return;
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, [ticking]);
  const s = now.getSeconds();
  const m = now.getMinutes() + s/60;
  const h = (now.getHours()%12) + m/60;
  const sa = (s/60)*360 - 90;
  const ma = (m/60)*360 - 90;
  const ha = (h/12)*360 - 90;
  const cx=size/2, cy=size/2;
  const r=size*0.46;
  const pol = (a,len) => {
    const rad = a*Math.PI/180;
    return [cx+Math.cos(rad)*len, cy+Math.sin(rad)*len];
  };
  const ticks = [];
  for(let i=0;i<60;i++){
    const a = i*6 - 90;
    const isHour = i%5===0;
    const len = isHour ? size*0.04 : size*0.012;
    const [x1,y1] = pol(a, r);
    const [x2,y2] = pol(a, r-len);
    ticks.push(<line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
      stroke="currentColor" strokeWidth={isHour?1.4:0.6} opacity={isHour?.7:.3}/>);
  }
  const [hx,hy] = pol(ha, r*0.55);
  const [mx,my] = pol(ma, r*0.78);
  const [sx,sy] = pol(sa, r*0.86);
  return (
    <svg viewBox={`0 0 ${size} ${size}`} style={{width:"100%",height:"100%",color:"var(--paper)"}}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="currentColor" strokeWidth="0.8" opacity=".25"/>
      <circle cx={cx} cy={cy} r={r*0.94} fill="none" stroke="currentColor" strokeWidth="0.4" opacity=".15"/>
      <circle cx={cx} cy={cy} r={r*0.62} fill="none" stroke="currentColor" strokeWidth="0.4" opacity=".1"/>
      {ticks}
      {/* hour numerals (latin) */}
      {[12,3,6,9].map((n,i) => {
        const a = (i*90) - 90;
        const [x,y] = pol(a, r*0.82);
        return <text key={n} x={x} y={y} textAnchor="middle" dominantBaseline="middle"
          fontFamily="var(--latin)" fontStyle="italic" fontSize={size*0.045} opacity=".55" fill="currentColor">{n}</text>;
      })}
      {/* IMA marker pointing top */}
      <text x={cx} y={cy - r*0.36} textAnchor="middle" dominantBaseline="middle"
        fontFamily="var(--display)" fontWeight="700" fontSize={size*0.06} fill="var(--accent)">今</text>
      {/* hands */}
      <line x1={cx} y1={cy} x2={hx} y2={hy} stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
      <line x1={cx} y1={cy} x2={mx} y2={my} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity=".85"/>
      <line x1={cx} y1={cy} x2={sx} y2={sy} stroke="var(--accent)" strokeWidth="1" strokeLinecap="round"/>
      <circle cx={cx} cy={cy} r="3" fill="var(--accent)"/>
    </svg>
  );
}

// Live time label
function LiveTime(){
  const [n, setN] = React.useState(new Date());
  React.useEffect(() => {
    const id = setInterval(() => setN(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (x) => String(x).padStart(2,"0");
  const dows = ["日","月","火","水","木","金","土"];
  return (
    <div className="hero-time">
      <span className="big tabular">{pad(n.getHours())}:{pad(n.getMinutes())}<span style={{color:"var(--accent)",fontStyle:"italic"}}>:{pad(n.getSeconds())}</span></span>
      <span>{n.getFullYear()}.{pad(n.getMonth()+1)}.{pad(n.getDate())} ({dows[n.getDay()]})  ·  JST</span>
    </div>
  );
}

// Reveal-on-scroll wrapper
function Reveal({children, delay=0, className=""}){
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if(!el) return;
    const io = new IntersectionObserver(([e]) => {
      if(e.isIntersecting){
        setTimeout(() => el.classList.add("in"), delay);
        io.disconnect();
      }
    },{threshold:.12});
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

// Section header
function SectionHead({num, ja, en, lead, light=false}){
  return (
    <Reveal>
      <div className="section-head">
        <div className="num">{num}</div>
        <div>
          <div className="eyebrow"><span className="num" style={{fontStyle:"italic"}}>—</span>{en}</div>
          <h2 style={{marginTop:14}}>{ja}</h2>
          {lead && <p className="lead">{lead}</p>}
        </div>
      </div>
    </Reveal>
  );
}

// Brand mark + name — refined clock-symbol logo
function Brand(){
  return (
    <a href="#top" className="brand">
      <div className="mark mark-logo" aria-label="時間創造部">
        <svg viewBox="0 0 60 60" width="40" height="40">
          {/* outer ring */}
          <circle cx="30" cy="30" r="28" fill="none" stroke="var(--paper)" strokeWidth="1.2"/>
          {/* hour ticks */}
          {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => {
            const a = i*30 - 90;
            const rad = a*Math.PI/180;
            const x1 = 30 + Math.cos(rad)*26;
            const y1 = 30 + Math.sin(rad)*26;
            const x2 = 30 + Math.cos(rad)*(i%3===0?22:24);
            const y2 = 30 + Math.sin(rad)*(i%3===0?22:24);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--paper)" strokeWidth={i%3===0?1.2:.6} opacity={i%3===0?.85:.45}/>;
          })}
          {/* hands forming a stylised "時" */}
          <line x1="30" y1="30" x2="30" y2="14" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round"/>
          <line x1="30" y1="30" x2="44" y2="30" stroke="var(--paper)" strokeWidth="1.4" strokeLinecap="round"/>
          <circle cx="30" cy="30" r="2.2" fill="var(--accent)"/>
        </svg>
      </div>
      <div className="name">時間創造部<small>JIKAN — SOZO — BU</small></div>
    </a>
  );
}

// Decorative clock motif for in-section use
function ClockMotif({size=240, hour=10, minute=10, opacity=.5, accent=true, label}){
  const ha = ((hour%12) + minute/60)/12 * 360 - 90;
  const ma = (minute/60) * 360 - 90;
  const polR = (a, len) => {
    const rad = a*Math.PI/180;
    return [size/2 + Math.cos(rad)*len, size/2 + Math.sin(rad)*len];
  };
  const r = size*0.46;
  const [hx,hy] = polR(ha, r*0.55);
  const [mx,my] = polR(ma, r*0.78);
  return (
    <svg viewBox={`0 0 ${size} ${size}`} style={{width:"100%",height:"100%",opacity,color:"var(--paper)"}}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="currentColor" strokeWidth=".7"/>
      <circle cx={size/2} cy={size/2} r={r*0.85} fill="none" stroke="currentColor" strokeWidth=".4" opacity=".5"/>
      {Array.from({length:12}).map((_,i) => {
        const a = i*30 - 90;
        const [x1,y1] = polR(a, r);
        const [x2,y2] = polR(a, r-size*0.04);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" opacity=".7"/>;
      })}
      {Array.from({length:60}).filter(i => i%5!==0).map((_,k) => {
        const i = (() => { let c=0; for(let j=0;j<60;j++){ if(j%5!==0){ if(c===k) return j; c++;}} return 0; })();
        const a = i*6 - 90;
        const [x1,y1] = polR(a, r);
        const [x2,y2] = polR(a, r-size*0.012);
        return <line key={k} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth=".4" opacity=".35"/>;
      })}
      {label && <text x={size/2} y={size/2 - r*0.42} textAnchor="middle"
        fontFamily="var(--display)" fontWeight="700" fontSize={size*0.07} fill="var(--accent)">{label}</text>}
      <line x1={size/2} y1={size/2} x2={hx} y2={hy} stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1={size/2} y1={size/2} x2={mx} y2={my} stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity=".85"/>
      {accent && <circle cx={size/2} cy={size/2} r="2.4" fill="var(--accent)"/>}
    </svg>
  );
}

// Famous quote about time
function TimeQuote({jp, who, en, align="left"}){
  return (
    <div className={`time-quote tq-${align}`}>
      <ClockMotif size={120} hour={3} minute={15} opacity={.18} />
      <div className="tq-body">
        <span className="tq-mark">&ldquo;</span>
        <blockquote>{jp}</blockquote>
        {en && <div className="tq-en">{en}</div>}
        <cite>— {who}</cite>
      </div>
    </div>
  );
}

Object.assign(window, { LiveClock, LiveTime, Reveal, SectionHead, Brand, ClockMotif, TimeQuote });
