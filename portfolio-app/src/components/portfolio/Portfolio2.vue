<template>
    <section >
        <div class="w3-animate-top">
            <h1 class='mainTitle'>Mon Portfolio</h1>
            <h2 class="subtitle">Voici tous mes travaux réalisés pendant mon cursus à l'Ephec qui m'ont permis d'acquérir des expériences professionnelles supplémentaires</h2>
        </div>
        <div class="row">
            <div class="column w3-animate-left">
                
                <div class="polaroid container_img">
                    <router-link to='/portfolio/travaux/reactNative' style="text-decoration:none">
                    
                    
                        <img src="../../image/nodeJs.jpg" alt="Norway" style="width:100%" class="image">
                        <div class="middle">
                            <div class="text">Formation Node Js</div>
                        </div>
                        <a class="container">
                            <p>Formation OpenClassrooms</p>
                        </a>
                    </router-link>
                </div> 

                
                
                <div class="polaroid container_img">
                    <router-link to='/portfolio/travaux/jef' style="text-decoration:none">
                        <img src="../../image/jefJobDay.png" alt="Norway" style="width:100%" class="image">
                        <div class="middle">
                            <div class="text">Job day JEF</div>
                        </div>
                        <a class="container">
                            <p>Visite d'entreprise</p>
                        </a>
                    </router-link>
                </div> 

                <div class="polaroid container_img">
                   <router-link to='/portfolio/travaux/linux' style="text-decoration:none">
                        <img src="../../image/GithubForm.png" alt="Norway" style="width:100%" class="image">
                        <div class="middle">
                            <div class="text">Formation GitHub</div>
                        </div>

                        <a class="container">
                            <p>Formation à l'UCL</p>
                        </a>
                    </router-link>
                </div> 

                
                <div class="polaroid container_img">
                    <router-link to='/portfolio/travaux/devDay' style="text-decoration:none">
                        <img src="../../image/DevDayy.png" alt="Norway" style="width:100%" class="image">
                        <div class="middle">
                            <div class="text">DevDay 2020</div>
                        </div>
                        <a class="container">
                            <p>DevDay 2020</p>
                        </a>
                    </router-link>
                </div> 
            

                 


                 

            </div>

            <div class="column w3-animate-right">
               
                <div class="polaroid container_img">
                    <router-link to='/portfolio/travaux/reactNative' style="text-decoration:none">
                    
                        <img src="../../image/reactNativeFormation.webp" alt="Norway" style="width:100%" class="image">
                        <div class="middle">
                            <div class="text">Formation React native</div>
                        </div>
                        <a class="container">
                            <p>Formation OpenClassrooms</p>
                        </a>
                    </router-link>
                </div> 

               

                <div class="polaroid container_img">
                    <a href="AttestationTutorat.pdf" style="text-decoration:none" download="AttestationTutorat.pdf">
                        <img src="../../image/tutoratEphec2.png" alt="Norway" style="width:100%" class="image">
                        <div class="middle">
                            <div class="text">Tutorat Ephec</div>
                        </div>

                        <a class="container">
                            <p>Tutorat Ephec</p>
                        </a>
                    </a>
                </div> 
                
                <div class="polaroid container_img">
                    <router-link to='/portfolio/travaux/linux' style="text-decoration:none">
                        <img src="../../image/LinuxForm.png" alt="Norway" style="width:100%" class="image">
                        <div class="middle">
                            <div class="text">Formation Linux</div>
                        </div>
                        <a class="container">
                            <p>Formation à l'UCL</p>
                        </a>
                    </router-link>
                </div>
                
                <div class="polaroid container_img">
                    <router-link to='/portfolio/travaux/linux' style="text-decoration:none">
                        <img src="../../image/LinuxForma2.jpg" alt="Norway" style="width:100%" class="image">
                        <div class="middle">
                            <div class="text">Formation Linux</div>
                        </div>
                        <a class="container">
                            <p>Formation à l'UCL</p>
                        </a>
                    </router-link>
                </div> 
                
            </div>
        </div>

        
        <div class="w3-container mainTable">
        <h3>Tableau des heures</h3>
        <div class="w3-responsive container_table">
            <table class="w3-table-all container">
            <tr class="tableTitle">
                <th class='elementSujet'>Sujet</th>
                <th class='elementSujet'>Thématiques</th>
                <th class='element'>Heures valorisées</th>
                <th class='element'>Heures réel prestées</th>
            </tr>
            <tr class="tableElement">
                <td class='elementSujet'>Formation / Installation Linux</td>
                <td class='elementSujet'>Formation à l'UCL</td>
                <td class='element'>3h</td>
                <td class='element'>3h</td>
            </tr>
            <tr class="tableElement">
                <td class='elementSujet'>Formation Github</td>
                <td class='elementSujet'>Formation à l'UCL</td>
                <td class='element'>2h</td>
                <td class='element'> 2h</td>
            </tr>
            <tr class="tableElement">
                <td class='elementSujet'>DevDay 2020</td>
                <td class='elementSujet'>Conférence en Ligne</td>
                <td class='element'>10h</td>
                <td class='element'>12h</td>
            </tr>
            <tr class="tableElement">
                <td class='elementSujet'>OpenClassrooms</td>
                <td class='elementSujet'>React native</td>
                <td class='element'>10h</td>
                <td class='element'>30h</td>
            </tr>
            <tr class="tableElement">
                <td class='elementSujet'>OpenClassrooms</td>
                <td class='elementSujet'>Node.js</td>
                <td class='element'>10h</td>
                <td class='element'>10h</td>
            </tr>
             <tr class="tableElement">
                <td class='elementSujet'>Service d'aide à la réussite</td>
                <td class='elementSujet'>Tutorat ephec</td>
                <td class='element'>10h</td>
                <td class='element'>14h30</td>
            </tr>
            <tr class="tableElement">
                <td class='elementSujet'>Job day JEF</td>
                <td class='elementSujet'>Visite d'entreprise</td>
                <td class='element'>5h</td>
                <td class='element'>5h</td>
            </tr>
            <tr class="tableTotal">
                <td></td>
                <td class='totalText'>Total </td>
                <td class='total'>50h</td>
                <td class='totalText'> 76h30</td>
            </tr>
            </table>
        </div>
    </div>


    </section>

    <footer class="w3-container bc_color_skills w3-center ">
  <p>Find me here:</p>
  <i class="fa fa-instagram w3-hover-opacity"><p>Email : robin@castermane.be</p></i>
  <i class="fa fa-pinterest-p w3-hover-opacity"></i>
  <i class="fa fa-twitter w3-hover-opacity"></i>
  <i class="fa fa-linkedin w3-hover-opacity"></i>
  
