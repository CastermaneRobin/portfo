<template>
  <header v-bind:class="{ portfolio : headerIsActive }">
    <nav v-bind:class="{ scroll: scrolled, portfolio : headerIsActive }">

      <div class="hamburger" v-bind:class="{ headerBurger : headerIsActive, scroll: scrolled }">
         <img @click="displayBurger" src="../../image/listIcon2.jpg"/>
      </div>
      
      <div class='symbole'>
        Robin Castermane
      </div>

      <div class="menu">
        <ul @click="displayBurger" v-bind:class="{ menu: toggleBurger }">
          <li>
            <router-link to='/portfolio'>Mon profil</router-link>
          </li>
          <li>
            <router-link to='/portfolio/travaux'>Portfolio</router-link>
          </li>
          <li>
            <router-link to='/contact'>Contact</router-link>
          </li>
        </ul>
      </div>
      
    </nav>
    
    <div v-bind:class="{ hiddenClass : headerIsActive }">
    <div class="centered"><p class="title1">Je suis Robin Castermane.</p></div>
      <div class="bottom"><p class="title2">Je suis passionné de programmation : développement applicatif, développement web et web/mobiles « responsive ».</p></div>
    </div>

  </header>

  

</template>

<script>
export default {
data(){
  return{
    scrolled: false,
    toggleBurger: false,
    headerIsActive: true,
  }
},
methods: {
  handleScroll () {
    this.scrolled = window.scrollY > 200;
  },
  handleScrollB () {
    this.scrolled = window.scrollY > 0;
  },
  displayBurger () {
    this.toggleBurger = !this.toggleBurger
  },
  handleHeader () {
    this.toggleHeader === true
  }
},
created () {
  window.addEventListener('scroll', this.handleScroll);
  
        
        
      
  console.log(this.$route);
  if(this.$route.path === '/portfolio' || this.$route.path === '/'){
        console.log('REUSSI')
        this.headerIsActive = false;
      }
},

unmounted () {
  window.removeEventListener('scroll', this.handleScroll);
  
},
watch: {
    $route(){
      window.scrollTo(0, 0);
      if(this.$route.path === '/portfolio/travaux'){
        this.headerIsActive = true
      }else if(this.$route.path === '/contact'){
        this.headerIsActive = true
      }else if(this.$route.path === '/portfolio'){
        this.headerIsActive = false
        
      }
    }
  },
}
</script>

<style scoped>
header {
  font-family: Georgia, serif;
  width: 100%;

  height: 100vh;
  /*height: 77px;*/
  background: url('../../image/headerImage2.jpg') no-repeat 50% 50%;
  background-size: cover;
}
header.portfolio{
  font-family: Georgia, serif;
  width: 100%;
  height: 77px;
  background-size: cover;
  background: #040127;
  /*background: #333;*/
  position: fixed;
  z-index: 3;
}
nav.portfolio{
    position: fixed;

}
div.hiddenClass{
  display: none;
}
.centered {
  position: absolute;
  top: 35%;
  left: 50%;
  text-align: center;
  width: 100%;
  transform: translate(-50%, -50%);
  font-size: 62px;
  color: #fff;
  z-index: 2;

  

}
.bottom {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 32px;
  color: #f2f2f2;
  text-align: center;
  z-index: 2;
}
.title1{
  opacity: 0;
  transform: translateY(-30px);
  animation: apparition 0.8s 0.6s ease-out forwards;
}
.title2{
  opacity: 0;
  transform: translateY(-30px);
  animation: apparition 0.8s 1s ease-out forwards;
}
nav {
  position: fixed;
  width: 100%;
  z-index: 3;

  opacity: 0;
  transform: translateY(-30px);
  animation: apparition 0.4s 1.6s ease-out forwards;

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
  padding: 24px;
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
  background: #040127;
  box-shadow: 0px 5px 20px rgba(0,0,0,0.3);
}


img {
  width: 60px;
}
.hamburger{
  display: none;
  
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  text-align: right;
  
}

@media(max-width: 650px){
  .hamburger{
    display: block;
    height: 57px;
    
  }
  .headerBurger{
    background: #040127;
  }
  .symbole{
    position: fixed;
    font-size: 20px;
    top: 0;
    margin: 17px 36px;
  }
  nav ul {
    max-height: 0px;
    background: #040127;
  }
  .menu{
    max-height: 20em;
    transition: 1s;
  }
  nav ul li {
      width: 100%;
      padding: 20px 0;
    }
  header.portfolio{
    font-family: Georgia, serif;
    width: 100%;
    background-size: cover;
    background: #f2f2f2;
    height: 57px;
  }
  div.scroll{
font-family: Georgia, serif;
    width: 100%;
    background-size: cover;
    background: #040127;
    transition: 1s;
  }
  

}
@media(max-width: 1330px){
  .centered{
    font-size: 50px;
  }
  .bottom{
    font-size: 27px;
  }
}
@media(max-width: 1090px){
  .centered{
    font-size: 40px;
  }
  .bottom{
    font-size: 24px;
  }
}
@media(max-width: 860px){
  .centered{
    font-size: 30px;
  }
  .bottom{
    font-size: 18px;
    top: 45%;
  }
}
@media(max-width: 520px){
  .centered{
    font-size: 30px;
  }
  .bottom{
    font-size: 18px;
    text-align: center;
    width: 100%;
    padding: 5px;
  }
}
@media(max-width: 360px){
  .centered{
    font-size: 24px;
  }
  .bottom{
    font-size: 16px;
    text-align: center;
    width: 100%;
    padding: 5px;
  }
}
@media(min-width: 650px){
a.router-link-active::after{
  content:'';
  display: block;
  width: 100%;
  height: 3px;
  background: #fff;/*ff4400*/
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
nav ul {
  height: 77px;
}
}
@keyframes apparition {
  100%{
    opacity: 1;
    transform: none;
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