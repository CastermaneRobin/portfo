<template>
  <header>
    <nav v-bind:class="{ scroll: scrolled }">

      <div class="hamburger">
         <img @click="displayBurger" src="../../image/listIcon2.jpg"/>
      </div>
      
      <div class='symbole'>
         Robin Castermane   
      </div>

      <div class="menu">
        <ul @click="displayBurger" v-bind:class="{ menu: toggleBurger }">
          <li>
            <router-link to='/'>Mon profil</router-link>
          </li>
          <li>
            <router-link to='/portfolio'>Portfolio</router-link>
          </li>
          <li>
            <router-link to='/contact'>Contact</router-link>
          </li>
        </ul>
      </div>

      
    </nav>
  </header>
</template>

<script>
export default {
data(){
  return{
    scrolled: false,
    toggleBurger: false,
  }
},
methods: {
  handleScroll () {
    this.scrolled = window.scrollY > 500;
  },
  displayBurger(){
    this.toggleBurger = !this.toggleBurger
  }
},
created () {
  window.addEventListener('scroll', this.handleScroll);
},
unmounted () {
  window.removeEventListener('scroll', this.handleScroll);
}
}
</script>

<style scoped>

header {
  font-family: Georgia, serif;
  width: 100%;
  height: 80vh;
  background: url('../../image/headerImage2.jpg') no-repeat 50% 50%;
  background-size: cover;
}
nav {
  position: fixed;
  width: 100%;
}
nav ul {
  padding: 0;
  text-align: center;
  margin: 0;
  transition: 1s;
  overflow: hidden;
}
nav ul li {
  display: inline-block;
  padding: 26px;
}
nav ul li a{
  text-decoration: none;
  color: #fff;
  font-size: 22px;
}
.symbole {
  position: fixed;
  float: left;
  margin: 20px 36px;
  color: #fff;
  font-weight: bold;
  font-size: 26px;
}
nav.scroll ul {
  background: #00223E;
  box-shadow: 0px 5px 20px rgba(0,0,0,0.3);
}
img {
  width: 60px;
}
.hamburger{
  display: none;
  background: #000;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  text-align: right;
  
}

@media(max-width: 580px){
  .hamburger{
    display: block;
  }
  .symbole{
    position: fixed;
    font-size: 20px;
    top: 0;
    margin: 17px 36px;
  }
  nav ul {
    max-height: 0px;
    background: #000;
  }
  .menu{
    max-height: 20em;
    transition: 1s;
  }
  nav ul li {
      width: 100%;
      padding: 20px 0;
    }
}
@media(min-width: 580px){
a.router-link-active::after{
  content:'';
  display: block;
  width: 100%;
  height: 3px;
  background: #fff;
  transform: scale(1);
}

a::after{
  content:'';
  display: block;
  width: 100%;
  height: 3px;
  background: #fff;
  transform: scale(1);
  transform: scale(0);
  transition: transform 0.2s ease-in-out;
}
a:hover::after{
   transform: scale(1);
}
}

/*
a::after {
  content:'';
  display: block;
  position: absolute;
  width: 100%;
  height: 3px;
  background: #fff;
  transform: scale(0);
  transition: transform 0.2s ease-in-out;
}
a:hover::after{
  transform: scale(1);
}*/
</style>