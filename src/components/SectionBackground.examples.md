# SectionBackground Component - Exemplos de Uso

## Importação

```tsx
import SectionBackground from '@/components/SectionBackground'
```

## Uso Básico

```tsx
<section className="relative py-24 px-4">
  <SectionBackground imagePath="/dita-photo.webp" />
  
  <div className="relative z-10">
    {/* Seu conteúdo aqui */}
  </div>
</section>
```

## Exemplos Avançados

### 1. Background Sutil com Blur Leve
```tsx
<SectionBackground
  imagePath="/dita-maracatu.webp"
  opacity={0.15}
  blur={6}
  gradient="dark"
/>
```

### 2. Background com Vignette Radial
```tsx
<SectionBackground
  imagePath="/nanci-dita-full.webp"
  opacity={0.25}
  blur={8}
  gradient="radial"
  texture={true}
/>
```

### 3. Background com Gradiente Customizado (Verde)
```tsx
<SectionBackground
  imagePath="/nanci-dita-close.webp"
  opacity={0.30}
  blur={6}
  customGradient="linear-gradient(to bottom right, rgba(20,83,45,0.50), rgba(0,0,0,0.70), rgba(20,83,45,0.50))"
  texture={true}
  textureOpacity={0.03}
/>
```

### 4. Background Forte sem Texture
```tsx
<SectionBackground
  imagePath="/dita3.webp"
  opacity={0.40}
  blur={10}
  gradient="vignette"
  texture={false}
/>
```

### 5. Background com Posição Customizada
```tsx
<SectionBackground
  imagePath="/nanci2.webp"
  opacity={0.20}
  blur={5}
  gradient="dark"
  objectPosition="top center"
/>
```

## Props Disponíveis

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `imagePath` | `string` | **obrigatório** | Caminho da imagem (processado com `getImagePath`) |
| `opacity` | `number` | `0.3` | Opacidade da imagem (0-1) |
| `blur` | `number` | `8` | Quantidade de blur em pixels |
| `texture` | `boolean` | `true` | Adicionar overlay de textura (noise.png) |
| `textureOpacity` | `number` | `0.02` | Opacidade da textura (0-1) |
| `gradient` | `'dark' \| 'radial' \| 'vignette' \| 'none'` | `'dark'` | Tipo de gradiente overlay |
| `customGradient` | `string` | `undefined` | CSS gradient customizado (sobrescreve `gradient`) |
| `objectPosition` | `string` | `'center'` | Posição do objeto CSS |
| `className` | `string` | `''` | Classes CSS adicionais |
| `zIndex` | `number` | `0` | z-index do container |

## Tipos de Gradiente Pré-definidos

### `dark` (padrão)
```css
linear-gradient(to bottom right, rgba(0,0,0,0.85), rgba(0,0,0,0.90), rgba(0,0,0,0.85))
```

### `radial`
```css
radial-gradient(circle at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.85) 100%)
```

### `vignette`
```css
radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.7) 100%)
```

### `none`
Sem gradiente overlay

## Dicas de Performance

1. **Imagens otimizadas**: Use imagens comprimidas (WebP quando possível)
2. **Blur moderado**: Valores entre 5-10px são ideais
3. **Opacity baixa**: Para backgrounds sutis, use 0.1-0.3
4. **Texture opcional**: Desative se não precisar (`texture={false}`)

## Estrutura HTML Gerada

```html
<div class="absolute inset-0">
  <!-- Imagem com blur -->
  <div class="absolute inset-0">
    <img ... />
  </div>
  
  <!-- Gradiente overlay -->
  <div class="absolute inset-0" style="background: ..."></div>
  
  <!-- Texture overlay (opcional) -->
  <div class="absolute inset-0 bg-repeat mix-blend-overlay"></div>
</div>
```

## Integração com Seções Existentes

Sempre use `relative` na section e `z-10` no conteúdo:

```tsx
<section className="relative py-24 px-4 overflow-hidden">
  <SectionBackground imagePath="/your-image.webp" />
  
  <div className="max-w-7xl mx-auto relative z-10">
    {/* Conteúdo sempre acima do background */}
  </div>
</section>
```
