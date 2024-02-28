const Calculate_Distance=require("./Calculate_Distance")
const Active_Rides=require("./active_Rides")
const MATCH=(Id)=>{
Calculate_Distance["closest_driver"](Id.trim());
}
const START_RIDE=(R_Id,N,Ri_Id)=>{
    let Drivers_matched=[];
    Calculate_Distance["closest_Drivers"].forEach((e)=>{
        e.Id===Ri_Id?Drivers_matched.push(e):{}
      })
      Drivers_matched=Drivers_matched.slice(0,Calculate_Distance["maxDrivers"])
    Drivers_matched[N-1]&&!Active_Rides["GET_ACTIVE_RIDE"](R_Id)?console.log(`RIDE_STARTED ${R_Id}`):console.log("INVALID_RIDE")
    Drivers_matched[N-1]&&!Active_Rides["GET_ACTIVE_RIDE"](R_Id)?Active_Rides["SET_ACTIVE_RIDE"](Ri_Id,Drivers_matched[N-1].key,R_Id):{}
}
const STOP_RIDE=(R_Id,D_x,D_y,time)=>{
    Active_Rides["UPDATE_RIDE_DETAILS"](R_Id,D_x,D_y,time)?console.log(`RIDE_STOPPED ${R_Id}`):console.log("INVALID_RIDE")
}
module.exports={
    START_RIDE,
    STOP_RIDE,
    MATCH
}