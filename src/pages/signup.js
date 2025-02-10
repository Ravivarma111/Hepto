import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [image, setImage] = useState(null);

  const onImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  const onFormSubmit = (userFormData) => {
    const formObj = new FormData();
    formObj.append("userObj", JSON.stringify(userFormData));
    formObj.append("pic", image);

    console.log("Form Data:", JSON.stringify(userFormData));

    axios
      .post("http://localhost:4000/userApi/create-user", formObj, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit(onFormSubmit)}>
              {/* Username */}
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  {...register("username", { required: true, minLength: 7 })}
                />
                {errors.username && (
                  <p className="text-danger">
                    {errors.username.type === "required"
                      ? "Username is required"
                      : "Username should be at least 7 characters long"}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-danger">Email is required</p>
                )}
              </div>

              {/* Date of Birth */}
              <div className="mb-3">
                <label htmlFor="dob" className="form-label">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  {...register("dob")}
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label htmlFor="createPassword" className="form-label">
                  Create Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="createPassword"
                  {...register("createPassword", { required: true })}
                />
                {errors.createPassword && (
                  <p className="text-danger">Create password is required</p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  {...register("confirmPassword", { required: true })}
                />
                {errors.confirmPassword && (
                  <p className="text-danger">Confirm password is required</p>
                )}
              </div>

              {/* Branch Selection */}
              <div className="mb-3">
                <label htmlFor="branch" className="form-label">
                  Branch
                </label>
                <select
                  className="form-select"
                  id="branch"
                  {...register("branch")}
                >
                  <option value="" disabled>
                    Select your branch
                  </option>
                  <option value="cse">CSE</option>
                  <option value="ece">ECE</option>
                  <option value="it">IT</option>
                </select>
              </div>

              {/* Gender Selection */}
              <div className="mb-3">
                <label className="form-label">Gender</label>
                <div className="d-flex">
                  <div className="form-check me-3">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="male"
                      value="male"
                      {...register("gender", { required: true })}
                    />
                    <label htmlFor="male" className="form-check-label">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="female"
                      value="female"
                      {...register("gender")}
                    />
                    <label htmlFor="female" className="form-check-label">
                      Female
                    </label>
                  </div>
                </div>
                {errors.gender && (
                  <p className="text-danger">Gender is required</p>
                )}
              </div>

              {/* Profile Picture Upload */}
              <div className="mb-3">
                <label htmlFor="profile" className="form-label">
                  Upload Profile Picture
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="profile"
                  onChange={onImageUpload}
                  {...register("profileFig", { required: true })}
                />
                {errors.profileFig && (
                  <p className="text-danger">Profile picture is required</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button type="submit" className="btn btn-success w-100">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
