export function scrollTo(to?: string) {
    if (to) {
        console.log('scrollto', to)
        const element = document.getElementById(to)
        console.log('element', element)
        element?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
        return element != null
    }
    return false
}