import { getPosts } from "@/lib/supabase";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="page-shell">
      <section className="hero-card">
        <span className="badge">Next.js + Supabase</span>
        <h1>Hesron Fernandes</h1>
        <p className="lead">
          Projeto inicial pronto para receber autenticação, banco de dados e conteúdo dinâmico.
        </p>

        <div className="actions">
          <a href="#setup" className="primary-btn">Ver setup</a>
          <a href="#posts" className="secondary-btn">Ver posts</a>
        </div>
      </section>

      <section id="setup" className="panel">
        <h2>Como configurar</h2>
        <ol>
          <li>Crie um projeto no Supabase.</li>
          <li>Copie o arquivo <code>.env.example</code> para <code>.env.local</code>.</li>
          <li>Preencha as chaves do seu projeto.</li>
          <li>Rode o SQL de <code>supabase/migrations/0001_init.sql</code>.</li>
          <li>Inicie o app com <code>npm run dev</code>.</li>
        </ol>
      </section>

      <section id="posts" className="panel">
        <h2>Posts do banco</h2>

        {posts.length === 0 ? (
          <div className="empty-state">
            <p>Nenhum post encontrado ainda.</p>
            <p>Quando o Supabase estiver configurado e a tabela <code>posts</code> estiver populada, os itens aparecerão aqui.</p>
          </div>
        ) : (
          <div className="posts-grid">
            {posts.map((post) => (
              <article key={post.id} className="post-card">
                <h3>{post.title}</h3>
                <p>{post.content || "Sem conteúdo adicional."}</p>
                <small>
                  {new Date(post.created_at).toLocaleString("pt-BR", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </small>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
