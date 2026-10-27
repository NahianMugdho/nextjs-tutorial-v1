const S=(()=>{try{return localStorage}catch(e){return{getItem(){},setItem(){}}}})();
document.querySelectorAll('.cp').forEach(b=>b.onclick=()=>{navigator.clipboard.writeText(b.nextElementSibling.textContent);b.textContent='✓ হয়েছে';setTimeout(()=>b.textContent='কপি',1200)});
const cb=[...document.querySelectorAll('.done input')];
function up(){const n=cb.filter(c=>c.checked).length;const p=document.getElementById('pb');if(p){p.style.width=(cb.length?100*n/cb.length:0)+'%';document.getElementById('pt').textContent=n+'/'+cb.length+' চ্যাপ্টার সম্পন্ন'}}
cb.forEach(c=>{c.checked=S.getItem(c.dataset.k)=='1';c.onchange=()=>{S.setItem(c.dataset.k,c.checked?'1':'0');up()}});up();
document.querySelectorAll('.tabs').forEach(t=>t.querySelectorAll('button').forEach((b,i)=>b.onclick=()=>{const g=t.parentElement;t.querySelectorAll('button').forEach(x=>x.classList.remove('on'));b.classList.add('on');g.querySelectorAll('.pane').forEach((p,j)=>p.classList.toggle('on',i==j))}));
(function(){const r=document.documentElement;let t=S.getItem('theme')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');
const n=document.querySelector('.top'),b=document.createElement('button');b.id='th';
function ap(){r.dataset.theme=t;b.textContent=t=='dark'?'☀️ লাইট':'🌙 ডার্ক'}
b.onclick=()=>{t=t=='dark'?'light':'dark';S.setItem('theme',t);ap()};ap();if(n)n.appendChild(b)})();
document.querySelectorAll('[data-p]').forEach(e=>{const[f,tot]=e.dataset.p.split(':');let n=0;for(let i=1;i<=+tot;i++)if(S.getItem(f+'#'+i)=='1')n++;e.textContent=n+'/'+tot+' চ্যাপ্টার সম্পন্ন'});
