import {clerkClient} from '@clerk/express'

export const protectEducator=async(req,res)=>{
    try{
        const userId=req.auth.userId
        const response=await clerkClient.users.getUser(userId)
        if(response.publicMetadata.role !=='educator'){
            res.json({success:false,message:'Unauthorized access'})

        }
        next()
    }
    catch(error){
        res.json({success:false,message:error.message})
    }
}