



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TrainersPage.css';

function TrainersPage() {
    const [trainers, setTrainers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedTrainer, setSelectedTrainer] = useState(null);
    const [members, setMembers] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [assignedUsers, setAssignedUsers] = useState(new Set());
    const [isEditMode, setIsEditMode] = useState(false); // To handle edit mode
    const [formData, setFormData] = useState({
        phone: '',
        specialization: '',
        experience: '',
        photo: null,
    });

    useEffect(() => {
        const fetchTrainers = async () => {
            try {
                const response = await axios.get('http://localhost:3001/trainers');
                setTrainers(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching trainers:', error);
                setLoading(false);
            }
        };

        const fetchMembers = async () => {
            try {
                const response = await axios.get('http://localhost:3001/members');
                setMembers(response.data);
            } catch (error) {
                console.error('Error fetching members:', error);
            }
        };

        fetchTrainers();
        fetchMembers();
    }, []);

    const handleTrainerClick = async (trainer) => {
        setSelectedTrainer(trainer);
        setSelectedUsers([]);
        setAssignedUsers(new Set());

        try {
            const response = await axios.get(`http://localhost:3001/trainers/${trainer._id}/assignments`);
            const assignedUserIds = response.data.map(assignment => assignment.memberId._id);
            setAssignedUsers(new Set(assignedUserIds));
        } catch (error) {
            console.error('Error fetching assigned users:', error);
        }
    };

    const handleEditTrainer = (trainer) => {
        setSelectedTrainer(trainer);
        setFormData({
        phone: trainer.phone || '',
        specialization: trainer.specialization || '',
        experience: trainer.experience || '',
        photo: null
        });
        setIsEditMode(true);
    };

    const handleUserSelection = (userId) => {
        if (assignedUsers.has(userId)) return;

        setSelectedUsers((prev) =>
            prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]
        );
    };

    const handleAssignUsers = async () => {
        if (!selectedTrainer || selectedUsers.length === 0) return;

        try {
            await axios.post('http://localhost:3001/assignments', {
                trainerId: selectedTrainer._id,
                memberIds: selectedUsers,
            });
            alert('Users assigned to trainer successfully!');
            setSelectedTrainer(null);
            setSelectedUsers([]);
        } catch (error) {
            console.error('Error assigning users to trainer:', error);
        }
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
    
        const form = new FormData();
        form.append('phone', formData.phone);
        form.append('specialization', formData.specialization);
        form.append('experience', formData.experience); // Ensure experience is included
        if (formData.photo) {
            form.append('photo', formData.photo); // Append the photo if selected
        }
    
        try {
            await axios.put(`http://localhost:3001/trainers/${selectedTrainer._id}`, form, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Trainer details updated successfully!');
            setIsEditMode(false);
            setSelectedTrainer(null);
        } catch (error) {
            console.error('Error updating trainer details:', error);
        }
    };
    

    if (loading) return <div>Loading...</div>;

    return (
        <div className="trainers-container">
            <h2>Trainers List</h2>
            <div className="trainers-list">
                {trainers.length === 0 ? (
                    <p>No trainers found.</p>
                ) : (
                    trainers.map((trainer) => (
                        <div key={trainer._id} className="trainer-box">
                            <h4>{trainer.name}</h4>
                            <p>Email: {trainer.email}</p>
                            <p>Phone: {trainer.phone}</p>
                            {/* <p>Specialization: {trainer.specialization}</p> */}
                            <p>Experience: 3 Years</p>
                            <button onClick={() => handleTrainerClick(trainer)}>Assign Members</button>
                            {/* <button onClick={() => handleEditTrainer(trainer)}>Edit Details</button> */}
                        </div>
                    ))
                )}
            </div>

            {selectedTrainer && !isEditMode && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Assign Users to {selectedTrainer.name}</h3>
                        <div className="user-list">
                            {members.length === 0 ? (
                                <p>No members available.</p>
                            ) : (
                                members.map((member) => (
                                    <div key={member._id} className="user-item">
                                        <input
                                            type="checkbox"
                                            checked={selectedUsers.includes(member._id)}
                                            disabled={assignedUsers.has(member._id)}
                                            onChange={() => handleUserSelection(member._id)}
                                        />
                                        {member.fullName} {assignedUsers.has(member._id) && '(Assigned)'}
                                    </div>
                                ))
                            )}
                        </div>
                        {selectedUsers.length === 0 && (
                            <p style={{ color: 'red' }}>Please select members to assign.</p>
                        )}
                        <button onClick={handleAssignUsers} disabled={selectedUsers.length === 0}>
                            Assign Selected Users
                        </button>
                        <button onClick={() => setSelectedTrainer(null)}>Close</button>
                    </div>
                </div>
            )}

            {selectedTrainer && isEditMode && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Edit Trainer Details for {selectedTrainer.name}</h3>
                        <form onSubmit={handleEditSubmit}>
                            <div>
                                <label>Phone:</label>
                                <input
                                    type="text"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                            <div>
                                <label>Specialization:</label>
                                <input
                                    type="text"
                                    value={formData.specialization}
                                    onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                                />
                            </div>
                            <div>
                                <label>Experience:</label>
                                <input
                                    type="text"
                                    value={formData.experience}
                                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                />
                            </div>
                            <div>
                                <label>Photo (PDF):</label>
                                <input
                                    type="file"
                                    accept="application/pdf"
                                    onChange={(e) => setFormData({ ...formData, photo: e.target.files[0] })}
                                />
                            </div>
                            <button type="submit">Save Changes</button>
                            <button onClick={() => setIsEditMode(false)}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TrainersPage;

