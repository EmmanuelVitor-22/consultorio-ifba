import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home";
import ListarPacientes from "./components/Paciente/"






export default function Rotas(){

    return(
        <BrowserRouter>
        <ToastContainer/>
           
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="pacientes/listar" element={<ListarPacientes/>}/>
                { <Route path="pacientes/cadastra" element={<Cadastros/>}/>
                <Route path="/cadastrar-paciente" element={<CadastroPaciente/>}/>
                <Route path="/cadastrar-medico" element={<CadastroMedico/>}/>
                <Route path="/consultas" element={<Consultas/>}/>
                <Route path="/marcar-consulta" element={<MarcarConsulta/>}/>
                <Route path="/cancelar-consulta" element={<CancelarConsulta/>}/>
                <Route path="/listar-medicos" element={<ListarMedicos/>}/> }
                
            </Routes>
        </BrowserRouter>
    )

}