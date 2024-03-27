import React from 'react';
import './AboutUs.css';
import Navbar from '../navbar/Navbar';


const AboutUs = () => {
    const teamMembers = [
        { id: 1, name: 'John Doe', position: 'CEO', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat purus vel nisi ultrices, vitae fermentum odio mattis.' },
        { id: 2, name: 'Jane Smith', position: 'CTO', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat purus vel nisi ultrices, vitae fermentum odio mattis.' },
        { id: 3, name: 'Alice Johnson', position: 'Designer', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat purus vel nisi ultrices, vitae fermentum odio mattis.' },
        { id: 4, name: 'Bob Brown', position: 'Developer', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat purus vel nisi ultrices, vitae fermentum odio mattis.' },
        { id: 5, name: 'Emily Davis', position: 'Marketing', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat purus vel nisi ultrices, vitae fermentum odio mattis.' }
    ];

    return (
        <div>
            <Navbar />
            <div className="about-us-container">
                <h2 style={{ textAlign: 'center' }}>About Us</h2>
                <div className="team-members">
                    {teamMembers.map(member => (
                        <div key={member.id} className="team-member">
                            <h3>{member.name}</h3>
                            <p>{member.position}</p>
                            <p>{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
