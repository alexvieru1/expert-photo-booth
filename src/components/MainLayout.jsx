// src/components/MainLayout.js
import Header from './header';  // Adjust paths based on your actual structure

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer>Footer content</footer>
    </div>
  );
}
