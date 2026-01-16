const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} André do Ponte – Voo Livre RJ</p>
          <p>Instrutor credenciado CBVL</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
