import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import LiveMode from './pages/LiveMode'
import OcrTest from './pages/OcrTest'
import Settings from './pages/Settings'
import TranslationTest from './pages/TranslationTest'

type Page = 'dashboard' | 'ocr' | 'translation' | 'live' | 'settings'

const NAV_ITEMS: { id: Page; label: string }[] = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'ocr', label: 'OCR Test' },
  { id: 'translation', label: 'Translation Test' },
  { id: 'live', label: 'Live Mode' },
  { id: 'settings', label: 'Settings' }
]

function App(): React.JSX.Element {
  const [page, setPage] = useState<Page>('dashboard')

  function renderPage(): React.JSX.Element {
    switch (page) {
      case 'dashboard':
        return <Dashboard />
      case 'ocr':
        return <OcrTest />
      case 'translation':
        return <TranslationTest />
      case 'live':
        return <LiveMode />
      case 'settings':
        return <Settings />
    }
  }

  return (
    <div>
      <nav>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setPage(item.id)}
            style={{ fontWeight: page === item.id ? 'bold' : 'normal', marginRight: 8 }}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <hr />

      <main>{renderPage()}</main>
    </div>
  )
}

export default App
