'use strict';
module.exports = (sequelize, DataTypes) => {
	class Car extends sequelize.Sequelize.Model {
		decimalFormatting (value) {
			return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
	}

	Car.init({
		OwnerId: {
			type: DataTypes.INTEGER
		},
		brand: {
			type: DataTypes.STRING,
			validate: {
				notEmpty: {
					args: true,
					msg: 'Please input the brand!'
				}
			}
		},
		rentalPrice: {
			type: DataTypes.INTEGER,
			validate: {
				notEmpty: {
					args: true,
					msg: 'Please input the brand!'
				},
				isNumeric: {
					args: true,
					msg: 'Rental Price should be in number!',
				},
				isGreaterThanZero (value) {
					if (parseInt(value) < 1) throw new Error('Rental Price must be greater than 0!')
				}
			}
		},
		isReady: {
			type: DataTypes.STRING
		},
		longitude: {
			type: DataTypes.STRING
		},
		latitude: {
			type: DataTypes.STRING
		},
		type: {
			type: DataTypes.STRING,
			validate: {
				notEmpty: {
					args: true,
					msg: 'Please select car type!'
				}
			}
		}
	}, {
		sequelize,
		modelName: 'Car',
		hooks: {
			beforeCreate: (car, options) => {
				car.isReady = true;
			}
		}
	});
	Car.associate = function(models) {
		// associations can be defined here
		Car.belongsTo(models.Owner)
		Car.hasMany(models.Booking);
	};
	return Car;
};