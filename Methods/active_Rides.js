let Active_Rides={}
let unavailableDrivers=[]
const GET_ACTIVE_RIDE =(Ride_id)=>{
    let id=Ride_id.trim()
return Active_Rides[id]
}
const SET_ACTIVE_RIDE =(R_id,D_id,Ride_Id)=>{
Active_Rides[Ride_Id]={"Rider_Id":R_id,"Driver_Id":D_id,"Status":"Active"}
// console.log((D_id))
unavailableDrivers.push(D_id)
// console.log(unavailableDrivers.indexOf(D_id))
}
const UPDATE_RIDE_DETAILS=(Ride_Id,Dest_X,Dest_Y,Time)=>{
    
    if(Active_Rides[Ride_Id]&&Active_Rides[Ride_Id].Status=="Active"){
    Active_Rides[Ride_Id].Destination={"x":Dest_X,"y":Dest_Y};
    Active_Rides[Ride_Id].Time=Time;
    Active_Rides[Ride_Id].Status="Ended";
    let index =unavailableDrivers.indexOf(Active_Rides[Ride_Id].D_id)
    unavailableDrivers.splice(index, 1)
    return true;
    }else{
    return false;
    }
}
module.exports={
    GET_ACTIVE_RIDE,
    SET_ACTIVE_RIDE,
    UPDATE_RIDE_DETAILS,
    unavailableDrivers
}