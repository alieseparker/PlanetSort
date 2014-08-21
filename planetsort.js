function sort() {
  mergesort(0, stararray.length);
}

function mergesort(begin, end) {
  var size = end - begin;
  if(size < 2) {
    return;
  }

  var midpoint = begin + Math.floor(size/2);
  mergesort(begin, midpoint);
  mergesort(midpoint, end);
  merge(begin, midpoint, end);
}

function merge(begin, midpoint, end) {
  for(; begin < midpoint; ++begin) {
    if(stararray[begin].name > stararray[midpoint].name) {
      var temp = stararray[begin].name;
      stararray[begin].name = stararray[midpoint].name;
      insert(midpoint, end, temp);
    }
  }
}

function insert(begin, end, temp){
  while(begin + 1 < end && stararray[begin+1].name < temp) {
    var tmp = stararray[begin].name;
    stararray[begin].name = stararray[begin+1].name;
    stararray[begin+1].name = tmp;
    ++begin;
  }
  stararray[begin].name=temp;
}

function printSortedStars() {
  var temp;
  $("#unsorted").empty();
  for(var i = 0; i < stararray.length; i++) {
    $("#sorted").append("<div class='stars', id='starsarray"+i+ "'><p>"+ stararray[i].name+"</></div>");
    $("#starsarray"+i).width(stararray[i].size);
    $("#starsarray"+i).height(stararray[i].size);
    $("#starsarray"+i).css("background-color",stararray[i].hex);
  }
}

function dosort(form)
{
  sort();
  printSortedStars();
}
