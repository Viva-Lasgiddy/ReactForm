import { useState } from "react"

const SignupForm=()=>{
    const [formData, setFormData] = useState({
       firstName: "",
       lastName: "",
       userName: "",
       gender: "",
       email:"",
       password: ""

    })

    const handleChange= (e)=>{
       const name =  e.target.name
       const value = e.target.value

       setFormData((prevState)=>(
               {
                   ...prevState,
                   [name]:value
               }
       ))

    }
    const handleSubmit=(e)=>{
       e.preventDefault()
       console.log(formData)
    }
   return(
       <>
         <form onSubmit={handleSubmit}>
           <div className="input-control">
               <label>First Name</label>
               <input name="firstName" type="text" value={formData.firstName} onChange={handleChange} />
           </div>
           <div className="input-control">
               <label>Last Name</label>
               <input name="lastName" type="text" value={formData.lastName} onChange={handleChange}/>
           </div>
           <div className="input-control">
               <label>User Name</label>
               <input name="userName" type="text" value={formData.userName} onChange={handleChange} />
           </div>
           <div className="input-control">
               <label>Gender</label>
               <select name="gender" onChange={handleChange} value={formData.gender}>
               <option value=""> </option>
                   <option value="male"> Male</option>
                   <option value="female"> Female</option>

               </select>
           </div>
           <div className="input-control">
               <label>Email</label>
               <input name="email" type="text" value={formData.email} onChange={handleChange}/>
           </div>
           <div className="input-control">
               <label>Password</label>
               <input name="password" type="text" value={formData.password} onChange={handleChange}/>
           </div>

           <button type="submit">Submit Form</button>
         </form>
         <p>
           first name: {formData.firstName}
           <br/>
           last name: {formData.lastName}
           <br/>
           username: {formData.userName}
           <br/>
           gender: {formData.gender}
           <br/>
           email: {formData.email}
           <br/>
           Password: {formData.password}
           <br/>
         </p>
       </>
   )
}

export default SignupForm