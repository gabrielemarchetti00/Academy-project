let flag = document.getElementById("flag").innerHTML;
let previousMatch = document.getElementById("previousMatch").innerHTML;
let previousInput = document.getElementById("previousInput").innerHTML;
let previousFlag = document.getElementById("previousFlag").innerHTML;


window.addEventListener('load', function() {
	if(previousFlag != null || previousMatch != null || previousInput != null) {
		console.log(previousFlag);
		console.log(previousInput);
		console.log(previousMatch);

	if(previousInput === "") showWrongModal(previousInput, previousMatch, previousFlag);
	else {
		if (previousMatch.toLowerCase().trim() === previousFlag.toLowerCase().trim()) {
		    showCorrectModal(previousInput, previousMatch); // Visualizza la modale per la risposta corretta
		    incrementCounter();
	  	} else {
	    	showWrongModal(previousInput, previousMatch, previousFlag); // Visualizza la modale per la risposta errata
	  	}
	}
	sessionStorage.removeItem("firstLoad");
	  
	}
});


var reportMatch = function() {
	var param = {input: previousInput};
    $.post("addreport", $.param(param));
}

var $bc =$("#reportButton");
$bc.click(reportMatch);
var $bw = $("#reportBtn")
$bw.click(reportMatch);


 // Funzione per visualizzare la modale di risposta corretta
  function showCorrectModal(matchedWord, correctWord) {
    const correctModal = document.getElementById("correctModal");
    const correctAnswerElement = document.getElementById("matchedWord");
    correctAnswerElement.textContent ="Risposta corretta: " + matchedWord + " = " + correctWord;
    correctModal.style.display = "block";
    
    const reportBtn = document.getElementById("reportButton")
    const reportSent = document.getElementById("reportSentCorrect");
    reportBtn.addEventListener("click", function(e) {
		reportSent.textContent = "Segnalazione inviata";
		reportBtn.setAttribute('style', 'display:none !important;');
	})
	
    setTimeout(() => {
      correctModal.style.display = "none";
    }, 5000);
  }

// Funzione per visualizzare la modale di risposta errata
  function showWrongModal(previousInput, previousMatch, previousFlag) {
    const wrongModal = document.getElementById("wrongModal"); 
    const matchGotElement = document.getElementById("matchGot");
    const correctAnswerElement = document.getElementById("correctAnswer");
    if(previousInput === "") {
		matchGotElement.textContent = "Nessun inserimento";
		correctAnswerElement.textContent = "La risposta corretta era: " + previousFlag;
		document.getElementById("reportBtn").setAttribute('style', 'display:none !important;');
	}
    else {
		correctAnswerElement.textContent = " Risposta corretta: " + previousFlag;
		if(previousMatch.length === 1){
			matchGotElement.textContent = "Nessun risultato per l'input: " + previousInput;
		}else {
    		matchGotElement.textContent = "Hai inserito: " + previousInput + " = " + previousMatch;
    	}
    }
    wrongModal.style.display = "block";
    
    const reportBtn = document.getElementById("reportBtn")
    const reportSent = document.getElementById("reportSentWrong");
    reportBtn.addEventListener("click", function(e) {
		reportSent.textContent = "Segnalazione inviata";
		reportBtn.setAttribute('style', 'display:none !important;');
	})
	
    setTimeout(() => {
      wrongModal.style.display = "none";
    }, 5000);
  }