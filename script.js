const weeklyMenu = {

Monday:[
{
name:"Paneer Butter Masala",
category:"veg",
price:"₹250",
desc:"Paneer in creamy gravy",
img:"https://i.imgur.com/2V7bG4L.jpg"
},
{
name:"Chicken Curry",
category:"nonveg",
price:"₹300",
desc:"Spicy chicken curry",
img:"https://i.imgur.com/0umadnY.jpg"
},
{
name:"Ice Cream",
category:"dessert",
price:"₹120",
desc:"Vanilla ice cream",
img:"https://i.imgur.com/9XnKQ8L.jpg"
}
],

Thursday:[
{
name:"Veg Biryani",
category:"veg",
price:"₹220",
desc:"Rice with vegetables",
img:"download.jpg"
},
{
name:"Chicken Biryani",
category:"nonveg",
price:"₹320",
desc:"Chicken with basmati rice",
img:"chicken.jpg"
},
{
name:"Gulab Jamun",
category:"dessert",
price:"₹100",
desc:"Sweet milk dumplings",
img:"gulab.jpg"
}
]

};

const today = new Date().toLocaleString('en-US',{weekday:'long'});
document.getElementById("day").innerHTML="Today's Menu : " + today;

let menu = weeklyMenu[today] || [];

function displayMenu(items){

let output="";

items.forEach(item => {

output += `
<div class="item">
<img src="${item.img}">
<h3>${item.name}</h3>
<p>${item.desc}</p>
<p class="price">${item.price}</p>
</div>
`;

});

document.getElementById("menu").innerHTML = output;

}

function filterMenu(type){

if(type==="all"){
displayMenu(menu);
}
else{
let filtered = menu.filter(item => item.category === type);
displayMenu(filtered);
}

}

displayMenu(menu);