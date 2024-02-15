import { useState } from "react";

function Login(){
const [logado, setLogado] = useState(false);

return(
    <div>
        {logado ? (
        <h1>Bem-vindo de volta!</h1>
      ) : (
        <button onClick={() => setLogado(true)}>Entrar</button>
      )}
    </div>
);
}
export default Login;