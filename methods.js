const ride_Detail=require("./Methods/Ride_Detail")
const ride_actions=require("./Methods/Ride_Actions")
const generate_bill=require("./Methods/generate_Bill")
const ADD_DRIVER =async (Id,x,y)=>{
await ride_Detail["ADD_DRIVER"](Id,x,y) 
}
const ADD_RIDER=async(Id,x,y)=>{
   await ride_Detail["ADD_RIDER"](Id,x,y)
}
const MATCH=async (Id)=>{
    await ride_actions["MATCH"](Id)
}
const START_RIDE=(R_Id,N,Ri_Id)=>{
    ride_actions["START_RIDE"](R_Id,N,Ri_Id)
}
const STOP_RIDE=(R_Id,D_x,D_y,time)=>{
    ride_actions["STOP_RIDE"](R_Id,D_x,D_y,time)
}
const BILL=(R_Id)=>{
    generate_bill["BILL"](R_Id)
}

module.exports ={
    ADD_DRIVER,
    ADD_RIDER,
    MATCH,
    START_RIDE,
    STOP_RIDE,
    BILL
}