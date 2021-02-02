<template>
    <section>
            <h1 class='mainTitle'>Mon Portfolio</h1>
            <h2>Voici tous mes travaux réalisés pendant mon cursus à l'Ephec qui m'ont permis d'acquérir des expériences professionnelles supplémentaires</h2>
        <div class="galerie">

            <div class="item container">
                <img src="../../image/tutoratEphec2.png" class="image">
                <div class="middle">
                    <div class="text">Tutorat Ephec</div>
                 </div>
            </div>

            <div class="item container">
                <img src="../../image/LinuxForm.png" class="image">
                <div class="middle">
                    <div class="text">Formation Linux</div>
                 </div>
            </div>

            <div class="item container">
                <img src="../../image/GithubForm.png" class="image">
                <div class="middle">
                    <div class="text">Formation Github</div>
                 </div>
            </div>

            <div class="item container">
                <img src="../../image/DevDayy.png" class="image">
                <div class="middle">
                    <div class="text">DevDay 2020</div>
                 </div>
            </div>

            <div class="item container">
                <img src="../../image/openClassr.jpg" class="image">
                <div class="middle">
                    <div class="text">Formation OpenClassrooms</div>
                 </div>
            </div>

            <div class="item container">
                <img src="../../image/DevDayy.png" class="image">
                <div class="middle">
                    <div class="text">DevDay 2020</div>
                 </div>
            </div>

            <div class="item container">
                <img src="../../image/tutoratEphec2.png" class="image">
                <div class="middle">
                    <div class="text">Tutorat Ephec</div>
                 </div>
            </div>
        </div>

        
        <div class="w3-container mainTable">
        <h3>Tableau des heures</h3>
        <div class="w3-responsive container">
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
div.container {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
.galerie {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1800px;
    margin: 20px auto 0;
    /*background: #333; */
}
.item {
    width: 400px;
    height: 300px;
    overflow: hidden;
    flex-shrink: 0;
    margin: 3px;

    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 0px;
    border-radius: 10px;
}
.item img {
    width: 100%;
    height: auto;    
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
    .galerie{
        margin: 0 auto 0;
    }
}
@media (max-width: 860px) {
    .item {
        width: 95%;
        height: auto;
        border-radius: 0px;
        box-shadow: 0 0px 0px 0;
        margin: 0px;
    }
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
}

.container {
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

.container:hover .image {
  opacity: 0.3;
}

.container:hover .middle {
  opacity: 1;
}

.text {
  background-color: #333;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
  text-align: center;
}
</style>