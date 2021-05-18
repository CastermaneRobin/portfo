<template>
<div class='mainContainer w3-animate-zoom'>
  
  
    <h3 class="tilte_formation">Job Day : JEF</h3>

    
    <div class="table_info">
    <div ><p class="subtitle_infos">Voici toutes les entreprises que j'ai suivies durant cette journée :</p></div>
  
  <ul class="w3-ul w3-card-4 maxWidth">
    <li class="w3-bar">
      
      <img src="../../../image/gsk.jpg" class="w3-bar-item w3-circle w3-hide-small" style="width:85px">
      <div class="w3-bar-item">
        <span class="w3-large">GSK</span><br>
      </div>
    </li>

    <li class="w3-bar">
      
      <img src="../../../image/odoo.png" class="w3-bar-item w3-circle w3-hide-small" style="width:85px">
      <div class="w3-bar-item">
        <span class="w3-large">Odoo</span><br>
      </div>
    </li>

    <li class="w3-bar">
     
      <img src="../../../image/Defense.png" class="w3-bar-item w3-circle w3-hide-small" style="width:85px">
      <div class="w3-bar-item">
        <span class="w3-large">La Défense</span><br>
      </div>
    </li>


    <li class="w3-bar">
     
      <img src="../../../image/SPFFinances.png" class="w3-bar-item w3-circle w3-hide-small" style="width:85px">
      <div class="w3-bar-item">
        <span class="w3-large">SPF Finances</span><br>
      </div>
    </li>


  </ul>
</div>



<div class="table_info">
    <div ><p class="subtitle_infos">Voici tout(e)s les passerelles / Master que j'ai suivi(e)s durant cette journée :</p></div>
  
  <ul class="w3-ul w3-card-4 maxWidth">
    <li class="w3-bar">
      
      <img src="../../../image/unamur.png" class="w3-bar-item w3-circle w3-hide-small" style="width:85px">
      <div class="w3-bar-item">
        <span class="w3-large">UNamur</span><br>
      </div>
    </li>

    <li class="w3-bar">
      
      <img src="../../../image/ucl.jpg" class="w3-bar-item w3-circle w3-hide-small" style="width:85px">
      <div class="w3-bar-item">
        <span class="w3-large">UCL</span><br>
      </div>
    </li>

    <li class="w3-bar">
     
      <img src="../../../image/ichec2.jpg" class="w3-bar-item w3-circle w3-hide-small" style="width:85px">
      <div class="w3-bar-item">
        <span class="w3-large">ICHEC</span><br>
      </div>
    </li>



  </ul>
</div>

               
              
 

</div>

</template>

<style scoped>
h3{
    text-align: center;
    padding-top: 80px;
}

div.mainContainer{
  background-color: #f2f2f2;
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
@media(min-width: 650px){
  h3{
    font-size: 36px;
  }
  .subtitle_infos{
    font-size: 24px;
  }
}
h3.tilte_formation{
  margin-bottom: 30px;
    font-family: 'Times New Roman', serif;

}
div.container_img{
  max-width: 800px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}
div.table_info{
  padding-bottom: 50px;
  
}
.subtitle_infos{
      font-family: 'Times New Roman', serif;
    text-align: center;
}
ul.maxWidth{
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
}
</style>
