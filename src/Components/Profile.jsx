import React from 'react'

const Profile = () => {
    return (
        <div className="bg-gray-200 p-6 rounded-lg shadow-md max-w-md mx-auto">
            <div className="text-center">
                <img
                    src="https://via.placeholder.com/150"
                    alt="User Profile"
                    className="w-32 h-32 mx-auto rounded-full"
                />
                <h2 className="text-xl font-semibold mt-4">John Doe</h2>
                <p className="text-gray-600">Web Developer</p>
            </div>
            <div className="mt-6">
                <h3 className="text-lg font-semibold">About Me</h3>
                <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                    turpis nec odio efficitur volutpat at in ligula. Sed eget erat et arcu
                    aliquam iaculis.
                </p>
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-semibold">Contact Information</h3>
                <ul className="list-disc pl-6 mt-2 text-gray-700">
                    <li>Email: john.doe@example.com</li>
                    <li>Location: New York, USA</li>
                    <li>Website: www.johndoe.com</li>
                </ul>
            </div>
        </div>
    )
}

export default Profile