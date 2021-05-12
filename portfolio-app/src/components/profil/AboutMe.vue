<template>
   <div class="w3-content w3-margin-top" style="max-width:1400px;">

  <!-- The Grid -->
  <div class="w3-row-padding">
  
    <!-- Left Column -->
    <div class="w3-third">
    
      <div class="w3-white w3-text-grey w3-card-4">
        <div class="w3-display-container">
          <img src="../../image/balRetho.jpg" style="width:100%" alt="Avatar">
          <div class="w3-display-bottomleft w3-container w3-text-black">
          </div>
        </div>
        <div class="w3-container">

           
            <br>
            
            <div class="w3-light-grey w3-round-xlarge" >
                <div class="w3-round-xlarge w3-center bc_color_orange" style="height:50px;  width:100%;"><p style="padding-top:11px" ><b style="font-size:19px">Télécharger mon CV</b></p></div>
            </div>
          

          <p class="name_title"><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Robin Castermane </p>
          <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i><b>Age : </b> {{ calculateAge }}</p>
          <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i><b>Ville : </b>Marilles, Belgique</p>
          <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i><b>Email : </b>robin@castermane.be</p>
          <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i><b>Téléphone : </b>+32 474 03 31 97</p>
          <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i><b>Permis : </b> B ({{ calculateDrivingLicence }} ans)</p>
          <hr>

          <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
          <p>Javascript</p>
          <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:90%">90%</div>
          </div>
          <p>Java</p>
          <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:80%">
              <div class="w3-center w3-text-white">80%</div>
            </div>
          </div>
          <p>C++ / Qt</p>
          <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:75%">75%</div>
          </div>
          <p>React js / React native</p>
          <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:50%">50%</div>
          </div>
          <br>

          <p class="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
          <p>French</p>
          <div class="w3-light-grey w3-round-xlarge">
            <div class="w3-round-xlarge w3-teal" style="height:24px;width:100%"></div>
          </div>
          <p>English</p>
          <div class="w3-light-grey w3-round-xlarge">
            <div class="w3-round-xlarge w3-teal" style="height:24px;width:55%"></div>
          </div>
          <p>Dutch</p>
          <div class="w3-light-grey w3-round-xlarge">
            <div class="w3-round-xlarge w3-teal" style="height:24px;width:25%"></div>
          </div>
          <br>
        </div>
      </div><br>

    <!-- End Left Column -->
    </div>

    <!-- Right Column -->
    <div class="w3-twothird">
    
      <div class="w3-container w3-card w3-white w3-margin-bottom">
        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i><b>Expériences professionnelles</b></h2>
        <div class="w3-container">
          <h5 class="w3-opacity"><b>Stage Ephec : </b> Développement application mobile en C++ / Qt</h5>
          <h6 class="text_color_orange"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Fev 2021 - Mai 2021 </h6>
          <p>Développement d'une application mobile qui a pour but de communiquer via Bluetooth à un radar « I-SAFE ». Cette dernière peut paramétrer le radar, récupérer ses informations, visualiser ses données mesurées, les téléchargées et enfin de les partager </p>
        </div><br>
      </div>


      <div class="w3-container w3-card w3-white w3-margin-bottom">
        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i><b>Job étudiants</b></h2>
        <div class="w3-container">
          <h5 class="w3-opacity"><b>Livreur Uber Eats / Deliveroo : </b> Ottignies Louvain-la-Neuve</h5>
          <h6 class="text_color_orange"><i class="fa fa-calendar fa-fw w3-margin-right"></i> Mars 2021 -  <span class="w3-tag bc_color_orange w3-round">Current</span></h6>
          <hr>
        </div>
        <div class="w3-container">
          <h5 class="w3-opacity"><b>Livraison de meubles : </b>« Jackson Déco » à Jodoigne</h5>
          <h6 class="text_color_orange"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2017 - Août 2017</h6>
          <hr>
        </div>
        <div class="w3-container">
          <h5 class="w3-opacity"><b>Traiteur dans une boucherie : </b> « La Corbeille » à Orp-Le-Grand</h5>
          <h6 class="text_color_orange"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Août 2015</h6>
          <p>- Cuisine en grande quantité, plat préparé, service en salle lors
