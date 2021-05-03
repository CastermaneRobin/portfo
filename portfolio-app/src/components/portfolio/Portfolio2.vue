<template>
    <section>
            <h1 class='mainTitle'>Mon Portfolio</h1>
            <h2>Voici tous mes travaux réalisés pendant mon cursus à l'Ephec qui m'ont permis d'acquérir des expériences professionnelles supplémentaires</h2>
        <div class="row">
            <div class="column">
                
                <div class="polaroid container_img">
                    <img src="../../image/GithubForm.png" alt="Norway" style="width:100%" class="image">
                    <div class="middle">
                        <div class="text">Formation GitHub</div>
                    </div>

                    <div class="container">
                        <p>Formation GitHub</p>
                    </div>
                </div> 

                <div class="polaroid container_img">
                    <img src="../../image/tutoratEphec2.png" alt="Norway" style="width:100%" class="image">
                    <div class="middle">
                        <div class="text">Tutorat Ephec</div>
                    </div>
                    <div class="container">
                        <p>Tutorat Ephec</p>
                    </div>
                </div>
                
            

                <div class="polaroid container_img">
                    <img src="../../image/LinuxForm.png" alt="Norway" style="width:100%" class="image">
                    <div class="middle">
                        <div class="text">Formation Linux</div>
                    </div>
                    <div class="container">
                        <p>Formation Linux</p>
                    </div>
                </div> 

                 

            </div>

            <div class="column">
               
                <div class="polaroid container_img">
                    <img src="../../image/DevDayy.png" alt="Norway" style="width:100%" class="image">
                    <div class="middle">
                        <div class="text">DevDay 2020</div>
                    </div>
                    <div class="container">
                        <p>DevDay 2020</p>
                    </div>
                </div> 
                <div class="polaroid container_img">
                    <img src="../../image/tutoratEphec2.png" alt="Norway" style="width:100%" class="image">
                    <div class="middle">
                        <div class="text">Tutorat Ephec</div>
                    </div>
                    <div class="container">
                        <p>Tutorat Ephec</p>
                    </div>
                </div> 
                <div class="polaroid container_img">
                    <img src="../../image/DevDayy.png" alt="Norway" style="width:100%" class="image">
                    <div class="middle">
                        <div class="text">DevDay 2020</div>
                    </div>
                    <div class="container">
                        <p>DevDay 2020</p>
                    </div>
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
            <tr class="tableTotal">
                <td></td>
                <td class='totalText'>Total </td>
                <td class='total'>45h</td>
                <td class='totalText'> 71h30</td>
            </tr>
            </table>
        </div>
    </div>


    </section>
</template>

<style scoped>
div.polaroid {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  margin-bottom: 30px;
}

div.container {
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
    background: #333;
    color: #fff
}
td.totalText {
    font-weight: bold;
    text-align: center;
}
td.total{
    background: #333;
    color: #fff;
    text-align: center;
    font-weight: bold;
}
.element{
    text-align: center;
}

tr.tableElement:hover {
    background: #9c9c9c;
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
</style>