"use client";

export default function DashboardPage({
  children,
}: {
  children: React.ReactNode
}) {
  return (<div className="bg-gray-100">
    {children}
  </div>)
}