// // // // export default EquipmentManagement;
// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';
// // // import { ToastContainer, toast } from 'react-toastify';
// // // import 'react-toastify/dist/ReactToastify.css';
// // // import './EquipmentManagement.css';

// // // function EquipmentManagement() {
// // //     const [equipment, setEquipment] = useState([]);
// // //     const [newEquipment, setNewEquipment] = useState({
// // //         name: '',
// // //         category: '',
// // //         quantity: 1,
// // //         price: '',
// // //         date: ''  // Add date to the state
// // //     });
// // //     const [isEditing, setIsEditing] = useState(false);
// // //     const [editId, setEditId] = useState(null);

// // //     useEffect(() => {
// // //         axios.get('http://localhost:3001/equipment')
// // //             .then(response => setEquipment(response.data))
// // //             .catch(error => console.error('Error fetching equipment:', error));
// // //     }, []);

// // //     const handleAddOrUpdateEquipment = () => {
// // //         if (newEquipment.quantity <= 0) {
// // //             alert("Quantity must be greater than 0");
// // //             return;
// // //         }

// // //         if (isEditing) {
// // //             axios.put(`http://localhost:3001/equipment/${editId}`, newEquipment)
// // //                 .then(response => {
// // //                     setEquipment(equipment.map(item => item._id === editId ? response.data : item));
// // //                     resetForm();
// // //                     toast.success('Equipment updated successfully!');
// // //                 })
// // //                 .catch(error => console.error('Error updating equipment:', error));
// // //         } else {
// // //             axios.post('http://localhost:3001/equipment', newEquipment)
// // //                 .then(response => {
// // //                     setEquipment([...equipment, response.data]);
// // //                     resetForm();
// // //                     toast.success('Equipment added successfully!');
// // //                 })
// // //                 .catch(error => console.error('Error adding equipment:', error));
// // //         }
// // //     };

// // //     const resetForm = () => {
// // //         setNewEquipment({
// // //             name: '',
// // //             category: '',
// // //             quantity: 1,
// // //             price: '',
// // //             date: ''  // Reset date
// // //         });
// // //         setIsEditing(false);
// // //         setEditId(null);
// // //     };

// // //     const handleEdit = (id) => {
// // //         const equipmentToEdit = equipment.find(item => item._id === id);
// // //         setNewEquipment(equipmentToEdit);
// // //         setIsEditing(true);
// // //         setEditId(id);
// // //     };

// // //     const handleDelete = (id) => {
// // //         if (window.confirm("Are you sure you want to delete this equipment?")) {
// // //             axios.delete(`http://localhost:3001/equipment/${id}`)
// // //                 .then(() => {
// // //                     setEquipment(equipment.filter(item => item._id !== id));
// // //                     toast.info('Equipment deleted successfully!');
// // //                 })
// // //                 .catch(error => console.error('Error deleting equipment:', error));
// // //         }
// // //     };

// // //     return (
// // //         <div className="equipment-management-container">
// // //             <h2>Equipment Management</h2>

// // //             <ToastContainer />

