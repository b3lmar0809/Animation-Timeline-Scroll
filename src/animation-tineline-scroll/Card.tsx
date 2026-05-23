/**
 *Card class
 *
 * @version 1.0.0 - 22 may. 2026
 * @author Matias Belmar - mati.belmar0625@gmail.com
 * @since 1.0.0 - 22 may. 2026
 *
 **/
import type { ComponentType } from "react"
import { useScrollReveal } from "./useScrollReveal"
import styles from "./Card.module.css"

interface CardProps {
    title: string
    subtitle: string
    icon?: ComponentType<{ size?: number; color?: string }>
    tag?: string
    delay?: number
}

export function Card({ title, subtitle, icon: Icon, tag, delay = 0 }: CardProps) {
    // isVisible se activa cuando el 15% del elemento entra al viewport
    const { ref, isVisible } = useScrollReveal()

    return (
        <div
            ref={ref}
            // Al agregarse .visible se dispara la transición CSS (opacity + translateY)
            className={`${styles.card} ${isVisible ? styles.visible : ""}`}
            // El delay escalonado crea el efecto cascada entre cards
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className={styles.top}>
                {Icon && <Icon size={20} color="#94a3b8" />}
                {tag && <span className={styles.tag}>{tag}</span>}
            </div>
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </div>
    )
}
