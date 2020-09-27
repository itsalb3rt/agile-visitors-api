import UserService from '../services/User.service';
import Response from '../utils/response';
import querystringConverterHelper from '../utils/querystringConverterHelper';

class UserController {

  static async create(req, res) {
    const newEntity = req.body;
    try {
      const entityCreated = await UserService.create({ newEntity });
      return res.json(Response.get('User created', entityCreated));
    } catch (error) {
      return res.status(500).json({
        message: 'Something goes wrong',
        data: error
      })
    }
  }

  static async getAll(req, res) {
    const { query } = req;

    let { where, limit, offset, order } = querystringConverterHelper.parseQuery(query);

    try {
      const { rows, count, total } = await UserService.getAll({
        criterions: {
          where,
          limit,
          offset,
          order,
        }
      })

      return res.json(Response.get('User list', rows, 200, { count, total, offset }));
    } catch (error) {
      return res.status(500).json(Response.get('Something goes wrong', error, 500));
    }
  }


  static async getById(req, res) {
    try {
      const entity = await UserService.getById({ id: req.params.id })

      if (entity) {
        return res.json(Response.get('User found', entity));
      }
      return res.json(Response.get('User not found', {}));
    } catch (error) {
      return res.status(500).json(Response.get('Something goes wrong', error, 500));
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const updateEntity = req.body;

    try {
      const updatedEntity = await UserService.update({
        id: id,
        updateEntity: updateEntity,
        firebaseUserId: currentUserId
      })

      return res.json(Response.get('User Updated', updatedEntity));
    } catch (error) {
      return res.status(500).json(Response.get('Something goes wrong', error, 500));
    }
  }
}

export default UserController;