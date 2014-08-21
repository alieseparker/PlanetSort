var stararray = [];

function Star (name, system, distance) {
  this.name = name;
  this.system = system;
  this.distance = distance;
  this.hex = randHex();
  this.size = randSize();
}

function randHex() {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function randSize() {
  return Math.floor(Math.random()*20)+50;
}

function createDataBase() {
  stararray[0]  = new Star("Sol", "solar system", 0);
  stararray[1]  = new Star("Proxima Centauri", "Alpha Centauri", 4.2421);
  stararray[2]  = new Star("A Centauri A", "Alpha Centauri", 4.3650);
  stararray[3]  = new Star("A Centauri B", "Alpha Centauri", 4.3650);
  stararray[4]  = new Star("Barnard's Star", "Barnard's Star", 5.9630);
  stararray[5]  = new Star("Luhman 16A", "Luhman 16", 6.59);
  stararray[6]  = new Star("Luhman 16B", "Luhman 16", 6.59);
  stararray[7]  = new Star("WISE 0855-0714", "WISE 0855-0714", 7.2);
  stararray[8]  = new Star("Wolf 359", "Wolf 359", 7.7825);
  stararray[9]  = new Star("Lalande 21185", "Lalande 21185", 8.2905);
  stararray[10] = new Star("Sirius A", "Sirius", 8.5828);
  stararray[11] = new Star("Sirius B", "Sirius", 8.5828);
  stararray[12] = new Star("Luyten 726-8 A", "Luyten 726-8", 8.7280);
  stararray[13] = new Star("Luyten 726-8 B", "Luyten 726-8", 8.7280);
  stararray[14] = new Star("Ross 154", "Ross 154", 9.6813);
  stararray[15] = new Star("Ross 248", "Ross 248", 10.322);
  stararray[16] = new Star("Epsilon Eridani", "Epsilon Eridani", 10.522);
  stararray[17] = new Star("Lacaille 9352", "Lacaille 9352", 10.742);
  stararray[18] = new Star("Ross 128", "Ross 128", 10.919);
  stararray[19] = new Star("WISE 1506+7027", "WISE 1506+7027", 11.089);
  stararray[20] = new Star("EZ Aquarii A", "EZ Aquarii", 11.266);
  stararray[21] = new Star("EZ Aquarii B", "EZ Aquarii", 11.266);
  stararray[22] = new Star("EZ Aquarii C", "EZ Aquarii", 11.266);
}

function printstars() {
  var temp;
  for(var i = 0; i < stararray.length; i++) {
    $("#unsorted").append("<div class='stars', id='starsarray"+i+ "'><p>"+ stararray[i].name+"</></div>");
    $("#starsarray"+i).width(stararray[i].size);
    $("#starsarray"+i).height(stararray[i].size);
    $("#starsarray"+i).css("background-color",stararray[i].hex);
  }
}

$(document).ready(function(){
  createDataBase();
  printstars();
});