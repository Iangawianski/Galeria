var source;
var distanciaHorizontal;
var distanciaVertical;

var contenedorImagenAmpliada = $(".imagen-ampliada");

var imagenGrande = $("#imagenGrande");

contenedorImagenAmpliada.hide();

$(".foto").click( function() {
	source = $(this).attr("src");

	imagenGrande.attr("src", source);

	distanciaHorizontal = $("imagenGrande").css("width") / 2;
	distanciaVertical = $("imagenGrande").css("height") / 2;

	imagenGrande.css("margin-left", -distanciaHorizontal);
	imagenGrande.css("margin-top", -distanciaVertical);




	contenedorImagenAmpliada.show();
})