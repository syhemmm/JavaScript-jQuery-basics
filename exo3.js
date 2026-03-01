// Utilisation de la syntaxe jQuery pour attendre le chargement du DOM (html)
$(document).ready(function() {
    
    $('#btn-non').mouseenter(function() { //actions a faire lors d'un click
        
        //calculer les dimensions dispo dans la fenetre
        const largeurMax= $(window).width() - $(this).outerWidth(); //largeur du nav  //largeur du bouton
        const hauteurMax= $(window).height() - $(this).outerHeight();

        //generer des positions aleatoires

        const nouveauTop = Math.floor(Math.random() * hauteurMax);
         const nouveauLeft = Math.floor(Math.random() * largeurMax);

         //appliquer les nvl coordonnées 
         $(this).css({
            'top' : nouveauTop + 'px',
            'left' : nouveauLeft + 'px'
         });

    });

    $('btn-oui').mouseenter(function(){

      // Au survol : on augmente la taille et la police
        $(this).animate({
            'font-size': '25px',
            'padding': '20px 40px'
        }, 200); // 200ms pour rendre l'effet fluide

    })

    $('#btn-oui').mouseleave(function() {
        // Quand on quitte on revient aux valeurs initiales
        $(this).stop(true).animate({
            'font-size': '16px',
            'padding': '10px 20px'
        }, 200);
    });

    // GESTION DU CLICk SUR LE BOUTON OUI
    $('#btn-oui').click(function() {
        // On remplace tout le contenu du body
        $('body').html(`
            <div style="text-align: center; padding-top: 50px;">
                <h1 style="color: #f7fdfa; font-size: 3rem;"> COOL ! </h1>
                <p style="font-size: 1.5rem;">Contente que vous allez bien <3 !</p>
                
                <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJmZzRreHh6cHZ6eHh6cHZ6eHh6cHZ6eHh6cHZ6eHh6cHZ6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/l0MYt5jPR6QX5pnqM/giphy.gif" 
                     alt="Fête" 
                     style="width: 100%; max-width: 500px; border-radius: 15px; margin-top: 20px;">
                
                <br>
                <button onclick="location.reload()" style="margin-top: 30px; padding: 10px;">Recommencer</button>
            </div>
        `);

        // Optionnel : on peut changer la couleur du fond pour faire plus "fête"
        $('body').css('background-color', '#ac3565');
    });
    

});