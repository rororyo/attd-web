import './globals.css';

export const metadata = {
  title: 'Climate Action - Global Warming Awareness',
  description: 'Join the movement to fight global warming and protect our planet',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
