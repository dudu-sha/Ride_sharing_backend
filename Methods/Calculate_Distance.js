const ride_Detail=require("./Ride_Detail")
const Active_Rides=require("./active_Rides")
let closest_Distance=5;
let closest_Drivers=[]
// power square
const power = 2;
const maxDrivers=5;
const closest_driver = async(Id) =>{
    let Close_Drivers = "DRIVERS_MATCHED"
    let i=0;
        let riderLocation=ride_Detail["rider_Detail"][Id]
        Object.keys(ride_Detail["driver_Detail"]).forEach(key => {
        const value = ride_Detail["driver_Detail"][key];
        let distance = calculate_Distance(riderLocation,value)
        var duplicate=checkDuplicate(closest_Drivers,{key,distance,Id})
        distance<=closest_Distance&&!duplicate&&!(Active_Rides["unavailableDrivers"].indexOf(key.trim())>-1)?closest_Drivers.push({key,distance,Id}):{};
        });
        
        if(closest_Drivers.length){
        // console.log("Drivers")
        // console.log(closest_Drivers)
        closest_Drivers.sort((a,b)=>a.distance- b.distance);
    
        closest_Drivers.forEach((e)=>{
        if(e.Id===Id&&i<maxDrivers){Close_Drivers +=" "+e.key ; i++}
      })
    //   console.log(closest_Drivers)
      
      console.log(Close_Drivers)
    }else{
        console.log("NO_DRIVERS_AVAILABLE")
    }

}
const calculate_Distance =(startLocation,destinationLocation)=>{
    var distance=Math.sqrt(Math.pow(startLocation.x - destinationLocation.x, power) + Math.pow(startLocation.y - destinationLocation.y, power)) 
    return ((distance.toFixed(power)))
}
function checkDuplicate(arr,obj){
    let match =false
arr.forEach((item, index)=>{
    // console.log(obj.key+" "+item.key)
if(obj.key==item.key&&obj.distance==item.distance&&obj.Id==item.Id){
    if(Active_Rides["unavailableDrivers"].indexOf(obj.key.trim())>-1){
        arr.splice(index, 1)
    }
    match=true
}
})
    return match;
}
module.exports ={
    closest_driver,
    closest_Drivers,
    calculate_Distance,
    maxDrivers
}