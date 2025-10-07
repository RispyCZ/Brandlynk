import { Head } from '@inertiajs/react';
import { BarChart2, Link2, List, Home, Plus, ExternalLink } from 'lucide-react';

type UrlItem = {
  id: number;
  code: string;
  destination: string;
  title?: string | null;
  created_at: string;
  clicks_count: number;
};

export default function Dashboard({ totalClicks, urls }: { totalClicks: number; urls: UrlItem[] }) {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex">
      <Head title="Dashboard" />

      {/* Sidebar */}
      <aside className="hidden md:flex md:w-64 shrink-0 border-r h-screen sticky top-0">
        <div className="w-full p-4 flex flex-col gap-4">
          <div className="flex items-center gap-2 px-2 py-1">
            <div className="h-8 w-8 rounded-xl bg-black flex items-center justify-center text-white font-bold">B</div>
            <span className="font-semibold">Brandlynk</span>
          </div>

          <nav className="text-sm">
            <a href="/dashboard" className="flex items-center gap-2 px-3 py-2 rounded-xl bg-black/5 text-black">
              <Home className="h-4 w-4" />
              Dashboard
            </a>
            <a href="#urls" className="mt-1 flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-50">
              <List className="h-4 w-4" />
              URLs
            </a>
          </nav>

          <div className="mt-auto">
            <button className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-medium border hover:bg-gray-50">
              <Plus className="h-4 w-4" /> Create URL
            </button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 min-w-0">
        {/* Header */}
        <header className="border-b">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="md:hidden">
                <div className="h-8 w-8 rounded-xl bg-black flex items-center justify-center text-white font-bold">B</div>
              </div>
              <h1 className="text-lg font-semibold">Dashboard</h1>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          {/* Stats */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border p-4">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <BarChart2 className="h-4 w-4" /> Total clicks
              </div>
              <div className="mt-2 text-3xl font-bold">{totalClicks.toLocaleString()}</div>
            </div>

            <div className="rounded-2xl border p-4">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Link2 className="h-4 w-4" /> Total URLs
              </div>
              <div className="mt-2 text-3xl font-bold">{urls.length.toLocaleString()}</div>
            </div>
          </div>

          {/* URLs */}
          <section id="urls" className="mt-8">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold">All URLs</h2>
            </div>

            <div className="mt-3 overflow-hidden rounded-2xl border">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    <th className="text-left font-medium px-4 py-3">Code</th>
                    <th className="text-left font-medium px-4 py-3">Destination</th>
                    <th className="text-left font-medium px-4 py-3">Clicks</th>
                    <th className="text-left font-medium px-4 py-3">Created</th>
                  </tr>
                </thead>
                <tbody>
                  {urls.length === 0 && (
                    <tr>
                      <td className="px-4 py-6 text-gray-500" colSpan={4}>No URLs yet.</td>
                    </tr>
                  )}
                  {urls.map((u) => (
                    <tr key={u.id} className="border-t">
                      <td className="px-4 py-3">
                        <div className="font-medium">/{u.code}</div>
                        {u.title && <div className="text-gray-500 text-xs mt-0.5">{u.title}</div>}
                      </td>
                      <td className="px-4 py-3 max-w-[420px]">
                        <a href={u.destination} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-blue-600 hover:underline truncate">
                          <ExternalLink className="h-3.5 w-3.5" />
                          <span className="truncate inline-block align-bottom max-w-[360px]">{u.destination}</span>
                        </a>
                      </td>
                      <td className="px-4 py-3">{u.clicks_count.toLocaleString()}</td>
                      <td className="px-4 py-3 text-gray-500">{new Date(u.created_at).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