// // //             {/* Add or Edit Equipment Form */}
// // //             <div className="add-equipment">
// // //                 <h3>{isEditing ? "Edit Equipment" : "Add New Equipment"}</h3>
// // //                 <div className="form-row">
// // //                     <div className="form-group">
// // //                         <label>Name</label>
// // //                         <input type="text" value={newEquipment.name} onChange={(e) => setNewEquipment({ ...newEquipment, name: e.target.value })} />
// // //                     </div>
// // //                     <div className="form-group">
// // //                         <label>Category</label>
// // //                         <select 
// // //                             value={newEquipment.category} 
// // //                             onChange={(e) => setNewEquipment({ ...newEquipment, category: e.target.value })}
// // //                         >
// // //                             <option value="">Select Category</option>
// // //                             <option value="Strength">Strength</option>
// // //                             <option value="Cardio">Cardio</option>
// // //                             <option value="Others">Others</option>
// // //                         </select>
// // //                     </div>
// // //                 </div>
// // //                 <div className="form-row">
// // //                     <div className="form-group">
// // //                         <label>Quantity</label>
// // //                         <input 
// // //                             type="number" 
// // //                             value={newEquipment.quantity} 
// // //                             onChange={(e) => setNewEquipment({ ...newEquipment, quantity: Math.max(1, e.target.value) })} 
// // //                         />
// // //                     </div>
// // //                     <div className="form-group">
// // //                         <label>Price</label>
// // //                         <input 
// // //                             type="number" 
// // //                             value={newEquipment.price} 
// // //                             onChange={(e) => setNewEquipment({ ...newEquipment, price: e.target.value })} 
// // //                         />
// // //                     </div>
// // //                     <div className="form-group">
// // //                         <label>Date</label>
// // //                         <input 
// // //                             type="date" 
// // //                             value={newEquipment.date} 
// // //                             onChange={(e) => setNewEquipment({ ...newEquipment, date: e.target.value })} 
// // //                         />
// // //                     </div>
// // //                 </div>
// // //                 <button onClick={handleAddOrUpdateEquipment}>{isEditing ? "Update Equipment" : "Add Equipment"}</button>
// // //             </div>

// // //             {/* Equipment List */}
// // //             <div className="equipment-list-container">
// // //                 <h3>Existing Equipment</h3>
// // //                 <table>
// // //                     <thead>
// // //                         <tr>
// // //                             <th>Name</th>
// // //                             <th>Category</th>
// // //                             <th>Quantity</th>
// // //                             <th>Price</th>
// // //                             <th>Date</th> {/* Add Date column */}
// // //                             <th className='le'>Actions</th>
// // //                         </tr>
// // //                     </thead>
// // //                     <tbody>
// // //                         {equipment.map((item) => (
// // //                             <tr key={item._id}>
// // //                                 <td>{item.name}</td>
// // //                                 <td>{item.category}</td>
// // //                                 <td>{item.quantity}</td>
// // //                                 <td>{item.price}</td>
// // //                                 <td>{new Date(item.date).toLocaleDateString()}</td> {/* Display formatted date */}
// // //                                 <td>
// // //                                     <button className='edit-btn' onClick={() => handleEdit(item._id)}>Edit</button>
// // //                                     <button className='delete-btn' onClick={() => handleDelete(item._id)}>Delete</button>
// // //                                 </td>
// // //                             </tr>
// // //                         ))}
// // //                     </tbody>
// // //                 </table>
// // //             </div>
// // //         </div>
// // //     );
// // // }

// // // export default EquipmentManagement;




























// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import './EquipmentManagement.css';

// // function EquipmentManagement() {
// //     const [equipment, setEquipment] = useState([]);
// //     const [newEquipment, setNewEquipment] = useState({
// //         name: '',
// //         category: '',
// //         quantity: 1,
// //         price: '',
// //         date: ''  // Add date to the state
// //     });
// //     const [isEditing, setIsEditing] = useState(false);
// //     const [editId, setEditId] = useState(null);
// //     const [filterCategory, setFilterCategory] = useState("All"); // State for sorting

// //     useEffect(() => {
// //         axios.get('http://localhost:3001/equipment')
// //             .then(response => setEquipment(response.data))
// //             .catch(error => console.error('Error fetching equipment:', error));
// //     }, []);

// //     const handleAddOrUpdateEquipment = () => {
// //         if (newEquipment.quantity <= 0) {
// //             alert("Quantity must be greater than 0");
// //             return;
// //         }

// //         if (isEditing) {
// //             axios.put(`http://localhost:3001/equipment/${editId}`, newEquipment)
// //                 .then(response => {
// //                     setEquipment(equipment.map(item => item._id === editId ? response.data : item));
// //                     resetForm();
// //                     toast.success('Equipment updated successfully!');
// //                 })
// //                 .catch(error => console.error('Error updating equipment:', error));
// //         } else {
// //             axios.post('http://localhost:3001/equipment', newEquipment)
// //                 .then(response => {
// //                     setEquipment([...equipment, response.data]);
// //                     resetForm();
// //                     toast.success('Equipment added successfully!');
// //                 })
// //                 .catch(error => console.error('Error adding equipment:', error));
// //         }
// //     };

