(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){},31:function(e,t,a){e.exports=a(47)},40:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),c=a(6),o=a(21),i=a.n(o),s=(a(40),a(1)),u=a(2),m=a(4),p=a(3),h=a(5),d=a(7),E=function(e){var t,a;switch(e.pet.animal){case"dog":t="\ud83d\udc36";break;case"cat":t="\ud83d\udc31";break;case"pig":t="\ud83d\udc3d";break;case"lizard":t="\ud83e\udd8e";break;case"hamster":t="\ud83d\udc39";break;case"rabbit":t="\ud83d\udc30";break;default:t=r.a.createElement("div",null)}return r.a.createElement("div",{style:{margin:"3em",justifyContent:"center",alignItems:"center",height:"35em",minWidth:"18em"},className:"ui card three wide column"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{style:{objectFit:"cover",height:"22.5em"},alt:"",src:e.pet.img_url})),r.a.createElement("div",{className:"description",style:{color:"black"}},r.a.createElement("h2",{style:{textAlign:"center"}},"    ",t,e.pet.name,"female"===e.pet.sex?"\u2640\ufe0e":"\u2642\ufe0e"),r.a.createElement("h3",{style:{textAlign:"center",position:"relative",bottom:".75em"}},(a=e.pet.age,parseInt(a)<12?a+" months old":Math.floor(parseInt(a)/12)+" years old")),r.a.createElement("div",{className:"extra content"},r.a.createElement("i",{style:{position:"relative",left:"25%",bottom:"1em"},className:"globe icon"}),r.a.createElement("span",{style:{position:"relative",left:"25%",bottom:"1em"}},e.pet.location)),r.a.createElement(d.b,{key:Math.random(),to:"/pet-profiles/".concat(e.pet.id)},r.a.createElement("button",{style:{position:"relative",left:"20%"},className:"ui button blue"},"See Pet Profile"))))},g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).renderPets=function(){return a.props.pets.length?a.props.pets.map(function(e){return r.a.createElement(E,{key:e.id,pet:e})}):r.a.createElement("h1",{style:{marginTop:"5em"}},"There are no pets that meet these specs!")},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui grid"},this.renderPets())}}]),t}(r.a.Component),b=a(18),f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).renderMeetingRows=function(){return a.props.currentPet.meetings.map(function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("h4",{className:"ui image header"},r.a.createElement("img",{alt:"",src:e.adopter_img_url,className:"ui mini rounded image"}),r.a.createElement("div",{className:"content"},e.adopter,r.a.createElement("div",{className:"sub header"},e.location)))),r.a.createElement("td",null,e.date))})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui raised card",style:{marginTop:"3em",padding:"0.25em",maxHeight:"20em",overflowY:"scroll"}},r.a.createElement("table",{className:"ui very basic collapsing celled table"},r.a.createElement("thead",null,r.a.createElement("th",{style:{textAlign:"center",background:"darkblue",color:"white"},colSpan:"2"},"Meetings"),r.a.createElement("tr",null,r.a.createElement("th",null,"Adopter Name"),r.a.createElement("th",null,"Date"))),r.a.createElement("tbody",null,this.renderMeetingRows())))}}]),t}(r.a.Component),v=Object(c.b)(function(e){return{currentUser:e.currentUser,currentPet:e.currentPet}})(f),y=a(12),O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={datetime:"",location:""},a.handleChange=function(e){a.setState(Object(y.a)({},e.target.name,e.target.value))},a.handleClick=function(){a.createMeeting()},a.createMeeting=function(){fetch("".concat("http://www.pawsup.site").concat("/api/v1/meetings"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({adopter_id:a.props.currentUser.id,pet_id:a.props.currentPet.id,datetime:a.state.datetime,location:a.state.location})}).then(function(e){return e.json()}).then(function(e){e.errors?alert(e.errors):(e.pet_img_url=a.props.currentPet.img_url,e.pet=a.props.currentPet.name,e.adopter_img_url=a.props.currentUser.img_url,e.adopter=a.props.currentUser.name,a.props.addMeetingToCurrentUser(e),a.props.addMeetingToCurrentPet(e))})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{position:"absolute",color:"black",padding:".25em",top:"25em",width:"20em"},className:"ui raised card"},r.a.createElement("input",{style:{margin:"0.25em"},onChange:this.handleChange,required:!0,type:"date",name:"datetime"}),r.a.createElement("select",{style:{margin:"0.25em"},onChange:this.handleChange,name:"location",required:!0},r.a.createElement("option",{label:"Location"}),r.a.createElement("option",{label:"New York City"},"New York City"),r.a.createElement("option",{value:"Los Angeles"},"Los Angeles"),r.a.createElement("option",{value:"Boston"},"Boston"),r.a.createElement("option",{value:"Chicago"},"Chicago")),r.a.createElement("button",{onClick:this.handleClick,className:"ui primary button"},"Set Up a Meeting With this Pet!"))}}]),t}(r.a.Component);var j=Object(c.b)(function(e){return{currentUser:e.currentUser,currentPet:e.currentPet}},function(e){return{addMeetingToCurrentUser:function(t){e({type:"ADD_MEETING_TO_CURRENT_USER",payload:t})},addMeetingToCurrentPet:function(t){e({type:"ADD_MEETING_TO_CURRENT_PET",payload:t})}}})(O),C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).componentDidMount=function(){a.fetchAndSetPet(a.props.match.params.id)},a.fetchAndSetPet=function(e){fetch("".concat("http://www.pawsup.site").concat("/api/v1/pets/").concat("".concat(e))).then(function(e){return e.json()}).then(function(e){a.props.setCurrentPet(e)})},a.conditionallyRenderMeetingPrompt=function(){var e=a.props.currentPet.meetings.map(function(e){return e.adopter_id});return a.props.currentUser&&e.includes(a.props.currentUser.id)?null:r.a.createElement(j,{addPetMeeting:a.addPetMeeting})},a.renderAge=function(e){return parseInt(e)<12?e+" months old":e%12?Math.floor(parseInt(e)/12)+" years and "+e%12+" Months old":Math.floor(parseInt(e)/12)+" years old "},a.renderPetInfoList=function(){return r.a.createElement("div",{style:{position:"relative",right:"6em",fontSize:"1.6em",marginBottom:"5em"}},r.a.createElement("img",{alt:"",className:"ui medium circular image",src:a.props.currentPet.img_url}),r.a.createElement("h1",null,a.props.currentPet.name),r.a.createElement("div",{className:"ui list"},r.a.createElement("div",{className:"item"},r.a.createElement("i",{className:"marker icon"}),r.a.createElement("div",{className:"content"},a.props.currentPet.location)),r.a.createElement("div",{className:"item"},r.a.createElement("i",{className:"birthday cake icon"}),r.a.createElement("div",{className:"content"},a.renderAge(a.props.currentPet.age),a.props.currentPet.age>12?"("+a.props.currentPet.age+"months)":"")),r.a.createElement("div",{className:"item"},r.a.createElement("i",{className:"certificate icon"}),r.a.createElement("div",{className:"content"},a.props.currentPet.allergy?"Pet is Allergenic":"Pet is Not Allergenic")),r.a.createElement("div",{className:"item"},"male"===a.props.currentPet.sex?r.a.createElement("i",{className:"mars icon"}):r.a.createElement("i",{className:"venus icon"}),r.a.createElement("div",{className:"content"},"male"===a.props.currentPet.sex?"Male":"Female"))))},a.addPetMeeting=function(e){a.setState(function(t){return{meetings:[].concat(Object(b.a)(t.meetings),[e])}})},a.renderPetMeetings=function(){return a.props.currentPet.meetings.length?r.a.createElement(v,{pet:a.props.currentPet}):r.a.createElement("div",{style:{position:"relative",top:"2em",width:"14em"},className:"ui message huge"},r.a.createElement("span",{style:{textAlign:"center"}},"This Pet Has No Meetings Yet! Set One Up!"))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.props.currentPet?r.a.createElement("div",null,r.a.createElement("div",{className:"ui two column very relaxed grid"},r.a.createElement("div",{className:"column"},this.renderPetInfoList()),r.a.createElement("div",{className:"column"},this.renderPetMeetings(),this.conditionallyRenderMeetingPrompt()))):r.a.createElement("h1",null,"Loading...")}}]),t}(n.Component);var N=Object(c.b)(function(e){return{currentUser:e.currentUser,currentPet:e.currentPet}},function(e){return{setCurrentUser:function(t){e({type:"SET_CURRENT_USER",payload:t})},setCurrentPet:function(t){e({type:"SET_CURRENT_PET",payload:t})}}})(C),P=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleAnimalChange=function(e){e.target.value?a.props.setAnimalFilter(e.target.value):a.props.setAnimalFilter(null)},a.handleSizeChange=function(e){e.target.value?a.props.setSizeFilter(e.target.value):a.props.setSizeFilter(null)},a.handleSexChange=function(e){e.target.value?a.props.setSexFilter(e.target.value):a.props.setSexFilter(null)},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"removeElement",value:function(e,t){return e.filter(function(e){return e!==t})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("select",{onChange:this.handleAnimalChange,className:"ui search dropdown",style:{color:"black",margin:".5em"}},r.a.createElement("option",{label:"Animal"}),r.a.createElement("option",{value:"dog"},"Dog"),r.a.createElement("option",{value:"cat"},"Cat"),r.a.createElement("option",{value:"lizard"},"Lizard"),r.a.createElement("option",{value:"pig"},"Pig"),r.a.createElement("option",{value:"hamster"},"Hamster"),r.a.createElement("option",{value:"rabbit"},"Rabbit")),r.a.createElement("select",{onChange:this.handleSizeChange,className:"ui search dropdown",style:{color:"black",margin:".5em"}},r.a.createElement("option",{label:"Size"}),r.a.createElement("option",{value:"small"},"Small"),r.a.createElement("option",{value:"medium"},"Medium"),r.a.createElement("option",{value:"large"},"Large")),r.a.createElement("select",{onChange:this.handleSexChange,className:"ui search dropdown",style:{color:"black",margin:".5em"}},r.a.createElement("option",{label:"Sex"}),r.a.createElement("option",{value:"male"},"Male"),r.a.createElement("option",{value:"female"},"Female")))}}]),t}(r.a.Component),w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={pets:[],selectedPetId:null,animalFilter:null,sizeFilter:null,sexFilter:null},a.setAnimalFilter=function(e){a.setState({animalFilter:e})},a.setSizeFilter=function(e){a.setState({sizeFilter:e})},a.setSexFilter=function(e){a.setState({sexFilter:e})},a.filterPets=function(e){var t,n,r;a.state.animalFilter?t=e.filter(function(e){return e.animal===a.state.animalFilter}):t=e;a.state.sizeFilter?n=t.filter(function(e){return e.size===a.state.sizeFilter}):n=t;a.state.sexFilter?r=n.filter(function(e){return e.sex===a.state.sexFilter}):r=n;return r},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){localStorage.token||(alert("You must be logged in to view this page!"),this.props.history.push("/login"))}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,this.state.selectedPetId?r.a.createElement(N,{fetchAndSetAdopters:this.props.fetchAndSetAdopters,currentUser:this.props.currentUser,pet:this.findPet(this.state.selectedPetId),fetchPets:this.fetchPets}):r.a.createElement(n.Fragment,null,r.a.createElement(P,{setAnimalFilter:this.setAnimalFilter,setSizeFilter:this.setSizeFilter,setSexFilter:this.setSexFilter}),r.a.createElement(g,{pets:this.filterPets(this.props.pets)})," "))}}]),t}(r.a.Component),S=Object(c.b)(function(e){return{currentUser:e.currentUser,pets:e.pets}})(w),A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",username:"",password:"",age:"",location:"",residence_type:"",allergy:"",other_pets:"",img_url:""},a.handleChange=function(e){a.setState(Object(y.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.createAdopter(a.state)},a.createAdopter=function(e){fetch("".concat("http://www.pawsup.site").concat("/api/v1/adopters"),{method:"POST",headers:{"Content-Type":"application/json",Accepts:"application/json"},body:JSON.stringify({name:e.name,username:e.username,password:e.password,age:e.age,location:e.location,residence_type:e.residence_type,allergy:e.allergy,other_pets:e.other_pets,img_url:e.img_url})}).then(function(e){return e.json()}).then(function(e){e.error?alert(e.error):(localStorage.setItem("token",e.token),a.props.setCurrentUser(e.adopter)),a.props.history.push("/adopter-profile")})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Create an Adopter Account!"),r.a.createElement("form",{className:"ui form",onSubmit:this.handleSubmit,style:{width:"25em"}},r.a.createElement("input",{placeholder:"Name",onChange:this.handleChange,name:"name",type:"text",required:!0})," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{placeholder:"Username",onChange:this.handleChange,name:"username",type:"text",required:!0})," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{placeholder:"Password",onChange:this.handleChange,name:"password",type:"password",required:!0})," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{onChange:this.handleChange,placeholder:"Age",min:"18",name:"age",type:"number",required:!0})," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("select",{onChange:this.handleChange,name:"location",required:!0},r.a.createElement("option",{label:"Location"}),r.a.createElement("option",{label:"New York City"},"New York City"),r.a.createElement("option",{value:"Los Angeles"},"Los Angeles"),r.a.createElement("option",{value:"Boston"},"Boston"),r.a.createElement("option",{value:"Chicago"},"Chicago"))," ",r.a.createElement("br",null),r.a.createElement("select",{onChange:this.handleChange,name:"residence_type",required:!0},r.a.createElement("option",{label:"Residence Type?"}),r.a.createElement("option",{label:"apt"},"Apt"),r.a.createElement("option",{value:"townhouse"},"Townhouse"),r.a.createElement("option",{value:"one-story-house"},"One-Story-House"),r.a.createElement("option",{value:"two-story-house"},"Two-Story-House"),r.a.createElement("option",{value:"mansion"},"mansion"),r.a.createElement("option",{value:"castle"},"castle"))," ",r.a.createElement("br",null),r.a.createElement("select",{onChange:this.handleChange,name:"other_pets",required:!0},r.a.createElement("option",{label:"Any Other Pets?"}),r.a.createElement("option",{value:"true"},"True"),r.a.createElement("option",{value:"false"},"False"))," ",r.a.createElement("br",null),r.a.createElement("select",{onChange:this.handleChange,name:"allergy",required:!0},r.a.createElement("option",{label:"Allergies?"}),r.a.createElement("option",{value:"true"},"True"),r.a.createElement("option",{value:"false"},"False"))," ",r.a.createElement("br",null),r.a.createElement("input",{onChange:this.handleChange,placeholder:"image URL",name:"img_url",type:"url",required:!0}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"ui button",type:"submit"},"Submit")))}}]),t}(r.a.Component);var U=Object(c.b)(null,function(e){return{setCurrentUser:function(t){e({type:"SET_CURRENT_USER",payload:t})}}})(A),_=function(){return r.a.createElement("div",{className:"ui message",style:{width:"30%",color:"black"}},r.a.createElement("h1",null,"About PawsUp"),r.a.createElement("p",null,"PawsUp is an organization dedicated to helping prospective pet adopters meet the pet of their dreams. With all of the pets that need adopting, it can be overwhelming to determine where to start - that's why PawsUp is here to help! Feel free to browse through our pets that need adopting, and set up a meeting if things feels right! "))},T=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",sex:"",animal:"",age:"",allergy:"",size:"",location:"",img_url:""},a.handleChange=function(e){a.setState(Object(y.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createPet(a.state)},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){localStorage.token||(alert("You must be logged in to view this page!"),this.props.history.push("/login"))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Create a pet!"),r.a.createElement("form",{className:"ui form",style:{width:"25em"},onSubmit:this.handleSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("input",{placeholder:"Name",onChange:this.handleChange,name:"name",type:"text",required:!0})),r.a.createElement("select",{onChange:this.handleChange,name:"sex",required:!0},r.a.createElement("option",{label:"Select Sex"}),r.a.createElement("option",{value:"male"},"\u2642\ufe0e"),r.a.createElement("option",{value:"female"},"\u2640\ufe0e")),r.a.createElement("br",null),r.a.createElement("select",{onChange:this.handleChange,name:"animal",required:!0},r.a.createElement("option",{label:"Select Animal Type"}),r.a.createElement("option",{value:"dog"},"Dog"),r.a.createElement("option",{value:"cat"},"Cat"),r.a.createElement("option",{value:"pig"},"Pig"),r.a.createElement("option",{value:"lizard"},"Lizard"),r.a.createElement("option",{value:"hamster"},"Hamster"),r.a.createElement("option",{value:"rabbit"},"Rabbit")),r.a.createElement("br",null),r.a.createElement("div",{className:"field"},r.a.createElement("input",{onChange:this.handleChange,placeholder:"Age (in months)",min:"1",name:"age",type:"number",required:!0})),r.a.createElement("select",{onChange:this.handleChange,name:"allergy",required:!0},r.a.createElement("option",{label:"Allergenic?"}),r.a.createElement("option",{value:"true"},"True"),r.a.createElement("option",{value:"false"},"False")),r.a.createElement("br",null),r.a.createElement("select",{onChange:this.handleChange,name:"size",required:!0},r.a.createElement("option",{label:"Select Animal Size"}),r.a.createElement("option",{value:"small"},"Small"),r.a.createElement("option",{value:"medium"},"Medium"),r.a.createElement("option",{value:"large"},"Large")),r.a.createElement("br",null),r.a.createElement("select",{onChange:this.handleChange,name:"location",required:!0},r.a.createElement("option",{label:"Location"}),r.a.createElement("option",{label:"New York City"},"New York City"),r.a.createElement("option",{value:"Los Angeles"},"Los Angeles"),r.a.createElement("option",{value:"Boston"},"Boston"),r.a.createElement("option",{value:"Chicago"},"Chicago"))," ",r.a.createElement("br",null),r.a.createElement("div",{className:"field"},r.a.createElement("input",{onChange:this.handleChange,placeholder:"image URL",name:"img_url",type:"url",required:!0})),r.a.createElement("button",{className:"ui button",type:"submit"},"Submit")))}}]),t}(r.a.Component),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).renderMeetingRows=function(){return a.props.currentUser.meetings.map(function(e){return r.a.createElement("tr",{key:Math.random()},r.a.createElement("td",null,r.a.createElement("h4",{className:"ui image header"},r.a.createElement("img",{alt:"",src:e.pet_img_url,className:"ui mini rounded image"}),r.a.createElement("div",{className:"content"},e.pet,r.a.createElement("div",{className:"sub header"},e.location)))),r.a.createElement("td",null,e.date))})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui raised card",style:{marginTop:"3em",padding:"0.25em",maxHeight:"24em",overflowY:"scroll"}},r.a.createElement("table",{className:"ui very basic collapsing celled table"},r.a.createElement("thead",null,r.a.createElement("th",{style:{textAlign:"center",background:"darkblue",color:"white"},colSpan:"2"},"Meetings"),r.a.createElement("tr",null,r.a.createElement("th",null,"Pet Name"),r.a.createElement("th",null,"Date"))),r.a.createElement("tbody",null,this.renderMeetingRows())))}}]),t}(r.a.Component),x=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).capitalize=function(e){if("string"!==typeof e)return"";for(var t=e.split(" "),a=0;a<t.length;a++)t[a]=t[a].charAt(0).toUpperCase()+t[a].substring(1);return t.join(" ")},a.renderAdopterInfoList=function(){return a.props.currentUser?r.a.createElement("div",{style:{position:"relative",right:"6em",fontSize:"1.6em"}},r.a.createElement("h1",null,a.capitalize(a.props.currentUser.name),"'s Page"),r.a.createElement("img",{alt:"",className:"ui medium circular image",src:a.props.currentUser.img_url}),r.a.createElement("div",{className:"ui list"},r.a.createElement("div",{className:"item"},r.a.createElement("i",{className:"marker icon"}),r.a.createElement("div",{className:"content"},a.props.currentUser.location)),r.a.createElement("div",{className:"item"},r.a.createElement("i",{className:"home icon"}),r.a.createElement("div",{className:"content"},"Residence Type: ",a.props.currentUser.residence_type)),r.a.createElement("div",{className:"item"},r.a.createElement("i",{className:"birthday cake icon"}),r.a.createElement("div",{className:"content"},a.props.currentUser.age," Years Old")),r.a.createElement("div",{className:"item"},r.a.createElement("i",{className:"certificate icon"}),r.a.createElement("div",{className:"content"},a.props.currentUser.allergy?"Adopter Has Allergies":"Adopter Has No Allergies")),r.a.createElement("div",{className:"item"},r.a.createElement("i",{className:"paw icon"}),r.a.createElement("div",{className:"content"},a.props.currentUser.other_pets?"Adopter Has Other Pets":"No Other Pets")))):null},a.renderAdopterMeetings=function(){return a.props.currentUser?a.props.currentUser.meetings.length?r.a.createElement("div",null,r.a.createElement(k,{currentUser:a.props.currentUser}),r.a.createElement("h4",null,"  ",r.a.createElement(d.b,{to:"/pets"}," Do you want to see more pets? "))):r.a.createElement("div",{style:{position:"relative",top:"6em"},className:"ui message huge"},"You Haven't Set Any Pet Meetings Up Yet! ",r.a.createElement(d.b,{to:"/pets"},r.a.createElement("span",{style:{color:"blue"}},"Go See Some Pets!"))):null},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"ui two column very relaxed grid"},r.a.createElement("div",{className:"column"},this.renderAdopterInfoList()),r.a.createElement("div",{className:"column"},this.renderAdopterMeetings())))}}]),t}(r.a.Component),M=Object(c.b)(function(e){return{currentUser:e.currentUser}})(x),R=(a(28),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui menu",style:{textAlign:"left"}},r.a.createElement("div",{className:"item"},r.a.createElement(d.b,{to:"/pets"},"Pets!")),r.a.createElement("div",{className:"item"},r.a.createElement(d.b,{to:"/about"},"About")),r.a.createElement("div",{className:"item"},r.a.createElement(d.b,{to:"/new-pet"},"Register a Pet for Adoption")),"/"!==this.props.location.pathname?r.a.createElement("div",{className:"center item"},r.a.createElement("h3",{className:"logo"},"PawsUp")," "):"",localStorage.token?r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"right item"},r.a.createElement(d.b,{to:"/logout"},"Log Out")),r.a.createElement("div",{className:"right item"},r.a.createElement(d.b,{to:"/adopter-profile"},"Adopter Profile"))):r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"right item"},r.a.createElement(d.b,{to:"/signup"},"Sign Up")),r.a.createElement("div",{className:"right item"},r.a.createElement(d.b,{to:"/login"},"Log In"))))}}]),t}(r.a.Component)),F=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement(d.b,{to:"/pets"},r.a.createElement("h1",{style:{fontSize:"4em"},className:"logo"},"PawsUp\ud83d\udc3e")))}}]),t}(n.Component),z=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,this.props.logOut())}}]),t}(n.Component),D=a(16),I=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.handleSubmit=function(e){e.preventDefault(),fetch("".concat("http://www.pawsup.site").concat("/api/v1/login"),{method:"POST",headers:{"Content-Type":"application/json",Accepts:"application/json"},body:JSON.stringify(a.state)}).then(function(e){return e.json()}).then(function(e){e.errors?alert(e.errors):(localStorage.setItem("token",e.token),a.props.setCurrentUser(e.user),a.props.history.push("/adopter-profile"))})},a.handleChange=function(e){a.setState(Object(y.a)({},e.target.name,e.target.value))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement("form",{className:"ui form",onSubmit:this.handleSubmit,style:{width:"25em"}},r.a.createElement("input",{placeholder:"User Name",onChange:this.handleChange,name:"username",type:"text",required:!0})," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{placeholder:"Password",onChange:this.handleChange,name:"password",type:"password",required:!0})," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"ui button",type:"submit"},"Submit")))}}]),t}(r.a.Component);var L=Object(c.b)(null,function(e){return{setCurrentUser:function(t){e({type:"SET_CURRENT_USER",payload:t})}}})(I),q=(a(46),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).logOut=function(){return localStorage.removeItem("token"),a.props.setCurrentUser(-1),r.a.createElement(D.a,{to:"/login"})},a.createPet=function(e){fetch("".concat("http://www.pawsup.site").concat("/api/v1/pets"),{method:"POST",headers:{"Content-Type":"application/json",Accepts:"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){if(!e.errors)return a.props.addPetToPets(e),a.props.history.push("/pet-profiles/".concat("".concat(e.id)));alert(e.errors)})},a.fetchPets=function(){fetch("".concat("http://www.pawsup.site").concat("/api/v1/pets")).then(function(e){return e.json()}).then(function(e){a.props.setPets(e)})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.fetchPets();var t=localStorage.getItem("token");t?fetch("".concat("http://www.pawsup.site").concat("/api/v1/auto_login"),{headers:{Authorization:t}}).then(function(e){return e.json()}).then(function(t){t.errors?(e.props.setCurrentUser(-1),alert(t.errors),e.logOut()):e.props.setCurrentUser(t)}):this.props.history.push("/login")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(R,{currentUser:this.props.currentUser,location:this.props.location}),r.a.createElement("header",{className:"App-header"},"/"===this.props.history.location.pathname?r.a.createElement(F,null):" ",r.a.createElement(D.d,null,r.a.createElement(D.b,{exact:!0,path:"/pets",render:function(t){return r.a.createElement(S,Object.assign({},t,{currentUser:e.props.currentUser}))}}),r.a.createElement(D.b,{exact:!0,path:"/new-pet",render:function(t){return r.a.createElement(T,Object.assign({createPet:e.createPet},t))}}),r.a.createElement(D.b,{exact:!0,path:"/about",render:function(e){return r.a.createElement(_,e)}}),r.a.createElement(D.b,{exact:!0,path:"/signup",render:function(t){return r.a.createElement(U,Object.assign({},t,{createAdopter:e.createAdopter}))}}),r.a.createElement(D.b,{exact:!0,path:"/login",render:function(e){return r.a.createElement(L,e)}}),r.a.createElement(D.b,{exact:!0,path:"/adopter-profile",render:function(e){return r.a.createElement(M,e)}}),r.a.createElement(D.b,{exact:!0,path:"/pet-profiles/:id",render:function(e){return r.a.createElement(N,e)}}),r.a.createElement(D.b,{exact:!0,path:"/logout",render:function(t){return r.a.createElement(z,Object.assign({logOut:e.logOut},t))}}),r.a.createElement(D.b,{path:"/",render:function(e){return r.a.createElement(_,e)}}))))}}]),t}(n.Component));var Y=Object(c.b)(function(e){return{currentUser:e.currentUser,pets:e.pets}},function(e){return{setCurrentUser:function(t){e({type:"SET_CURRENT_USER",payload:t})},setPets:function(t){e({type:"SET_PETS",payload:t})},addPetToPets:function(t){e({type:"ADD_PET_TO_PETS",payload:t})}}})(q),H=a(15),B={currentUser:null,pets:[],currentPet:null},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(H.a)({},e,{currentUser:t.payload});case"SET_PETS":return Object(H.a)({},e,{pets:t.payload});case"ADD_PET_TO_PETS":return Object(H.a)({},e,{pets:[].concat(Object(b.a)(e.pets),[t.payload])});case"SET_CURRENT_PET":return Object(H.a)({},e,{currentPet:t.payload});case"ADD_MEETING_TO_CURRENT_USER":return Object(H.a)({},e,{currentUser:Object(H.a)({},e.currentUser,{meetings:[].concat(Object(b.a)(e.currentUser.meetings),[t.payload])})});case"ADD_MEETING_TO_CURRENT_PET":return Object(H.a)({},e,{currentPet:Object(H.a)({},e.currentPet,{meetings:[].concat(Object(b.a)(e.currentPet.meetings),[t.payload])})});default:return e}},G=Object(l.b)(J);i.a.render(r.a.createElement(c.a,{store:G},r.a.createElement(d.a,null,r.a.createElement(D.b,{path:"/",component:Y}))),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.7f2fc0d8.chunk.js.map