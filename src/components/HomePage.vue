<template>
    <header class="header">
        <nav>
          <ul>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li><router-link to="/counter">Counter</router-link></li>
          </ul>
        </nav>
        <section class="wrapper__main">
            <section class="home_page">
                <div class="text">
                    <h1>A Counter App project</h1>
                    <p class="p">Built using vuejs</p>
                </div>
                <router-link to="/counter" class="a">Click Me!</router-link>
                
            </section>
        </section>
        
    </header>
    
    
    <section class="features">
        <div class="text__features">
            <p>This app was built to aid counting for as long as you want the app was built with the use of increment,decrement, reset and setValue functions all done with VueJS. 
            </p>
            <div class="btn_github">
                <button class="github">
                    <a href="https://github.com/Phusse" target="_blank">GitHub Profile</a>
                </button>
            </div>
        </div>
        
    </section>
</template>

<style scoped>
.header{
    width: 100%;
    height: 100%;
    clip-path: ellipse(100% 55% at 44% 37%);
    background: linear-gradient(to right,rgb(35, 14, 128), rgb(193, 46, 75) ); 
}    
nav {
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
}

nav ul {
  list-style: none;
  display: flex;
}

nav ul li {
  margin: 0 1rem;
  font-family: Arvo;
}

nav ul li a {
  text-decoration: none;
  color: #ffff;
  font-size: 2rem;
  font-weight: bold;
}

nav ul li a:hover {
  text-decoration: underline;
}
.wrapper__main{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;        
}

.home_page{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 500px;
    animation-name: home-textBox;
    animation-duration: 2s;
    animation-iteration-count: 2s;
    height: 500px;
    align-items: center;
    justify-content: center;
    
}

h1{
    font-size: 40px;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 0.2rem;
}
.p{
    font-size: 20px;
    font-family: bahnschrift;
    padding: 1rem 0rem;
}
.text{
    text-align: center;
    color: white;
}
.a{
    color: rgb(193, 46, 75);
    text-decoration: none;
    font-weight: bolder;
    padding-top: 12px;
    width: 250px;
    text-align: center;
    height: 50px;
    font-size: 20px;
    background: #fff;
    border: 1px solid white;
    border-radius: 20px;
}
.a:hover{
    color: rgb(228, 70, 97);
    background-color: rgba(255, 255, 255, 0.605);
    transition: 0.4s;
}
@keyframes home-textBox{
    from{
        opacity: 0.5;
        transform: translateY(100%);
    }
    to{
        opacity: 1;
        transform: translateY(0%);
    }
}
.features{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.text__features{
    max-width: 550px;
    padding: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    color: grey;
}
h2{
    font-size: 40px;
    font-family: bahnschrift;
    text-align: center;
}
.text_feature p{
    text-align: center;
    font-size: 15px;
}
.github{
    background-color: rgb(228, 70, 97);
    padding-left: 0.4rem;
    width: 250px;
    height: 45px;
    border-radius: 10px;
    margin: 4rem 0rem;
    border: none;
}
.github:hover{
    cursor: pointer;
    background-color: rgb(146, 47, 63);
    transition: 0.7s;
}
.github a{
    color: rgba(255, 255, 255, 0.534);
    font-size: 20px;
    text-decoration: none;
}

</style>