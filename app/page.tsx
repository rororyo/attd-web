'use client';
import Navbar from '@/components/navbar';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ActionPage from '@/pages/ActionPage';

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="h-20" /> {/* Spacer for fixed navbar */}
      <HomePage />
      <AboutPage />
      <ActionPage />
    </div>
  );
}