# Corrección final de errores TypeScript
Get-ChildItem -Path "react" -Recurse -Filter "*.tsx" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $originalContent = $content
    
    # Fix "window._satellite ?.track" (with space)
    $content = $content.Replace("window._satellite ?.track('whatsappContact')", "window._satellite?.track?.('whatsappContact')")
    $content = $content.Replace("window._satellite ?.track('contactCall')", "window._satellite?.track?.('contactCall')")
    $content = $content.Replace("window._satellite ?.track('findStore')", "window._satellite?.track?.('findStore')")
    
    # Fix imports for useInitScripts
    $content = $content.Replace("import useInitScripts from '../../../hooks/useInitScripts';", "import useInitScripts from '../../hooks/useInitScripts';")
    
    # Fix SectionYachtMaster - add React import
    if ($_.Name -eq "SectionYachtMaster.tsx") {
        if (-not ($content -match "import React")) {
            $content = "import React from 'react';`n" + $content
        }
    }
    
    if ($content -ne $originalContent) {
        Set-Content -Path $_.FullName -Value $content
        Write-Host "Fixed: $($_.Name)"
    }
}