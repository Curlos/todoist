(()=>{"use strict";var t,e,o,n,i,s,a,r,c,u,d,l,p,m,y,f,h={419:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e,o,n,i,s){void 0===t&&(t=""),void 0===e&&(e=!1),void 0===o&&(o=""),void 0===n&&(n=""),void 0===i&&(i=[""]),void 0===s&&(s=""),this.name=t,this.complete=e,this.dueDate=o,this.listType=n,this.labels=i,this.filter=s}return t.prototype.setName=function(t){this.name=t},t.prototype.setDueDate=function(t){this.dueDate=t},t.prototype.setListType=function(t){this.listType=t},t.prototype.setLabels=function(t){this.labels=t},t.prototype.setFilter=function(t){this.filter=t},t.prototype.toggleComplete=function(){this.complete=!this.complete},t.prototype.getName=function(){return this.name},t.prototype.getDueDate=function(){return this.dueDate},t.prototype.getListType=function(){return this.listType},t.prototype.getLabels=function(){return this.labels},t.prototype.isComplete=function(){return this.complete},t}();e.default=o}},k={};t=function t(e){var o=k[e];if(void 0!==o)return o.exports;var n=k[e]={exports:{}};return h[e](n,n.exports,t),n.exports}(419),e=document.querySelector(".taskList"),o=document.querySelector(".addTaskForm .form"),n=document.querySelector(".addTaskForm"),i=document.querySelector(".taskNameInput"),s=document.querySelector(".addTaskFormFinalOptions"),a=document.querySelector(".addTaskFormButton"),r=document.querySelector(".displayFormButton"),c=document.querySelector(".cancelFormButton"),u=document.querySelectorAll(".taskItem input"),d=document.querySelector(".toggleSidebarButton"),l=[],p=function(){var t=document.createElement("div"),o=document.createElement("input"),n=document.createElement("span");t.classList.add("taskItem"),o.setAttribute("type","checkbox"),n.classList.add("taskName"),n.textContent=i.value,t.append(o),t.append(n),e.append(t),i.value=""},m=function(){console.log("submit"),p()},y=function(){console.log("toggle"),n.classList.toggle("hidden"),s.classList.toggle("hidden"),r.classList.toggle("hidden")},f=function(){},u.forEach((function(t){return t.addEventListener("click",f)})),d.addEventListener("click",(function(){document.querySelector(".sidenav").classList.toggle("openSidebar"),document.querySelector(".mainContainer").classList.toggle("openMainContainer")})),r.addEventListener("click",y),a.addEventListener("click",m),o.addEventListener("submit",m),c.addEventListener("click",y),["click on initial addTask button displays addTaskForm and makes the initial addTask button hidden","click on cancel button makes addTaskForm hidden and initial addTaskButton visible again","user can click add task button to show add task form","style checkbox input buttons to be round"].forEach((function(e){var o=new t.default(e,!1,"","",[""],"");l.push(o),i.value=e,p()})),console.log(l)})();