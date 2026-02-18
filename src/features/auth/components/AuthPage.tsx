type AuthPageProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  variant: "login" | "signup";
};
function AuthPage({ title, subtitle, children, variant }: AuthPageProps) {
  return (
    <main className="auth-page">
      <section className={`auth-card ${variant}`}>
        <div className="grid gap-2 text-center">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p>{subtitle}</p>
        </div>
        {children}
      </section>
    </main>
  );
}

export default AuthPage;
