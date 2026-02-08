type AuthPageProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};
function AuthPage({ title, subtitle, children }: AuthPageProps) {
  return (
    <main className="auth-page">
      <section className="auth-card">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p>{subtitle}</p>
        {children}
      </section>
    </main>
  );
}

export default AuthPage;
