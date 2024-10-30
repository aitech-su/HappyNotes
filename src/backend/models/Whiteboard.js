const mongoose = require('../config/db');

// Define the Whiteboard Schema
const whiteboardSchema = new mongoose.Schema({
    Whiteboard_title: String,
    is_private: Boolean,
    user_id: mongoose.Schema.Types.ObjectId, // 引用到 User 的 _id
    created_at: Date,
    updated_at: Date,
    position: {
        x: Number, 
        y: Number  
    },
    dimensions: {
        width: Number,  
        height: Number  
    },
    
    cards: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card',
      },
    ] // 引用到 Card 的 _id，進行多對多關聯
});
  
// Create the Whiteboard Model
const Whiteboard = mongoose.model('Whiteboard', whiteboardSchema);

module.exports = Whiteboard; 