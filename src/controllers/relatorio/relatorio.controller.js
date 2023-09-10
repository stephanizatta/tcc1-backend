import { Relatorio, RelatorioMaterial } from '../../models';
import { successResponse, errorResponse } from '../../helpers';

export const cadastrarRelatorio = async (req, res) => {
  try {
    const {
      hospital,
      nomePaciente,
      convenio,
      data,
      medico,
      instrumentador,
    } = req.body;

    const {
      qtdMaterial,
      referenciaMaterial,
      loteMaterial,
    } = req.body;

    const payload = {
      hospital,
      nomePaciente,
      convenio,
      data,
      medico,
      instrumentador,
    };

    const relatorio = await Relatorio.create(payload);

    const payloadMaterial = {
      idRelatorio: relatorio.id,
      qtdMaterial,
      referenciaMaterial,
      loteMaterial,      
    };

    await RelatorioMaterial.create(payloadMaterial);

    return successResponse(req, res, {});
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const visualizarRelatorios = async (req, res) => {
  try {
    const relatorios = await Relatorio.findAll(
      {
        where: req.query.id
          ? { id: req.query.id } : undefined,
      },
    );
    return successResponse(req, res, { relatorios });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const editarRelatorio = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantidade } = req.body;
    const { descricao } = req.body;
    const { referencia } = req.body;
    const { lote } = req.body;
    const { hospital } = req.body;
    const { medico } = req.body;
    const { medicoCrm } = req.body;
    const { nomePaciente } = req.body;
    const { data } = req.body;
    const { instrumentador } = req.body;
    const { convenio } = req.body;

    const relatorio = await Relatorio.findByPk(id);
    await relatorio.update({
      quantidade,
      descricao,
      referencia,
      lote,
      hospital,
      medico,
      medicoCrm,
      nomePaciente,
      data,
      instrumentador,
      convenio,
    });

    return successResponse(req, res, {});
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const excluirRelatorio = async (req, res) => {
  try {
    const { id } = req.params;

    const relatorio = await Relatorio.findByPk(id);
    await relatorio.destroy({ id });

    return successResponse(req, res, {});
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
