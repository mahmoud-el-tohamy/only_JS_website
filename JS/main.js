document.body.style.margin = "0";

// start header
let header = document.createElement("header");
let logo = document.createElement("h1");
let list = document.createElement("ul");
let listItems =
  "<li><a href='#'></a></li><li><a href='#'></a></li><li><a href='#'></a></li><li><a href='#'></a></li>";
document.body.prepend(header);
header.appendChild(logo);
header.style.cssText =
  " display:flex; justify-content: space-between; align-items:center; margin:0; font-family:Arial, Helvetica, sans-serif; ";
// logo
logo.innerHTML = "ElTohamy";
logo.style.cssText = "margin-left:10px; color:#23a870; font-size:20px;";
// list
header.appendChild(list);
list.innerHTML = listItems;
document.querySelectorAll("a")[0].innerHTML = "Home";
document.querySelectorAll("a")[1].innerHTML = "Service";
document.querySelectorAll("a")[2].innerHTML = "About";
document.querySelectorAll("a")[3].innerHTML = "Contact";

list.style.cssText =
  "list-style: none; display: flex; justify-content:space-between; width: 250px; margin-right:10px;";
document.querySelectorAll("a")[0].style.cssText =
  " font-size: 18px; color:#333; opacity:0.8; text-decoration:none;";
document.querySelectorAll("a")[1].style.cssText =
  " font-size: 18px; color:#333; opacity:0.8; text-decoration:none;";
document.querySelectorAll("a")[2].style.cssText =
  " font-size: 18px; color:#333; opacity:0.8; text-decoration:none;";
document.querySelectorAll("a")[3].style.cssText =
  " font-size: 18px; color:#333; opacity:0.8; text-decoration:none;";
// end header
// start main
let main = document.createElement("main");
document.body.appendChild(main);
let myH = "";
let myP = "<p>Product</p>";
let myDiv = "";
for (let i = 0; i < 15; i++) {
  myH = `<h2>${i + 1}</h2>`;
  myDiv = `<div>${myH} <br> ${myP}</div>`;
  main.insertAdjacentHTML("beforeend", myDiv);
  document.querySelectorAll("div")[i].style.cssText =
    "width:calc(95% / 3); min-width: 250px; background-color:white; height:80px; border-radius:6px; text-align:center; font-size:15px; font-family:Arial, Helvetica, sans-serif;";
  document.querySelectorAll("p")[i].style.cssText =
    "margin:-10px auto; color:#bbb; width:fit-content";
  document.querySelectorAll("h2")[i].style.cssText =
    "margin:10px 0 0; font-weight:normal;";
}
// main styles
main.style.cssText =
  "height:80%; background-color: #ececec; display:flex; flex-wrap:wrap; justify-content:space-around; gap:10px; padding:10px 0;";

// end main
// start footer
let foot = document.createElement("footer");
document.body.appendChild(foot);
foot.innerHTML = "CopyRight 2023";

foot.style.cssText =
  "background-color:#23a870; color:white; position:static; bottom:0; width:100%; height:120px; display: flex; align-items:center; justify-content:center;";
