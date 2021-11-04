let quotesObj = [
  {
    "quote":"The greatest glory in living lies not in never falling, but in rising every time we fall. ",
    "person":"Nelson Mandela"
  },
  {
    "quote":"The way to get started is to quit talking and begin doing.",
    "person":"Walt Disney"
  },
  {
    "quote":"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    "person":"Steve Jobs"
  },
  {
    "quote":"If life were predictable it would cease to be life, and be without flavor.",
    "person":"Eleanor Roosevelt"
  },
  {
    "quote":"If you look at what you don't have in life, you'll never have enough.",
    "person":"Oprah Winfrey"
  },
  {
    "quote":"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. ",
    "person":"James Cameron"
  },
  {
    "quote":"Life is what happens when you're busy making other plans.",
    "person":"John Lennon"
  },
  {
    "quote":"When you reach the end of your rope, tie a knot in it and hang on.",
    "person":"Franklin"
  },
  {
    "quote":"Always remember that you are absolutely unique. Just like everyone else. ",
    "person":"Margaret Mead"
  },
  {
    "quote":"Don't judge each day by the harvest you reap but by the seeds that you plant. ",
    "person":"Robert Louis Stevenson"
  },
  {
    "quote":"The future belongs to those who believe in the beauty of their dreams.",
    "person":"Eleanor Roosevelt"
  },
  {
    "quote":"Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    "person":"Benjamin Franklin"
  },
  {
    "quote":"The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
    "person":"Helen Keller"
  },
  {
    "quote":"It is during our darkest moments that we must focus to see the light. ",
    "person":"Aristotle"
  },
  {
    "quote":"Whoever is happy will make others happy too.",
    "person":"Anne Frank"
  },
  {
    "quote":"Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "person":"Ralph Waldo Emerson"
  },
]

function Generate() {
  let x = Math.floor(Math.random() * 17 );
  document.getElementById("saying").innerHTML = quotesObj[x].quote;
  document.getElementById("ref").innerHTML = quotesObj[x].person;
}