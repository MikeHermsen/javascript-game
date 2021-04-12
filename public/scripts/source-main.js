/*


	#7#01001101#01101001#01101011#01100101#01111001#01011111#7#
	#7                                                       7#
	#7   .------..------..------..------..------..------.    7#
	##   |M.--. ||I.--. ||K.--. ||E.--. ||Y.--. ||_.--. |    ##
	#1   | (\/) || (\/) || :/\: || (\/) || (\/) || :/\: |    1#
	#0   | :\/: || :\/: || :\/: || :\/: || :\/: || :\/: |    0#
	#5   | '--'M|| '--'I|| '--'K|| '--'E|| '--'Y|| '--'_|    5#
	##   `------'`------'`------'`------'`------'`------'    ##
	#1                                                       1#
	#0   Created by: Mikey_                                  0#
	#7   GitHub: https://github.com/MikeHermsen              7#
	##                                                       ##
	#1                                                       1#
	#0   For questions you can email                         0#
	#1   MikeHermsenPrive+Code@Gmail.com                     1#
	##                                                       ##
	#1                                                       1#
	#2   http://Mikeh.202Devs.nl/                            2#
	#1   https://GigaFix.nl/                                 1#
	##                                                       ##
	#9                                                       9#
	#5#01001101#01101001#01101011#01100101#01111001#01011111#5#


*/

// Creating the player stats
var username         = null;
var player_health    = 10;
var player_damage    = 1;
var player_qeust     = 0;
var player_inventory = 0;

// Starting up the game story
loadScreen();
addQeustTable("Enter Username");
updateQoust("Enter an valid username to play the game!")
setInterval(updateInfoTable, 1000);

// Updating every 3 Seconds the info table
// The info table displays all information about the player
changeImage("https://www.w3schools.com/images/w3lynx_200.png");


function loadScreen() {
  // Creating shortcuts for the screens/divs
  const startTable      = $('startTable');
  const imageTable      = $('imageTable');
  const qoustionTable   = $('qoustionTable');
  const infoTable       = $('infoTable');
  const inventoryTable  = $('inventoryTable');
  const optionBar       = $('optionBar');
}


function updateQoust(newQoustion) {
  // THis will update the qoustion for the user.
  document.getElementById("the-qoustion").innerHTML = newQoustion;
}


function addQeustTable(qeust) {
  completeQuest();

  // This will add an qeust to the qeust table
  var table = document.getElementById("tab-quest");

  // Inserting a new row inside the table
  var row = table.insertRow(0);

  // Creating the row with an id to edit the row later on
  row.setAttribute('id','qeust-cross'); // This will mark the qeust with an red cross
  row.insertCell(0).innerHTML = qeust;  // Displays the new qeust

  player_qeust++; // Counting new qeust completed to the total
}


function completeQuest() {
  _row = $("#qeust-cross").attr("id","qeust-check");;
}


function updateInfoTable() {
  // Updating the info table for the player

  infoTable.innerHTML =  // The table with all information about the player
      "<table style='width:100%'>" +

      "  <tr>" +
      "    <h3>InfoTable</h3>" +
      "  </tr>" +

      " <tr>" +
      "  <td>Username</td>" +
      "  <td>" + username + "</td>" +
      " </tr>" +

      " <tr>" +
      "  <td>Health</td>" +
      "  <td style='color: red;'>" + player_health +"x "+ "♥".repeat(player_health) + "</td>" +
      " </tr>" +

      " <tr>" +
      "  <td>Damage</td>" +
      "  <td>" + player_damage +"x "+ "🗡️".repeat(player_damage) + "</td>" +
      " </tr>" +

      " <tr>" +
      "  <td>Quest</td>" +
      "  <td>" + player_qeust + "</td>" +
      " </tr>" +

      " <tr>" +
      "  <td>Inventory</td>" +
      "  <td>" + player_inventory + "</td>" +
      " </tr>" +

      "</table>";
}


function addInventoryItem(name, img) {
  // Creates a new card in the inventory

  // Creates an key to save the item
  var key = "item-inventory-" + name + player_inventory;

  //  TODO Create an total inventory with stuff to use
  inventoryTable.innerHTML += "<div class='item-card' id='"+ key +"'> </div>";
  document.getElementById(key).style.backgroundImage = "url('" + img + "')";
  document.getElementById(key).innerHTML = "<p>"+ name +"</p>";
  player_inventory++;
}


function changeImage(path) {
  // Changing the image for the story mode
  imageTable.style.backgroundImage = "url('" + path + "')";
}


