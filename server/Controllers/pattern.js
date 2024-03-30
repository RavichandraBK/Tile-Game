exports.getPatterns = (req,res)=>{
    try{
        const Patterns = generateGridPatterns();
       
        const defaults = [
            { type1: ['green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green'] },
            { type2: ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red'] }
          ];
          
        const grid = {defaults,Patterns}
        res.json({message:'Successfully fetched patterns',grid})
    }catch(err){
        console.log('Something went wrong couldnt get pattern')
    }
}
const generateGridPatterns = () => {
    const gridPatterns = [{pattern1:['blue','blue',]},{pattern2:['blue','blue',]},{pattern3:['blue',]},{pattern4:['blue','blue',]},{pattern5:['blue','blue','blue','blue',]},{pattern6:['blue','blue','blue',]},{pattern7:['blue',]},{pattern8:['blue',]}];
    const colors = ['blue', 'red','green'];
    // for (let k = 0; k < 8; k++) {
    //     const pattern = [];
    //         const row = [];
    //         for (let j = 0; j < 10; j++) {
    //             row.push(colors[Math.floor(Math.random() * colors.length)]);
    //         }
    //          // Push the row array
    //          const obj = {};
    //          obj[`pattern${k + 1}`] = row;             
    //     gridPatterns.push(obj); // Assign the pattern as a property of the object
    // }
    return gridPatterns;
};