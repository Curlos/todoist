(()=>{"use strict";var t,e,n,o,i,a,s,d,c,r,l,u,p,m,f,y,h={419:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e,n,o,i,a){void 0===t&&(t=""),void 0===e&&(e=!1),void 0===n&&(n=""),void 0===o&&(o=""),void 0===i&&(i=[""]),void 0===a&&(a=""),this.name=t,this.complete=e,this.dueDate=n,this.listType=o,this.labels=i,this.filter=a}return t.prototype.setName=function(t){this.name=t},t.prototype.setDueDate=function(t){this.dueDate=t},t.prototype.setListType=function(t){this.listType=t},t.prototype.setLabels=function(t){this.labels=t},t.prototype.setFilter=function(t){this.filter=t},t.prototype.toggleComplete=function(){this.complete=!this.complete},t.prototype.getName=function(){return this.name},t.prototype.getDueDate=function(){return this.dueDate},t.prototype.getListType=function(){return this.listType},t.prototype.getLabels=function(){return this.labels},t.prototype.isComplete=function(){return this.complete},t}();e.default=n}},k={};t=function t(e){var n=k[e];if(void 0!==n)return n.exports;var o=k[e]={exports:{}};return h[e](o,o.exports,t),o.exports}(419),e=document.querySelector(".taskList"),n=document.querySelector(".addTaskForm .form"),o=document.querySelector(".addTaskForm"),i=document.querySelector(".taskNameInput"),a=document.querySelector(".addTaskFormFinalOptions"),s=document.querySelector(".addTaskFormButton"),d=document.querySelector(".displayFormButton"),c=document.querySelector(".cancelFormButton"),r=document.querySelectorAll(".taskItem input"),l=document.querySelector(".toggleSidebarButton"),u=[],p=function(){var t=document.createElement("div"),n=document.createElement("input"),o=document.createElement("span"),a=document.createElement("span"),s=document.createElement("i"),d=document.createElement("i");t.classList.add("taskItem"),n.setAttribute("type","checkbox"),o.classList.add("taskName"),o.textContent=i.value,a.classList.add("taskItemRightHalf"),s.classList.add("far"),s.classList.add("fa-edit"),d.classList.add("fas"),d.classList.add("fa-ellipsis-h"),a.append(s),a.append(d),t.append(n),t.append(o),t.append(a),e.append(t),i.value=""},m=function(){console.log("submit"),p()},f=function(){console.log("toggle"),o.classList.toggle("hidden"),a.classList.toggle("hidden"),d.classList.toggle("hidden")},y=function(){},r.forEach((function(t){return t.addEventListener("click",y)})),l.addEventListener("click",(function(){document.querySelector(".sidenav").classList.toggle("openSidebar"),document.querySelector(".mainContainer").classList.toggle("openMainContainer")})),d.addEventListener("click",f),s.addEventListener("click",m),n.addEventListener("submit",m),c.addEventListener("click",f),["click on initial addTask button displays addTaskForm and makes the initial addTask button hidden","click on cancel button makes addTaskForm hidden and initial addTaskButton visible again","user can click add task button to show add task form","style checkbox input buttons to be round"].forEach((function(e){var n=new t.default(e,!1,"","",[""],"");u.push(n),i.value=e,p()})),console.log(u)})();