import './styles/global.css';

export default function App()
{
    console.log('Hello App')
    return (
      <h2 onClick={()=> alert('Ola Mundo Henrique')}>Ola Mundo</h2>
    );
}