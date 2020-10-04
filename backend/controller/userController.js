import asyncHandler from 'express-async-handler'
import generateToken from '../utilis/genereteToken.js'
import User from './../models/userModels.js'

//@desc Login Users
//@route GET /api/products
//@access Public 
export const authUser = asyncHandler(async(req,res) => {
    const {email,password} = req.body
    
    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name : user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token : generateToken(user._id)
        })
    }else{
        res.status(401)
        throw new Error('invalid email or password')
    }
})


//@desc Register Users
//@route GET /api/users/register
//@access Public 

export const registerUser = asyncHandler(async(req,res) => {
    const {name,email,password} = req.body
    
    const userExist = await User.findOne({email})
    if(userExist) {
        res.status(400)
        throw new Error('User Already exist')
    }


    const user = await User.create({
        name,
        email,
        password
    })

    if(user) {
        res.status(201).json({
            _id: user._id,
            name : user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token : generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data')

    }
})



//@desc GET USER PROFILE
//@route GET /api/user
//@access Public 
export const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
  
    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })

  
