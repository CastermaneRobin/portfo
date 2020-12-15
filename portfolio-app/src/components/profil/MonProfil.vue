<template>
    <section id='mainContainer'>

        <div id='imageContainer'>
            <img src="../../image/balRetho.jpg"/>
        </div>
        <div id='aboutContainer'>
            <h2>A propos</h2>
        </div>

    </section>
</template>

<style scoped>
img {
    width: 450px;
}
#mainContainer {
    display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
#imageContainer {
    display: inline-block;
}
#aboutContainer {
    display: inline-block;
}
@media (max-width: 580px){
    img {
        width: 200px;
    }
}    
</style>