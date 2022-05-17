let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];


let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

const filter = (ranges = [null, null]) => {
    return courses.filter((course => {
        let isValid = true;
        ranges.forEach((item, i) => {
            let minPrice = course.prices[0];
            let maxPrice = course.prices[1];
            if (minPrice === null) {
                minPrice = 0;
            }
            if (maxPrice === null) {
                maxPrice = Infinity;
            }
            if (i === 0) {
                if (item === null) {
                    item = 0;
                }
                if (minPrice < item) {
                    isValid = false;
                }
            }
            if (i === 1) {
                if (item === null) {
                    item = Infinity;
                }
                if (maxPrice > item || minPrice > item) {
                    isValid = false;
                }
            }    
        });
        return isValid;
    }));
};

console.log(filter(requiredRange1));
console.log(filter(requiredRange2));
console.log(filter(requiredRange3));