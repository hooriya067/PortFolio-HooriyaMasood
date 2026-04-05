import './globals.css';

export const metadata = {
  title: 'Hooriya Masood | AI and Software Engineer ',
  description: 'AI and software engineering portfolio for internships and AI , software engineering roles.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
