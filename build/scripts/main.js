document.addEventListener("DOMContentLoaded",function(){const c=document.querySelector(".container"),d={fire:"#FDDFDF",grass:"#DEFDE0",electric:"#FCF7DE",water:"#DEF3FD",ground:"#f4e7da",rock:"#d5d5d4",fairy:"#fceaff",poison:"#98d7a5",bug:"#f8d5a3",dragon:"#97b3e6",psychic:"#eaeda1",flying:"#F5F5F5",fighting:"#E6E0D4",normal:"#F5F5F5"},p=Object.keys(d);const s=e=>{var a=document.createElement("div"),n=(a.classList.add("pokemon"),e.name[0].toUpperCase()+e.name.slice(1)),t=e.id.toString().padStart(3,"0");const s=e.types.map(e=>e.type.name);var o=p.find(e=>-1<s.indexOf(e)),i=d[o],i=(a.style.backgroundColor=i,`
        <div class = "pokemon-image">
            <img src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${e.id}.png" alt = "${n}">
        </div>
        <div class = "info">
            <span class = "pokemon-id">${t}</span>
            <h3 class = "pokemon-name">${n}</h3>
            <small class = "type">Type: <span>${o}</span></small>
        </div>
        `);a.innerHTML=i,c.appendChild(a)};(async()=>{for(i=1;i<=600;i++){{var e=i;const a=`https://pokeapi.co/api/v2/pokemon/${e}`,n=await fetch(a),t=await n.json();s(t)}await 0}})()});