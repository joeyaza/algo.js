class MeanMedianMode {

    constructor(arr) {

        this.arr = arr;

    }

    mean() {

        let sum = this.arr.reduce((acc, val) => {

            return acc + val;

        }, 0);

        return (sum / this.arr.length).toFixed(2);

    }


    median() {

        let median;

        this.arr.sort((a, b) => {

            return a-b;

        });


        if (this.arr.length % 2 !== 0) {

            return this.arr[Math.floor(this.arr.length / 2)];

        } 


        let mid = this.arr[(this.arr.length / 2) -1];
        let mid2 = this.arr[this.arr.length / 2];

        return (mid + mid2) / 2;

    }

    mode() {

         const modeObj = {};

         this.arr.forEach((num) => {

            modeObj[num] = modeObj[num] + 1 || 1;

         });

         let maxFreq = 0,
            mode = [];

         for (let prop in modeObj) {

            if (modeObj[prop] > maxFreq) {

                mode = [Number(prop)];
                maxFreq = modeObj[prop];

            } else if (modeObj[prop] === maxFreq) {

                mode.push(Number(prop));

            }

         }

         if (mode.length === Object.keys(modeObj).length) mode = [];

         return mode;

    }


};

module.exports = MeanMedianMode;