// //     const resetForm = () => {
// //         setNewEquipment({
// //             name: '',
// //             category: '',
// //             quantity: 1,
// //             price: '',
// //             date: ''  // Reset date
// //         });
// //         setIsEditing(false);
// //         setEditId(null);
// //     };

// //     const handleEdit = (id) => {
// //         const equipmentToEdit = equipment.find(item => item._id === id);
// //         setNewEquipment(equipmentToEdit);
// //         setIsEditing(true);
// //         setEditId(id);
// //     };

// //     const handleDelete = (id) => {
// //         if (window.confirm("Are you sure you want to delete this equipment?")) {
// //             axios.delete(`http://localhost:3001/equipment/${id}`)
// //                 .then(() => {
// //                     setEquipment(equipment.filter(item => item._id !== id));
// //                     toast.info('Equipment deleted successfully!');
// //                 })
// //                 .catch(error => console.error('Error deleting equipment:', error));
// //         }
// //     };

// //     // Filter equipment based on the selected category
// //     const filteredEquipment = filterCategory === "All"
// //         ? equipment
// //         : equipment.filter(item => item.category === filterCategory);

// //     return (
// //         <div className="equipment-management-container">
// //             <h2>Equipment Management</h2>

// //             <ToastContainer />

// //             {/* Add or Edit Equipment Form */}
// //             <div className="add-equipment">
// //                 <h3>{isEditing ? "Edit Equipment" : "Add New Equipment"}</h3>
// //                 <div className="form-row">
// //                     <div className="form-group">
// //                         <label>Name</label>
// //                         <input type="text" value={newEquipment.name} onChange={(e) => setNewEquipment({ ...newEquipment, name: e.target.value })} />
// //                     </div>
// //                     <div className="form-group">
// //                         <label>Category</label>
// //                         <select 
// //                             value={newEquipment.category} 
// //                             onChange={(e) => setNewEquipment({ ...newEquipment, category: e.target.value })}
// //                         >
// //                             <option value="">Select Category</option>
// //                             <option value="Strength">Strength</option>
// //                             <option value="Cardio">Cardio</option>
// //                             <option value="Others">Others</option>
// //                         </select>
// //                     </div>
// //                 </div>
// //                 <div className="form-row">
// //                     <div className="form-group">
// //                         <label>Quantity</label>
// //                         <input 
// //                             type="number" 
// //                             value={newEquipment.quantity} 
// //                             onChange={(e) => setNewEquipment({ ...newEquipment, quantity: Math.max(1, e.target.value) })} 
// //                         />
// //                     </div>
// //                     <div className="form-group">
// //                         <label>Price</label>
// //                         <input 
// //                             type="number" 
// //                             value={newEquipment.price} 
// //                             onChange={(e) => setNewEquipment({ ...newEquipment, price: e.target.value })} 
// //                         />
// //                     </div>
// //                     <div className="form-group">
// //                         <label>Date</label>
// //                         <input 
// //                             type="date" 
// //                             value={newEquipment.date} 
// //                             onChange={(e) => setNewEquipment({ ...newEquipment, date: e.target.value })} 
// //                         />
// //                     </div>
// //                 </div>
// //                 <button onClick={handleAddOrUpdateEquipment}>{isEditing ? "Update Equipment" : "Add Equipment"}</button>
// //             </div>

