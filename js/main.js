function changeBg() {
  el = document.getElementById('divide');
  el.style.backgroundImage = "url('img/pilot2.png')";
}

function change1() {
  change1_1 = document.getElementById('wrench');
  change1_1.style.display = "none";

  var change1_0 = document.getElementById('pilotLink1');
  var change1_2 = '<ul class="pilotLink"><li>Pilot Operation and CIP</li><li>Transition between Manuel Operation and Auto Operation</li><li>Safety Inspection</li><li>Waste Inventory Management</li></ul>';
  change1_0.innerHTML = change1_2;
}

function change2(){
  var change2_0 = document.getElementById('pilotLink2');
  var change2_1 = document.getElementById('line');
  var change2_2 = '<ul class="pilotLink"><li>Data Normalization</li><li>Automatic Data Normalization</li><li>Weekly Data Normalization Report</li><li>End-of-Test Report</li></ul>';
  change2_0.innerHTML = change2_2;
}

function changeBgMussel() {
  var mussel1 = document.getElementById('mussel1');
  var mussel2 = document.getElementById('mussel2');
  var mussel3 = document.getElementById('mussel3');
  var mussel4 = document.getElementById('mussel4')
  var mussel5 = document.getElementById('mussel5')
  mussel1.style.display = "none";
  mussel2.style.backgroundImage = "url('img/mussel4.png')";
  mussel3.style.backgroundImage = "url('img/mussel6.png')";
  mussel4.style.display = "block";
  mussel5.style.display = "block";
}