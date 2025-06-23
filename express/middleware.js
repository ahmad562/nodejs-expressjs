const requestFilter = (req, res, next) =>{
    const salary = req.query.salary;
    if(!salary){
        res.send("salary not provided");
    }else if(salary<50000){
        res.send("salary is less then 50000");
    }else{
        next();
    }

}

module.exports = requestFilter;