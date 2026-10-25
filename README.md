html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  color: #111827;
}

* {
  box-sizing: border-box;
}

.page-shell {
  max-width: 1100px;
  margin: 0 auto;
  padding: 48px 20px 80px;
}

.hero-card,
.panel {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.3);
  border-radius: 20px;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  padding: 32px;
  margin-bottom: 24px;
}

.badge {
  display: inline-block;
  background: #dbeafe;
  color: #1d4ed8;
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

h1 {
  margin: 18px 0 10px;
  font-size: clamp(2rem, 4vw, 4rem);
}

h2 {
  margin-top: 0;
  font-size: 1.6rem;
}

.lead {
  max-width: 700px;
  font-size: 1.08rem;
  line-height: 1.7;
  color: #374151;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 24px;
}

.primary-btn,
.secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 12px;
  padding: 12px 20px;
  font-weight: 700;
  transition: transform 0.2s ease;
}

.primary-btn {
  background: #111827;
  color: white;
}

.secondary-btn {
  background: #e5e7eb;
  color: #111827;
}

.primary-btn:hover,
.secondary-btn:hover {
  transform: translateY(-1px);
}

.panel ol {
  margin: 18px 0 0;
  padding-left: 20px;
  line-height: 1.9;
  color: #374151;
}

code {
  background: #f3f4f6;
  border-radius: 6px;
  padding: 2px 6px;
  font-family: "SFMono-Regular", Consolas, monospace;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
  margin-top: 18px;
}

.post-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 18px;
}

.post-card h3 {
  margin: 0 0 10px;
  font-size: 1.2rem;
}

.post-card p {
  margin: 0 0 12px;
  color: #4b5563;
  line-height: 1.6;
}

.post-card small {
  color: #6b7280;
}

.empty-state {
  padding: 24px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  color: #374151;
}
