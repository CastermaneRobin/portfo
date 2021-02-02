<template>
<div class='mainContainer'>
    <h3>Contactez-moi</h3>

<div class='containerForm'>
  <form action="/">
    <label for="fname">Nom</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..">

    <label for="lname">Adresse email</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name..">

    
  
    <label for="subject">Message</label>
<textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

    <input type="submit" value="Submit">
  </form>
</div>
</div>
</template>

<style scoped>
h3{
    text-align: center;
    padding-top: 80px;
}
input[type=text], select, textarea {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

div.containerForm {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

div.mainContainer{
  background-color: #f2f2f2;
  padding: 20px;
  height: 100vh;
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
</style>
