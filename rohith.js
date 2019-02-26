function OverMouse() {
    const xhttp = new XMLHttpRequest();
    $.ajax({
      type: 'GET',
      url: 'https://thesimpsonsquoteapi.glitch.me/quotes?count=3',
      success: function (data) {
        $("#mouseOverme").html(data[1].quote);
      }
    });
  }

  // function calConverter() 
  //       {
  //           var cm = document.getElementById("cm").value;
  //           // alert("The Given" +cm+"Centimeter converted to " +inches+"inch");
  //           var inches = (cm/2.54);
  //           alert("The Given " +cm+" Centimeter converted to " +inches+" inch");
  //       }

  function weightConverter() {
          var grams= document.getElementById("inputKilograms").value;
          var kgs = grams * 1000;
          alert("The Given  Kilograms converted to " +kgs+" grams");
         document.getElementById("outputGrams").innerHTML = kgs;
      }

        
        
