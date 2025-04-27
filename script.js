// Friendship start date (replace with actual date)
const friendshipStartDate = new Date('2008-01-01');

// Notes about Khusi
const notes = [
    "Your smile brightens up my day! 😊",
    "You're the most caring friend anyone could ask for! 💖",
    "Your positive energy is contagious! ✨",
    "Thank you for being such an amazing friend! 🌟",
    "You make every moment special! 🎉"
];

// Surprise questions
const questions = [
    {
        question: "One word you'd use to describe me 😏",
        type: "multiple-choice",
        options: [
            "Chasmiss 🥸",
            "Motu 🍕",
            "Gadha 🤡",
            "Gunda 🥷",
            "Chamak 🤣"
        ]
    },
    {
        question: "What would you do if I turned into a frog? 🤔",
        type: "multiple-choice",
        options: [
            "Keep you in a cute jar 🐸",
            "Kiss you back into human form 💋",
            "Freak out and scream 😱",
            "Start a TikTok account with you 🐸📱"
        ]
    },
    {
        question: "😂 If I were an emoji, which one would I be?",
        type: "multiple-choice",
        options: [
            "😎",
            "🤪",
            "😭",
            "🐸"
        ]
    },
    {
        question: "🤔 What's my spirit animal?",
        type: "multiple-choice",
        options: [
            "Sloth 🦥",
            "Cat 😼",
            "Panda 🐼",
            "Goblin 👹"
        ]
    },
    {
        question: "🧁 What's my biggest talent?",
        type: "multiple-choice",
        options: [
            "Sarcasm 🥲",
            "WWE 🥷",
            "Meme picking 🎯",
            "Pro Athlete 👑"
        ]
    },
    {
        question: "😎 What's my real job in your life?",
        type: "multiple-choice",
        options: [
            "Therapist 🛋️",
            "Clown 🤡",
            "Alarm clock ⏰",
            "Food taster 🍟"
        ]
    },
    {
        question: "🤓 What's my daily mantra?",
        type: "multiple-choice",
        options: [
            "5 more mins 😴",
            "Food is life 🍜",
            "5 Hr Study 🫣",
            "Lets vibe ✨"
        ]
    },
    {
        question: "What is my fav gali?", // Be mindful of content guidelines
        type: "multiple-choice",
        options: [
            "MC",
            "BC",
            "Mg",
            "Bala"
        ]
    },
    {
        question: "😂 When I curse, it sounds like…",
        type: "multiple-choice",
        options: [
            "A Bollywood villain 🤯",
            "A kid copying adults 🧒",
            "A comedy show skit 🎭",
            "Beautiful chaos 💥💖"
        ]
    },
    {
        question: "🎧 What song describes our friendship?",
        type: "multiple-choice",
        options: [
            "Main Khiladi Tu Anari 💕",
            "Badtameez Dil 💃",
            "We Dont Talk Anymore (JK 😂)",
            "Tera Yaar Hoon Main 🫂"
        ]
    },
    {
        question: "🤳 What's my selfie face?", // User specified 4., keeping it in text
        type: "multiple-choice",
        options: [
            "Duck face 🦆",
            "Tongue out 😛",
            "Confused but cute 😵",
            "Accidental front cam 😩"
        ]
    },
    
];

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    // Light switch functionality
    document.querySelector('.light-button').addEventListener('click', function() {
        // Hide the light button immediately
        this.style.display = 'none';
        
        // Keep dark mode initially
        document.body.classList.add('dark-mode');
        
        // Create container for light bulbs
        const lightBulbsContainer = document.createElement('div');
        lightBulbsContainer.className = 'light-bulbs-container';
        document.body.appendChild(lightBulbsContainer);
        
        // Define bulb colors
        const bulbColors = ['blue', 'green', 'pink', 'red', 'yellow', 'orange'];
        const bulbs = [];
        
        // Create light bulbs with different colors
        for (let i = 0; i < bulbColors.length; i++) {
            const lightBulb = document.createElement('div');
            lightBulb.className = `light-bulb ${bulbColors[i]}`;
            lightBulbsContainer.appendChild(lightBulb);
            bulbs.push(lightBulb);
        }
        
        // First, make bulbs visible but not lit (on black background)
        bulbs.forEach((bulb, index) => {
            setTimeout(() => {
                bulb.classList.add('visible');
            }, index * 800);
        });
        
        // After all bulbs are visible, light them up serially
        setTimeout(() => {
            // Light up bulbs one by one
            bulbs.forEach((bulb, index) => {
                setTimeout(() => {
                    bulb.classList.add('lit');
                    
                    // After the last bulb is lit, show birthday card
                    if (index === bulbs.length - 1) {
                        // Play birthday song
                        const birthdaySong = document.getElementById('birthdaySong');
                        birthdaySong.play().catch(error => {
                            console.log('Audio playback failed:', error);
                        });
                        
                        // Show birthday wish with confetti and hearts
                        const birthdayText = document.querySelector('.birthday-text');
                        birthdayText.textContent = "Happy Birthday, Khusi! 🎉✨🎂";
                        birthdayText.classList.add('visible');
                        
                        // Quickly transition to birthday card section
                        setTimeout(() => {
                            // Hide the birthday wish section
                            document.getElementById('birthday-wish').classList.remove('active');
                            
                            // Show the birthday card section
                            document.getElementById('birthday-card').classList.add('active');
                            
                            // Initialize the birthday card animations
                            initializeBirthdayCard();
                            
                            // Remove the light bulbs
                            lightBulbsContainer.style.transition = 'opacity 0.5s ease';
                            lightBulbsContainer.style.opacity = '0';
                            
                            setTimeout(() => {
                                lightBulbsContainer.remove();
                            }, 500);
                        }, 500);
                    }
                }, index * 800);
            });
        }, bulbColors.length * 800 + 1000);
    });
});

