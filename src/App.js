import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

/* PRODUCT DATA */

const products = [

{
id:1,
name:"Laptop",
price:"₹55,000",
image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
desc:"High performance laptop for office and study"
},

{
id:2,
name:"Headphones",
price:"₹3,000",
image:"https://images.unsplash.com/photo-1519677100203-a0e668c92439",
desc:"Noise cancelling headphones"
},

{
id:3,
name:"Camera",
price:"₹25,000",
image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
desc:"Professional DSLR camera"
},

{
id:4,
name:"Mobile",
price:"₹20,000",
image:"https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5",
desc:"Latest smartphone with high camera quality"
}

];

/* MAIN APP */

function App(){

return(

<Router>

{/* HEADER */}

<div style={{

background:"#111",
color:"white",
padding:"15px 40px",
display:"flex",
justifyContent:"space-between",
alignItems:"center"

}}>

<h2>Electro</h2>

<input
placeholder="Search product..."
style={{

padding:8,
width:"40%",
borderRadius:5,
border:"none"

}}
/>

<div>🛒 Cart</div>

</div>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/product/:id" element={<Product/>}/>

</Routes>

</Router>

);

}

/* HOME PAGE */

function Home(){

return(

<div style={{padding:30, background:"#f5f5f5"}}>

{/* CATEGORY BANNERS */}

<div style={{

display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:20,
marginBottom:30

}}>

<Banner
title="Laptop Collection"
img="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
/>

<Banner
title="Accessories"
img="https://images.unsplash.com/photo-1519677100203-a0e668c92439"
/>

<Banner
title="Camera Collection"
img="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
/>

</div>

{/* PRODUCTS */}

<h2>New Products</h2>

<div style={{

display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
gap:20,
marginTop:20

}}>

{products.map(p=>(

<Link
to={"/product/"+p.id}
key={p.id}
style={{textDecoration:"none"}}
>

<div style={{

background:"white",
padding:15,
borderRadius:10,
boxShadow:"0 3px 8px rgba(0,0,0,0.1)",
transition:"0.3s"

}}

onMouseOver={e=>e.currentTarget.style.transform="scale(1.03)"}
onMouseOut={e=>e.currentTarget.style.transform="scale(1)"}

>

<img
src={p.image}
alt={p.name}
style={{

width:"100%",
height:160,
objectFit:"cover",
borderRadius:8

}}
/>

<h3 style={{color:"black"}}>{p.name}</h3>

<p style={{color:"red"}}>{p.price}</p>

<button style={{

background:"#2874f0",
color:"white",
padding:8,
border:"none",
width:"100%",
borderRadius:5,
cursor:"pointer"

}}>

View Product

</button>

</div>

</Link>

))}

</div>

</div>

);

}

/* BANNER COMPONENT */

function Banner({title,img}){

return(

<div style={{

position:"relative",
height:160,
borderRadius:10,
overflow:"hidden"

}}>

<img
src={img}
alt="banner"
style={{

width:"100%",
height:"100%",
objectFit:"cover"

}}
/>

<h3 style={{

position:"absolute",
bottom:10,
left:10,
color:"white",
background:"rgba(0,0,0,0.6)",
padding:"5px 10px",
borderRadius:5

}}>

{title}

</h3>

</div>

);

}

/* PRODUCT DETAILS PAGE */

function Product(){

const {id}=useParams();

const item = products.find(p => p.id === Number(id));

return(

<div style={{

padding:40,
display:"flex",
gap:40,
flexWrap:"wrap"

}}>

<img
src={item.image}
alt={item.name}
style={{

width:320,
borderRadius:10

}}
/>

<div>

<h1>{item.name}</h1>

<h2 style={{color:"red"}}>{item.price}</h2>

<p>{item.desc}</p>

<button style={{

background:"#ff9f00",
padding:12,
border:"none",
color:"white",
marginRight:10

}}>

Add to Cart

</button>

<button style={{

background:"#fb641b",
padding:12,
border:"none",
color:"white"

}}>

Buy Now

</button>

<br/><br/>

<Link to="/">⬅ Back</Link>

</div>

</div>

);

}

export default App;