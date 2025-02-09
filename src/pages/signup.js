import React from 'react'
import {useForm} from 'react-hook-form'
import {useState} from 'react'
import axios from 'axios'

function SignUp() {
  const {register, handleSubmit,formState:{errors}}=useForm();

  const [setImage,image]=useState(null);
   const  onImageUpload=(event)=>
    {
      setImage(event.target.Files[0])
    }
  const onFormSubmit=(userFormData)=>
    {

      const formObj= new FormData();
      formObj.append("userObj",JSON.stringify(userFormData));
      formObj.append("pic",image)
      // console.log(userFormData);
      console.log("formobjj",JSON.stringify(userFormData))
      axios.post('http://localhost:4000/userApi/create-user',formObj,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
        })
      .then((response)=>
      {
        console.log("ress",response.data);
      })
      .catch((error)=>
        {
          alert("something went wrong")
        })
    }
  return (
<div className="row mt-3">
<div className="col-11 col-sm-8 col-md-6 mx-auto">
  <form onSubmit={handleSubmit(onFormSubmit)}>
  <div className="username mb-3">
    <label  htmlFor="username">Username</label>
    <input type="text"  name="username" className='form-control' id="username" {...register("username", {required:true,minLength:7})} />
    {errors.username?.type==='required' && <p className="text-danger">Username is required</p>}
    {errors.username?.type==='minLength' && <p className="text-danger">Username should be with min length</p>}
  </div>
  <div className="email mb-3">
    <label  htmlFor="email">Email</label>
    <input type="email"  name="email" className='form-control' id="email" {...register("email",{required:true})} />
    {errors.email && <p className="text-danger">Email is required</p>}
  </div>
  <div className="dob mb-3">
    <label  htmlFor="dob">Date of Birth</label>
    <input type="date"  name="dob" className='form-control' id="dob" {...register("dob")} />
  </div>
  <div className="createPassword mb-3">
    <label  htmlFor="createPassword">Create Password</label>
    <input type="password"  name="createPassword" className='form-control' id="createPassword" {...register("createPassword",{required:true})} />
    {errors.createPassword && <p className="text-danger">Create password is required</p>}
  </div>
  <div className="confirmPassword mb-3">
    <label  htmlFor="confirmPassword">Confirm Password</label>
    <input type="password"  name="confirmPassword" className='form-control' id="confirmPassword" {...register("confirmPassword",{required:true})} />
    {errors.confirmPassword && <p className="text-danger">Confirm password is required</p>}
  </div>
  <div className="branch mb-3">
    <label  htmlFor="branch">Branch</label>
    <select name="branch" id="branch" className='form-select' {...register("branch")}>
      <option value="" disabled selected>select your branch</option>
      <option value="cse" >CSE</option>
      <option value="ece" >ECE</option>
      <option value="it" >IT</option>

    </select>
  </div>
  <div className="gender mb-3">
  <div className='form-check'>
    <label  htmlFor="male" className='form-check-label' style={{marginRight:'670px'}}>Male</label>
    <input type="radio"  name="male" className='form-check-input' id="male" value="male" {...register("gender",{required:true})} />
    
  </div>
  <div className='form-check'>
    <label  htmlFor="female" className='form-check-label' style={{marginRight:'660px'}}>Female</label>
    <input type="radio"  name="female" className='form-check-input' id="female" value="female" {...register("gender")} />
    {errors.gender && <p className="text-danger"  style={{marginRight:'600px'}} >gender  is required</p>}

  </div>
  
  </div>
  <div className="profileFig mb-3">
    <label  htmlFor="profile">Upload your Profile</label>
    <input type="file"  name="profile" className='form-control' id="profile"  onChange={(event)=>onImageUpload(event)} {...register("profileFig",{required:true})} />
    {errors.profileFig && <p className="text-danger">Profile pciture is required</p>}
  </div>
  <button type="submit" className="btn btn-success w-50">Submit</button>
  </form>
</div>

</div>
  )
}

export default SignUp