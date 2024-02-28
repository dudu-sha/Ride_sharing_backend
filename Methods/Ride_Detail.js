let driver_Detail={}
let rider_Detail={}
const  ADD_DRIVER =(Id,x,y)=>{
    let driver={};
    driver.x = x; 
    driver.y = y; 
    driver_Detail[Id]=driver;
    return driver_Detail
}
const  ADD_RIDER =async (Id,x,y)=>{
    let rider={};
    rider.x=x;
    rider.y=y;
    rider_Detail[Id]=rider;
    return rider_Detail
}
module.exports = {
    ADD_DRIVER,
    ADD_RIDER,
    rider_Detail,
    driver_Detail
}