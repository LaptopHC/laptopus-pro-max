{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const laptops=[\
\
\{\
id:1,\
name:"Dell XPS 13",\
price:25900000,\
ram:"16GB",\
cpu:"Core i7",\
img:"https://m.media-amazon.com/images/I/71TPda7cwUL.jpg"\
\},\
\
\{\
id:2,\
name:"HP Elitebook 840",\
price:12900000,\
ram:"8GB",\
cpu:"Core i5",\
img:"https://m.media-amazon.com/images/I/81vZ9HhA3AL.jpg"\
\},\
\
\{\
id:3,\
name:"Lenovo ThinkPad T14",\
price:18500000,\
ram:"16GB",\
cpu:"Core i7",\
img:"https://m.media-amazon.com/images/I/71an9eiBxpL.jpg"\
\},\
\
\{\
id:4,\
name:"Asus Vivobook 15",\
price:13900000,\
ram:"8GB",\
cpu:"Core i5",\
img:"https://m.media-amazon.com/images/I/71L2iBSyyOL.jpg"\
\}\
\
]\
\
const container=document.getElementById("products")\
\
laptops.forEach(p=>\{\
\
container.innerHTML+=`\
\
<div class="card">\
\
<img src="$\{p.img\}">\
\
<h3>$\{p.name\}</h3>\
\
<p>$\{p.cpu\} | $\{p.ram\}</p>\
\
<div class="price">$\{p.price.toLocaleString()\}\uc0\u273 </div>\
\
<button onclick="addCart($\{p.id\})">\
Th\'eam gi\uc0\u7887 \
</button>\
\
</div>\
\
`\
\
\})\
\
function addCart(id)\{\
\
let cart=JSON.parse(localStorage.getItem("cart"))||[]\
\
let product=laptops.find(p=>p.id==id)\
\
cart.push(product)\
\
localStorage.setItem("cart",JSON.stringify(cart))\
\
alert("\uc0\u272 \'e3 th\'eam v\'e0o gi\u7887 ")\
\
\}}