// Function to launch the rocket
function launchRocket() {
    // Create rocket container
    const rocketContainer = document.createElement('div');
    rocketContainer.className = 'rocket-container';
    document.body.appendChild(rocketContainer);
    
    // Create rocket
    const rocket = document.createElement('div');
    rocket.className = 'rocket';
    rocketContainer.appendChild(rocket);
    
    // Create rocket trail
    const rocketTrail = document.createElement('div');
    rocketTrail.className = 'rocket-trail';
    rocketContainer.appendChild(rocketTrail);
    
    // Make rocket visible
    setTimeout(() => {
        rocketContainer.style.opacity = '1';
        
        // After rocket animation completes, create fireworks
        setTimeout(() => {
            // Create multiple firework bursts
            const colors = [
                '#ff4444', // Red
                '#ffeb3b', // Yellow
                '#ff9800', // Orange
                '#4caf50', // Green
                '#2196f3', // Blue
                '#e91e63', // Pink
                '#9c27b0'  // Purple
            ];
            
            // function createFireworkBurst(x, y, color) {
            //     const burst = document.createElement('div');
            //     burst.className = 'firework-burst';
            //     burst.style.left = x + 'px';
            //     burst.style.top = y + 'px';
            //     document.body.appendChild(burst);
                
            //     // Create particles in a circular pattern
            //     const particleCount = 36; // Number of particles
            //     const angleStep = (2 * Math.PI) / particleCount;
                
            //     for (let i = 0; i < particleCount; i++) {
            //         const particle = document.createElement('div');
            //         particle.className = 'firework-particle';
            //         particle.style.background = `linear-gradient(to bottom, ${color} 0%, transparent 100%)`;
            //         particle.style.boxShadow = `0 0 20px ${color}`;
                    
            //         // Calculate particle angle and distance
            //         const angle = i * angleStep;
            //         const distance = 100 + Math.random() * 50; // Random distance between 100-150px
                    
            //         // Set particle properties
            //         particle.style.setProperty('--rotation', `${angle}rad`);
            //         particle.style.setProperty('--distance', `${distance}px`);
                    
            //         burst.appendChild(particle);
            //     }
                
                // Create center explosion effect
            //     const explosion = document.createElement('div');
            //     explosion.className = 'rocket-explosion';
            //     explosion.style.background = `radial-gradient(circle, ${color}80 0%, transparent 70%)`;
            //     document.body.appendChild(explosion);
                
            //     // Remove burst after animation
            //     setTimeout(() => {
            //         burst.remove();
            //         explosion.remove();
            //     }, 2000);
            // }
            
            // Create multiple firework bursts with delays
            // function createFireworks() {
            //     const viewportWidth = window.innerWidth;
            //     const viewportHeight = window.innerHeight;
                
            //     for (let i = 0; i < 7; i++) {
            //         setTimeout(() => {
            //             const x = Math.random() * (viewportWidth * 0.8) + (viewportWidth * 0.1);
            //             const y = Math.random() * (viewportHeight * 0.5) + (viewportHeight * 0.1);
            //             const color = colors[i % colors.length];
            //             createFireworkBurst(x, y, color);
            //         }, i * 300); // Launch a new firework every 300ms
            //     }
            // }
            
            // // Start the fireworks sequence
            // createFireworks();
            
            // After fireworks, show birthday wish and transition to birthday card
            setTimeout(() => {
                // Show birthday wish with confetti and hearts
                const birthdayText = document.querySelector('.birthday-text');
                birthdayText.textContent = "Happy Birthday, Khusi! 🎉✨🎂";
                birthdayText.classList.add('visible');
                
                // After a short delay, transition to birthday card section
                setTimeout(() => {
                    // Hide the birthday wish section
                    document.getElementById('birthday-wish').classList.remove('active');
                    
                    // Show the birthday card section
                    document.getElementById('birthday-card').classList.add('active');
                    
                    // Initialize the birthday card animations
                    initializeBirthdayCard();
                    
                    // Remove the light bulbs and rocket elements
                    const lightBulbsContainer = document.querySelector('.light-bulbs-container');
                    if (lightBulbsContainer) {
                        lightBulbsContainer.style.transition = 'opacity 1s ease';
                        lightBulbsContainer.style.opacity = '0';
                        
                        setTimeout(() => {
                            lightBulbsContainer.remove();
                        }, 1000);
                    }
                    
                    // Remove rocket elements
                    setTimeout(() => {
                        const rocketContainer = document.querySelector('.rocket-container');
                        const explosions = document.querySelectorAll('.rocket-explosion');
                        const bursts = document.querySelectorAll('.firework-burst');
                        
                        if (rocketContainer) rocketContainer.remove();
                        explosions.forEach(explosion => explosion.remove());
                        bursts.forEach(burst => burst.remove());
                    }, 2000);
                }, 2000);
            }, 3500); // Wait for fireworks to complete
        }, 3000); // Wait for rocket animation to complete
    }, 100);
}

// Create confetti animation with pink colors
// function createConfetti() {
//     const colors = ['#FF1493', '#FF69B4', '#FFB6C1', '#FFC0CB', '#FFE4E1', '#FFF0F5'];
//     const confetti = document.createElement('div');
//     confetti.className = 'confetti';
//     confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
//     confetti.style.left = Math.random() * 100 + 'vw';
//     confetti.style.top = -20 + 'px';
//     confetti.style.width = Math.random() * 10 + 5 + 'px';
//     confetti.style.height = Math.random() * 10 + 5 + 'px';
//     confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
//     confetti.style.opacity = '1';
//     confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
//     document.body.appendChild(confetti);
    
//     setTimeout(() => {
//         confetti.remove();
//     }, 5000);
// }

// Add fall animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Show birthday wish animation
function showBirthdayWish() {
    const darkScreen = document.getElementById('dark-screen');
    const birthdayWish = document.getElementById('birthday-wish');
    
    darkScreen.classList.remove('active');
    birthdayWish.classList.add('active');
    
    // Add sparkle effect to birthday text
    const birthdayText = document.querySelector('.birthday-text');
    createSparkles(birthdayText);
    
    setTimeout(showCake, 2000);
}

