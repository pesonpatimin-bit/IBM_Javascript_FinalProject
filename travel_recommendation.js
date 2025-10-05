//variable fetch data
var url = './travel_recommendation_api.json';

//function search
function search_data(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        //show result
        check_search();
        










    })
    .catch(error => console.error('เกิดข้อผิดพลาด:', error));
}
//function check keyword .diferrence keyword sush "beach," or "beaches," "Beach" or "BEACH,".convert to lovercase by toLowerCase()
function check_search(){
    const search_txt = document.getElementById("search_txt").value.toLowerCase();
    console.log(search_txt);
    switch(search_txt){
        case "temple":
            console.log(search_txt,"temples");
            break;
        case "beach":
            console.log(search_txt,"beach");
            break;
        case "country":
            console.log(search_txt,"country");
            break;
    }

}



//Event listener
document.getElementById("search_btn").addEventListener("click",search_data);
document.getElementById("reset_btn").addEventListener("click",check_search);