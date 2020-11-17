<template>
  <div class="detail">
     <h2>Name: {{name}}</h2>
     <button @click="detail = !detail"> show detail</button>
        <div class="box" v-show="detail">
             <h4>Gender: {{gender}}</h4>
         <h4>Date of Birth: {{birthYear}}</h4>
         <h4>Mass: {{mass}}</h4>
           <p>No of StarShips : {{starships.length}}</p>
           <p>No of films: {{films.length}} </p></div> 
      </div>
</template>

<script>

export default {
props:['name','gender','birthYear','starships','films','mass'],
data(){
    return{
        detail: false
    }
},
}
</script>

<style scoped>
.detail{
      margin:20px;
    border:2px solid gray;
    padding:20px;
    border-radius: 20px;
}
button{
       width: 25%;
      border: none;
     color: white;
      font-size: 15px;
      cursor: pointer;
      font-weight: bold;
      border-radius: 10px;
      background: grey;
      outline: none;
}

</style>