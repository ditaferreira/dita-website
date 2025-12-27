declare module 'animejs' {
  interface AnimeParams {
    targets?: string | object | HTMLElement | SVGElement | NodeList | null
    duration?: number
    delay?: number | ((el: Element, i: number, l: number) => number)
    endDelay?: number
    elasticity?: number
    round?: number | boolean
    keyframes?: object[]
    easing?: string
    direction?: 'normal' | 'reverse' | 'alternate'
    loop?: number | boolean
    autoplay?: boolean
    begin?: (anim: AnimeInstance) => void
    update?: (anim: AnimeInstance) => void
    complete?: (anim: AnimeInstance) => void
    [property: string]: any
  }

  interface AnimeInstance {
    play(): void
    pause(): void
    restart(): void
    reverse(): void
    seek(time: number): void
    began: boolean
    paused: boolean
    completed: boolean
    finished: Promise<void>
    animations: object[]
    progress: number
    duration: number
    remaining: number
    reversed: boolean
  }

  interface AnimeTimelineInstance extends AnimeInstance {
    add(params: AnimeParams, offset?: string | number): AnimeTimelineInstance
  }

  interface AnimeStatic {
    (params: AnimeParams): AnimeInstance
    timeline(params?: AnimeParams): AnimeTimelineInstance
    stagger(value: number | string | number[], options?: object): (el: Element, i: number, l: number) => number
    random(min: number, max: number): number
    set(targets: any, properties: object): void
    get(targets: any, property: string): string | number
    remove(targets: any): void
    running: AnimeInstance[]
    AnimeInstance: AnimeInstance
  }

  const anime: AnimeStatic
  export default anime
  export { AnimeInstance, AnimeParams, AnimeTimelineInstance }
}
