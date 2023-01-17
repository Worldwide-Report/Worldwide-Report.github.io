function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



function makeGetRequest(pages) { 

   var path = "https://www.reddit.com/r/"+pages+".json"
 
	axios.get(path).then(
		(response) => {
			var result = response.data;
       getData(result)
		},
		(error) => {
			console.log(error);
		}
	);
}


function getData(value) {

  document.getElementById('parent').innerHTML = ""


  var data = value.data.children
  var i=0
  data.map((item) => {

    
    var subparent =document.createElement("div")
    subparent.id = "subparent"+i
    subparent.className = "subParent"
    if(item.data.thumbnail!= "self" && item.data.title != "" && item.data.thumbnail!= "self" && item.data.thumbnail[0] =="h"){
      var dataObj = document.createElement('h5');
      var imgObj = document.createElement("img");
      imgObj.src = item.data.thumbnail;
      console.log(imgObj.src)
      dataObj.innerHTML = item.data.title;
   
        document.getElementById("parent").appendChild(subparent)
        document.getElementById("subparent"+i).appendChild(imgObj);
        document.getElementById("subparent"+i).appendChild(dataObj);
        i = i + 1
    }
  
      
  });
}
