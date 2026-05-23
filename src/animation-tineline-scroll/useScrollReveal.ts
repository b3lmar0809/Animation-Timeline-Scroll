/**
 *useScrollReveal class
 *
 * @version 1.0.0 - 22 may. 2026
 * @author Matias Belmar - mati.belmar0625@gmail.com
 * @since 1.0.0 - 22 may. 2026
 *
 **/
import { useEffect, useRef, useState } from "react"

export function useScrollReveal(options?: IntersectionObserverInit) {
    // ref se adjunta al elemento DOM que queremos observar
    const ref = useRef<HTMLDivElement>(null)

    // isVisible pasa a true una sola vez: cuando el elemento entra al viewport
    const [isVisible, setIsVisible] = useState(false)

    // Guardamos options en un ref para evitar re-ejecuciones si se pasa un objeto inline
    const optionsRef = useRef(options)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true)
                // Se desconecta inmediatamente: la animación solo ocurre una vez
                observer.disconnect()
            }
        }, {
            // El elemento debe tener al menos el 15% visible para disparar la animación
            threshold: 0.15,
            ...optionsRef.current
        })

        if (ref.current) observer.observe(ref.current)

        // Cleanup: desconecta el observer si el componente se desmonta
        return () => observer.disconnect()
    }, [])

    return { ref, isVisible }
}
