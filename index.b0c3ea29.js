const e=document.querySelector("#weather");document.querySelector("#search-form").addEventListener("submit",(function(t){t.preventDefault(),e.innerHTML="";n(t.currentTarget.elements.searchQuery.value)}));async function n(n){const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${n}&appid=976c6009bfb619edc4108e35934174cd`),a=await t.json();t.ok&&function(n){const t=n.name,a=Math.round(n.main.temp),i=Math.round(n.main.feels_like),c=n.weather[0].main,r=n.weather[0].icon,s=`\n    <div class="card">\n        <div class="info">\n            <p class="info__item">${t}</p>\n            <p class="info__item">${c}</p>\n            <img src="http://api.openweathermap.org/img/w/${r}.png" alt="${c}">\n            <p class="info__item">${a}&deg;C</p>\n            <p class="info__item">Feels like: ${i}&deg;C</p>\n        </div>\n    </div>`;e.insertAdjacentHTML("beforeend",s)}(a)}e&&n();
//# sourceMappingURL=index.b0c3ea29.js.map
