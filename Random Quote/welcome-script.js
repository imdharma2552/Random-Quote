document.addEventListener('DOMContentLoaded', function() {
    const welcomeName = document.getElementById('welcomeName');
    const quoteContainer = document.getElementById('quoteContainer');
    const quote = document.getElementById('quote');
    const generateQuoteButton = document.getElementById('generateQuote');

    // Get the registered name from local storage
    const registeredName = localStorage.getItem('registeredName');
    if (registeredName) {
        welcomeName.textContent = registeredName;
    }

    const quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Innovation distinguishes between a leader and a follower. - Steve Jobs",
        "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
        "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston S. Churchill",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "In the middle of every difficulty lies opportunity. - Albert Einstein",
        "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
        "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "Never let the fear of striking out keep you from playing the game. -Babe Ruth",
        "Many of life's failures are people who did not realize how close they were to success when they gave up. -Thomas A. Edison",
        "The purpose of our lives is to be happy. -Dalai Lama"
    ];

    generateQuoteButton.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quote.textContent = quotes[randomIndex];
    });
});