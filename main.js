const funnyNames = ["Ben Dover", "Mike Hunt", "Pill Cosby", "Hue G. Rection", "Phil Mc Kraken", "Moe Lester", "Yuri Tarted", "Knee grow", "Jack mehoff", "Heywood Jablowme", "Barry McKockiner", "Mike Coxlong",
"Test_tickles", "Kimmy Hed", "BenDover", "Gabe Itch", "Jene Talia", "Dixie Normus", "Hugh Jass", "Mike Literus", "Nick Kerr", "Sir cumcision", "4 skin", "Drink it", "Holden MaGroin", "Peter phile",
"Dann Gleeballs", "Mike Roch", "Jack P.Ness", "Not H1tler", "Chris P Chicken", "Fake Taxi", "BigLongRod", "OsamaDidIt", "Oliver Nipple Twist", "Alotta Bush", "Amanda D. P. Throught", "Ana Linjector", 
"Anita B. Lojob", "Anita P.Ness", "Barry McCociner", "Barry McDikkin", "Ben Derhover", "Betty Drizzler", "Bo N. Herr", "Buck Nekkid", "Dang Lin-Wang", "Dia Rhea", "Dick Beiter", "Dick C. Normus", 
"Dick Cumming", "Dick Eder", "Dick Less", "Dixie Rect", "Dough McCockin", "Dougie Style", "Drew Peacock", "E. Jack Ulate", "E. Rex Sean", "Eric  Ted Ling", "Erin Gobraless", "Fonda Cox", "Frank Lee Gay", 
"Freida Brest", "Hans Omaicok", "Heywood Jaohuker", "Heidi Salami", "Herb Utsmells", "HO LEE FUK", "Homer Sexual", "Honor Knees", "Houg Gebreasts", "Howie Phuckterpuss", "Howie Phucter", "Hugh G. Dildeaux", 
"Hugh Anus", "Hugh Fatasso", "Humphry Willy", "I. Yankit", "Iama Hore", "Iva Biggin", "Jack Goff", "Joe Blosus", "Jack Ma Wang", "Justin Heranus", "Justin Hermouth", "Lotta Cox", "Lotta Hore", 
"Lou C. Twatt", "Lou Sanus", "Lou Spussy", "Madam Dick Burns", "Manley Balls", "Maya achinballs", "Major, Dick Holder", "Neil AnBlomee", "Neil Enlick", "Ophelia Nutz", "Peter Fitzinwell"];
 

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomName = () => 
  `${funnyNames[getRandomNumber(funnyNames.length)]}`;

const setRandomName = () => {
  document.getElementById('random-name').innerText = getRandomName();
}

document.getElementById('generate')
  .addEventListener('click', setRandomName);

setRandomName();