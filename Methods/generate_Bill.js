const Active_Rides=require("./active_Rides")
const rider_Detail=require("./Ride_Detail")
const calculate_Distance=require("./Calculate_Distance")
const float=2;
const Payment_Detail={"Base_fair":50,"Per_KM":6.5,"Per_Minute":2,"Service_Charge%":0.2}
const BILL=(Ride_Id)=>{
    let ride_Detail=Active_Rides["GET_ACTIVE_RIDE"](Ride_Id)
if(ride_Detail){
    let rider_ID=String(Active_Rides["GET_ACTIVE_RIDE"](Ride_Id).Driver_Id)
   if(ride_Detail.Status=="Ended"){
    let Total_Price=calculate_Price(Ride_Id)
    console.log(`BILL ${Ride_Id} ${rider_ID} ${Total_Price.toFixed(float)}`)
   }else{
    console.log("INVALID_RIDE")
   }
}else{
    console.log("INVALID_RIDE")
}
}
const calculate_Price=(Ride_Id)=>{
    let ride_Detail=Active_Rides["GET_ACTIVE_RIDE"](Ride_Id)
    let riderLocation=rider_Detail["rider_Detail"][ride_Detail.Rider_Id.trim()]
    let Distance_Traveled= calculate_Distance["calculate_Distance"](riderLocation,ride_Detail.Destination)
    let Total_Price =Payment_Detail.Base_fair + (Distance_Traveled*Payment_Detail.Per_KM)+(Payment_Detail.Per_Minute*ride_Detail.Time)
    Total_Price += Total_Price*Payment_Detail["Service_Charge%"]
    return parseFloat(Total_Price);
}
module.exports={
    BILL
}