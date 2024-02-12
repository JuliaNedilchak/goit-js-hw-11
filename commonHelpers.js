import{i as u,S as p}from"./assets/vendor-acbca2f4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const i=document.querySelector(".form"),d=document.querySelector(".gallery"),c=document.querySelector(".loader");c.style.display="none";i.addEventListener("submit",f);function f(o){o.preventDefault();const t=o.target.elements.text.value;m(t),c.style.display="block",i.reset()}function m(o){const t="https://pixabay.com/api/",a=`?key=42244412-4baf4dd8f3efd9c6d484c6d30&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`,n=t+a;return fetch(n).then(e=>e.json()).then(e=>{if(e.hits.length===0)u.error({message:"Sorry, there are no images matching your search query. Please try again!"});else{const l=e.hits.map(r=>`<li class="item"> <a class="gallery-link" href="${r.largeImageURL}">
    <img
      class="gallery-image"
     
      src="${r.webformatURL}"
      
      alt="${r.tags}"
    />
  </a><ul class="list">
  <li class="group"><p class="desc">likes<span class="amount">${r.likes}</span></p></li>
  <li class="group"><p class="desc">views<span class="amount"> ${r.views}</span></p></li>
  <li class="group"><p class="desc">comments<span class="amount"> ${r.comments}</span></p></li>
  <li class="group"><p class="desc">downloads<span class="amount"> ${r.downloads}</span></p></li>
  </ul>
  </li>`).join("");d.innerHTML=l,c.style.display="none"}new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()})}
//# sourceMappingURL=commonHelpers.js.map
