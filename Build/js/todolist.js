"use strict";!function(){var t,n=document.querySelector(".btn__form"),e=document.querySelectorAll(".btn"),a=(document.querySelectorAll("check"),document.querySelector(".task__list")),l=document.querySelector(".task__listDone"),c=document.querySelector(".input"),s=[{id:"1",label:"ggg"},{id:"2",label:"htt"},{id:"3",label:"jhg"}],i=[{id:"1",label:"ggj"},{id:"2",label:"hty"},{id:"3",label:"jht"}];window.onload=function(){s.forEach((function(t){var n='\n\t\t\t\t<div class="task">\n\t\t\t\t\t<label class="task__inner">\n\t\t\t\t\t\t<input class="check" type="checkbox" name="" /><span></span><span class="text">'.concat(t.label,'</span>\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class="task__delete">\n\t\t\t\t\t\t<button class="btn"><img src="img/delete.svg" alt="" /></button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t');a.innerHTML+=n})),i.forEach((function(t){var n='\n\t\t\t\t<div class="task done">\n\t\t\t\t\t<label class="task__inner">\n\t\t\t\t\t\t<input class="check" type="checkbox" name="" checked /><span></span><span class="text">'.concat(t.label,'</span>\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class="task__delete">\n\t\t\t\t\t\t<button class="btn"><img src="img/delete.svg" alt="" /></button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t');l.innerHTML+=n})),e=document.querySelectorAll(".btn"),o(e)},c.addEventListener("change",(function(){t=c.value})),n.addEventListener("click",(function(){var n={id:s.length+1+"",label:t};s.push(n),a.innerHTML="",s.forEach((function(t){var n='\n\t\t\t\t<div class="task">\n\t\t\t\t\t<label class="task__inner">\n\t\t\t\t\t\t<input class="check" type="checkbox" name="" /><span></span><span class="text">'.concat(t.label,'</span>\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class="task__delete">\n\t\t\t\t\t\t<button class="btn"><img src="img/delete.svg" alt="" /></button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t');a.innerHTML+=n})),c.value="",e=document.querySelectorAll(".btn"),o(e)}));var o=function(t){t.forEach((function(t){t.onclick=function(){var n=t.parentNode.previousElementSibling.children[2].textContent;t.parentNode.parentNode.remove();var e=function(t){var e=t.findIndex((function(t,e){return t.label==n}));return t.splice(e,1),t};e(s),e(i)}}))}}();
//# sourceMappingURL=todolist.js.map