/**
 * 
 */


window.addEventListener('load', function() {
	loadMatchList();
	loadReportList();
});

var loadMatchList = function() {
    $.get("matchlist", function(responseJson) {
        var $ul = $("#matchlist"); 
        $ul.find("li").remove();
        $.each(responseJson, function(index, match) {
            var $li = $("<li>").val(match.id).text(match.input + "  =>  " + match.standardword).appendTo($ul);
            $li.addClass('list-group-item d-flex justify-content-between align-items-center match-item');
            var $button1 = $("<button>").val(match.id + "ba").text("Accetta").appendTo($li);
            $button1.addClass('btn btn-success btn-sm accept-button');
            $button1.click(function() {
			   var param = {matchid : match.id};
               $.post("checkmatch",  $.param(param));
               $li.remove();
               });
            var $button2 = $("<button>").val(match.id + "br").text("Elimina").appendTo($li);
            $button2.addClass('btn btn-danger btn-sm reject-button');
            $button2.click(function() {
			   var param = {matchid : match.id};
               $.post("removematch", $.param(param));
               $li.remove();
               });	
        });                   
    });
}

$(document).on("click", "#buttonLoadMatch", loadMatchList);


var loadReportList = function() {
    $.get("reportlist", function(responseJson) {
        var $ul = $("#reportlist"); 
        $ul.find("li").remove();
        $.each(responseJson, function(index, segnalazione) {
            var $li = $("<li>").val(segnalazione.id).text(segnalazione.match.input + "  =>  " + segnalazione.match.standardword + "         Creata da: " + segnalazione.idUser.username).appendTo($ul);
            $li.addClass('list-group-item d-flex justify-content-between align-items-center match-item');
            var $button1 = $("<button>").val(segnalazione.id + "ba").text("Accetta").appendTo($li);
            $button1.addClass('btn btn-success btn-sm accept-button');
            $button1.click(function() {
			   var param = {reportid : segnalazione.id};
               $.post("approvasegnalazione",  $.param(param));
               $li.remove();
               });
            var $button2 = $("<button>").val(segnalazione.id + "br").text("Elimina").appendTo($li);
            $button2.addClass('btn btn-danger btn-sm reject-button');
            $button2.click(function() {
			   var param = {reportid : segnalazione.id};
               $.post("removesegnalazione", $.param(param));
               $li.remove();
               });	
        });                   
    });
}

$(document).on("click", "#buttonLoadReport", loadReportList);
             