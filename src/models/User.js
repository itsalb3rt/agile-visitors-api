import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fullName: {
    type: Sequelize.TEXT
  },
  code: {
    type: Sequelize.TEXT
  },
  titlePosition: {
    type: Sequelize.TEXT
  }
}, {});

export default User;