// Create sparkles around an element
function createSparkles(element) {
    const sparkleCount = 20;
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.position = 'absolute';
        sparkle.style.width = '10px';
        sparkle.style.height = '10px';
        sparkle.style.backgroundColor = '#ffeb3b';
        sparkle.style.borderRadius = '50%';
        sparkle.style.boxShadow = '0 0 10px #ffeb3b, 0 0 20px #ffeb3b';
        sparkle.style.left = Math.random() * rect.width + 'px';
        sparkle.style.top = Math.random() * rect.height + 'px';
        sparkle.style.opacity = '0';
        sparkle.style.animation = `sparkle ${Math.random() * 2 + 1}s infinite`;
        element.appendChild(sparkle);
    }
    
    // Add sparkle animation to CSS
    const sparkleStyle = document.createElement('style');
    sparkleStyle.textContent = `
        @keyframes sparkle {
            0%, 100% {
                opacity: 0;
                transform: scale(0);
            }
            50% {
                opacity: 1;
                transform: scale(1);
            }
        }
    `;
    document.head.appendChild(sparkleStyle);
}

// Show cake animation
function showCake() {
    const birthdayWish = document.getElementById('birthday-wish');
    const cakeSection = document.getElementById('cake-section');
    
    birthdayWish.classList.remove('active');
    cakeSection.classList.add('active');
    
    // Add 3D rotation to cake
    const cake = document.querySelector('.cake');
    let rotationX = 0;
    let rotationY = 0;
    
    document.addEventListener('mousemove', (e) => {
        if (cakeSection.classList.contains('active')) {
            const rect = cakeSection.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            rotationX = (e.clientY - centerY) / 20;
            rotationY = (e.clientX - centerX) / 20;
            
            cake.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
        }
    });
    
    // Wait for cake animation to complete (2.5s for layers + candle)
    setTimeout(() => {
        initializeNotes();
        showNotes();
    }, 2500);
}

// Initialize notes with typing animation
function initializeNotes() {
    const notesContainer = document.querySelector('.notes-container');
    notesContainer.classList.add('visible');
    let currentNoteIndex = 0;

    function addNote() {
        if (currentNoteIndex < notes.length) {
            const noteElement = document.createElement('div');
            noteElement.className = 'note';
            notesContainer.appendChild(noteElement);

            let currentChar = 0;
            const noteText = notes[currentNoteIndex];

            function typeChar() {
                if (currentChar < noteText.length) {
                    noteElement.textContent += noteText[currentChar];
                    currentChar++;
                    setTimeout(typeChar, 100);
                } else {
                    noteElement.classList.add('visible');
                    createHeartEffect(noteElement);
                    currentNoteIndex++;
                    setTimeout(addNote, 1000);
                }
            }

            typeChar();
        }
    }

    addNote();
}

// Create heart effect
function createHeartEffect(element) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.position = 'absolute';
    heart.style.width = '20px';
    heart.style.height = '20px';
    heart.style.backgroundColor = '#ff9a9e';
    heart.style.transform = 'rotate(45deg)';
    heart.style.left = '50%';
    heart.style.top = '0';
    heart.style.opacity = '0';
    heart.style.animation = 'floatHeart 2s forwards';
    element.appendChild(heart);
    
    // Add heart animation to CSS
    const heartStyle = document.createElement('style');
    heartStyle.textContent = `
        .heart:before, .heart:after {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            background-color: #ff9a9e;
            border-radius: 50%;
        }
        .heart:before {
            top: -10px;
            left: 0;
        }
        .heart:after {
            top: 0;
            left: -10px;
        }
        @keyframes floatHeart {
            0% {
                opacity: 0;
                transform: rotate(45deg) translateY(0);
            }
            20% {
                opacity: 1;
            }
            100% {
                opacity: 0;
                transform: rotate(45deg) translateY(-100px);
            }
        }
    `;
    document.head.appendChild(heartStyle);
}

// Show notes section
function showNotes() {
    const cakeSection = document.getElementById('cake-section');
    const notesSection = document.getElementById('notes-section');
    
    cakeSection.classList.remove('active');
    notesSection.classList.add('active');
    
    // Wait for notes to complete (approximately 5 seconds per note)
    const totalNotesTime = notes.length * 5000;
    setTimeout(() => {
        initializeQuestions();
        showQuestions();
    }, totalNotesTime);
}

