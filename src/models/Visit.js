import Sequelize from 'sequelize';
import User from './User';
import { sequelize } from '../database/database';

const Visit = sequelize.define('visits', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  reasonVisit: {
    type: Sequelize.TEXT
  }
}, {});

User.hasOne(Visit, {
  foreignKey: 'userVisitorId'
});

User.hasOne(Visit, {
  foreignKey: 'userReceiverId'
});

Visit.belongsTo(User, { foreignKey: 'userVisitorId' });
Visit.belongsTo(User, { foreignKey: 'userReceiverId' });

export default Visit;