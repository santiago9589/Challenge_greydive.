export interface Root {
  timeTest: string
  plataforma: string
  linkVideo: string
  transcripcion: string
  preguntas: Pregunta[]
  horarioEnvio: HorarioEnvio
  idVideo: string
  response: Response
  id: string
  escenario: string
  link: string
  cliente: string
}

export interface Pregunta {
  tiempo: string
  tipoTarea: string
  respuesta: string
  texto: string
  link?: string
}

export interface HorarioEnvio {
  seconds: number
  nanoseconds: number
}

export interface Response {
  status: number
  data: string
}