function updateOptions(qouteList) {
  // The option button's to play the story

  // Cleans the optionBar
  optionBar.innerHTML = "";

  //Creating new options inside the optionBar
  qouteList.forEach(qoustion => {
    var btn_name        = qoustion[0];
    var btn_function    = qoustion[1];
    var btn_description = qoustion[2];

    optionBar.innerHTML += "<button class='option-btn' title='"+ btn_description +"' onclick='"+ btn_function +"'> "+ btn_name +" </button>"
  });
}


// GAME LOGICS BELOW


function startGame() {
  // Fetching username from input field at start
  username = document.getElementById('playername').value;

  // Checking for the lenght to be valid of the username
  if ( 3 < username.length  &  username.length < 32) {

    optionBar.style.height = "30vh";
    // Closing first screen
    startTable.style.visibility = "hidden";

    // Setting up the first option
    var optionList = [
      [
        "I approach her carefully",
        "approachWoman()",
        "Hey, are you okay? I am not going to hurt you"
      ],
      [
        "Take axe",
        "takeAxe()",
        "I rush to disarm her while she is distracted and taking her axe"
      ],
      [
        "Run",
        "gameOver()",
        "I want no part in this, and that axe is really sharp. I am out of here"
      ],
    ];

    updateOptions(optionList);
    addQeustTable("Find out what is wrong with the woman");
    updateQoust("You follow the scream. It seems to be coming from the other side of a small hill to your left.You rush over at top speed and arrive, panting, to the last thing you expected to see. A short,stocky woman doubled over in pain, clutching her stomach with one hand and an axe with the other. She looks up to meet your eyes and you see that she is both very angry and very pregnant.She seems wary of you, and you feel she is about to tell you to stay back when she doubles over once again.!")
    changeImage("/assets/tavern.jpg");

  } else {
    alert("Username invalid!");
  }
}


function takeAxe() {
  addInventoryItem("AXE", "/assets/axe.png")
  player_damage += 4;
  scene2();
}


function approachWoman() {
  player_health -= 4;
  scene2();
}


function scene2() {
    var optionList = [
      [
        "I offer to examine her with my medicinal skills",
        "tryFixWoman(0.5)",
        "Help woman"
      ],
      [
        "I speak to her in soft, reassuring tones",
        "tryFixWoman(0.5)",
        "I am pretty good with people"
      ],
      [
        "I try to distract her from the pain by talking about good things",
        "tryFixWoman(0.2)",
        "The weather is nice."
      ],
      [
        "I tell her to buck up and take it.",
        "tryFixWoman(0.1)",
        "Just get up!"
      ]
    ];

    updateOptions(optionList);
    addQeustTable("Try to help the woman");
    updateQoust("She slowly lowers her axe. You can see she is in a great deal of pain. With your knowledge of medicine you know she is not in labor, but probably experiencing Braxton-Hicks contractions. She looks at you suspiciously, uncertain you can do anything for her. How will you try to help her?")
    changeImage("/assets/bg1.jpg");
}


function tryFixWoman(change) {
  // There is a different change with every option that will determine wether the woman dies or not

  console.log(Math.random());
  if (Math.random() > change) {
    gameOver("The woman has died");
  } else {
    pathEnd();
  }
}


function gameOver(newQoust="Game over") {
  // When you lose
  var optionList = [
    [
      "play Again",
      "restart()",
      "Game over"
    ],

  ];

  updateOptions(optionList);
  updateQoust(newQoust)
  changeImage("https://i0.wp.com/www.immersology.com/wp-content/uploads/2019/09/Screen-Shot-2019-09-26-at-2.45.37-PM.png?resize=1320%2C532&ssl=1");
}


function restart() {
  // Reloading screen to restart the game
  location.reload();
}


function pathEnd() {
  // When there are no avaible paths
  var optionList = [
    [
      "play Again",
      "restart()",
      "Restarting game"
    ],

  ];

  updateOptions(optionList);
  addQeustTable("Sorry, Mate. You reached the end.");
  updateQoust("Sorry, Mate. You reached the end.")
  changeImage("https://i.kym-cdn.com/entries/icons/facebook/000/031/353/Screen_Shot_2019-10-02_at_3.31.29_PM.jpg");
}

// Sorry for this quick fix. it works
function toggleOption() {
    if ( optionBar.style.bottom == "-40vh" ) {
        optionBar.style.bottom = "0vh";
				btnToggleOptions.style.bottom = "31vh";
				btnToggleOptions.innerHTML = "▼";
				qoustionTable.style.height = "26vh";
				inventoryTable.style.height = "26vh";
    } else {
        optionBar.style.bottom = "-40vh";
				btnToggleOptions.style.bottom = "1vh";
				btnToggleOptions.innerHTML = "▲";
				qoustionTable.style.height = "58vh";
				inventoryTable.style.height = "58vh";
    }

}
