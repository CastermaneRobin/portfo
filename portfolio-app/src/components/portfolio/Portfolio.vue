<template>
    <section>

        <div class="galerie">

            <div class="item container">
                <img src="../../image/tutoratEphec2.png" class="image">
                <div class="middle">
                    <div class="text">Tutorat Ephec</div>
                 </div>
            </div>

            <div class="item container">
                <img src="../../image/LinuxForma.jpg" class="image">
                <div class="middle">
                    <div class="text">Formation Linux</div>
                 </div>
            </div>

            <div class="item container">
                <img src="../../image/githubForma.jpg" class="image">
                <div class="middle">
                    <div class="text">Formation Github</div>
                 </div>
            </div>

            <div class="item container">
                <img src="../../image/devDay.jpg" class="image">
                <div class="middle">
                    <div class="text">DevDay 2020</div>
                 </div>
            </div>

            <div class="item container">
                <img src="../../image/open.png" class="image">
                <div class="middle">
                    <div class="text">Formation OpenClassrooms</div>
                 </div>
            </div>

            <div class="item container">
                <img src="../../image/devDay.jpg" class="image">
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
        <h2>Tableau des heures</h2>
        <div class="w3-responsive container">
            <table class="w3-table-all container">
            <tr class="tableTitle">
                <th class='element'>Sujet</th>
                <th class='element'>Thématiques</th>
                <th class='element'>Heures valorisées</th>
                <th class='element'>Heures réel prestées</th>
            </tr>
            <tr class="tableElement">
                <td class='element'>Formation/installation Linux</td>
                <td class='element'>Formation à l'UCL</td>
                <td class='element'>3h</td>
                <td class='element'>3h</td>
            </tr>
            <tr class="tableElement">
                <td class='element'>Formation Github</td>
                <td class='element'>Formation à l'UCL</td>
                <td class='element'>2h</td>
                <td class='element'> 2h</td>
            </tr>
            <tr class="tableElement">
                <td class='element'>DevDay 2020</td>
                <td class='element'>Conférence en Ligne</td>
                <td class='element'>10h</td>
                <td class='element'>12h</td>
            </tr>
            <tr class="tableElement">
                <td class='element'>Formation OpenClassrooms</td>
                <td class='element'>React native</td>
                <td class='element'>10h</td>
                <td class='element'>30h</td>
            </tr>
             <tr class="tableElement">
                <td class='element'>Service d'aide à la réussite</td>
                <td class='element'>Tutorat ephec</td>
                <td class='element'>10h</td>
                <td class='element'>14h30</td>
            </tr>
            <tr class="tableTotal">
                <td></td>
                <td class='totalText'>Total </td>
                <td class='total'>35h</td>
                <td class='totalText'> 61h30</td>
            </tr>
            </table>
        </div>
    </div>


    </section>
</template>

<style scoped>
section{
    background: #f2f2f2;
    padding: 20px;
}
h2{
    text-align: center;
}
div.container{
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

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
    margin-bottom: 25px;
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
}
@media (max-width: 860px) {
    .item {
        width: 300px;
        height: 200px;
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