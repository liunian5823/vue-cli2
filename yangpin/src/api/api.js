import axios from 'axios';


 export const login=(params)=>{
  return this.$axios.get((this.HOME+'gerengonzuo/login/denglu.php'),params)
 }
