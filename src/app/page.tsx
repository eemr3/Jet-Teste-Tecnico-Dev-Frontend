import { ResponsiveComponent } from '../components/responsive-component /ResponsiveComponent';

export default function Home() {
  return (
    <div className="container m-auto p-4">
      <div className="w-full text-2xl uppercase font-semibold text-center">
        <h1>Lista de Carros</h1>
      </div>
      <ResponsiveComponent />
    </div>
  );
}
