const leetcode = fetch("https://leetcode-stats-api.herokuapp.com/sid2307")
leetcode.then(res =>
    res.json()).then(d => {
        console.log(d)
        document.getElementById("leetcode").innerHTML = `Solved ${d.totalSolved} problems on Leetcode with an acceptance rate of ${d.acceptanceRate} %.`
    })


// const gfg = fetch("https://geeks-for-geeks-api.vercel.app/siddheshwar2307")
// gfg.then(res =>
//     res.json()).then(d => {
//         console.log(d)
//         // document.getElementById("leetcode").innerHTML = `Solved ${d.totalSolved} problems on Leetcode with an acceptance rate of ${d.acceptanceRate} %.`
//     })

