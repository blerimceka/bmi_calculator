
var button = document.getElementById("button");

button.addEventListener("click", function(){
    height = document.getElementById("height").value;
    weight= document.getElementById("weight").value;
    age = document.getElementById("age").value;
    gender = document.getElementById("gender").value;

    var result = (weight * 10000) / (height * height);
    

    $("#yourheight").text(height + " cm");
    $("#yourweight").text(weight + " kg");
    $("#yourage").text(age + " years old");
    $("#yourgender").text(gender);
    $("#bmiresult").text(result.toFixed(2));

    //per femijet nder 5 vjet
    if(age <= 5){
        if(result < 13.4){
            $("#bmi").text("Underweight!");
            $("#bmi").addClass("underweight");
            $("#myRange").attr("value", result);
            $("#myRange").addClass("sliderun")
        }else if (result > 13.5 && result < 16.9){
            $("#bmi").text("Normal!");
            $("#bmi").addClass("normal");
            $("#myRange").attr("value", result);
            $("#myRange").addClass("slider")
        }else if (result > 17.0 && result < 18.4){
            $("#bmi").text("Overweight!");
            $("#bmi").addClass("underweight");
            $("#myRange").attr("value", result);
            $("#myRange").addClass("sliderun")
    
        }else {
            $("#bmi").text("Obese!");
            $("#bmi").addClass("obese");
            $("#myRange").attr("value", result);
            $("#myRange").addClass("sliderun")
    
        }
    //per femije nja 6 deri ne 15
    }else if(age >= 6 && age <= 15){
        if(result < 16){
            $("#bmi").text("Underweight!");
            $("#bmi").addClass("underweight");
            $("#myRange").attr("value", result);
            $("#myRange").addClass("sliderun")
        }else if (result > 16.1 && result < 23.9){
            $("#bmi").text("Normal!");
            $("#bmi").addClass("normal");
            $("#myRange").attr("value", result);
            $("#myRange").addClass("slider")
        }else if (result > 24 && result < 28){
            $("#bmi").text("Overweight!");
            $("#bmi").addClass("underweight");
            $("#myRange").attr("value", result);
            $("#myRange").addClass("sliderun")
    
        }else {
            $("#bmi").text("Obese!");
            $("#bmi").addClass("obese");
            $("#myRange").attr("value", result);
            $("#myRange").addClass("sliderun")
    
        }
    //per femije nga 15 deri 20 vjec
    }else if(age > 15 && age <= 20){
        if(result < 17.4){
            $("#bmi").text("Underweight!");
            $("#bmi").addClass("underweight");
            $("#myRange").attr("value", result);
            $("#myRange").addClass("sliderun")
        }else if (result > 17.5 && result < 25.9){
            $("#bmi").text("Normal!");
            $("#bmi").addClass("normal");
            $("#myRange").attr("value", result);
            $("#myRange").addClass("slider")
        }else if (result > 26 && result < 31){
            $("#bmi").text("Overweight!");
            $("#bmi").addClass("underweight");
            $("#myRange").attr("value", result);
            $("#myRange").addClass("sliderun")
    
        }else {
            $("#bmi").text("Obese!");
            $("#bmi").addClass("obese");
            $("#myRange").attr("value", result);
            $("#myRange").addClass("sliderun")
    
        }
    //per te ritur
    }else {
        if(result < 18.5){
            $("#bmi").text("Underweight!");
            $("#bmi").addClass("underweight");
            $("#myRange").attr("value", result);
            $("#myRange").addClass("sliderun")
        }else if (result > 18.6 && result < 24.9){
            $("#bmi").text("Normal!");
            $("#bmi").addClass("normal");
            $("#myRange").attr("value", result);
            $("#myRange").addClass("slider")
        }else if (result > 25.0 && result < 29.9){
            $("#bmi").text("Overweight!");
            $("#bmi").addClass("underweight");
            $("#myRange").attr("value", result);
            $("#myRange").addClass("sliderun")
    
        }else {
            $("#bmi").text("Obese!");
            $("#bmi").addClass("obese");
            $("#myRange").attr("value", result);
            $("#myRange").addClass("sliderun")
    
       }
    }

});

//slideri
var slider = document.getElementById("myRange");
var output = document.getElementById("bmiresult");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    if(this.value < 18.5){
        $("#bmi").text("Underweight!");
        $("#bmi").addClass("underweight");
    }
    else if (this.value > 18.6 && this.value < 24.9){
        $("#bmi").text("Normal!");
        $("#bmi").addClass("normal");
    }
    else if (this.value > 25.0 && this.value < 29.9){
        $("#bmi").text("Overweight!");
        $("#bmi").addClass("underweight");
    }
    else{
        $("#bmi").text("Obese!");
        $("#bmi").addClass("obese");
    }
}

