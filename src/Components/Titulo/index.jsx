import style from 'styled-components';

const Titulo = style.h1`{
  
    color: ${ ({theme}) => theme.text };
    padding: 25px 0;
  
}`
export default Titulo;
