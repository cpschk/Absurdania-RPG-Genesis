export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-6">
      <div className="container mx-auto max-w-4xl px-4 text-center text-gray-500">
        <p>&copy; {currentYear} Absurdania RPG. Todos los derechos reservados... o algo así.</p>
      </div>
    </footer>
  );
}
