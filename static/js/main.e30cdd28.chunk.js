(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{61:function(e,t,a){},63:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var i=a(5),n=a(0),r=a.n(n),c=a(18),s=a.n(c),o=(a(61),a(62),a(54)),l=a(27),m=(a(63),a(78)),d=a(80),j=a(79),h=a(50),u=a(76),b=a(77),p=a(53),O=a(52),x=a(21),g=function(e){var t=Object(n.useRef)(""),a=Object(n.useState)("Choose By Rating"),r=Object(l.a)(a,2),c=r[0],s=r[1];return Object(n.useEffect)((function(t){s("Rating : ".concat(e.Rating))})),Object(i.jsx)("div",{children:Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(m.a,{bg:"danger",expand:"lg",children:[Object(i.jsxs)(x.b,{to:"/",style:{width:50},children:[" ",Object(i.jsx)("img",{height:"100%",width:"100%",className:"mr-sm-3",src:"https://seeklogo.net/wp-content/uploads/2017/06/fox-movies-logo.png",alt:""})]}),Object(i.jsx)(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(i.jsxs)(m.a.Collapse,{id:"basic-navbar-nav",children:[Object(i.jsx)(x.b,{to:"/",style:{textDecoration:"none",color:"inherit"},children:Object(i.jsx)(d.a,{className:"mr-auto ml-5",style:{fontSize:"23px",fontFamily:"cursive"},children:"Home of Newest Movies"})}),Object(i.jsx)(d.a.Link,{style:{fontSize:"23px",fontFamily:"cursive",color:"#452529",marginRight:"25px"},href:"#home",onClick:function(){return function(){var t=prompt("movie name"),a=prompt("movie description"),i=prompt("movie rating"),n=prompt("link of movie image");e.AddToMovieList(t,a,i,n)}()},children:"Add Movies"}),Object(i.jsxs)(j.a,{inline:!0,children:[Object(i.jsx)(h.a,{style:{width:500},type:"text",placeholder:"Movie Name ..",className:"mr-sm-3 btnd my-2",ref:t}),"Rating : 0"===c?Object(i.jsx)(u.a,{as:b.a,className:"mr-1 my-2",variant:"light",title:"Choose By Rating",children:[1,2,3,4,5].map((function(t){return Object(i.jsx)("div",{children:Object(i.jsx)(p.a.Item,{eventKey:t,onClick:function(t){e.SearchR(t.target.innerHTML)},children:t},t)},t)}))},"1"):Object(i.jsx)(u.a,{as:b.a,className:"mr-1 my-2",variant:"light",title:c,children:[1,2,3,4,5].map((function(t){return Object(i.jsx)("div",{children:Object(i.jsx)(p.a.Item,{eventKey:t,onClick:function(t){e.SearchR(t.target.innerHTML)},children:t},t)},t)}))},"1"),Object(i.jsx)(O.a,{onClick:function(){e.Search(t.current.value)},variant:"light",children:"Search"})," "]})]})]})})})},f=a(81),y=function(e){return Object(i.jsx)("div",{children:Object(i.jsxs)(f.a,{style:{width:"400px",height:"950px"},className:"m-3",children:[Object(i.jsx)(f.a.Img,{variant:"top",src:e.Movie.url}),Object(i.jsxs)(f.a.Body,{className:"d-flex flex-column justify-content-around",children:[Object(i.jsxs)(f.a.Title,{children:[" ",e.Movie.name," "]}),Object(i.jsx)(f.a.Text,{style:{height:200},children:e.Movie.desc})," ",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("h4",{children:Object(i.jsxs)("p",{style:{textAlign:"center"},children:["   Rating : ",e.Movie.rating," "]})}),Object(i.jsx)(x.b,{to:"/trailer/".concat(e.Movie.name),children:Object(i.jsx)("div",{className:"mx-auto  d-flex w-100 ",children:Object(i.jsx)(O.a,{className:"mx-auto w-50",variant:"outline-info",children:" Watch Now "})})})]})]})},e.Movie.id)},M=function(e){return Object(i.jsx)("div",{className:"d-flex mx-3 my-5 flex-wrap",children:e.Movies.filter((function(t){return t.rating>=e.Rating&&t.name.toUpperCase().includes(e.Keyword.toUpperCase())})).map((function(e){return Object(i.jsx)(y,{Movie:e},e.id)}))})},v=a(7);var w=function(){var e=Object(n.useState)([{id:"1",trailer:"https://www.youtube.com/embed/ywloQClYYGI",name:"Antebellum",desc:"Successful author Veronica Henley finds herself trapped in a horrifying reality and must uncover the mind-bending mystery before it's too late.",rating:5,url:"https://m.media-amazon.com/images/M/MV5BOTQzYWU3NzktOGQyOC00NGNiLWE3NjAtNzQ0YzRkOTc5ODUzXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg"},{id:"2",trailer:"https://www.youtube.com/embed/Ub9EikTkrTk",name:"Sniper: Assassin's End",desc:"Legendary sniper Thomas Beckett and his son, Special Ops Sniper Brandon Beckett, are on the run from the CIA, Russian Mercenaries, and a Yakuza-trained assassin with sniper skills that rival both legendary sharp shooters.",rating:2,url:"https://m.media-amazon.com/images/M/MV5BNzNlNzBhNzMtNWNiOC00MGMxLWI3YjktNWMwNzJjMDEyZGQ3XkEyXkFqcGdeQXVyNzY1ODU1OTk@._V1_SX300.jpg"},{id:"3",trailer:"https://www.youtube.com/embed/jKCj3XuPG8M",name:"Bad Boys for Life",desc:"The Bad Boys Mike Lowrey and Marcus Burnett are back together for one last ride in the highly anticipated Bad Boys for Life.",rating:5,url:"https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg"},{id:"4",trailer:"https://www.youtube.com/embed/VfjoofUEcy0",name:"Escape from Pretoria",desc:"Based on the real-life prison break of two political captives, Escape From Pretoria is a race-against-time thriller set in the tumultuous apartheid days of South Africa.",rating:4,url:"https://m.media-amazon.com/images/M/MV5BOWRhYWFkMDEtNTFjZC00OWJkLWJmMWQtNzI2OWRjZjVjOGYyXkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_SX300.jpg"},{id:"5",trailer:"https://www.youtube.com/embed/WHXxVmeGQUc",name:"The Irishman",desc:"A mob hitman recalls his possible involvement with the slaying of Jimmy Hoffa.",rating:5,url:"https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg"},{id:"6",trailer:"https://www.youtube.com/embed/km_L0v3C0ms",name:"Rambo: Last Blood",desc:"Rambo must confront his past and unearth his ruthless combat skills to exact revenge in a final mission.",rating:3,url:"https://m.media-amazon.com/images/M/MV5BNTAxZWM2OTgtOTQzOC00ZTI5LTgyYjktZTRhYWM4YWQxNWI0XkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg"}]),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),s=Object(l.a)(c,2),m=s[0],d=s[1],j=Object(n.useState)("0"),h=Object(l.a)(j,2),u=h[0],b=h[1];return Object(i.jsx)(x.a,{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(g,{AddToMovieList:function(e,t,i,n){return r([].concat(Object(o.a)(a),[{name:e,desc:t,rating:i,url:n}]))},Search:function(e){return d(e)},SearchR:function(e){b(e)},Rating:u}),Object(i.jsx)(v.a,{exact:!0,path:"/",render:function(){return Object(i.jsx)(M,{Movies:a,Keyword:m,Rating:u})}}),Object(i.jsx)(v.a,{path:"/trailer/:Ntitle",component:function(e){var t=e.match,n=a.find((function(e){return e.name===t.params.Ntitle}));return Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{className:"d-flex flex-column my-5 mx-auto align-items-center",children:[Object(i.jsx)("h1",{className:"m-3",children:n.name}),Object(i.jsx)("iframe",{width:"853",height:"480",src:n.trailer,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(i.jsx)("h4",{style:{textAlign:"center",margin:70},children:n.desc})]})," "]})}})]})})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,82)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),i(e),n(e),r(e),c(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(w,{})}),document.getElementById("root")),N()}},[[71,1,2]]]);
//# sourceMappingURL=main.e30cdd28.chunk.js.map