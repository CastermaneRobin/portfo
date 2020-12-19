<template>
    <section>

        <div class="galerie">

            <div class="item container">
                <img classe='image' alt="Avatar" src="../../image/LinuxForma.jpg" >
                <div class="middle">
                    <div class="text">Détails</div>
                 </div>
            </div>

            <div class="item container">
                <img src="../../image/githubForma.jpg">
                <div class="middle">
                    <div class="text">Détails</div>
                 </div>
            </div>

            <div class="item container">
                <img src="../../image/devDay.jpg">
                <div class="middle">
                    <div class="text">Détails</div>
                 </div>
            </div>

            <div class="item container">
                <img src="../../image/open.png">
                <div class="middle">
                    <div class="text">Détails</div>
                 </div>
            </div>

            <div class="item container">
                <img src="../../image/devDay.jpg">
                <div class="middle">
                    <div class="text">Détails</div>
                 </div>
            </div>

            <div class="item container">
                <img src="../../image/tutoratEphec2.png">
                <div class="middle">
                    <div class="text">Détails</div>
                 </div>
            </div>

        </div>
    </section>
</template>

<style scoped>
section{
    margin: 0;
    padding: 0;
}
*, ::before, ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

h1 {
    color: #000;
    text-align: center;
    font-size: 40px;
    font-family: Arial, Helvetica, sans-serif;
    padding-top: 30px;
}

.galerie {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1400px;
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
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}
</style>