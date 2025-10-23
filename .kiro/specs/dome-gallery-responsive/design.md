# DomeGallery Responsive Enhancement Design Document

## Overview

This design document outlines the technical approach for enhancing the DomeGallery component's responsive behavior, specifically focusing on intelligent sizing of opened images based on device characteristics and viewport dimensions. The solution will provide optimal viewing experiences across all device types while maintaining the component's existing functionality.

## Architecture

### Responsive System Components

```
ResponsiveEngine
├── DeviceDetector
│   ├── Screen size detection
│   ├── Orientation monitoring
│   └── Input method detection
├── SizeCalculator
│   ├── Viewport analysis
│   ├── Safe area calculations
│   └── Aspect ratio preservation
└── AnimationController
    ├── Smooth transitions
    └── Resize debouncing
```

### Integration Points
- **Existing DomeGallery**: Enhance without breaking current functionality
- **ResizeObserver**: Monitor viewport changes
- **CSS Custom Properties**: Dynamic sizing variables
- **React Hooks**: State management for responsive behavior

## Components and Interfaces

### Enhanced DomeGallery Props
```typescript
interface ResponsiveConfig {
  mobile: {
    maxWidthVw: number
    maxHeightVh: number
    padding: number
  }
  tablet: {
    maxWidthVw: number
    maxHeightVh: number
    padding: number
  }
  desktop: {
    maxWidthVw: number
    maxHeightVh: number
    padding: number
  }
  breakpoints: {
    mobile: number
    tablet: number
  }
}

interface DomeGalleryProps {
  // ... existing props
  responsiveConfig?: ResponsiveConfig
  enableSmartSizing?: boolean
}
```

### Device Detection Hook
```typescript
interface DeviceInfo {
  type: 'mobile' | 'tablet' | 'desktop'
  orientation: 'portrait' | 'landscape'
  viewport: {
    width: number
    height: number
    availableWidth: number
    availableHeight: number
  }
}

const useDeviceInfo = (): DeviceInfo
```

### Size Calculator Hook
```typescript
interface ImageDimensions {
  width: string
  height: string
  maxWidth: string
  maxHeight: string
}

const useResponsiveImageSize = (
  deviceInfo: DeviceInfo,
  config: ResponsiveConfig
): ImageDimensions
```

## Data Models

### Responsive Configuration
```typescript
const DEFAULT_RESPONSIVE_CONFIG: ResponsiveConfig = {
  mobile: {
    maxWidthVw: 90,
    maxHeightVh: 70,
    padding: 20
  },
  tablet: {
    maxWidthVw: 80,
    maxHeightVh: 75,
    padding: 40
  },
  desktop: {
    maxWidthVw: 70,
    maxHeightVh: 80,
    padding: 60
  },
  breakpoints: {
    mobile: 768,
    tablet: 1024
  }
}
```

### Viewport Calculations
```typescript
interface ViewportMetrics {
  width: number
  height: number
  safeAreaTop: number
  safeAreaBottom: number
  safeAreaLeft: number
  safeAreaRight: number
  availableWidth: number
  availableHeight: number
}
```

## Design Decisions and Rationales

### Viewport-Based Sizing
**Decision**: Use viewport units (vw/vh) with device-specific maximums
**Rationale**: 
- Provides consistent scaling across different screen sizes
- Automatically adapts to orientation changes
- Maintains aspect ratios while respecting device constraints
- Allows for fine-tuned control per device type

### Progressive Enhancement
**Decision**: Enhance existing component without breaking changes
**Rationale**:
- Maintains backward compatibility
- Allows gradual adoption
- Preserves existing functionality
- Reduces risk of regressions

### CSS Custom Properties for Dynamic Sizing
**Decision**: Use CSS variables for responsive dimensions
**Rationale**:
- Enables smooth transitions
- Reduces JavaScript DOM manipulation
- Improves performance
- Maintains separation of concerns

## Implementation Strategy

### Phase 1: Device Detection and Viewport Monitoring
1. Create `useDeviceInfo` hook for device type detection
2. Implement viewport monitoring with ResizeObserver
3. Add orientation change detection
4. Create safe area calculations

### Phase 2: Responsive Size Calculation
1. Implement `useResponsiveImageSize` hook
2. Create device-specific sizing algorithms
3. Add aspect ratio preservation logic
4. Implement smooth transition animations

### Phase 3: DomeGallery Integration
1. Enhance existing component with responsive props
2. Integrate responsive hooks into image opening logic
3. Update CSS for dynamic sizing
4. Add configuration options

### Phase 4: Testing and Optimization
1. Test across different devices and orientations
2. Optimize performance and animations
3. Add error handling and fallbacks
4. Document new features

## Technical Implementation

