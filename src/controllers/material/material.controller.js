import { Material } from '../../models';
import { successResponse, errorResponse } from '../../helpers';

export const cadastrarMaterial = async (req, res) => {
  try {
    const { descriptions } = req.body;

    const material = await Material.findOne({
      where: { descricao: descriptions },
    });

    if (material) {
      throw new Error('Material já existe');
    }

    const payload = descriptions.map(descricao => ({ descricao }));

    await Material.bulkCreate(payload);

    return successResponse(req, res, {});
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const visualizarMateriais = async (req, res) => {
  try {
    const materiais = await Material.findAll(
      {
        where: req.query.id
          ? { id: req.query.id } : undefined,
      },
    );
    return successResponse(req, res, { materiais });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const editarMaterial = async (req, res) => {
  try {
    const { id } = req.params;
    const { descricao } = req.body;

    const material = await Material.findByPk(id);
    await material.update({ descricao });

    return successResponse(req, res, {});
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const excluirMaterial = async (req, res) => {
  try {
    const { id } = req.params;

    const material = await Material.findByPk(id);
    await material.destroy({ id });

    return successResponse(req, res, {});
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
