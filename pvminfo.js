/* testataan toimiiko viikonpaivan tulostus html sivulle */
function getViikonPaiva(aika) {
  let days = ['Sunnuntai', 'Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai'];
  // let aika= new Date();
  return days[aika.getDay()];
}

/* single info of this year*/
function giveMeThisYear() {
  var time=new Date();
  var year=time.getFullYear();
  document.write(year);
  return
}

/* single info month of this year*/
function giveMeThisMonth() {
  var months=new Array(13);
  months[1]="TAMMIKUU";
  months[2]="HELMIKUU";
  months[3]="MAALISKUU";
  months[4]="HUHTIKUU";
  months[5]="TOUKOKUU";
  months[6]="KESÄKUU";
  months[7]="HEINÄKUU";
  months[8]="ELOKUU";
  months[9]="SYYSKUU";
  months[10]="LOKAKUU";
  months[11]="MARRASKUU";
  months[12]="JOULUKUU";
  var time=new Date();
  var lmonth=months[time.getMonth() + 1];
  document.write(lmonth);
  return
}

/* date definition for html calendar */
/* Begin */
function giveTodaysDate() {
  var months=new Array(13);
  months[1]="Tammikuuta";
  months[2]="Helmikuuta";
  months[3]="Maaliskuuta";
  months[4]="Huhtikuuta";
  months[5]="Toukokuuta";
  months[6]="Kesakuuta";
  months[7]="Heinakuuta";
  months[8]="Elokuuta";
  months[9]="Syyskuuta";
  months[10]="Lokakuuta";
  months[11]="Marraskuuta";
  months[12]="Joulukuuta";
  var days=new Array(7);
  days[0]="Sunnuntai";
  days[1]="Maanantai";
  days[2]="Tiistai";
  days[3]="Keskiviikko";
  days[4]="Torstai";
  days[5]="Perjantai";
  days[6]="Lauantai";
  var time=new Date();
  var lmonth=months[time.getMonth() + 1];
  var lday=days[time.getDay()];
  var date=time.getDate();
  var year=time.getFullYear();
  document.write(lday+" " + date + ". ");
  document.write(lmonth + " " + year);
  return
  /* End --> */
}
