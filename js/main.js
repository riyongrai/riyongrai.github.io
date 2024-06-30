$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});



// Learn More Page Scroll

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Menu

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
	name = name ? name.toUpperCase() : "ANONYMOUS PERSON";

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
		`Prepare yourself, <span style="color: blue; font-size: 24px; font-weight: bold;">${name}</span>! The adventure awaits!`,
		`Hold on tight, <span style="color: blue; font-size: 24px; font-weight: bold;">${name}</span>! You're about to enter a world of wonders!`,
		`Congratulations, <span style="color: blue; font-size: 24px; font-weight: bold;">${name}</span>! You've stumbled upon some treasure!`,
		`Welcome, <span style="color: blue; font-size: 24px; font-weight: bold;">${name}</span>! Get ready for some serious fun!`,
		`Ahoy there, <span style="color: blue; font-size: 24px; font-weight: bold;">${name}</span>! Let's set sail on the seas of imagination!`
	];
	

	// Select a random humorous message
	var randomIndex = Math.floor(Math.random() * humorousMessages.length);
	var humorousMessage = humorousMessages[randomIndex];

	// Construct the final message
	var message = `${greeting}, ${humorousMessage}`;

	// Display greeting message on the page
	var greetingMessageElement = document.getElementById('greeting-message');
	greetingMessageElement.innerHTML = message; // Use innerHTML to render HTML content
	greetingMessageElement.classList.remove('hidden');
};

// Youtube vidoes
const API_KEY = 'AIzaSyAJ4WiKChER-rO5vpfkQKFL8Yal1NT632Q'; // Replace with your actual API key
const CHANNEL_ID = 'UCmb5jR_f1Yp26SEwCZ42OvA'; // Replace with your actual channel ID

async function getLatestVideos() {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=9`);
    const data = await response.json();
    renderVideos(data.items);
}

function renderVideos(videos) {
    const videosContainer = document.getElementById('videos');
    videos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('video');
        videoElement.innerHTML = `
            <iframe src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allowfullscreen></iframe>
            <h2>${video.snippet.title}</h2>
        `;
        videosContainer.appendChild(videoElement);
    });
}

// Fetch and render the latest videos on page load
getLatestVideos();

//RENDER PHOTOS
// script.js

// script.js

// script.js

document.addEventListener("DOMContentLoaded", function() {
    const photoGallery = document.getElementById('photoGallery');

    // Path to the directory containing images
    const directoryPath = 'img/riyong/';

    // Function to fetch images from directory and render them
    async function fetchAndRenderImages() {
        try {
            const response = await fetch(directoryPath);
            if (!response.ok) {
                throw new Error(`Failed to fetch directory listing (${response.status} ${response.statusText})`);
            }
            const html = await response.text();
            const doc = new DOMParser().parseFromString(html, 'text/html');
            const links = Array.from(doc.querySelectorAll('a[href$=".jpg"]'));

            links.forEach(link => {
                const imgSrc = `${directoryPath}${link.getAttribute('href')}`;
                const imgAlt = link.textContent.trim() || link.getAttribute('href');
                
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = imgAlt;
                img.classList.add('photo-item');
                
                // Append the img element to the photoGallery container
                photoGallery.appendChild(img);
            });
        } catch (error) {
            console.error('Error fetching or rendering images:', error);
        }
    }

    // Call the function to fetch and render images
    fetchAndRenderImages();
});

 // JavaScript code goes here
 const sentences = [
	"Science: Octopuses have three hearts. Two pump blood to the gills, while the third pumps it to the rest of the body, making them highly efficient swimmers despite lacking a skeleton.",
	"History: The Great Pyramid of Giza was originally covered in highly polished white limestone, so it shone brightly in the sun and could be seen from miles away.",
	"USA: The shortest war in American history was the Toledo War between Ohio and Michigan in 1835. It lasted only 10 days and resulted in no casualties, but Michigan lost the disputed territory.",
	"World: The Great Wall of China is not a single continuous wall but a series of walls and fortifications built by different Chinese dynasties over centuries. Its total length, including all branches, exceeds 13,000 miles.",
	"Technology: The first email was sent by Ray Tomlinson in 1971. He sent it to himself as a test message between two computers sitting right next to each other, marking the beginning of modern electronic communications.",
	"Science: Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old -and still perfectly edible.",
	"History: Cleopatra VII of Egypt lived closer in time to the first Moon landing in 1969 than she did to the construction of the Great Pyramid of Giza. Cleopatra died in 30 BC, while the Great Pyramid was completed around 2560 BC.",
	"USA: The Apollo 11 astronauts had to go through U.S. customs upon returning from the Moon. They had to declare Moon rocks and dust they collected as part of their mission.",
	"World: There are more possible iterations of a game of chess than there are atoms in the known universe. The number of possible unique chess games is estimated to be around 10^120.",
	"Technology: The first website, created by Tim Berners-Lee in 1991, is still online today. It was dedicated to information about the World Wide Web project and served as an introduction to the concept for new users.",
	"These facts highlight the diverse and often surprising aspects of science, history, technology, and the world around us.",
	"Science: The human brain is more active during sleep than during the day when awake, especially during dreams.",
	"History: The shortest war in history was between Britain and Zanzibar on August 27, 1896. It lasted only 38 minutes.",
	"USA: The Library of Congress in Washington, D.C., is the largest library in the world, containing over 168 million items.",
	"World: There are more trees on Earth than there are stars in the Milky Way galaxy.",
	"Technology: The first 1GB hard drive, introduced by IBM in 1980, weighed over 500 pounds and cost $40,000.",
	"Science: A teaspoonful of neutron star material would weigh about 6 billion tons, roughly equivalent to the weight of Mount Everest.",
	"History: The Eiffel Tower in Paris was originally intended to be a temporary installation and was almost torn down in 1909.",
	"USA: Alaska is the state with the highest percentage of people who walk to work.",
	"World: Mount Everest grows about 0.2 inches (0.5 cm) taller each year due to upward thrust caused by tectonic activity.",
	"Technology: The first computer virus was created in 1983 and was called the Elk Cloner. It spread through floppy disks on Apple II computers.",
	"These facts provide insight into various aspects of science, history, technology, and the world, showcasing their fascinating and sometimes unexpected nature."
  ];

  // Function to display a random sentence
  function displayRandomSentence() {
	// Get a random index from the sentences array
	const randomIndex = Math.floor(Math.random() * sentences.length);
	// Display the sentence
	document.getElementById("sentenceDisplay").textContent = sentences[randomIndex];
  }

  // Initial display
  displayRandomSentence();

  // Change sentence every 5 seconds
  setInterval(displayRandomSentence, 5000);


