
import { Input } from "@/components/ui/input";
import PropTypes from 'prop-types';

export default function CrearCuentaNombre({texto, textoPlaceholder, onChange}) {
  return (
    <div className="group relative mt-3">
      <label
        htmlFor="input-22"
        className="origin-start absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm text-muted-foreground/70 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground"
      >
        <span className="inline-flex bg-background px-2">{texto}</span>
      </label>
      <Input id="input-22" type="text" placeholder={textoPlaceholder} onChange={onChange}/>
    </div>
  );
}

CrearCuentaNombre.propTypes = {
  texto: PropTypes.string.isRequired,
  textoPlaceholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};