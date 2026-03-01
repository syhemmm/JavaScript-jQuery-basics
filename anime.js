$(document).ready(function(){

    //ecoute le clic
    $('.question').click(function(){
        //toggle alterne entre laffichage et le masquage
       // $(this).next('.reponse').slideToggle(300);

       //on récup la reponse associée a la question cliquée
        const maReponse = $(this).next('.reponse');

        //On ferme TOUTES les autres réponses qui sont actuellement ouvertes
        // .not(maReponse) : "Ferme tout sauf celle que je viens de cliquer"
        $('.reponse').not(maReponse).slideUp();

        //basculer l'affichage de la réponse actuelle
        maReponse.slideToggle();
    });


});