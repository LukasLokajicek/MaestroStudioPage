import{af as N,k as I,aK as T,bo as g,H as A,J as D,bp as H,j as a,B as r,T as c,r as o}from"./index-B3PvH795.js";import{a as t}from"./react-Bubmx427.js";import{D as W,a as _,b as F,c as $}from"./DialogTitle-DmACzZaW.js";import{L as z}from"./LinearProgress-Bvghq-ow.js";import{S as O}from"./useSettings-Bsj4pXtn.js";import{B as p}from"./Button-uKUdx9OV.js";const V=n=>n.calibration.isCalibrating,J=n=>n.calibration.measuredLatencyMs,K=n=>n.calibration.calibrationNeeded,U=()=>{const n=N(),d=I(V),v=I(K),e=I(J),s=I(T),[b,m]=t.useState({beatsPlayed:0,beatsReceived:0,totalBeats:16}),[f,u]=t.useState([]),C=t.useRef([]),h=t.useRef(null),R=t.useRef(null);t.useEffect(()=>{if(!d)return;const l=setInterval(()=>{m(g.getProgress())},100);return()=>clearInterval(l)},[d]),t.useEffect(()=>{if(!d)return;const l=()=>{h.current?.()},E=x=>{const P={beatIndex:x.beatIndex,deltaMs:x.deltaMs,missed:x.missed};C.current.push(P),u([...C.current])},i=A.when(D.CALIBRATION_BEAT_PLAYED).subscribe(l),y=A.when(D.CALIBRATION_NOTE_RECEIVED).subscribe(E);return()=>{i?.unsubscribe?.(),y?.unsubscribe?.()}},[d]),t.useEffect(()=>{s!==R.current&&(R.current=s,s&&g.checkCalibrationNeeded().catch(console.error))},[s]);const M=t.useCallback(async()=>{await g.startCalibration()},[]),S=t.useCallback(()=>{g.cancelCalibration(),m({beatsPlayed:0,beatsReceived:0,totalBeats:16})},[]),w=t.useCallback(async()=>{await g.saveCalibration()},[]),j=t.useCallback(l=>{g.adjustLatency(l)},[]),B=t.useCallback(()=>{n(H(!1))},[n]),k=t.useCallback(l=>(h.current=l,()=>{h.current===l&&(h.current=null)}),[]),L=t.useCallback(()=>{u([]),C.current=[]},[]);return{isCalibrating:d,calibrationNeeded:v,measuredLatencyMs:e,progress:b,latencyReadings:f,startCalibration:M,cancelCalibration:S,saveCalibration:w,adjustLatency:j,dismissCalibration:B,onBeatPulse:k,clearCalibrationHistory:L}},Y=`
@keyframes beatBounce {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.15); }
}

.calibration-beat-indicator {
    animation: beatBounce 0.2s ease-in-out;
}

@keyframes calibrationPulse {
    0% {
        box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.7);
    }
    50% {
        box-shadow: 0 0 0 20px rgba(102, 126, 234, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(102, 126, 234, 0);
    }
}

.pulse-display {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: linear-gradient(135deg, ${o.palette.primary.main}, ${o.palette.primary.light});
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    color: white;
    font-weight: 700;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.pulse-display.playing {
    animation: calibrationPulse 0.8s ease-out infinite;
}
`,ae=({open:n,onClose:d,onComplete:v})=>{const e=U(),[s,b]=t.useState("ready"),[m,f]=t.useState(0),u=t.useRef(null);t.useEffect(()=>{if(!n){b("ready");return}e.isCalibrating?b("calibrating"):s==="calibrating"&&e.measuredLatencyMs!==null&&(b("result"),f(e.measuredLatencyMs))},[e.isCalibrating,e.measuredLatencyMs,n,s]),t.useEffect(()=>{e.isCalibrating&&e.onBeatPulse(()=>{u.current&&(u.current.style.animation="none",u.current.offsetWidth,u.current.style.animation="calibrationPulse 0.8s ease-out")})},[e]);const C=t.useCallback(async()=>{await e.startCalibration(),b("calibrating")},[e]),h=t.useCallback(()=>{e.cancelCalibration(),e.clearCalibrationHistory(),b("ready")},[e]),R=t.useCallback(async()=>{e.clearCalibrationHistory(),f(0),await e.startCalibration()},[e]),M=t.useCallback(()=>{e.dismissCalibration(),d()},[e,d]),S=t.useCallback(async()=>{await e.saveCalibration(),e.clearCalibrationHistory(),v()},[e,v]),w=t.useCallback((i,y)=>{const x=y;f(x);const P=e.measuredLatencyMs??0;e.adjustLatency(x-P)},[e]),j=e.latencyReadings[e.latencyReadings.length-1],B=e.latencyReadings.length>0?e.latencyReadings.reduce((i,y)=>i+Math.abs(y.deltaMs),0)/e.latencyReadings.length:0,k=j?.missed??!1,L=e.latencyReadings.length>0||s==="result",l=e.progress.totalBeats>0?e.progress.beatsReceived/e.progress.totalBeats*100:0,E=a.jsxs(r,{sx:{mb:2},children:[a.jsxs(c,{color:"text.secondary",sx:{display:"block",mb:1},variant:"caption",children:["Beat history (",e.latencyReadings.length,"):"]}),e.latencyReadings.length>0?a.jsx(r,{sx:{display:"flex",gap:.5,flexWrap:"wrap",maxHeight:90,overflow:"auto"},children:e.latencyReadings.map((i,y)=>a.jsx(r,{sx:{width:32,height:32,borderRadius:1,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.65rem",fontWeight:700,color:"white",background:i.missed?o.palette.trainingEvaluation.missed:Math.abs(i.deltaMs)>50?o.palette.trainingEvaluation.poor:Math.abs(i.deltaMs)>25?o.palette.trainingEvaluation.fair:o.palette.trainingEvaluation.excellent,fontFamily:"monospace",flexShrink:0},children:i.missed?"✗":Math.round(Math.abs(i.deltaMs))},y))}):null]});return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:Y}),a.jsxs(W,{fullWidth:!0,maxWidth:"sm",onClose:s==="calibrating"?void 0:M,open:n,children:[a.jsx(_,{sx:{pb:1},children:"Calibrate MIDI Latency"}),a.jsxs(F,{sx:{pt:2},children:[s==="ready"&&a.jsx(c,{color:"text.secondary",variant:"body2",children:"Play any key on each metronome beat. This measures the delay between your MIDI device and the app so timing accuracy reflects your actual performance."}),s==="calibrating"&&a.jsxs(r,{children:[a.jsx(r,{sx:{mb:3,display:"flex",justifyContent:"center"},children:a.jsx(r,{className:`pulse-display ${e.isCalibrating?"playing":""}`,ref:u,children:"♪"})}),a.jsxs(c,{sx:{mb:2,textAlign:"center"},variant:"body2",children:[e.progress.beatsReceived," / ",e.progress.totalBeats," beats"]}),a.jsx(z,{sx:{height:8,borderRadius:4,mb:3},value:l,variant:"determinate"}),a.jsxs(r,{sx:{background:"rgba(102, 126, 234, 0.1)",border:`1px solid ${o.palette.primary.main}`,borderRadius:2,p:2,mb:2},children:[a.jsxs(r,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:1},children:[a.jsx(c,{color:"text.secondary",variant:"caption",children:"Current Latency:"}),a.jsx(c,{sx:{fontSize:"1.5rem",fontWeight:700,color:k?o.palette.trainingEvaluation.missed:Math.abs(j?.deltaMs??0)>50?o.palette.trainingEvaluation.poor:o.palette.trainingEvaluation.good},children:k?"Beat missed":`${j?.deltaMs??0}ms`})]}),a.jsxs(r,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsx(c,{color:"text.secondary",variant:"caption",children:"Average Latency:"}),a.jsxs(c,{sx:{fontSize:"1rem",fontWeight:600},children:[Math.round(B),"ms"]})]})]}),L&&E]}),s==="result"&&a.jsxs(r,{children:[a.jsxs(c,{sx:{mb:1},variant:"body2",children:["Measured latency: ",a.jsxs("strong",{children:[e.measuredLatencyMs,"ms"]})]}),a.jsx(c,{color:"text.secondary",sx:{mb:2},variant:"caption",children:"Adjust if notes still feel early or late:"}),a.jsx(r,{sx:{px:1,mb:2},children:a.jsx(O,{max:(e.measuredLatencyMs??0)+50,min:(e.measuredLatencyMs??0)-50,onChange:w,step:1,value:m,valueLabelDisplay:"auto",valueLabelFormat:i=>`${i}ms`})}),a.jsxs(c,{align:"center",color:"text.secondary",variant:"caption",children:["Final latency: ",m,"ms"]}),L&&a.jsx(r,{sx:{mt:3},children:E})]})]}),a.jsxs($,{children:[s==="ready"&&a.jsxs(a.Fragment,{children:[a.jsx(p,{onClick:M,children:"Skip"}),a.jsx(p,{onClick:C,variant:"contained",children:"Start"})]}),s==="calibrating"&&a.jsx(p,{onClick:h,children:"Cancel"}),s==="result"&&a.jsxs(a.Fragment,{children:[a.jsx(p,{onClick:R,children:"Re-run"}),a.jsx(p,{onClick:h,children:"Cancel"}),a.jsx(p,{onClick:S,variant:"contained",children:"Save"})]})]})]})]})};export{ae as C,U as u};
