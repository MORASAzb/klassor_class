import styled from 'styled-components'


export const CardDescriotion = styled.p`
text-align: center;
`
export const CardTitle = styled.h5`
text-align: center;

`
export const CardPrice = styled.p`
    margin:10px

`
export const Row = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between
`

export const ProductRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  @media (max-width:1200px){
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    @media (max-width:900px){
        grid-template-columns: 1fr 1fr 1fr ;
    
      }
      @media (max-width:600px){
        grid-template-columns:  1fr 1fr ;
    
      }
      @media (max-width:300px){
        grid-template-columns:   1fr ;
    
      }
  }
  gap:30px;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  margin-bottom:40px;
`;

export const FormControl = styled.div`
    padding: 0 0 1rem;
    border-bottom: ${(props) => props.noBorder ? 'none' : '1px solid #ababab'};
    margin-bottom: 1rem;
`

export const InputLabel = styled.label`
  color: #555;
  display: block;
  margin-bottom: .5rem;
`

export const Input = styled.input`
  padding: 1rem 2rem;
  border: 1px solid #ababab;
  width: 100%;
  border-radius: .5rem;
  outline: none;
`

export const Select = styled.select`
  width: 100%;
  padding: .5rem 1rem;
  font-size: 1.5rem;
`

export const Option = styled.option`
  width: 100%;
  padding: .5rem 1rem;
  font-size: 1rem;
  color: #555;

  &:focus {
    color: red;
  }

  &:hover {
    color: red;
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid #ababab;
  padding: 1rem 2rem;
  border-radius: .5rem;
`

export const SubmitButton = styled.button`
  background-color: ${(props) => props.bgColor ?? '#28289f'};
  transition: background-color .25s ease-in;
  border-radius: 0.5rem;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:hover{
    background-color: ${(props) => props.bgHoverColor ?? '#3838b5'};
    transition: background-color .25s ease-in;
  }

  &:disabled {
    background-color: #eee;
    color: #666;
    cursor: not-allowed;
  }
`