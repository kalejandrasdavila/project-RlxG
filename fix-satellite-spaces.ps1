# Corrección de window._satellite con espacios
Get-ChildItem -Path "react" -Recurse -Filter "*.tsx" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $originalContent = $content
    
    # Replace "window._satellite ?.track(" with "window._satellite?.track?.("
    $content = $content -replace "window\._satellite\s+\?\\.track\(", "window._satellite?.track?.("
    
    if ($content -ne $originalContent) {
        Set-Content -Path $_.FullName -Value $content
        Write-Host "Fixed spaces in: $($_.Name)"
    }
}