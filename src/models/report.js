module.exports = (sequelize, Sequelize) => {
  const Report = sequelize.define(
    'Report',
    {
      userType: {
        type: Sequelize.STRING,
      },
      hospital: {
        type: Sequelize.STRING,
      },
      doctor: {
        type: Sequelize.STRING,
      },
      doctorCrm: {
        type: Sequelize.STRING,
      },
      patientName: {
        type: Sequelize.STRING,
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      instrumentator: {
        type: Sequelize.STRING,
      },
      healthInsurance: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    },
  );
  return Report;
};