// //             {/* Equipment List */}
// //             <div className="equipment-list-container">
// //                 <h3>Existing Equipment</h3>
// //                 <table>
// //                     <thead>
// //                         <tr>
// //                             <th>Name</th>
// //                             <th className='category-table'>
// //                                 <div>Category</div>
// //                                 {/* Dropdown for Sorting by Category */}
// //                                 <select 
// //                                     className="category-filter-dropdown" 
// //                                     value={filterCategory} 
// //                                     onChange={(e) => setFilterCategory(e.target.value)}
// //                                 >
// //                                     <option value="All">All</option>
// //                                     <option value="Strength">Strength</option>
// //                                     <option value="Cardio">Cardio</option>
// //                                     <option value="Others">Others</option>
// //                                 </select>
// //                             </th>
// //                             <th>Quantity</th>
// //                             <th>Price</th>
// //                             <th>Date</th> {/* Add Date column */}
// //                             <th className='le'>Actions</th>
// //                         </tr>
// //                     </thead>
// //                     <tbody>
// //                         {filteredEquipment.map((item) => (
// //                             <tr key={item._id}>
// //                                 <td>{item.name}</td>
// //                                 <td>{item.category}</td>
// //                                 <td>{item.quantity}</td>
// //                                 <td>{item.price}</td>
// //                                 <td>{new Date(item.date).toLocaleDateString()}</td> {/* Display formatted date */}
// //                                 <td>
// //                                     <button className='edit-btn' onClick={() => handleEdit(item._id)}>Edit</button>
// //                                     <button className='delete-btn' onClick={() => handleDelete(item._id)}>Delete</button>
// //                                 </td>
// //                             </tr>
// //                         ))}
// //                     </tbody>
// //                 </table>
// //             </div>
// //         </div>
// //     );
// // }

// // export default EquipmentManagement;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './EquipmentManagement.css';

// function EquipmentManagement() {
//     const [equipment, setEquipment] = useState([]);
//     const [newEquipment, setNewEquipment] = useState({
//         name: '',
//         category: '',
//         quantity: 1,
//         price: '',
//         date: ''  // Keep date, but label it as 'Registered Date'
//     });
//     const [isEditing, setIsEditing] = useState(false);
//     const [editId, setEditId] = useState(null);
//     const [filterCategory, setFilterCategory] = useState("All"); // State for sorting

//     useEffect(() => {
//         axios.get('http://localhost:3001/equipment')
//             .then(response => setEquipment(response.data))
//             .catch(error => console.error('Error fetching equipment:', error));
//     }, []);

//     const handleAddOrUpdateEquipment = () => {
//         if (newEquipment.quantity <= 0) {
//             alert("Quantity must be greater than 0");
//             return;
//         }

//         if (isEditing) {
//             axios.put(`http://localhost:3001/equipment/${editId}`, newEquipment)
//                 .then(response => {
//                     setEquipment(equipment.map(item => item._id === editId ? response.data : item));
//                     resetForm();
//                     toast.success('Equipment updated successfully!');
//                 })
//                 .catch(error => console.error('Error updating equipment:', error));
//         } else {
//             axios.post('http://localhost:3001/equipment', newEquipment)
//                 .then(response => {
//                     setEquipment([...equipment, response.data]);
//                     resetForm();
//                     toast.success('Equipment added successfully!');
//                 })
//                 .catch(error => console.error('Error adding equipment:', error));
//         }
//     };

//     const resetForm = () => {
//         setNewEquipment({
//             name: '',
//             category: '',
//             quantity: 1,
//             price: '',
//             date: ''  // Reset date
//         });
//         setIsEditing(false);
//         setEditId(null);
//     };

//     const handleEdit = (id) => {
//         const equipmentToEdit = equipment.find(item => item._id === id);
//         setNewEquipment(equipmentToEdit);
//         setIsEditing(true);
//         setEditId(id);
//     };

//     const handleDelete = (id) => {
//         if (window.confirm("Are you sure you want to delete this equipment?")) {
//             axios.delete(`http://localhost:3001/equipment/${id}`)
//                 .then(() => {
//                     setEquipment(equipment.filter(item => item._id !== id));
//                     toast.info('Equipment deleted successfully!');
//                 })
//                 .catch(error => console.error('Error deleting equipment:', error));
//         }
//     };

//     // Filter equipment based on the selected category
//     const filteredEquipment = filterCategory === "All"
//         ? equipment
//         : equipment.filter(item => item.category === filterCategory);

//     return (
//         <div className="equipment-management-container">
//             <h2>Equipment Management</h2>

//             <ToastContainer />

