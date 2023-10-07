"use client";

export default function DashboardPage({
  children,
  // supabase,
}: {
  children: React.ReactNode,
  // supabase: any 
}) {
  return (<div className="bg-gray-100">
    {children}
  </div>)
}