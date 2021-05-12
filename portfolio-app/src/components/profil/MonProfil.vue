<template>
    <!----section id='mainContainer'>


<div class="row">
  <div class="column">
    <div class="card">
      <img src="../../image/balRetho.jpg" alt="Jane" style="width:100%">
      <div class="container">
        <h2>Castermane Robin</h2>
        <p class="title">Etudiant à l'éphec</p>
        <ul>
            <li>Date de naissance: 27 Janvier 1999</li>
            <li>Code postal: 1350</li>
            <li>Téléphone: +32 474 30 31 97</li>
        </ul>
        <p>Je suis passionné de développement web, web/mobiles « responsive » et de développement applicatif  .</p>
        <p>robin@castermane.be</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>


  <div class="column">
    <div class="card">
    

      <div class="container">
        <h1>test</h1>
      </div>

    </div>
  </div>
</div>

    </section-->
    <aboutme/>
    

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
</style>

<script>
import aboutme from './AboutMe'
export default {
  components: {
    aboutme
  }
}
</script>