//             {/* Add or Edit Equipment Form */}
//             <div className="add-equipment">
//                 <h3>{isEditing ? "Edit Equipment" : "Add New Equipment"}</h3>
//                 <div className="form-row">
//                     <div className="form-group">
//                         <label>Name</label>
//                         <input type="text" value={newEquipment.name} onChange={(e) => setNewEquipment({ ...newEquipment, name: e.target.value })} />
//                     </div>
//                     <div className="form-group">
//                         <label>Category</label>
//                         <select 
//                             value={newEquipment.category} 
//                             onChange={(e) => setNewEquipment({ ...newEquipment, category: e.target.value })}
//                         >
//                             <option value="">Select Category</option>
//                             <option value="Strength">Strength</option>
//                             <option value="Cardio">Cardio</option>
//                             <option value="Others">Others</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div className="form-row">
//                     <div className="form-group">
//                         <label>Quantity</label>
//                         <input 
//                             type="number" 
//                             value={newEquipment.quantity} 
//                             onChange={(e) => setNewEquipment({ ...newEquipment, quantity: Math.max(1, e.target.value) })} 
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label>Price</label>
//                         <input 
//                             type="number" 
//                             value={newEquipment.price} 
//                             onChange={(e) => setNewEquipment({ ...newEquipment, price: e.target.value })} 
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label>Registered Date</label>  {/* Change label */}
//                         <input 
//                             type="date" 
//                             value={newEquipment.date} 
//                             onChange={(e) => setNewEquipment({ ...newEquipment, date: e.target.value })} 
//                         />
//                     </div>
//                 </div>
//                 <button onClick={handleAddOrUpdateEquipment}>{isEditing ? "Update Equipment" : "Add Equipment"}</button>
//             </div>

//             {/* Equipment List */}
//             <div className="equipment-list-container">
//                 <h3>Existing Equipment</h3>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th className='category-table'>
//                                 <div>Category</div>
//                                 {/* Dropdown for Sorting by Category */}
//                                 <select 
//                                     className="category-filter-dropdown" 
//                                     value={filterCategory} 
//                                     onChange={(e) => setFilterCategory(e.target.value)}
//                                 >
//                                     <option value="All">All</option>
//                                     <option value="Strength">Strength</option>
//                                     <option value="Cardio">Cardio</option>
//                                     <option value="Others">Others</option>
//                                 </select>
//                             </th>
//                             <th>Quantity</th>
//                             <th>Price</th>
//                             <th>Registered Date</th> {/* Update table header */}
//                             <th className='le'>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filteredEquipment.map((item) => (
//                             <tr key={item._id}>
//                                 <td>{item.name}</td>
//                                 <td>{item.category}</td>
//                                 <td>{item.quantity}</td>
//                                 <td>{item.price}</td>
//                                 <td>{new Date(item.date).toLocaleDateString()}</td> {/* Display formatted date */}
//                                 <td>
//                                     <button className='edit-btn' onClick={() => handleEdit(item._id)}>Edit</button>
//                                     <button className='delete-btn' onClick={() => handleDelete(item._id)}>Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default EquipmentManagement;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './EquipmentManagement.css';