// Initialize surprise questions
function initializeQuestions() {
    const questionsContainer = document.querySelector('.questions-container');
    questionsContainer.innerHTML = ''; // Clear any existing content
    questionsContainer.style.opacity = '1';
    questionsContainer.style.transform = 'translateY(0)';
    let currentQuestionIndex = 0;

    function showQuestion() {
        if (currentQuestionIndex < questions.length) {
            const question = questions[currentQuestionIndex];
            const questionElement = document.createElement('div');
            questionElement.className = 'question';

            if (question.type === "multiple-choice") {
                questionElement.innerHTML = `
                    <h3 class="question-text">${question.question}</h3>
                    <div class="options-container">
                        ${question.options.map(option => `
                            <button class="option-btn">${option}</button>
                        `).join('')}
                    </div>
                `;

                // Add click handlers for options
                const optionButtons = questionElement.querySelectorAll('.option-btn');
                optionButtons.forEach(button => {
                    button.addEventListener('click', () => {
                        // Remove active class from all buttons
                        optionButtons.forEach(btn => btn.classList.remove('selected'));
                        // Add active class to clicked button
                        button.classList.add('selected');
                        
                        // Show celebration effect
                        createConfetti();
                        
                        // Get the clicked option text
                        const selectedOption = button.textContent.trim();
                        
                        // Define reactions for each option
                        const reactions = {
                            'Chasmiss 🥸': {
                                message: "Haha, you also 🎭",
                                color: "#FF69B4"
                            },
                            'Motu 🍕': {
                                message: "Food is life! 😋",
                                color: "#FF4500"
                            },
                            'Gadha 🤡': {
                                message: "Look who's talking! 😜",
                                color: "#9370DB"
                            },
                            'Selfie-Expert 🤳': {
                                message: "Always camera ready! 📸✨",
                                color: "#4CAF50"
                            },
                            'Gunda 🥷': {
                                message: "Don't mess with me! 💪😎",
                                color: "#FF6B6B"
                            },
                            'Chamak 🤣': {
                                message: "😲🫣",
                                color: "#FFD700"
                            },
                            'Keep you in a cute jar 🐸': {
                                message: "At least I'll safe🏠✨",
                                color: "#4CAF50"
                            },
                            'Kiss you back into human form 💋': {
                                message: "💖",
                                color: "#FF69B4"
                            },
                            'Freak out and scream 😱': {
                                message: "Sorry bestie, but frogs are scary! 🙈",
                                color: "#FF6B6B"
                            },
                            'Start a TikTok account with you 🐸📱': {
                                message: "We'll be TikTok famous! 🌟",
                                color: "#00CED1"
                            },
                            '😎': {
                                message: "Cool choice!😎",
                                color: "#1E90FF" // DodgerBlue
                            },
                            '🤪': {
                                message: "Haha! You're definitely the fun one! 🤪",
                                color: "#FFD700" // Gold
                            },
                            '😭': {
                                message: "Aww!",
                                color: "#ADD8E6" // LightBlue
                            },
                            '🐸': {
                                message: "You're quirky and unique! 🐸",
                                color: "#32CD32" // LimeGreen
                            },
                            'Sloth 🦥': {
                                message: "Slow and steady wins the race...😴",
                                color: "#8B4513" // SaddleBrown
                            },
                            'Cat 😼': {
                                message: "slightly mischievous! 😉",
                                color: "#FFA500" // Orange
                            },
                            'Panda 🐼': {
                                message: "Cute, cuddly, and loves snacks!🥰",
                                color: "#FFA500" // Black & White representation
                            },
                            'Goblin 👹': {
                                message: "A bit mischievous😄",
                                color: "#8B0000" // DarkRed
                            },
                            'Sarcasm 🥲': {
                                message: "Ouch! True though. 😂",
                                color: "#6A5ACD" // SlateBlue
                            },
                            'WWE 🥷': {
                                message: "Ready for the ring! 💪",
                                color: "#DC143C" // Crimson
                            },
                            'Meme picking 🎯': {
                                message: "Peak internet curator! 👌",
                                color: "#20B2AA" // LightSeaGreen
                            },
                            'Pro Athlete 👑': {
                                message: "Olympic gold incoming! 🏅",
                                color: "#FFD700" // Gold
                            },
                            'Therapist 🛋️': {
                                message: "Always here to listen! 😊",
                                color: "#87CEEB" // SkyBlue
                            },
                            'Clown 🤡': {
                                message: "Making you laugh is my specialty! 😂",
                                color: "#FF69B4" // HotPink
                            },
                            'Alarm clock ⏰': {
                                message: "Wakey wakey! ☀️",
                                color: "#FFA500" // Orange
                            },
                            'Food taster 🍟': {
                                message: "Ready for the next snack adventure! 😋",
                                color: "#D2691E" // Chocolate
                            },
                            '5 more mins 😴': {
                                message: "The eternal struggle! 😂",
                                color: "#B0C4DE" // LightSteelBlue
                            },
                            'Food is life 🍜': {
                                message: "Couldn't agree more! 💯",
                                color: "#FFA07A" // LightSalmon
                            },
                            '5 Hr Study 🫣': {
                                message: "Dedication! ...or procrastination? 🤔",
                                color: "#FFD700" // Gold
                            },
                            'Lets vibe ✨': {
                                message: "Good vibes only! 😎",
                                color: "#98FB98" // PaleGreen
                            },
                            'MC': {
                                message: "Classic choice! 😅",
                                color: "#FF4500" // OrangeRed
                            },
                            'BC': {
                                message: "Another popular one! 😂",
                                color: "#FF6347" // Tomato
                            },
                            'Mg': {
                                message: "A bit more usable one! 🤔",
                                color: "#DAA520" // Goldenrod
                            },
                            'Bala': {
                                message: "Unique! Is that even a gali? 😉",
                                color: "#4682B4" // SteelBlue
                            },
                            'A Bollywood villain 🤯': {
                                message: "Dramatic and intense! 🤣",
                                color: "#8B0000" // DarkRed
                            },
                            'A kid copying adults 🧒': {
                                message: "So innocent... almost! 😉",
                                color: "#FFC0CB" // Pink
                            },
                            'A comedy show skit 🎭': {
                                message: "Hilarious! Pure entertainment! 😂",
                                color: "#FFD700" // Gold
                            },
                            'Beautiful chaos 💥💖': {
                                message: "A perfect description! 😄",
                                color: "#FF69B4" // HotPink
                            },
                            'Main Khiladi Tu Anari 💕': {
                                message: "Haha, partners in crime! 😉",
                                color: "#FF4500" // OrangeRed
                            },
                            'Badtameez Dil 💃': {
                                message: "Always ready for fun! 🎉",
                                color: "#FF1493" // DeepPink
                            },
                            'We Dont Talk Anymore (JK 😂)': {
                                message: "Never! You\'re stuck with me! 😂",
                                color: "#6A5ACD" // SlateBlue
                            },
                            'Tera Yaar Hoon Main 🫂': {
                                message: "Aww, best friends forever! 🤗",
                                color: "#32CD32" // LimeGreen
                            },
                            'Duck face 🦆': {
                                message: "Quack quack! Classic! 😂",
                                color: "#FFD700" // Gold
                            },
                            'Tongue out 😛': {
                                message: "Playful and cheeky! 😉",
                                color: "#FF69B4" // HotPink
                            },
                            'Confused but cute 😵': {
                                message: "Effortlessly adorable! 🥰",
                                color: "#ADD8E6" // LightBlue
                            },
                            'Accidental front cam 😩': {
                                message: "We've all been there! 🙈",
                                color: "#A9A9A9" // DarkGray
                            }
                        };

                        // Get reaction for selected option
                        const reaction = reactions[selectedOption] || {
                            message: "Perfect Choice! 🎉",
                            color: "#4CAF50"
                        };
                        
                        // Show success message with custom reaction
                        const successMessage = document.createElement('div');
                        successMessage.className = 'success-message';
                        successMessage.textContent = reaction.message;
                        successMessage.style.color = reaction.color;
                        successMessage.style.fontSize = '1.8rem';
                        successMessage.style.fontWeight = 'bold';
                        successMessage.style.textShadow = `0 0 10px ${reaction.color}40`;
                        questionElement.appendChild(successMessage);
                        
                        // Add extra celebration effects based on option
                        if (selectedOption.includes('Selfie')) {
                            // Add camera flash effect
                            const flash = document.createElement('div');
                            flash.className = 'camera-flash';
                            questionElement.appendChild(flash);
                            
                            // Remove flash effect after animation
                            setTimeout(() => flash.remove(), 500);
                        } else if (selectedOption.includes('Motu')) {
                            // Add floating food emojis
                            for (let i = 0; i < 5; i++) {
                                const foodEmoji = document.createElement('div');
                                foodEmoji.className = 'floating-emoji';
                                foodEmoji.textContent = ['🍕', '🍔', '🍟', '🌭', '🍪'][i];
                                foodEmoji.style.left = `${Math.random() * 100}%`;
                                foodEmoji.style.animationDelay = `${i * 0.2}s`;
                                questionElement.appendChild(foodEmoji);
                                
                                // Remove emoji after animation
                                setTimeout(() => foodEmoji.remove(), 2000);
                            }
                        }
                        
                        // Move to next question after delay
                        setTimeout(() => {
                            questionElement.classList.add('fade-out');
                            setTimeout(() => {
                                questionElement.remove();
                                currentQuestionIndex++;
                                showQuestion();
                            }, 500);
                        }, 3000);
                    });
                });
            } else {
                questionElement.innerHTML = `
                    <h3>${question.question}</h3>
                    <input type="text" class="answer-input" placeholder="Type your answer...">
                    <button class="submit-btn">Submit</button>
                    <p class="hint" style="display: none;">Hint: ${question.hint}</p>
                `;

                const input = questionElement.querySelector('.answer-input');
                const submitBtn = questionElement.querySelector('.submit-btn');
                const hint = questionElement.querySelector('.hint');

                submitBtn.addEventListener('click', () => {
                    if (input.value.toLowerCase() === question.answer.toLowerCase()) {
                        questionElement.innerHTML = '<p class="correct">Correct! 🎉</p>';
                        createConfetti();
                        setTimeout(() => {
                            questionElement.remove();
                            currentQuestionIndex++;
                            showQuestion();
                        }, 2000);
                    } else {
                        hint.style.display = 'block';
                        shakeElement(questionElement);
                    }
                });
            }

            questionsContainer.appendChild(questionElement);
            // Add visible class after a short delay for animation
            setTimeout(() => {
                questionElement.classList.add('visible');
            }, 100);
        } else {
            // Last question answered, show friendship message
            showFriendshipMessage();
        }
    }

    showQuestion();
}

