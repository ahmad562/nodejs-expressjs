// const firstname = "Waqas";
// let lastname = '';

// setTimeout(()=>{
//     lastname = "Ahmad";
//     console.log("lastname");
// },2000);

// console.log(firstname + " " + lastname);

// promises
let fisrtname = "Waqas";
let lastname = '';

const fullname = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //lastname = "Ahmad";
        resolve("Ahmad");
    },10000);
});

// .then
// let newfullname = fullname.then((data)=>{
//     lastname = data;
//     console.log(`${fisrtname} ${lastname}`);
// });


// async await

let display_full_name = async () => {
    lastname = await fullname;  // fullname is the promis name
    console.log(`${fisrtname} ${lastname}`);
}

display_full_name();
