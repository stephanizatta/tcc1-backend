import { Relatorio, RelatorioMaterial } from '../../models';
import { successResponse, errorResponse } from '../../helpers';

export const cadastrarRelatorio = async (req, res) => {
  try {
    const {
      hospital,
      nomePaciente,
      convenio,
      data,
      hora,
      medico,
      instrumentador,
      materiaisList,
    } = req.body;

    const [horas, minutos] = hora.split(':');
    const date = new Date(data);
    date.setHours(horas);
    date.setMinutes(minutos);

    const payload = {
      hospital,
      nomePaciente,
      convenio,
      data: date,
      medico,
      instrumentador,
    };

    const relatorio = await Relatorio.create(payload);

    const payloadMaterial = materiaisList.map(material => ({
      idMaterial: material.idMaterial,
      idRelatorio: relatorio.id,
      qtdMaterial: material.quantidade,
      referenciaMaterial: material.referencia,
      loteMaterial: material.lote,
    }));

    await RelatorioMaterial.bulkCreate(payloadMaterial);

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
        order: [['createdAt', 'asc']],
        include: [{
          model: RelatorioMaterial,
          include: [{
            association: RelatorioMaterial.Material,
          }],
        }],
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