function EquipmentManagement() {
    const [equipment, setEquipment] = useState([]);
    const [newEquipment, setNewEquipment] = useState({
        serialId: '',  // Added serial ID field
        name: '',
        category: '',
        quantity: 1,
        price: '',
        date: ''  // Keep date, but label it as 'Registered Date'
    });
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const [filterCategory, setFilterCategory] = useState("All"); // State for sorting

    useEffect(() => {
        axios.get('http://localhost:3001/equipment')
            .then(response => setEquipment(response.data))
            .catch(error => console.error('Error fetching equipment:', error));
    }, []);

    const handleAddOrUpdateEquipment = () => {
        if (newEquipment.quantity <= 0) {
            alert("Quantity must be greater than 0");
            return;
        }

        if (isEditing) {
            axios.put(`http://localhost:3001/equipment/${editId}`, newEquipment)
                .then(response => {
                    setEquipment(equipment.map(item => item._id === editId ? response.data : item));
                    resetForm();
                    toast.success('Equipment updated successfully!');
                })
                .catch(error => console.error('Error updating equipment:', error));
        } else {
            axios.post('http://localhost:3001/equipment', newEquipment)
                .then(response => {
                    setEquipment([...equipment, response.data]);
                    resetForm();
                    toast.success('Equipment added successfully!');
                })
                .catch(error => console.error('Error adding equipment:', error));
        }
    };

    const resetForm = () => {
        setNewEquipment({
            serialId: '',  // Reset serial ID field
            name: '',
            category: '',
            quantity: 1,
            price: '',
            date: ''  // Reset date
        });
        setIsEditing(false);
        setEditId(null);
    };

    const handleEdit = (id) => {
        const equipmentToEdit = equipment.find(item => item._id === id);
        setNewEquipment(equipmentToEdit);
        setIsEditing(true);
        setEditId(id);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this equipment?")) {
            axios.delete(`http://localhost:3001/equipment/${id}`)
                .then(() => {
                    setEquipment(equipment.filter(item => item._id !== id));
                    toast.info('Equipment deleted successfully!');
                })
                .catch(error => console.error('Error deleting equipment:', error));
        }
    };

    // Filter equipment based on the selected category
    const filteredEquipment = filterCategory === "All"
        ? equipment
        : equipment.filter(item => item.category === filterCategory);

    return (
        <div className="equipment-management-container">
            <h2>Equipment Management</h2>

            <ToastContainer />

            {/* Add or Edit Equipment Form */}
            <div className="add-equipment">
                <h3>{isEditing ? "Edit Equipment" : "Add New Equipment"}</h3>
                <div className="form-row">
                    
                    <div className="form-group">
                        <label>Serial ID</label>  {/* Serial ID field */}
                        <input 
                            type="text" 
                            value={newEquipment.serialId} 
                            onChange={(e) => setNewEquipment({ ...newEquipment, serialId: e.target.value })} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" value={newEquipment.name} onChange={(e) => setNewEquipment({ ...newEquipment, name: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select 
                            value={newEquipment.category} 
                            onChange={(e) => setNewEquipment({ ...newEquipment, category: e.target.value })}
                        >
                            <option value="">Select Category</option>
                            <option value="Strength">Strength</option>
                            <option value="Cardio">Cardio</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Quantity</label>
                        <input 
                            type="number" 
                            value={newEquipment.quantity} 
                            onChange={(e) => setNewEquipment({ ...newEquipment, quantity: Math.max(1, e.target.value) })} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input 
                            type="number" 
                            value={newEquipment.price} 
                            onChange={(e) => setNewEquipment({ ...newEquipment, price: e.target.value })} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Registered Date</label>  {/* Change label */}
                        <input 
                            type="date" 
                            value={newEquipment.date} 
                            onChange={(e) => setNewEquipment({ ...newEquipment, date: e.target.value })} 
                        />
                    </div>
                </div>
                <button onClick={handleAddOrUpdateEquipment}>{isEditing ? "Update Equipment" : "Add Equipment"}</button>
            </div>

            {/* Equipment List */}
            <div className="equipment-list-container">
                <h3>Existing Equipment</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Serial ID</th>  {/* Add Serial ID column header */}
                            <th>Name</th>
                            <th className='category-table'>
                                <div>Category</div>
                                {/* Dropdown for Sorting by Category */}
                                <select 
                                    className="category-filter-dropdown" 
                                    value={filterCategory} 
                                    onChange={(e) => setFilterCategory(e.target.value)}
                                >
                                    <option value="All">All</option>
                                    <option value="Strength">Strength</option>
                                    <option value="Cardio">Cardio</option>
                                    <option value="Others">Others</option>
                                </select>
                            </th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Registered Date</th> {/* Update table header */}
                            <th className='le'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredEquipment.map((item) => (
                            <tr >
                                <td>{item.serialId}</td>  {/* Display Serial ID */}
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td>{new Date(item.date).toLocaleDateString()}</td> {/* Display formatted date */}
                                <td>
                                    <button className='edit-btn' onClick={() => handleEdit(item._id)}>Edit</button>
                                    <button className='delete-btn' onClick={() => handleDelete(item._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default EquipmentManagement;
