<template>
  <div class="container">
      <div class="header">
        <h1>Star war people</h1>
         <input type="text" name="search" id="search" placeholder="Enter name" v-model="search">
      </div>
      <div class="grid">
       <detail v-for="people in filteredList"
       :key="people.name"
       :name="people.name"
       :gender="people.gender"
       :birthYear="people.birth_year"
       :starships="people.starships"
       :films="people.films"
       :mass="people.mass"
       :created="people.created">
       </detail>
      </div>
    
  </div>
</template>

<script>
import Detail from '../components/Detail.vue';
export default {
  components:{
  Detail
},
data(){
    return{
        search:'',
    }
},
computed:{
    peoples(){
        return this.$store.state.peoples
    },
    filteredList(){
        return this.$store.state.peoples.filter((people)=>{
            return people.name.toLowerCase().includes(this.search.toLowerCase())
        })
    },
},
mounted(){
    this.$store.dispatch('getPeople')
}
}
</script>

<style scoped>
input{
  position: relative;
  display: inline-block;
  font-size: 20px;
  box-sizing: border-box;
  transition: .5s;
}
input[type="text"]{
  width:340px;
  height:50px;
  background:#fff;
  outline: none;
  padding:0 25px;
  border-radius: 25px;
}
  .grid{
width:1300px;
    display:grid;
      gap:5px;
  grid-template-columns: auto auto auto;
    justify-content:center;
  } 
</style>