</footer>
</template>

<style scoped>
div.polaroid {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  margin-bottom: 30px;
}

a.container {
  padding: 10px;
}
div.container_table {
  padding: 10px;
  
}
.container_table{
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      max-width: 1400px;
      margin-left: auto;
      margin-right: auto;

}

.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  margin: 20px auto 0;
  justify-content: center;

}
.column {
  flex: 25%;
  max-width: 30%;
  padding: 0 4px;
  margin: 15px;
}

.column img {
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}

section{
    background: #f2f2f2;
    padding-top: 70px ;
}
h2{
    text-align: center;
    color: gray;
    font-size: 28px;
    padding: 0px 20px 20px 20px;
    font-family: 'Times, Times New Roman', serif;
}
h3 {
    text-align: center;
    font-size: 36px;
    font-family: 'Times, Times New Roman', serif;
    padding: 50px 0px 20px 0px;
}
table.container{
    border: none; 
}

div.mainTable{
    padding-left: 60px;
    padding-right: 60px;
    padding-bottom: 50px;
}

h1 {
    color: #000;
    text-align: center;
    font-size: 40px;
    font-family: Arial, Helvetica, sans-serif;
    padding-top: 30px;
}
h1.mainTitle {
    font-family: 'Times, Times New Roman', serif;
    font-weight: bold;
    font-size: 62px;
}
tr.tableTitle {
    background: #050027;
    color: #fff
}
td.totalText {
    font-weight: bold;
    text-align: center;
}
td.total{
    background: #050027;
    color: #fff;
    text-align: center;
    font-weight: bold;
}
.element{
    text-align: center;
}

tr.tableElement:hover {
    background: #ccc;
    transition: 1s;
}



@media (max-width: 680px) {
    .item img {
        width: 100%;
    }
    div.mainTable{
        padding-left: 15px;
        padding-right: 15px;
        padding-bottom: 50px;
    }
}
@media (max-width: 860px) {
    h1.mainTitle{
        font-size: 40px;
    }
    section{
        padding-top: 40px;
    }
    h2{
        font-size: 18px;
        padding-bottom: 20px;
    }
    h3{
        padding-top: 30px;
        font-size: 28px
    }
    div.polaroid {
        margin-bottom: 15px;
    }
    .column {
        margin: 0px;
    }
}

.text {
  background-color: #333;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
  text-align: center;
}

.container_img {
  position: relative;
}

.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
  z-index: 1;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%)
}

.container_img:hover .image {
  opacity: 0.3;
}

.container_img:hover .middle {
  opacity: 1;
}
h2.subtitle{
    max-width: 900px;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
}


#app {
 position: relative;
 
 display: flex;
 justify-content: center;
 align-items: center;
 
 width: 100vw;
 min-height: 10vh;
 overflow-x: hidden;
}

.button {
 appearance: none;
 outline: none;
 border: none;
 background: none;
 cursor: pointer;
 
 display: inline-block;
 padding: 15px 25px;
 background-image: linear-gradient(to right, #CC2E5D, #FF5858);
 border-radius: 8px;
 
 color: #FFF;
 font-size: 18px;
 font-weight: 700;
 
 box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
 transition: 0.4s ease-out;
 
 
}
.button:hover {
  box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
 }

.modal-overlay {
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 z-index: 2;
}

.modal {
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 z-index: 2;
 
 width: 100%;
 max-width: 400px;
 background-color: #FFF;
 border-radius: 16px;
 
 padding: 25px;
}
 
 h1.title_modal {
  color: #222;
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 15px;
 }
 
 p.subtitle_modal {
  color: #666;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
 }


.fade-enter-active,
.fade-leave-active {
 transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
 opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
 transition: transform .5s;
}

.slide-enter,
.slide-leave-to {
 transform: translateY(-50%) translateX(100vw);
}

.bc_color_skills{
    background-color: #00649b;
    color: white;
}
</style>

<script>

  export default {
    data () {
  return {
   showModal: false
  }
 }
  }
</script>