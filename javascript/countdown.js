const future= new date("05-06-2032 12:00:00").getTime();
function update() {
    const now=new date().getTime();
    const sub=future-now;
    const second = 1000;             
    const minute = second * 60;       
    const hour = minute * 60;         
    const day = hour * 24;            
     
console.log(`${second}s ${minute}m ${hour}h ${day}d ${year}y`);
}