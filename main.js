var SpeechRecognition = window.webkitSpeechRecognition; 

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult = function (event) {

    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = content;
    if(content == "take my selfie"){
        speak();
    }
    
}
function speak(){
    var synth = window.speechSynthesis;

    //var speak_data = document.getElementById("textbox").value
    speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
     
    
   
    synth.speak(utterThis);
    
    Webcam.set({
        width: 350,
        height: 250,
        image_format: "jpeg",
        jpeg_quality: 100
    });
    Webcam.attach(camera);
    
    setTimeout(function(){
        take_snapshot();
        save();
    }, 5000);

}
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= "<img id='selfie_image' src="+data_uri+">"
    });
}
function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
}