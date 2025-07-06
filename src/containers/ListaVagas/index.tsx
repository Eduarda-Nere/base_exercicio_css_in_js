import { useState } from 'react'
import styled from 'styled-components'
import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga'

type VagaType = {
  id: number
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const VagasContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const vagas: VagaType[] = [
  {
    id: 1,
    titulo: 'Desenvolvedor Front-end',
    localizacao: 'remoto',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 3000,
    salarioMax: 4500,
    requisitos: ['HTML5', 'CSS3', 'JavaScript', 'React']
  },
  {
    id: 2,
    titulo: 'Desenvolvedor Back-end',
    localizacao: 'híbrido (SP)',
    nivel: 'pleno',
    modalidade: 'pj',
    salarioMin: 6000,
    salarioMax: 8500,
    requisitos: ['Node.js', 'TypeScript', 'MongoDB', 'APIs REST']
  },
  {
    id: 3,
    titulo: 'UI/UX Designer',
    localizacao: 'remoto',
    nivel: 'senior',
    modalidade: 'clt',
    salarioMin: 8000,
    salarioMax: 12000,
    requisitos: ['Figma', 'Adobe XD', 'User Research', 'Prototipagem']
  },
  {
    id: 4,
    titulo: 'Engenheiro DevOps',
    localizacao: 'remoto',
    nivel: 'pleno',
    modalidade: 'pj',
    salarioMin: 9000,
    salarioMax: 13000,
    requisitos: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    id: 5,
    titulo: 'Analista de Dados',
    localizacao: 'presencial (RJ)',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 3500,
    salarioMax: 5000,
    requisitos: ['SQL', 'Python', 'Power BI', 'Excel']
  },
  {
    id: 6,
    titulo: 'Product Manager',
    localizacao: 'híbrido (MG)',
    nivel: 'senior',
    modalidade: 'clt',
    salarioMin: 15000,
    salarioMax: 20000,
    requisitos: ['Scrum', 'Roadmap', 'Análise de Mercado', 'UX']
  },
  {
    id: 7,
    titulo: 'Desenvolvedor Mobile',
    localizacao: 'remoto',
    nivel: 'pleno',
    modalidade: 'pj',
    salarioMin: 7000,
    salarioMax: 10000,
    requisitos: ['React Native', 'TypeScript', 'Redux', 'APIs']
  },
  {
    id: 8,
    titulo: 'QA Engineer',
    localizacao: 'remoto',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 4000,
    salarioMax: 6000,
    requisitos: ['Testes automatizados', 'Selenium', 'Jest', 'Cypress']
  }
]

const ListaVagas = () => {
  const [filtro, setFiltro] = useState<string>('')

  const vagasFiltradas = vagas.filter(
    (x: VagaType) => x.titulo.toLocaleLowerCase().search(filtro) >= 0
  )

  return (
    <div>
      <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />
      <VagasContainer>
        {vagasFiltradas.map((vag) => (
          <Vaga
            key={vag.id}
            titulo={vag.titulo}
            localizacao={vag.localizacao}
            nivel={vag.nivel}
            modalidade={vag.modalidade}
            salarioMin={vag.salarioMin}
            salarioMax={vag.salarioMax}
            requisitos={vag.requisitos}
          />
        ))}
      </VagasContainer>
    </div>
  )
}

export default ListaVagas