d’un mariage.</p>
          <hr>
        </div>
        <div class="w3-container">
          <h5 class="w3-opacity"><b>Cuisinier : </b>« Saint Martin’s Hôtel » à Waterloo</h5>
          <h6 class="text_color_orange"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2017 - Août 2017</h6>
          <p>- Cuisine, service et dressage</p><br>
        </div>
      </div>

      <div class="w3-container w3-card w3-white">
        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i><b>Education</b></h2>
        <div class="w3-container">
          <h5 class="w3-opacity"><b>Bac 1 - bac 3 Technologie de l'informatique : </b> Ephec de Louvain la neuve</h5>
          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2018 - 2021  -  <span class="w3-tag w3-teal w3-round">Current</span></h6>
          <p class="w3-opacity"> - Développement application / développement web / administration réseau / électronique.</p>
          <hr>
        </div>
        <div class="w3-container">
          <h5 class="w3-opacity"><b>Bac 1 Science informatique : </b> Université Catholique de Louvain (UCL)</h5>
          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2017 - 2018</h6>
          
          <hr>
        </div>
        <div class="w3-container">
          <h5 class="w3-opacity"><b>CESS « sport étude » Technique de transition : </b> Cepes de Jodoigne</h5>
          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2015 - 2017</h6>
          <p class="w3-opacity"> - 7 heures de tennis/semaines + 4 heures de conditionnement physique.</p>
          <hr>
        </div>
        <div class="w3-container">
          <h5 class="w3-opacity"><b>Secondaires « Hôtellerie » Technique de transition : </b> EHPN de Namur</h5>
          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2014 - 2015</h6>
          <p class="w3-opacity"> - Pratique 2 jours/semaine (salle et cuisine).</p>
          <hr>
        </div>
        <div class="w3-container">
          <h5 class="w3-opacity"><b>Secondaires Générales : </b>Institut Saint Albert de Jodoigne</h5>
          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2011 - 2014</h6>
          <p class="w3-opacity"> - Étude en immersion néerlandais (dès la 3éme maternelle).</p>
          <hr>
        </div>
        
      </div>

    <!-- End Right Column -->
    </div>
    
  <!-- End Grid -->
  </div>
  
  <!-- End Page Container -->
</div>

<footer class="w3-container w3-teal w3-center w3-margin-top">
  <p>Find me on social media.</p>
  <i class="fa fa-facebook-official w3-hover-opacity"><a href="https://www.facebook.com/robin.castermane" target="_blank">Facebook</a></i>
  <i class="fa fa-instagram w3-hover-opacity"><p>Email : robin@castermane.be</p></i>
  <i class="fa fa-snapchat w3-hover-opacity"><p>Phone : +32 474 03 31 97</p></i>
  <i class="fa fa-pinterest-p w3-hover-opacity"></i>
  <i class="fa fa-twitter w3-hover-opacity"></i>
  <i class="fa fa-linkedin w3-hover-opacity"></i>
  
</footer>
</template>

<style scoped>    

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 30%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
p.name_title{
    font-size: 26px;
    font-weight: bold;
}
a.download_cv_link{
    text-decoration: none;
    background-color: #279688;
    color: white;
    padding: 5px;
    border-radius: 10px;
}
.bc_color_orange{
  background-color: #1f6496;
}
.text_color_orange{
  color: #1f6496
}
</style>

<script>
    export default {
      computed:{
        calculateAge: function() {
          let currentDate = new Date();
          let birthDate = new Date("1999/02/27");
          let difference = currentDate - birthDate;
          let age = Math.floor(difference/31557600000);
          return age
        },
        calculateDrivingLicence: function() {
          let currentDate = new Date();
          let birthDate = new Date("2018/06/27");
          let difference = currentDate - birthDate;
          let age = Math.floor(difference/31557600000);
          return age
        }
        
      }
    }
</script>
