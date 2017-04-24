function getDataFromAPI(){
    var endpoint = "https://controllerdata.lacity.org/resource/f3p3-3myx.json"
    var imageArray = [
      "https://static01.nyt.com/images/2014/11/15/business/money/money-master1050.jpg",
      "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAQNAAAAJDBlOWE0YWM0LWUwNmEtNDljNS1iZWFhLTc2NTYyZWYyYzBhOA.jpg",
      "http://www.satenaw.com/wp-content/uploads/2017/03/gender.jpg",
      "http://mediaresources.idiva.com/media/content/2011/May/women_paid_less_for_same_jo.jpg",
      "https://i.ytimg.com/vi/QUZOI8x-rbg/hqdefault.jpg",
      
    ]

    fetch(endpoint)
    .then(function(data){
        return data.json()
    })
    .then(function (json){
        console.log(json)
        var finalHTML = ''

        var wantedData = json.forEach(function(item){
          var randomNumber = Math.floor(Math.random() * imageArray.length)
            var cardItem =  `
                    <div class="col s6 m4"> 
                      <div class="card">
                        <div class="card-image">
                          <img class="card-image-thang" src=${imageArray[randomNumber]}>
                          <span class="card-title">${item.department_title}</span>
                        </div>
                        <div class="card-content">
                          <p>
                            The average salary for males  is ${item.male_average_salary} 
                            and the female average salary is ${item.female_average_salary} 
                          </p>
                        </div>
                        <div class="card-action">
                          <a target="_blank" href="https://www.nytimes.com/2014/11/15/business/keeping-a-vigilant-eye-on-pay-equity-for-women.html?_r=0" >This is a link</a>
                        </div>
                      </div>
                    </div>
            `
            finalHTML += cardItem
        })


          
        // wantedData.forEach(function(cardItem) {
        // })
        var resultDiv = document.getElementById('result')
        resultDiv.innerHTML = finalHTML
    })
    .catch(function(error){
        console.log(error)
    })

}