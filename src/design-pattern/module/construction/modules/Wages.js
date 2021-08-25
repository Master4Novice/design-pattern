const wages = new Map();

class Wages {
   constructor() {
       wages.set(this,[300, 400, 500, 600, 800]);
   }

   getAvailableWages() {
       return wages.get(this);
   }

   addWage(wage) {
       wages.get(this).push(wage);
   }

   removeWage(wage) {
       const index = wages.get(this).indexOf(wage);
       wages.get(this).splice(index, 1);
   }

   isWageExist(wage) {
       const index = wages.get(this).indexOf(wage); 
       if(index !== -1) {
           return true;
       }
       return false;
   }
}

export default Wages;