### Device Detection Logic
```typescript
const useDeviceInfo = (): DeviceInfo => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>()
  
  useEffect(() => {
    const updateDeviceInfo = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      
      const type = width < 768 ? 'mobile' : 
                   width < 1024 ? 'tablet' : 'desktop'
      
      const orientation = width > height ? 'landscape' : 'portrait'
      
      setDeviceInfo({
        type,
        orientation,
        viewport: {
          width,
          height,
          availableWidth: width - getSafeAreaHorizontal(),
          availableHeight: height - getSafeAreaVertical()
        }
      })
    }
    
    updateDeviceInfo()
    window.addEventListener('resize', updateDeviceInfo)
    window.addEventListener('orientationchange', updateDeviceInfo)
    
    return () => {
      window.removeEventListener('resize', updateDeviceInfo)
      window.removeEventListener('orientationchange', updateDeviceInfo)
    }
  }, [])
  
  return deviceInfo
}
```

### Responsive Size Calculation
```typescript
const useResponsiveImageSize = (
  deviceInfo: DeviceInfo,
  config: ResponsiveConfig
): ImageDimensions => {
  return useMemo(() => {
    if (!deviceInfo) return defaultDimensions
    
    const deviceConfig = config[deviceInfo.type]
    const { viewport } = deviceInfo
    
    const maxWidth = Math.min(
      (viewport.availableWidth * deviceConfig.maxWidthVw) / 100,
      viewport.availableWidth - deviceConfig.padding * 2
    )
    
    const maxHeight = Math.min(
      (viewport.availableHeight * deviceConfig.maxHeightVh) / 100,
      viewport.availableHeight - deviceConfig.padding * 2
    )
    
    return {
      width: 'auto',
      height: 'auto',
      maxWidth: `${maxWidth}px`,
      maxHeight: `${maxHeight}px`
    }
  }, [deviceInfo, config])
}
```

### Enhanced Image Opening Logic
```typescript
const openItemFromElement = (el: HTMLElement) => {
  // ... existing logic
  
  const responsiveDimensions = useResponsiveImageSize(deviceInfo, responsiveConfig)
  
  // Apply responsive dimensions to overlay
  overlay.style.cssText = `
    position: absolute;
    max-width: ${responsiveDimensions.maxWidth};
    max-height: ${responsiveDimensions.maxHeight};
    width: ${responsiveDimensions.width};
    height: ${responsiveDimensions.height};
    // ... other styles
  `
  
  // ... rest of opening logic
}
```

## Error Handling

### Fallback Strategies
- **Device Detection Failure**: Default to desktop configuration
- **Viewport Calculation Errors**: Use safe fallback dimensions
- **Animation Issues**: Disable transitions if performance is poor
- **Orientation Change Problems**: Debounce and retry calculations

### Performance Considerations
- **Resize Event Debouncing**: Limit recalculations to 60fps
- **Memory Management**: Clean up event listeners properly
- **CSS Optimization**: Use transform and opacity for animations
- **Lazy Calculations**: Only calculate when needed

## Testing Strategy

### Device Testing Matrix
- **Mobile**: iPhone SE, iPhone 14, Samsung Galaxy S21
- **Tablet**: iPad, iPad Pro, Samsung Galaxy Tab
- **Desktop**: Various screen sizes from 1366x768 to 4K

### Orientation Testing
- Portrait to landscape transitions
- Landscape to portrait transitions
- Rapid orientation changes
- Window resizing on desktop

### Performance Testing
- Animation smoothness at 60fps
- Memory usage during extended use
- CPU usage during resize events
- Battery impact on mobile devices

## Future Enhancements

### Advanced Features (Out of Scope)
- Pinch-to-zoom support for opened images
- Gesture-based image navigation
- Adaptive image quality based on device capabilities
- Custom breakpoint definitions
- Advanced animation easing options

### Accessibility Improvements
- Reduced motion preferences support
- High contrast mode adaptations
- Screen reader optimizations
- Keyboard navigation enhancements

## Migration Guide

### Backward Compatibility
- All existing props remain functional
- Default behavior unchanged when new props not provided
- Gradual adoption possible through feature flags

### Breaking Changes
- None - this is a purely additive enhancement

### Configuration Migration
```typescript
// Before (still works)
<DomeGallery 
  openedImageWidth="90%" 
  openedImageHeight="40%" 
/>

// After (enhanced)
<DomeGallery 
  enableSmartSizing={true}
  responsiveConfig={{
    mobile: { maxWidthVw: 95, maxHeightVh: 75, padding: 16 },
    tablet: { maxWidthVw: 85, maxHeightVh: 80, padding: 32 },
    desktop: { maxWidthVw: 75, maxHeightVh: 85, padding: 48 }
  }}
/>
```