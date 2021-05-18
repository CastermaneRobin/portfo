<template>
<div class='mainContainer'>
    <div class="w3-animate-top">
      <h3>Formation GitHub et Linux</h3>

    <!-- First Grid: Logo & About -->


    <div class="subtitle_info">
      <p class="subtitle_info">Durant cette activité, j'ai eu la chance d'installer un dual boot sur mon ordinateur. Celui-ci peut maintenant, lors de son démarrage, se lancer sur <b>Lunix</b> ou <b>Windows</b>. Ce dual boot s'est avéré très nécessaire pour la réalisation de mes projets durant mon cursus a l'EPHEC</p>
      
    </div>
  </div>

<!-- Second Grid: Resent -->
<div class="w3-panel w3-animate-left">
    <h4 class='subsubtitle'><b>Formation GitHub :</b></h4>
</div>
<div class="w3-row">
  <div class="w3-half w3-container w3-animate-left">
    <div class="polaroid">
      <img src="../../../image/githubForma.jpg" style="width:100%">  
      <div class="container">
        <p>Sainte barbe Louvain-la-Neuve</p>
      </div>
    </div>
  
  </div>

  <div class="w3-half w3-container w3-animate-right">
    <div class="w3-">
      <h4 class='subsubtitle'><b>Formation Linux :</b></h4>
    </div>
    <div class="polaroid">
      <img src="../../../image/LinuxForm.png" style="width:100%">
        <div class="container">
          <p>Sainte barbe Louvain-la-Neuve</p>
        </div>
    </div>
  
    <p class="more_info">
    Ces deux activités ont été réalisées avec deux camarades de classes : Cotton Victor et Vandervelden Igor</p>
  </div>
</div>

<!-- Footer -->
<footer class="w3-container bc_color_skills w3-center w3-margin-top">
  <p>Find me here:</p>
  <i class="fa fa-instagram w3-hover-opacity"><p>Email : robin@castermane.be</p></i>
  <i class="fa fa-pinterest-p w3-hover-opacity"></i>
  <i class="fa fa-twitter w3-hover-opacity"></i>
  <i class="fa fa-linkedin w3-hover-opacity"></i>
  
</footer>





</div>
</template>

<style scoped>

.bc_color_skills{
    background-color: #00649b;
    color: white;
    width: 100%;
}
h3{
    font-family: 'Times New Roman', serif;

    text-align: center;
    padding-top: 30px;
    font-size: 28px;
    
}

div.mainContainer{
  font-family: 'Times New Roman', serif;
  background-color: #f1f1f1;
  padding: 0px;
  padding-top: 40px;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
@media(min-width: 650px){
  h3{
    font-size: 36px;
    padding-top: 55px;
  }
  p.subtitle_info{
    font-size: 26px;
    padding-left: 60px;
    padding-right: 60px; 
  }
  p.more_info{
    padding-right: 200px;
  }
}


div.subtitle_info{
  text-align: center;
  color: gray;
  font-size: 18px;
  padding: 5px;
}
p.more_info{
  color:gray;
  font-size: 20px;
  padding-right: 20px;
}
h4.subsubtitle{
  color: gray;
  font-family: 'Times New Roman', serif;
}

div.polaroid {
  width: 70%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;
}

div.container {
  text-align: center;
  padding: 10px 20px;
}

</style>
