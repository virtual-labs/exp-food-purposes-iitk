var part31done = false

function part31() {
    if(!part31done) {
        lottie3.playSegments([0, 130], true)

        gsap.to('#step-3 .control-1', {opacity: 0}) 
        gsap.to('#step-3 .control-2', {opacity: 1, delay: "6", onComplete: () => {
            part31done = true
        }})
    }
}

function part32() {
    if(part31done && !task_done) {
        lottie3.playSegments([130, 430], true)

        gsap.to('#step-3 .control-2', {opacity: 0})
        setTimeout(() => {
            
            gsap.to('#step-3 .control-2', {delay: "6", onComplete: () => {
                task_done = true
                addTask('Step 3: Add 1 ml ammonia buffer solution in the conical flask to adjust pH(10±0.1)of the sample')
            }}) 
        }, 6000);
    }
}
