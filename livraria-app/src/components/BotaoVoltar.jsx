import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function BotaoVoltar() {
  const navigate = useNavigate();
  return (
    <Button variant="secondary" onClick={() => navigate(-1)} className="mb-3">
      ← Voltar
    </Button>
  );
}

export default BotaoVoltar;