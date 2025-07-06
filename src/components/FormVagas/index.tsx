import { FormEvent, useState, ChangeEvent } from 'react'
import styled from 'styled-components'

type Props = {
  aoPesquisar: (termo: string) => void
}

interface FormContainerProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
  children: React.ReactNode
}

const FormContainer = styled.form<FormContainerProps>`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

interface CampoInputProps {
  placeholder?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  type?: string
}

const CampoInput = styled.input.attrs({ type: 'search' })<CampoInputProps>`
  padding: 0 16px;
  outline-color: var(--cor-principal);
`

interface BotaoPesquisarProps {
  type?: 'submit' | 'button' | 'reset'
  children: React.ReactNode
}

const BotaoPesquisar = styled.button.attrs({
  type: 'submit'
})<BotaoPesquisarProps>`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
`

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormContainer onSubmit={aoEnviarForm}>
      <CampoInput
        placeholder="Front-end, fullstack, node, design"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTermo(e.target.value)
        }
      />
      <BotaoPesquisar>Pesquisar</BotaoPesquisar>
    </FormContainer>
  )
}

export default FormVagas
