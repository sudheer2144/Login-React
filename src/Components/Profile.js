import React, { useState, useEffect } from "react"

const Profile = () => {

    const [userData, setUserData] = useState({})

    let { image, firstName, lastName, gender, email, phone, birthDate } = userData

    let data = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        async function getData() {
            if (data) {
                let res = await fetch(`https://dummyjson.com/users/${data.id}`);
                let resData = await res.json();
                setUserData(resData);
            }
        }
        getData();
    }, [])


    return (
        <div className="profile">
            <div className="profile-container">
                <img src={image} alt="" />
                <h3>Name: <span>{firstName} {userData.lastName}</span></h3>
                <h3>Gender: <span>{gender}</span></h3>
                <h3>DOB: <span>{birthDate}</span></h3>
                <h3>Email: <span>{email}</span></h3>
                <h3>Phone: <span>{phone}</span></h3>
            </div>
        </div>
    )
}

export default Profile;