//variable fetch data
var url = './travel_recommendation_api.json';

//function search
function search_data(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        //console.log(data.countries[0]);
        
        
        //show result
        var search_align = check_search();
        
        //console.log(data.find(u => u.name === search_align));
        //console.log(data.countries[search_align].cities[0]);
        
        var search_show_div1 = document.getElementById("search_content1");
        var search_show_div2 = document.getElementById("search_content2");

        //const picture_search = data[search_align][0].imageUrl;
        //const picture_search = "./dalat.jpg";
                //console.log(picture_search);

        //content
        if(search_align=="temples"||search_align=="beaches"){
        search_show_div1.innerHTML = `<img src="${data[search_align][0].imageUrl}"><br><h2>${data[search_align][0].name}</h2><br><p>${data[search_align][0].description}</p>`;
        search_show_div2.innerHTML = `<img src="${data[search_align][1].imageUrl}"><br><h2>${data[search_align][1].name}</h2><br><p>${data[search_align][1].description}</p>`;
        }else
        {
        search_show_div1.innerHTML = `<img src="${data.countries[search_align].cities[0].imageUrl}"><br><h2>${data.countries[search_align].cities[0].name}</h2><br><p>${data.countries[search_align].cities[1].description}</p>`;
        search_show_div2.innerHTML = `<img src="${data.countries[search_align].cities[1].imageUrl}"><br><h2>${data.countries[search_align].cities[1].name}</h2><br><p>${data.countries[search_align].cities[1].description}</p>`;    
        }
    }
    )
    .catch(error => console.error('error:', error));
}
//function check keyword .diferrence keyword sush "beach," or "beaches," "Beach" or "BEACH,".convert to lovercase by toLowerCase()
function check_search(){
    const search_txt = document.getElementById("search_txt").value.toLowerCase();
    //console.log(search_txt);
    switch(search_txt){
        case "temple":
            //console.log(search_txt,"temples");
            return "temples";
            break;
        case "beach":
            //console.log(search_txt,"beaches");
            return "beaches";
            break;
        case "australia":
            //console.log(search_txt,"countries");
            return "0";
            break;
        case "japan":
            //console.log(search_txt,"countries");
            return "1";
            break;
        case "brazil":
            //console.log(search_txt,"countries");
            return "2";
            break;
    }

}



//Event listener
document.getElementById("search_btn").addEventListener("click",search_data);
document.getElementById("reset_btn").addEventListener("click",function(){document.getElementById("search_div").innerHTML=`<div id="search_content1"></div>
<div id="search_content2"></div>`;});