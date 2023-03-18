<template>
  <section class="countBox">
    <NavDisplay/>
     <div class="counter">
       <h1>Counter: {{ count }}</h1>
       <div class="input_wrap">
 
         <input type="number" v-model="inputValue" />
         <button @click="setValue(inputValue)" class="setValue">Set Value</button>
       </div>

       <div class="__btn">
         <button @click="increment">+</button>
         <button @click="decrement">-</button>
         <button @click="reset">Reset</button>
       </div>
     </div>
  </section>
  <p class="intro">Project By Chidubem Egbo </p>

  </template>
  
  <script>
 
  import useCounter from '@/composable/useCounter'
  import NavDisplay from './NavDisplay.vue';
  
  export default {
    setup() {
        const { count, increment, decrement, reset, setValue } = useCounter();
        return {
            count,
            increment,
            decrement,
            reset,
            setValue,
            inputValue: 0,
        };
    },
    components: { NavDisplay }
}
  </script>
  
  <style>
 .countBox{
  width: 100vw;
  height: 90vh;
  background: linear-gradient(to right,rgb(193, 46, 75), rgb(35, 14, 128)); 
  clip-path: ellipse(100% 60% at 45% 38%);
 }
 h1{
  margin-bottom: 30px;
 }
  .counter {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .input_wrap{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
input[type = 'number']{
  outline: none;
  padding-left: 0.3rem;
  margin: 1rem 0;
  font-size: 25px;
  max-width: 330px;
  height: 60px;
  border: none;
  border-radius: 1rem;
}
.setValue{
  padding: 1rem;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  margin-left: 0.7rem;
  color: white;
  background-color: rgba(182, 77, 185, 0.959);
  font-size: 24px;
}
.setValue:hover{
  background-color: rgba(128, 128, 128, 0.588);
}
.__btn{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 3rem;
}
.__btn button{
  width: 120px;
  height: 40px;
  border: none;
  margin: 1rem 0.7rem;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  font-size: 20px;
  background-color: rgb(141, 68, 141);
}
.__btn button:hover{
  background-color: rgba(105, 67, 99, 0.808);
}
.intro{
  text-align: center;
  font-size: 20px;
  color: white;
  font-family: 'Arvo', serif;
}
  
  </style>
  