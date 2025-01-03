
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import PropTypes from 'prop-types';

export default function IniciarSesionContraseña({onChange}) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  
  
  return (
    <div className="space-y-2">
        <Label htmlFor="input-23">Contraseña</Label>
      <span className="text-destructive">*</span>
      <div className="relative">
        <Input
          id="input-23"
          className="pe-9"
          placeholder="Contraseña"
          type={isVisible ? "text" : "password"}
          onChange={onChange}
        />
        <button
          className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          type="button"
          onClick={toggleVisibility}
          aria-label={isVisible ? "Ocultar contraseña" : "Mostrar contraseña"}
          aria-pressed={isVisible}
          aria-controls="password"
        >
          {isVisible ? (
            <EyeOff size={16} strokeWidth={2} aria-hidden="true" />
          ) : (
            <Eye size={16} strokeWidth={2} aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
}

IniciarSesionContraseña.propTypes = {
  onChange: PropTypes.func.isRequired,
};