import { gql } from 'apollo-server-express';
import { tiposEnums } from '../models/enums/tipos';
import { tiposUsario } from '../models/usuario/tipos';
import { tiposProyecto } from '../models/proyecto/tipos';
import { tiposAvance } from '../models/avance/tipos';


const tiposGlobales = gql`
  scalar Date

  
`;

export const tipos=[tiposGlobales,tiposEnums,tiposUsario,tiposProyecto,tiposAvance];
