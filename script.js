// Get references to the form and tweet list
const form = document.getElementById("tweet-form");
const tweetList = document.getElementById("tweet-list");

// Add an event listener to the form to capture the form submission
form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the input value from the textarea
  const tweetInput = document.getElementById("tweet-input");
  const tweet = tweetInput.value;

  // Create a new list item to display the tweet
  const newTweet = document.createElement("li");
  newTweet.innerText = tweet;

  // Add the new tweet to the list of tweets
  tweetList.appendChild(newTweet);

  // Clear the input value
  tweetInput.value = "";
});
// this is just a twitter clone btw 