// Shake element animation
function shakeElement(element) {
    element.style.animation = 'shake 0.5s';
    
    // Add shake animation to CSS if not already added
    if (!document.querySelector('#shake-style')) {
        const shakeStyle = document.createElement('style');
        shakeStyle.id = 'shake-style';
        shakeStyle.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                20%, 40%, 60%, 80% { transform: translateX(5px); }
            }
        `;
        document.head.appendChild(shakeStyle);
    }
    
    // Remove animation after it completes
    setTimeout(() => {
        element.style.animation = '';
    }, 500);
}

// Show questions section
function showQuestions() {
    const notesSection = document.getElementById('notes-section');
    const questionsSection = document.getElementById('questions-section');
    
    notesSection.classList.remove('active');
    questionsSection.classList.add('active');
    
    // Show the questions intro with animation
    setTimeout(() => {
        const questionsIntro = document.querySelector('.questions-intro');
        questionsIntro.classList.add('show');
        
        // Add fade-in animation to questions after intro appears
        setTimeout(() => {
            const questions = questionsSection.querySelectorAll('.question');
            questions.forEach((question, index) => {
                setTimeout(() => {
                    question.classList.add('visible');
                }, index * 300);
            });
        }, 1000);
    }, 500);
}

// Variable to store the interval ID
let counterIntervalId = null;

// Start friendship counter
function startFriendshipCounter(isInitialCall = false) {
    // Clear any existing interval first
    if (counterIntervalId) {
        clearInterval(counterIntervalId);
        counterIntervalId = null; // Reset the ID
    }

    if (isInitialCall) {
        // Perform initial update with animation
        updateCounter(true);
    }

    // Set up the regular interval for subsequent updates (without animation)
    // Ensure it only runs if isInitialCall was true or if it wasn't already running
    if (isInitialCall || !counterIntervalId) {
         counterIntervalId = setInterval(() => updateCounter(false), 1000);
    }
}

// Update counter function - takes boolean to control animation
function updateCounter(shouldAnimate = false) {
    const now = new Date();
    const difference = now - friendshipStartDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (shouldAnimate) {
        // Initial call: Animate numbers
        animateNumber(daysEl, days);
        animateNumber(hoursEl, hours);
        animateNumber(minutesEl, minutes);
        animateNumber(secondsEl, seconds);
    } else {
        // Subsequent calls: Update seconds normally, check others for changes
        // Only update hours/minutes/days if they change to avoid constant redraw
        if (parseInt(daysEl.textContent) !== days) daysEl.textContent = days;
        if (parseInt(hoursEl.textContent) !== hours) hoursEl.textContent = hours;
        if (parseInt(minutesEl.textContent) !== minutes) minutesEl.textContent = minutes;
        secondsEl.textContent = seconds; // Always update seconds
    }
}

// Function to animate number rolling effect
function animateNumber(element, finalValue) {
    const duration = 800; // Animation duration in ms
    const intervalTime = 50; // Update interval in ms
    let steps = duration / intervalTime;
    element.textContent = '0'; // Start from 0 or random

    const animationInterval = setInterval(() => {
        if (steps <= 0) {
            clearInterval(animationInterval);
            element.textContent = finalValue; // Set the final value
        } else {
            // Display random numbers for rolling effect
            // Ensure random number has roughly same number of digits
            const magnitude = finalValue > 0 ? Math.pow(10, Math.floor(Math.log10(finalValue)) + 1) : 10;
            const randomValue = Math.floor(Math.random() * magnitude); 
            element.textContent = randomValue;
            steps--;
        }
    }, intervalTime);
}

// Add the birthday card initialization function
function initializeBirthdayCard() {
    // Initialize fireworks
    const canvas = document.getElementById("fireworksCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const GRAVITY = 0.05;
    const FRICTION = 0.97;
    const fireworks = [];
    const particles = [];

    class Firework {
        constructor(x, y, color) {
            this.x = x;
            this.y = canvas.height;
            this.targetY = y;
            this.speed = 6 + Math.random() * 2;
            this.color = color;
            this.exploded = false;
        }

        update() {
            if (!this.exploded) {
                this.y -= this.speed;
                if (this.y <= this.targetY) {
                    this.explode();
                    this.exploded = true;
                }
            }
        }

        draw() {
            if (!this.exploded) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        explode() {
            const count = 50 + Math.random() * 50;
            for (let i = 0; i < count; i++) {
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 5 + 2;
                const vx = Math.cos(angle) * speed;
                const vy = Math.sin(angle) * speed;
                particles.push(new Particle(this.x, this.y, vx, vy, this.color));
            }
        }
    }

    class Particle {
        constructor(x, y, vx, vy, color) {
            this.x = x;
            this.y = y;
            this.vx = vx;
            this.vy = vy;
            this.alpha = 1;
            this.color = color;
            this.size = 2 + Math.random() * 2;
        }

        update() {
            this.vx *= FRICTION;
            this.vy *= FRICTION;
            this.vy += GRAVITY;
            this.x += this.vx;
            this.y += this.vy;
            this.alpha -= 0.015;
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.restore();
        }
    }

    function launchMultipleFireworks() {
        const bursts = 4 + Math.floor(Math.random() * 4);
        for (let i = 0; i < bursts; i++) {
            const x = Math.random() * canvas.width;
            const y = 150 + Math.random() * 200;
            const color = `hsl(${Math.random() * 360}, 100%, 60%)`;
            fireworks.push(new Firework(x, y, color));
        }
    }

    // Start the animation
    // animate(); // <--- Commented out this line to disable canvas fireworks

    // Rest of the birthday card initialization code
    const cardCelebration = document.querySelector('.card-celebration');
    const colors = ['#ff6b6b', '#4ecdc4', '#ffd93d', '#ff8f8f', '#a8e6cf', '#ff6b6b', '#ffd93d'];
    
    // Add decorative elements to the card
    const card = document.querySelector('.birthday-card');
    
    // Add continuous rotation animation to the card
    function rotateCard() {
        card.style.animation = 'cardRotate 3s ease-in-out infinite';
    }
    
    // Start the continuous rotation animation
    rotateCard();
    
    // Create fireworks and celebration emojis
    function createFirework() {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = `${Math.random() * 100}%`;
        firework.style.top = `${Math.random() * 100}%`;
        document.body.appendChild(firework);
        
        // Create particles for the firework
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'firework-particle';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            // Random direction for each particle
            const angle = Math.random() * Math.PI * 2;
            const distance = 50 + Math.random() * 100;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            particle.style.setProperty('--x', `${x}px`);
            particle.style.setProperty('--y', `${y}px`);
            
            firework.appendChild(particle);
        }
        
        setTimeout(() => {
            firework.remove();
        }, 2000);
    }
    
    // Create celebration elements at intervals
    setInterval(createFirework, 500);
    
    // Add corner decorations
    for (let i = 0; i < 4; i++) {
        const corner = document.createElement('div');
        corner.className = 'card-corner';
        corner.style.position = 'absolute';
        corner.style.width = '20px';
        corner.style.height = '20px';
        corner.style.borderRadius = '50%';
        corner.style.background = `linear-gradient(45deg, ${colors[i % colors.length]}, ${colors[(i + 1) % colors.length]})`;
        corner.style.boxShadow = `0 0 10px ${colors[i % colors.length]}`;
        corner.style.animation = `pulse 3s infinite ${i * 0.5}s`;
        
        // Position corners
        if (i === 0) {
            corner.style.top = '10px';
            corner.style.left = '10px';
        } else if (i === 1) {
            corner.style.top = '10px';
            corner.style.right = '10px';
        } else if (i === 2) {
            corner.style.bottom = '10px';
            corner.style.left = '10px';
        } else {
            corner.style.bottom = '10px';
            corner.style.right = '10px';
        }
        
        card.appendChild(corner);
    }
    
    // Create a special effect for the friend's name
    const friendName = document.querySelector('.friend-name');
    if (friendName) {
        // Add a special highlight effect on hover
        friendName.addEventListener('mouseover', () => {
            friendName.style.animation = 'none';
            setTimeout(() => {
                friendName.style.animation = 'glow 1s infinite alternate, gradientShift 3s ease infinite';
            }, 10);
            
            // Create extra celebration elements
            for (let i = 0; i < 15; i++) {
                setTimeout(() => {
                    createFirework();
                }, i * 100);
            }
        });
    }
    
    // Create stars
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        starsContainer.appendChild(star);
    }
    
    // Create shooting stars
    const shootingStarsContainer = document.querySelector('.shooting-stars');
    function createShootingStar() {
        const star = document.createElement('div');
        star.className = 'shooting-star';
        star.style.top = `${Math.random() * 50}%`;
        star.style.left = `${Math.random() * 30}%`;
        star.style.animationDuration = `${Math.random() * 2 + 2}s`;
        shootingStarsContainer.appendChild(star);
        
        setTimeout(() => {
            star.remove();
        }, 4000);
    }
    
    // Create shooting stars at intervals
    setInterval(createShootingStar, 3000);
    
    // Create balloons
    const balloonsContainer = document.querySelector('.balloons');
    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.animationDelay = `${Math.random() * 5}s`;
        balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.transform = `scale(${0.8 + Math.random() * 0.4})`;
        balloonsContainer.appendChild(balloon);
        
        setTimeout(() => {
            balloon.remove();
        }, 6000);
    }
    
    // Create initial set of balloons
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createBalloon();
        }, i * 400);
    }
    
    // Continuously create new balloons
    setInterval(createBalloon, 1000);
    
    // Create confetti
    const confettiContainer = document.querySelector('.confetti-container');
    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = `${Math.random() * 10 + 5}px`;
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.opacity = Math.random() * 0.5 + 0.5;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
    
    // Create confetti at intervals
    setInterval(createConfetti, 300);
    
    // Add click effect to the card
    card.addEventListener('click', (event) => {
        // Create a ripple effect
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        ripple.style.left = `${event.offsetX}px`;
        ripple.style.top = `${event.offsetY}px`;
        card.appendChild(ripple);
        
        // Create extra celebration elements on click
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                createFirework();
            }, i * 100);
        }
        
        setTimeout(() => {
            ripple.remove();
        }, 1000);
    });
    
    // Create celebration emojis
    function createCelebrationEmoji() {
        const emojis = ['🎊', '🎉', '🎈', '🎂', '🎁', '✨', '🌟', '💫', '🎆', '🎇'];
        const emoji = document.createElement('div');
        emoji.className = 'celebration-emoji';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = `${Math.random() * 100}%`;
        emoji.style.top = `${Math.random() * 100}%`;
        emoji.style.fontSize = `${Math.random() * 30 + 20}px`;
        document.body.appendChild(emoji);
        
        setTimeout(() => {
            emoji.remove();
        }, 3000);
    }
    
    // Create celebration emojis at intervals
    setInterval(createCelebrationEmoji, 300);
    
    // Add background color animation
    let hue = 0;
    setInterval(() => {
        hue = (hue + 1) % 360;
        document.getElementById('birthday-card').style.background = `linear-gradient(135deg, hsl(${hue}, 70%, 50%) 0%, hsl(${(hue + 60) % 360}, 70%, 50%) 100%)`;
    }, 100);

    // Add cake button click handler
    const cakeButton = document.querySelector('.cake-button');
    if (cakeButton) {
        cakeButton.addEventListener('click', () => {
            // Hide birthday card section
            document.getElementById('birthday-card').classList.remove('active');
            
            // Show cake section
            const cakeSection = document.getElementById('cake-section');
            cakeSection.classList.add('active');
            
            // Add animation classes after a short delay
            setTimeout(() => {
                const cakeImage = document.querySelector('.cake-image');
                const cakeMessage = document.querySelector('.cake-message');
                
                cakeImage.classList.add('show', 'animate__bounceIn');
                cakeMessage.classList.add('show');
            }, 100);
        });
    }
}

// Remove cake cutting functionality
document.addEventListener('DOMContentLoaded', function() {
    const cakeImage = document.querySelector('.cake-image');
    const cakeMessage = document.querySelector('.cake-message');
    
    // Show cake with enhanced animation
    setTimeout(() => {
        // Add a slight delay before showing the cake
        cakeImage.style.opacity = '1';
        cakeImage.style.transform = 'scale(1) rotate(0deg)';
        
        // Add a sparkle effect
        createSparkles(cakeImage);
    }, 500);
    
    // Show message with animation
    setTimeout(() => {
        cakeMessage.style.opacity = '1';
        cakeMessage.style.transform = 'translateY(0)';
    }, 1500);
});

// Function to create sparkles around the cake
function createSparkles(element) {
    const sparkleCount = 15;
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.position = 'absolute';
        sparkle.style.width = '10px';
        sparkle.style.height = '10px';
        sparkle.style.backgroundColor = '#ffeb3b';
        sparkle.style.borderRadius = '50%';
        sparkle.style.boxShadow = '0 0 10px #ffeb3b, 0 0 20px #ffeb3b';
        sparkle.style.left = Math.random() * rect.width + 'px';
        sparkle.style.top = Math.random() * rect.height + 'px';
        sparkle.style.opacity = '0';
        sparkle.style.animation = `sparkle ${Math.random() * 2 + 1}s infinite`;
        element.appendChild(sparkle);
    }
    
    // Add sparkle animation to CSS if not already added
    if (!document.querySelector('#sparkle-style')) {
        const sparkleStyle = document.createElement('style');
        sparkleStyle.id = 'sparkle-style';
        sparkleStyle.textContent = `
            @keyframes sparkle {
                0%, 100% {
                    opacity: 0;
                    transform: scale(0);
                }
                50% {
                    opacity: 1;
                    transform: scale(1);
                }
            }
        `;
        document.head.appendChild(sparkleStyle);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Add click handler for surprise button
    const surpriseButton = document.querySelector('.surprise-button');
    if (surpriseButton) {
        surpriseButton.addEventListener('click', function() {
            // Stop birthday song
            const birthdaySong = document.getElementById('birthdaySong');
            if (birthdaySong) {
                birthdaySong.pause();
                birthdaySong.currentTime = 0;
            }

            // Remove fireworks canvas and cleanup animations
            const fireworksCanvas = document.getElementById('fireworksCanvas');
            if (fireworksCanvas) {
                fireworksCanvas.remove();
            }

            // Clean up celebration elements
            const celebrationElements = document.querySelectorAll('.firework, .firework-burst, .sparkle, .confetti');
            celebrationElements.forEach(element => element.remove());

            // Hide cake section
            document.getElementById('cake-section').classList.remove('active');
            
            // Show questions section
            const questionsSection = document.getElementById('questions-section');
            questionsSection.classList.add('active');
            
            // Show the questions intro with animation
            setTimeout(() => {
                const questionsIntro = document.querySelector('.questions-intro');
                questionsIntro.classList.add('show');
            }, 500);
        });
    }

    // Add click handler for okay button
    const okayButton = document.querySelector('.okay-btn');
    if (okayButton) {
        okayButton.addEventListener('click', function() {
            // Hide the intro text
            const questionsIntro = document.querySelector('.questions-intro');
            questionsIntro.style.opacity = '0';
            questionsIntro.style.transform = 'translateY(-20px)';
            
            // Show the questions with fade-in animation
            setTimeout(() => {
                questionsIntro.style.display = 'none';
                const questionsContainer = document.querySelector('.questions-container');
                questionsContainer.style.display = 'block';
                
                // Initialize and show the first question
                initializeQuestions();
            }, 500);
        });
    }
});

// Function to show the friendship message section
function showFriendshipMessage() {
    const questionsSection = document.getElementById('questions-section');
    const friendshipMessageSection = document.getElementById('friendship-message-section');

    // Hide questions section
    questionsSection.classList.remove('active');

    // Show friendship message section
    friendshipMessageSection.classList.add('active');

    // Animate the praise message
    const praiseMessage = friendshipMessageSection.querySelector('.friendship-praise');
    praiseMessage.classList.add('animate__fadeInUp'); // Example animation

    // Add event listener for the proceed button
    const proceedButton = document.getElementById('proceed-to-memories-btn');
    proceedButton.addEventListener('click', () => {
        showReadyCheck(); // Transition to the ready check section
    });
}

// Function to show the ready check section
function showReadyCheck() {
    const friendshipMessageSection = document.getElementById('friendship-message-section');
    const readyCheckSection = document.getElementById('ready-check-section');

    // Hide friendship message section
    friendshipMessageSection.classList.remove('active');

    // Show ready check section
    readyCheckSection.classList.add('active');

    // Animate the question
    const readyQuestion = readyCheckSection.querySelector('.ready-question');
    readyQuestion.classList.add('animate__pulse'); // Example animation

    // Add event listener for the ready button
    const readyButton = document.getElementById('ready-btn');
    readyButton.addEventListener('click', () => {
        showChandFaceQuestion(); // Transition to the chand face question section
    });
}

// Function to show the chand face question section
function showChandFaceQuestion() {
    const readyCheckSection = document.getElementById('ready-check-section');
    const chandFaceSection = document.getElementById('chand-face-section');

    // Hide ready check section
    readyCheckSection.classList.remove('active');

    // Show chand face section
    chandFaceSection.classList.add('active');

    // Animate the question
    const chandQuestion = chandFaceSection.querySelector('.chand-question');
    chandQuestion.classList.add('animate__fadeIn'); // Example animation

    // Add event listener for the show chand button
    const showChandButton = document.getElementById('show-chand-btn');
    showChandButton.addEventListener('click', () => {
        startChandReveal(); // Transition to the image reveal
    });
}

// Function to start the Chand image reveal sequence
function startChandReveal() {
    const chandFaceSection = document.getElementById('chand-face-section');
    const chandRevealSection = document.getElementById('chand-reveal-section');
    const revealedImageElement = document.getElementById('revealed-image');
    const proceedButton = document.getElementById('proceed-to-memories-from-reveal-btn');

    // Hide chand face question section
    chandFaceSection.classList.remove('active');

    // Show chand reveal section
    chandRevealSection.classList.add('active');

    const images = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg'];
    let currentImageIndex = 0;
    const revealDelay = 2000; // Time each image is shown (in ms)

    function showNextImage() {
        if (currentImageIndex < images.length) {
            revealedImageElement.style.opacity = '0'; // Fade out previous image
            setTimeout(() => {
                revealedImageElement.src = images[currentImageIndex];
                revealedImageElement.style.display = 'block';
                revealedImageElement.style.opacity = '1'; // Fade in new image
                currentImageIndex++;
                setTimeout(showNextImage, revealDelay);
            }, 500); // Short delay for fade effect
        } else {
            // All images shown. Fade out the last image.
            revealedImageElement.style.opacity = '0'; 
            setTimeout(() => {
                revealedImageElement.style.display = 'none';
                // Transition to the Memories Intro section
                showMemoriesIntro(); 
            }, 500); // Wait for fade out before transitioning
        }
    }

    // Start the sequence
    showNextImage();
}

// Function to show the Memories Intro section
function showMemoriesIntro() {
    const chandRevealSection = document.getElementById('chand-reveal-section');
    const memoriesIntroSection = document.getElementById('memories-intro-section');

    // Hide chand reveal section
    chandRevealSection.classList.remove('active');

    // Show memories intro section
    memoriesIntroSection.classList.add('active');

    // Ensure animations trigger
    const friendshipText = memoriesIntroSection.querySelector('.reveal-friendship-text');
    const memoriesButton = memoriesIntroSection.querySelector('#proceed-to-memories-final-btn');
    
    // Add animation classes (might need slight delay or re-flow trigger if already added in HTML)
    friendshipText.classList.add('animate__fadeInUp');
    memoriesButton.classList.add('animate__fadeInUp');
    memoriesButton.style.animationDelay = '0.5s';

    // Add event listener for the memories button in this section
    memoriesButton.addEventListener('click', () => {
        showSingleMemory(); // Transition to the single memory section
    });
}

// Function to show the Single Memory section
function showSingleMemory() {
    const memoriesIntroSection = document.getElementById('memories-intro-section');
    const singleMemorySection = document.getElementById('single-memory-section');

    // Hide memories intro section
    memoriesIntroSection.classList.remove('active');

    // Show single memory section
    singleMemorySection.classList.add('active');

    // Animate the image and button
    const memoryImage = singleMemorySection.querySelector('#single-memory-image');
    const counterButton = singleMemorySection.querySelector('#proceed-to-counter-btn');

    memoryImage.classList.add('animate__zoomIn'); // Example image animation
    counterButton.classList.add('animate__fadeInUp'); // Example button animation
    counterButton.style.animationDelay = '0.5s';

    // Add event listener for the proceed to counter button
    counterButton.addEventListener('click', () => {
        // Hide the button itself upon click
        counterButton.style.display = 'none'; 
        counterButton.style.pointerEvents = 'none'; // Prevent further interaction

        // Start counter with initial animation
        startFriendshipCounter(true); 
        showCounter();
    });
}

// Show counter section
function showCounter() {
    const singleMemorySection = document.getElementById('single-memory-section');
    const counterSection = document.getElementById('counter-section');

    if (singleMemorySection.classList.contains('active')) {
        singleMemorySection.classList.remove('active');
    }
    
    // Add this line to make the counter section visible
    counterSection.classList.add('active');
    
    // Add visible class to counter container
    const counterContainer = document.querySelector('.counter-container');
    counterContainer.classList.add('visible');
    
    // Remove pulse animation logic
    const counterItems = document.querySelectorAll('.counter-item');
    counterItems.forEach((item) => {
        item.style.animation = ''; // Clear any previous animation
    });
}
