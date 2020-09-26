import User from '../models/User';

class UserService {

  static async create(params) {
    let { newEntity } = params;
    try {
      const entityCreated = await User.create(newEntity);
      return entityCreated;
    } catch (error) {
      throw error;
    }
  }

  static async getAll(params) {
    const { criterions } = params;

    try {
      const { rows } = await User.findAndCountAll({ ...criterions });
      return { rows, count: rows.length };
    } catch (error) {
      throw error;
    }
  }

  static async getById(params) {
    const { id } = params;

    try {
      const entity = await User.findOne({ where: { id } })
      return entity;
    } catch (error) {
      throw error;
    }
  }

  static async delete(params) {
    const { id } = params;
    try {
      const rowCount = await User.destroy({
        where: { id }
      })
      return { count: rowCount };
    } catch (error) {
      throw error;
    }
  }

}

export default UserService;