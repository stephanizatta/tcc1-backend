import { Relatorio } from '../../models';
import { successResponse, errorResponse } from '../../helpers';

// eslint-disable-next-line import/prefer-default-export
export const cadastrarRelatorio = async (req, res) => {
  try {
    const
      {
        tipoDeUsuario,
        hospital,
        idMedico,
        nomePaciente,
        convenio,
        idInstrumentator,
        data,
      } = req.body;

    const payload = {
      tipoDeUsuario,
      hospital,
      idMedico,
      nomePaciente,
      convenio,
      idInstrumentator,
      data,
    };

    await Relatorio.create(payload);

    return successResponse(req, res, {});
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
