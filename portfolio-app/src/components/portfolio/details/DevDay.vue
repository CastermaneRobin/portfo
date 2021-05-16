<template>
<div class='mainContainer'>
    <h3 style="font-size: 40px">DevDay</h3>

    <h2 style="font-size: 30px; text-align: center;  margin: 30px">Preuve : Ticket</h2>


<div class="preuve"><img src="../../../image/devDayPicture/ticketDevDay.png"></div>

    <h2 style="font-size: 30px; text-align: center; margin: 30px">Groupe : </h2>


<div class="first_galerie galerie">

        
        
        <div class="item"><img src="../../../image/devDayPicture/DevDayReunion.png"></div>
        <div class="item"><img src="../../../image/devDayPicture/intro.png"></div>

    </div>




<h1>Quelques photos supplémentaires</h1>

    <div class="galerie">

        
        <div class="item"><img src="../../../image/devDayPicture/AKS_APP_Gateway2.png"></div>
        <div class="item"><img src="../../../image/devDayPicture/architectureAgile.png"></div>
        <div class="item"><img src="../../../image/devDayPicture/dataScientists.png"></div>
        <div class="item"><img src="../../../image/devDayPicture/dataScientists2.png"></div>
        <div class="item"><img src="../../../image/devDayPicture/dataScientists3.png"></div>
        <div class="item"><img src="../../../image/devDayPicture/jetpackCompose.png"></div>
        <div class="item"><img src="../../../image/devDayPicture/MemoirPerdu.png"></div>
        <div class="item"><img src="../../../image/devDayPicture/naturalLanguageProcessing.png"></div>
        <div class="item"><img src="../../../image/devDayPicture/pilotDecisionManagement.png"></div>
        <div class="item"><img src="../../../image/devDayPicture/pilotDecisionManagement2.png"></div>
        <div class="item"><img src="../../../image/devDayPicture/pilotDecisionManagement3.png"></div>
        <div class="item"><img src="../../../image/devDayPicture/pilotDecisionManagement4.png"></div>
        <div class="item"><img src="../../../image/devDayPicture/storageAzure.png"></div>

    </div>



</div>


</template>

<style scoped>
h3{
    text-align: center;
    padding-top: 80px;
}

div.mainContainer{
  background-color: #d5d5d5;
  padding: 20px;
  
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
@media(max-width: 650px){
  h3{
    padding-top: 50px;
  }
}


*, ::before, ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}


h1 {
    color: #000;
    text-align: center;
    font-size: 35px;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 50px;
}

.galerie {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 80%;
    max-width: 1300px;
    margin: 70px auto 0;
}
.item {
    width: 300px;
    height: 200px;
    margin: 10px;
    overflow: hidden;
    flex-shrink: 0;
}
.item img {
    width: 100%;
    height: auto;
}
.preuve{
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
.preuve img{
  width: 100%;
}


</style>

