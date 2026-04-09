import { useState } from 'react'

const BACKEND_URL = 'http://localhost:8787'

type TranslationResponse = {
  original: string
  translated: string
}

function TranslationTest(): React.JSX.Element {
  const [inputText, setInputText] = useState('')
  const [result, setResult] = useState<TranslationResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleTranslate(): Promise<void> {
    if (!inputText.trim()) return

    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const response = await fetch(`${BACKEND_URL}/translate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: inputText,
          from: 'en',
          to: 'ru'
        })
      })

      if (!response.ok) {
        throw new Error(`Backend error: ${response.status}`)
      }

      const data: TranslationResponse = await response.json()
      setResult(data)
    } catch (err) {
      if (err instanceof TypeError) {
        setError(
          `Не удалось подключиться к backend по адресу ${BACKEND_URL}. Проверь, что сервер запущен и доступен.`
        )
      } else if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Unknown error')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>Translation Test</h1>

      <p>Backend: {BACKEND_URL}</p>

      <div>
        <textarea
          rows={4}
          cols={50}
          placeholder="Введи текст для перевода..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>

      <div>
        <button onClick={handleTranslate} disabled={loading || !inputText.trim()}>
          {loading ? 'Переводим...' : 'Перевести'}
        </button>
      </div>

      {error && (
        <div>
          <strong>Ошибка:</strong> {error}
        </div>
      )}

      {result && (
        <div>
          <p>
            <strong>Оригинал:</strong> {result.original}
          </p>
          <p>
            <strong>Перевод:</strong> {result.translated}
          </p>
        </div>
      )}
    </div>
  )
}

export default TranslationTest
