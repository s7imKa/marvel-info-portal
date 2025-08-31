import { useCallback, useState } from 'react'

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async url => {
        setLoading(true)
        try {
            const response = await fetch(url)
            console.log('[HTTP RESPONSE]', response.status)
            if (!response.ok) {
                console.error(
                    `[HTTP ERROR] cloud not fetch ${url}, status: ${response.status}`,
                )
                throw new Error(`cloud not fetch ${url}, status: ${response.status}`)
            }
            const data = await response.json()
            setLoading(false)
            return data
        } catch (e) {
            setLoading(false)
            setError(e.message)
            console.error('[HTTP CATCH ERROR]', e)
            throw e
        }
    }, [])
    const clearError = useCallback(() => setError(null), [])
    return {
        loading,
        request,
        error,
        clearError,
        setError,
        setLoading,
    }
}
