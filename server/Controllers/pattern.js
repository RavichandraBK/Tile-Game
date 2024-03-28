exports.getPatterns = (req,res)=>{
    try{
        const Patterns = generateGridPatterns();
        const type1 = 'green'
        const type2 = 'red'
        const grid = {type1,type2,Patterns}
        res.json({message:'Successfully fetched patterns',grid})
    }catch(err){
        console.log('Something went wrong couldnt get pattern')
    }
}
const generateGridPatterns = () => {
    const gridPatterns = [];
    const colors = ['blue', 'red','green'];
    for (let k = 0; k < 6; k++) {
        const pattern = [];
            const row = [];
            for (let j = 0; j < 10; j++) {
                row.push(colors[Math.floor(Math.random() * colors.length)]);
            }
             // Push the row array
             const obj = {};
             obj[`pattern${k + 1}`] = row;             
        gridPatterns.push(obj); // Assign the pattern as a property of the object
    }
    return gridPatterns;
};