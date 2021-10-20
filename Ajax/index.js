var caracthere=[]


    $(function(){


    $.ajax({
        url: 'https://thronesapi.com/api/v2/Characters',
        success: function(data, statuts, response) {
            data.forEach(element => {
                $("#got").append(`

                
                <div>
                <div class="box">
                <img src="${element.imageUrl}">
                <div class="name">
                <p>${element.firstName} ${element.lastName}<p>
                </div>
                <div class="title">
                <p>${element.title}<p>
                </div>
                </div>
                </div>
                `)


            })
            
        }
    });
    
    $('form').submit(function(e) {
       e.preventDefault()
       var input = $(".input").val()
       console.log(input)
       caracthere.filter(function(person) {
       return person.fullName.toLowerCase().includes(valeurInput);
       });
   })

})
    






// formulaire dans une fonction
//executer fonction
//recuperer valeur input
//ajax pour recupere data
//filter data
// affiche data filtrer
