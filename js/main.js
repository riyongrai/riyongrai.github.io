$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});


/******************************************************************************************************************************
Learn More Page Scroll
*******************************************************************************************************************************/
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/******************************************************************************************************************************
Menu
*******************************************************************************************************************************/ 
(function() {

	var bodyEl = document.body,
		//content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		/* close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
		*/
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
		}
		isOpen = !isOpen;
	}

	init();

})();


window.onload = function() {
    var name = prompt("Hey there! Enter your name:");

    // Convert name to uppercase
    name = name ? name.toUpperCase() : "VISITOR";

    var date = new Date();
    var hour = date.getHours();
    var greeting;

    if (hour >= 0 && hour < 12) {
        greeting = "Good Morning";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    // Array of humorous messages
    var humorousMessages = [
        "Prepare yourself, " + name + "! The adventure awaits!",
        "Hold on tight, " + name + "! You're about to enter a world of wonders!",
        "Congratulations, " + name + "! You've stumbled upon the treasure trove!",
        "Welcome, esteemed guest " + name + "! Get ready for some serious fun!",
        "Ahoy there, " + name + "! You've just stepped into the land of infinite possibilities!"
    ];

    // Select a random humorous message
    var randomIndex = Math.floor(Math.random() * humorousMessages.length);
    var humorousMessage = humorousMessages[randomIndex];

    var message = `${greeting}, ${name}! ${humorousMessage}`;

    // Display greeting message on the page
    var greetingMessageElement = document.getElementById('greeting-message');
    greetingMessageElement.textContent = message;
    greetingMessageElement.classList.remove('hidden');
};
