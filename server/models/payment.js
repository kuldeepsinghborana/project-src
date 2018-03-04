var mongoose = require('mongoose');

var paymentSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    transaction_id: String,
    carrotStatus: {
        type: Boolean,
        default: false
    },
    transaction_status: String,
    amount: Number,
},
    { timestamps: true });

// pre save hook to add employer details
paymentSchema.pre('save', function (next) {
    var payment = this;
    next()
});

// export the schema as Job model
mongoose.model('Payment', paymentSchema, 'payments');



