//variable fetch data
var url = './travel_recommendation_api.json';

//function
function search_data(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);        
        console.log(data.name);  
        console.log(data.email);  
    })
    .catch(error => console.error('เกิดข้อผิดพลาด:', error));
}
//function check keyword
//diferrence keyword sush "beach," or "beaches," "Beach" or "BEACH,"
//convert to lovercase by toLowerCase()




//Event listener
document.getElementById("search_btn").addEventListener("click",search_data);
document.getElementById("reset_btn").addEventListener("click",search_data);