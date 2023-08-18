import { Material } from '../../models';
import { successResponse, errorResponse } from '../../helpers';

// eslint-disable-next-line import/prefer-default-export
export const materialRegister = async (req, res) => {
  try {
    const { description } = req.body;

    const material = await Material.findOne({
      where: { description },
    });

    if (material) {
      throw new Error('Material already exists');
    }

    const payload = {
      description,
    };

    await Material.create(payload);

    return successResponse(req, res, {});
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
