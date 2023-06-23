export const average = (arrNilai) => {
   if (arrNilai.length === 0) {
     return 0;
   }
   let total = arrNilai.reduce((acc, curr) => acc + curr, 0);
   return total / arrNilai.length;
}