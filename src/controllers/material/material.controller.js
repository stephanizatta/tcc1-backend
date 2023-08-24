import { Material } from '../../models';
import { successResponse, errorResponse } from '../../helpers';

// eslint-disable-next-line import/prefer-default-export
export const cadastrarMaterial = async (req, res) => {
  try {
    const { descricao } = req.body;

    const material = await Material.findOne({
      where: { descricao },
    });

    if (material) {
      throw new Error('Material já existe');
    }

    const payload = {
      descricao,
    };

    await Material.create(payload);

    return successResponse(req, res, {});
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
