// // const mongoose = require('mongoose');

// // const EquipmentSchema = new mongoose.Schema({
// //   name: { type: String, required: true },
// //   category: { type: String, required: true },
// //   quantity: { 
// //     type: Number, 
// //     required: true, 
// //     min: [1, 'Quantity must be greater than 0'] 
// //   },
// //   price: { type: Number, required: true }
// // });

// // const EquipmentModel = mongoose.model('Equipment', EquipmentSchema);

// // module.exports = EquipmentModel;

// const mongoose = require('mongoose');

// const EquipmentSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   category: { type: String, required: true },
//   quantity: { 
//     type: Number, 
//     required: true, 
//     min: [1, 'Quantity must be greater than 0'] 
//   },
//   price: { type: Number, required: true },
//   date: { type: Date, required: true }  // Add the date field
// });

// const EquipmentModel = mongoose.model('Equipment', EquipmentSchema);

// module.exports = EquipmentModel;






const mongoose = require('mongoose');

const EquipmentSchema = new mongoose.Schema({
  serialId: { type: String, required: true },  // Add serialId field
  name: { type: String, required: true },
  category: { type: String, required: true },
  quantity: { 
    type: Number, 
    required: true, 
    min: [1, 'Quantity must be greater than 0'] 
  },
  price: { type: Number, required: true },
  date: { type: Date, required: true }  // Add the date field
});

const EquipmentModel = mongoose.model('Equipment', EquipmentSchema);

module.exports = EquipmentModel;
