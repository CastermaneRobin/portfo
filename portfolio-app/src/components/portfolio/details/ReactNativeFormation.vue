<template>
<div class='mainContainer w3-animate-zoom'>
  
  
    <h3 class="tilte_formation">Formation OpenClassrooms</h3>

    
    <div class="table_info">
    <div ><p class="subtitle_infos">Voici toutes les formations que j'ai suivies sur open OpenClassrooms :</p></div>
  
  <ul class="w3-ul w3-card-4">
    <li class="w3-bar">
      
      <img src="../../../image/nodeLogo.png" class="w3-bar-item w3-circle w3-hide-small" style="width:85px">
      <div class="w3-bar-item">
        <span class="w3-large">Node Js</span><br>
        <span>10 heures</span>
      </div>
    </li>

    <li class="w3-bar">
      
      <img src="../../../image/reactLogo.png" class="w3-bar-item w3-circle w3-hide-small" style="width:85px">
      <div class="w3-bar-item">
        <span class="w3-large">React Native</span><br>
        <span>30 heures</span>
      </div>
    </li>

    <li class="w3-bar">
     
      <img src="../../../image/cLogo.png" class="w3-bar-item w3-circle w3-hide-small" style="width:85px">
      <div class="w3-bar-item">
        <span class="w3-large">Programamtion en C</span><br>
        <span>4 heures</span>
      </div>
    </li>


    <li class="w3-bar">
     
      <img src="../../../image/OpenClassroomLogo.png" class="w3-bar-item w3-circle w3-hide-small" style="width:85px">
      <div class="w3-bar-item">
        <span class="w3-large">Et plein d'autres formations</span><br>
        <span>xx heures</span>
      </div>
    </li>


  </ul>
</div>





              
                  <div class=" container_img">
                          <img src="../../../image/preuveOpenClassroom/tableauDeBordBis.png" alt="Norway" style="width:100%" class="image">  
                  </div>  


                  <div class=" container_img">
                          <img src="../../../image/preuveOpenClassroom/taleauDeBord.png" alt="Norway" style="width:100%" class="image">
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
img.image{
    border: 3px solid #888;
}
</style>
