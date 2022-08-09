import React from "react";
import "./ProfilePage.css"
import { useState } from "react";
import MyActivites from "../../Components/Profile-MyActivites/MyActivities";

const ProfilePage= () =>{

    const [profileData,setProfileData] = useState({name:"Michael Carrick",age:"20",height:"100",weight:"30",bmi:"16"})
    console.log(profileData)
    return(
        <div className="ProfilePage">
            <div className="box-profile-page">
                <div className="user-profile">
                    <div className="profile-picture">
                        <img src="src/images/avatar.png" 
                        alt="profile-picture"/>
                    </div>
                    <div className="profile-detail">
                        <h2>Name : <span>{profileData.name}</span></h2>
                        <h2>Age : <span>{profileData.age}</span></h2>
                        <h2>Height : <span>{profileData.height} cm</span></h2>
                        <h2>Weight : <span>{profileData.weight} kg</span></h2>
                        <h2>BMI : <span>{profileData.bmi}</span></h2>
                    </div>
                    
                </div>
                <div className="my-activity">
                    <MyActivites />
                </div>

            </div>
        </div>
    )
}
export default ProfilePage